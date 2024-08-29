import Image from "next/image";
import closeIcon from "@/public/svgs/closeIcon.svg";
import { Dispatch, SetStateAction } from "react";

export const welcomeMessage =
  "Cześć! Szukasz wsparcia w zakresie finansów dla swojej firmy? Porozmawiajmy!";

interface IChatbotInitialMessage {
  setIsMessageVisible: Dispatch<SetStateAction<boolean>>;
}

export default function ChatbotIntialMessage({
  setIsMessageVisible,
}: IChatbotInitialMessage) {
  return (
    <div className='shadow-aiAssistant flex justify-center items-center relative  max-w-[264px]  md:max-w-[337px] max-h-[84px] md:max-h-[107px] bg-white rounded-[26.62px] rounded-tr-[1.26px]  px-[39.18px] py-[22.94px]'>
      <span className='font-medium text-[11.7px] leading-[18.71px]  md:text-[14.97px] md:leading-[23.96px]'>
        {welcomeMessage}
      </span>
      <Image
        className=' size-[16px]  md:size-[21px]  cursor-pointer absolute -right-5 -top-5 md:-right-7 md:-top-7'
        src={closeIcon}
        alt='close icon'
        onClick={() => setIsMessageVisible(false)}
      />
    </div>
  );
}
