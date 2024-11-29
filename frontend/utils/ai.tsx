"use server";
import "server-only";

import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";
import { getStrapiInstance } from "./strapi";
import { TPage } from "@/components/shared/cookiesNotice";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function continueConversation(history: Message[], page: TPage) {
  "use server";
  const strapiService = await getStrapiInstance(page);

  const stream = createStreamableValue();
  const instruction = await strapiService.getInstructions(page);

  (async function () {
    let content = "";
    const { textStream } = await streamText({
      model: openai("gpt-4o-mini"),
      system:
        instruction ||
        "You are a helpful assistant for a company named Bizneto",
      messages: history,
      temperature: 1.01,
      topP: 1,
    });

    for await (const text of textStream) {
      stream.update(text);
      content += text;
    }

    await stream.done();

    const newMessage = { role: "assistant", content };
    const conversation = strapiService.createConversation([
      ...history,
      newMessage,
    ]);
    try {
      await strapiService.saveConversation(conversation);
    } catch (error) {
      console.error("Error saving conversation:", error);
    }
  })();

  return {
    messages: history,
    newMessage: stream.value,
  };
}
