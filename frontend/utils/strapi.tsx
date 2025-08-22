"use server";
import "server-only";
import { getClientID, setClientID } from "./cookies";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

type TPage = "digital" | "finance";

class Strapi {
  private static instances: Map<string, Strapi> = new Map();
  private static initialized: Map<string, boolean> = new Map();

  apiKey: string | undefined;
  id!: number;
  urlPrefix!: string;
  conversationsUrl!: string;
  chatbotUrl!: string;
  headers!: {
    "Content-type": string;
    Authorization: string;
  };

  private constructor(private page: TPage, private clientID: number) {
    this.initialize();
  }

  private async initialize() {
    this.apiKey = process.env.STRAPI_KEY;
    this.urlPrefix = `${process.env.STRAPI_URL || 'http://localhost:1337'}/api`;
    this.conversationsUrl = `${this.urlPrefix}/conversation-${this.page + "s"}`;
    this.headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };
  }

  public static async getInstance(page: TPage): Promise<Strapi> {
    const storedId = await getClientID(page);
    const clientID = storedId
      ? parseInt(storedId)
      : Math.floor(Math.random() * 1000000);

    // Set clientID if not stored
    if (!storedId) {
      await setClientID(clientID, page);
    }

    const key = `${page}-${clientID}`;

    if (!Strapi.instances.has(key) || !Strapi.initialized.get(key)) {
      const instance = new Strapi(page, clientID);
      await instance.initialize();
      Strapi.instances.set(key, instance);
      Strapi.initialized.set(key, true);
    }

    return Strapi.instances.get(key)!;
  }

  createConversation(messages: { role: string; content: string }[]) {
    return {
      data: {
        clientName: "Klient",
        timestamp: new Date().toISOString(),
        messages,
        clientID: this.clientID,
        link: { id: this.clientID },
      },
    };
  }

  async loadConversationHistory() {
    let conversationHistory = null;
    try {
      const response = await fetch(
        `${this.conversationsUrl}?filters[clientID][$eq]=${this.clientID}`,
        {
          method: "GET",
          headers: this.headers,
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data?.data && data.data.length > 0) {
          conversationHistory = data.data[0].attributes.messages;
        }
      } else {
        console.error(
          `Failed to fetch: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    return conversationHistory;
  }

  async checkIfIdExist() {
    let id: number | null = null;
    try {
      const response = await fetch(
        `${this.conversationsUrl}?filters[clientID][$eq]=${this.clientID}`,
        {
          method: "GET",
          headers: this.headers,
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data?.data && data.data.length > 0) {
          id = data.data[0].id;
        }
      } else {
        console.error(
          `Failed to fetch: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    return id;
  }

  async saveConversation(conversation: {
    data: {
      clientName: string;
      timestamp: string;
      messages: { role: string; content: string }[];
      clientID: number;
    };
  }) {
    const id = await this.checkIfIdExist();
    if (id) {
      const response = await fetch(`${this.conversationsUrl}/${id}`, {
        method: "PUT",
        headers: this.headers,
        body: JSON.stringify(conversation),
      });
      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Failed to update conversation: ${errorDetails}`);
      }
      return response.json();
    }
    const response = await fetch(this.conversationsUrl, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(conversation),
    });
    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Failed to create conversation: ${errorDetails}`);
    }
    return response.json();
  }

  async getInstructions(page: "finance" | "digital") {
    const chatbotUrl = `${this.urlPrefix}/chatbot-${page}`;

    try {
      const response = await fetch(chatbotUrl, {
        method: "GET",
        headers: this.headers,
      });
      if (!response.ok) return false;
      const data = await response.json();
      const {
        data: {
          attributes: { chatBotInstruction },
        },
      } = data;
      return chatBotInstruction;
    } catch (error) {
      console.error("Error fetching instructions:", error);
    }
  }
}

export async function getStrapiInstance(page: TPage) {
  return Strapi.getInstance(page);
}

export async function getConversationHistory(page: TPage): Promise<Message[]> {
  const strapiInstance = await Strapi.getInstance(page);
  return await strapiInstance.loadConversationHistory();
}
