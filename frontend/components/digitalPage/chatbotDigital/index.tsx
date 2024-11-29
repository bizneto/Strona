"use client";

import ChatbotInitialMessage from "./chatbotInitialMessage";
import { useState } from "react";
import ChatbotAssistantPicture from "./chatbotAssistantPicture";
import ChatbotCommunicator from "./chatbotComunicator";

export default function ChatbotDigital() {
  const [isCommunicatorVisible, setIsCommunicatorVisible] = useState(false);

  return (
    <div
      data-lenis-prevent
      className={`fixed ${
        isCommunicatorVisible
          ? "w-full md:w-fit right-1/2 bottom-2 translate-x-1/2 md:right-8 md:bottom-12 md:translate-x-0"
          : "right-2 bottom-4"
      } z-50`}
    >
      {isCommunicatorVisible ? (
        <ChatbotCommunicator
          setIsCommunicatorVisible={setIsCommunicatorVisible}
        />
      ) : (
        <div className='flex gap-3 size-auto'>
          <ChatbotInitialMessage />
          <div
            onClick={() => setIsCommunicatorVisible(true)}
            className='cursor-pointer size-[78px] md:size-[99.82px] overflow-clip relative shadow-aiAssistant rounded-[999px] border-[2px] border-[#FCFCFC]'
          >
            <ChatbotAssistantPicture />
          </div>
        </div>
      )}
    </div>
  );
}
