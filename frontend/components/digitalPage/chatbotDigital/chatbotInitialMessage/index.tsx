"use client";

import Image from "next/image";
import closeIcon from "@/public/svgs/closeIcon.svg";
import { useEffect, useState } from "react";

export const welcomeMessage =
  "Cześć! Jestem DIGIT, Twój asystent od web designu i brandingu. Jak mogę Ci pomóc?";

export default function ChatbotInitialMessage() {
  const [isMessageVisible, setIsMessageVisible] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    const memoizedIsMessageVisible = sessionStorage.getItem("isMessageVisible");

    if (memoizedIsMessageVisible !== null)
      setIsMessageVisible(memoizedIsMessageVisible.toLowerCase() === "true");
    else setIsMessageVisible(true);
  }, [setIsMessageVisible]);

  function handleCloseMessagePopUp() {
    setIsMessageVisible(false);
    sessionStorage.setItem("isMessageVisible", "false");
  }

  if (isMessageVisible === null || !isMessageVisible) return null;
  return (
    <div className='shadow-aiAssistant flex justify-center items-center relative  max-w-[264px]  md:max-w-[337px] max-h-[84px] md:max-h-[107px] bg-white rounded-[8px] rounded-tr-[1.26px]  px-[39.18px] py-[22.94px]'>
      <span className='font-medium text-[11.7px] leading-[18.71px]  md:text-[14.97px] md:leading-[23.96px]'>
        {welcomeMessage}
      </span>
      <Image
        className=' size-[16px]  md:size-[21px]  cursor-pointer absolute -right-5 -top-5 md:-right-7 md:-top-7'
        src={closeIcon}
        alt='close icon'
        onClick={() => handleCloseMessagePopUp()}
      />
    </div>
  );
}
