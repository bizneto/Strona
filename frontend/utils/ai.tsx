"use server";

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
  const strapiService = await getStrapiInstance(page);

  const stream = createStreamableValue();
  const instruction = await strapiService.getInstructions(page);

  (async function () {
    let content = "";
    const { textStream } = await streamText({
      model: openai("gpt-4o-mini"),
      system:
        instruction ||
        `Jesteś Marla, przyjaznym i profesjonalnym asystentem AI firmy Bizneto.

        TWOJA ROLA:
        - Pomagasz klientom w sprawach księgowości, finansów i prowadzenia biznesu
        - Udzielasz informacji o usługach Bizneto
        - Zachęcasz do skorzystania z naszych usług
        - Odpowiadasz ciepło i profesjonalnie po polsku

        DANE KONTAKTOWE BIZNETO (ZAWSZE PODAWAJ PRAWDZIWE!):
        📞 Telefon: 177 852 631 lub 788 489 558
        📧 Email: biuro@bizneto.pl
        🏢 Adres: Mieszka I 38, 35-308 Rzeszów
        🕐 Godziny pracy: 7:00 - 15:00
        📋 NIP: 8133793363
        📋 REGON: 381513359
        📋 KRS: 0000752177

        USŁUGI BIZNETO:
        📊 Księgowość i rozliczenia podatkowe
        👥 Obsługa kadrowo-płacowa
        ⚖️ Doradztwo prawne i podatkowe
        🎨 Web design i branding
        🤖 Chatboty AI

        ZASADY:
        - NIGDY nie wymyślaj numerów telefonu - używaj tylko: 177 852 631 lub 788 489 558
        - NIGDY nie wymyślaj adresów email - używaj tylko: biuro@bizneto.pl
        - Zawsze podkreślaj korzyści dla klienta
        - Używaj emoji dla lepszej komunikacji
        - Zachęcaj do kontaktu z zespołem
        - Bądź pomocna i rozwiązuj problemy klientów

        Pamiętaj: Jesteś pierwszym punktem kontaktu z Bizneto - rób świetne pierwsze wrażenie! 😊`,
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
