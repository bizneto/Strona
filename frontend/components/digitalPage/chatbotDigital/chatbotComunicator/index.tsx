"use client";

import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useRef,
  FormEvent,
} from "react";
import Image from "next/image";
import ChatbotAssistantPicture from "../chatbotAssistantPicture";
import activeStatusDot from "@/public/svgs/activeStatus.svg";
import closeIcon from "@/public/svgs/closeIconAlt.svg";
import arrowWhite from "@/public/svgs/arrowWhite.svg";
import biznetoLogoGray from "@/public/svgs/biznetoLogoGrayBlueDot.svg";
import ChatbotMessages from "./chatbotComunicatorResponses";
import { continueConversation, Message } from "@/utils/ai";
import { readStreamableValue } from "ai/rsc";
import { getConversationHistory } from "@/utils/strapi";

interface IChatbotCommunicator {
  setIsCommunicatorVisible: Dispatch<SetStateAction<boolean>>;
}
export const maxDuration = 30;

export default function ChatbotCommunicator({
  setIsCommunicatorVisible: setIsComunicatorVisible,
}: IChatbotCommunicator) {
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Cześć! Jestem DIGIT, Twój asystent od web designu i brandingu. Jak mogę Ci pomóc?",
    },
  ]);
  const messageListRef = useRef<HTMLUListElement>(null);
  const ASSISTANT_NAME = "DIGIT";
  const ASSISTANT_STATUS = "Aktywny teraz";
  const INPUT_PLACEHOLDER = "Wpisz czego potrzebujesz";
  const FOOTER = (
    <span className='flex items-center gap-1 justify-center font-medium text-[11.58px] leading-[18.53px] text-[#CFCFCF] '>
      Powered by <Image src={biznetoLogoGray} alt='logo' />
    </span>
  );

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [conversation]);

  useEffect(() => {
    async function loadConversation() {
      const history = await getConversationHistory("digital");

      if (history) setConversation(history);
      else return;
    }
    loadConversation();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const { messages, newMessage } = await continueConversation(
      [...conversation, { role: "user", content: input }],
      "digital"
    );

    setInput("");
    let textContent = "";
    for await (const delta of readStreamableValue(newMessage)) {
      textContent = `${textContent}${delta}`;

      setConversation([
        ...messages,
        { role: "assistant", content: textContent },
      ]);
    }
    setIsLoading(false);
  }

  return (
    <div className='flex flex-col mx-auto w-[97%] md:w-[408px] h-[607px] '>
      <div className='relative bg-white flex items-center gap-4 min-h-[94px] rounded-t-[8px] shadow-aiAssistant'>
        <div className='ml-10 relative flex w-[52.1px] h-[52.1px]'>
          <span className='rounded-[86.84px] w-full overflow-hidden'>
            <ChatbotAssistantPicture />
          </span>
          <Image
            className='absolute bottom-2 -right-1 w-[16px] h-[16px]'
            src={activeStatusDot}
            alt='active status dot'
          />
        </div>
        <div>
          <p className='font-semibold text-[18.53px] leading-[20.38px]'>
            {ASSISTANT_NAME}
          </p>
          <p className='text-[#505050] text-[11.58px] leading-[12.74px]'>
            {ASSISTANT_STATUS}
          </p>
        </div>
        <Image
          className='cursor-pointer flex w-[16.61px] h-[16.61px] absolute right-4 top-4'
          onClick={() => setIsComunicatorVisible(false)}
          src={closeIcon}
          alt='close icon'
        />
      </div>
      <div className='bg-[#F0F0F0] rounded-b-[8px] shadow-aiAssistant flex flex-col justify-between w-full h-full '>
        <ul
          ref={messageListRef}
          className='flex flex-col gap-4 max-h-[450px] overflow-y-auto p-4'
        >
          {conversation.map(({ role, content }, index) => (
            <li key={index} className='flex flex-col'>
              <ChatbotMessages
                name={ASSISTANT_NAME}
                index={index}
                role={role}
                content={content}
              />
            </li>
          ))}
        </ul>
        <div className='mx-auto w-full md:w-[377px] h-[90px] flex flex-col gap-2 px-2 md:px-0'>
          <form
            className='flex gap-2'
            onSubmit={(event) => handleSubmit(event)}
          >
            <input
              id='input'
              placeholder={INPUT_PLACEHOLDER}
              className='px-4 rounded-[115px] w-[80%] md:w-[313px] h-[55.58px]'
              type='text'
              value={input}
              onChange={(event) => setInput(event.target.value)}
              autoComplete='off'
            />
            <button
              type='submit'
              className='bg-[#006EEF] rounded-full relative w-[55.58px] h-[55.58px] flex justify-center items-center'
              disabled={isLoading}
            >
              <Image
                src={arrowWhite}
                className='w-[17px] h-[17px] absolute'
                alt='arrow icon'
              />
            </button>
          </form>
          {FOOTER}
        </div>
      </div>
    </div>
  );
}
