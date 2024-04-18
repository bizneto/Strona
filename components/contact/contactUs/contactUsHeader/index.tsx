"use client";

import useSectionVisibility from "@/utils/intersectionObserver";
import { useRef } from "react";

export default function ContactUsHeader() {
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef);

  const SECTION_TITLE = "Poznaj nas";
  const HEADER_TITLE = "Skontaktuj się z nami!";
  const HEADER_TEXT = `Opowiedz nam jak możemy Ci pomóc.  
  Zazwyczaj odpowiadamy w przeciągu 24 godzin.`;

  const firstDotIndex = HEADER_TEXT.indexOf(".");
  const firstPart = HEADER_TEXT.slice(0, firstDotIndex + 1);
  const secondPart = HEADER_TEXT.slice(firstDotIndex + 1).trim();

  return (
    <header ref={sectionRef} className='md:w-[350px]'>
      <span
        className={`${
          isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
        } w-full size-[14px] md:text-[16px]  leading-[19.6px] md:leading-[22.4px]`}
      >
        <span className='font-black text-2xl mr-2'>&bull;</span>
        {SECTION_TITLE}
      </span>
      <span className='flex flex-col gap-6 font-medium  '>
        <span className='w-3/5 md:w-full lg:w-[90%] xl:w-full'>
          <h5 className='text-[28px] md:text-[48px] leading-[30.8px] md:leading-[58.51px]'>
            {HEADER_TITLE}
          </h5>
        </span>
        <article className='text-[16px] leading-[22.4px]'>
          <span className='hidden md:block'>
            {firstPart} <br /> {secondPart}
          </span>
          <span className='block md:hidden'>{HEADER_TEXT}</span>
        </article>
      </span>
    </header>
  );
}
