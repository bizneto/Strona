"use client";

import darkArrow from "@/public/svgs/arrowDarkDigital.svg";
import Image from "next/image";

interface IPopup {
  isPopUpVisible: boolean;
}

const THANK_YOU = "Dziękujemy za przesłanie formularza!";
const MESSAGE =
  "Wkrótce się z Tobą skontaktujemy, aby omówić szczegóły i odpowiedzieć na wszystkie Twoje pytania. Jesteśmy podekscytowani możliwością współpracy z Tobą!";
const BTTN_TEXT = "Zamknij";

export default function PopUp({ isPopUpVisible }: IPopup) {
  if (!isPopUpVisible) return;

  return (
    <div className='z-[999] p-4 md:p-8 font-medium flex flex-col items-center justify-between fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[91%] md:w-full md:max-w-[701px] h-[400px] md:h-[356px] border-[1px] border-[#505050] rounded-lg backdrop-blur-sm'>
      <Image className='size-8 self-end' src={darkArrow} alt='arrow icon ' />
      <div className='flex flex-col gap-4'>
        <h4 className='text-[24px] md:text-[32px] leading-[28.8px] md:leading-[35.4px] text-center'>
          {THANK_YOU}
        </h4>
        <p className='text-[16px] md:text-[18px] leading-[19.2px] md:leading-[21.6px] text-center'>
          {MESSAGE}
        </p>
      </div>
      <button
        onClick={() => window.location.reload()}
        className='w-[180px] h-[50px] px-8 py-[14px] rounded-[100px] text-white  bg-[#006EEF] text-[16px] leading-[22.4px]'
      >
        {BTTN_TEXT}
      </button>
    </div>
  );
}
