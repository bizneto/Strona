"use client";

import useSectionVisibility from "@/utils/intersectionObserver";
import { useRef } from "react";

export default function ContactUsHeader() {
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef);

  const SECTION_TITLE = "Poznaj nas";
  const HEADER_TITLE = "Skontaktuj się z nami!";
  const HEADER_TEXT = `Umów się na bezpłatną konsultację już dzisiaj.`;

  return (
    <header ref={sectionRef} className='md:w-[350px] h-fit'>
      <span
        className={`${
          isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
        } w-full size-[14px] md:text-[16px]  leading-[19.6px] md:leading-[22.4px]`}
      >
        <span className='font-black text-2xl mr-2'>&bull;</span>
        {SECTION_TITLE}
      </span>
      <div className='flex flex-col gap-6 font-medium  '>
        <span className='w-3/5 md:w-full lg:w-[90%] xl:w-full'>
          <h5 className='text-[28px] md:text-[48px] leading-[30.8px] md:leading-[58.51px]'>
            {HEADER_TITLE}
          </h5>
        </span>
        <div className='w-full md:w-[434px] text-[16px] leading-[22.4px]'>
          <p className='block'>{HEADER_TEXT}</p>
        </div>
      </div>
    </header>
  );
}
