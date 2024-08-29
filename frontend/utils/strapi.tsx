"use server";

import "server-only";
import { getClientID, setClientID } from "./cookies";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

type TPage = "digital" | "finance";

class Strapi {
  private static instances: Map<TPage, Strapi> = new Map();
  private static initialized: Map<TPage, boolean> = new Map();

  apiKey: string | undefined;
  id!: number;
  urlPrefix!: string;
  conversationsUrl!: string;
  chatbotUrl!: string;
  headers!: {
    "Content-type": string;
    Authorization: string;
  };

  private constructor(page: TPage) {
    this.initialize(page);
  }

  private async initialize(page: TPage) {
    const storedId = await getClientID(page);
    this.id = storedId
      ? parseInt(storedId)
      : Math.floor(Math.random() * 1000000);

    if (!storedId) {
      await setClientID(this.id, page);
    }

    this.apiKey = process.env.STRAPI_KEY;
    // this.urlPrefix = "http://127.0.0.1:1337/api";
    this.urlPrefix = "http://bizneto.programero.pl/api";
    this.conversationsUrl = `${this.urlPrefix}/conversation-${page + "s"}`;
    this.chatbotUrl = `${this.urlPrefix}/chatbot-${page}`;
    this.headers = {
      "Content-type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };
  }

  public static async getInstance(page: TPage): Promise<Strapi> {
    if (!Strapi.instances.has(page) || !Strapi.initialized.get(page)) {
      const instance = new Strapi(page);
      await instance.initialize(page);
      Strapi.instances.set(page, instance);
      Strapi.initialized.set(page, true);
    } else {
      const instance = Strapi.instances.get(page)!;
      instance.conversationsUrl = `${instance.urlPrefix}/conversation-${
        page + "s"
      }`;
      instance.chatbotUrl = `${instance.urlPrefix}/chatbot-${page}`;
    }
    return Strapi.instances.get(page)!;
  }

  createConversation(messages: { role: string; content: string }[]) {
    return {
      data: {
        clientName: "Klient",
        timestamp: new Date().toISOString(),
        messages,
        clientID: this.id,
        link: { id: this.id },
      },
    };
  }

  async loadConversationHistory() {
    let conversationHistory = null;
    try {
      const response = await fetch(
        `${this.conversationsUrl}?filters[clientID][$eq]=${this.id}`,
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
        `${this.conversationsUrl}?filters[clientID][$eq]=${this.id}`,
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

  async getInstructions() {
    try {
      const response = await fetch(this.chatbotUrl, {
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
