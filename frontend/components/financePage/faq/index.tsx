"use client";

import { useRef } from "react";
import QuestionsMap from "./questionsMap";
import useSectionVisibility from "@/utils/intersectionObserver";

export default function FAQ() {
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef);

  const SECTION_TITLE = "FAQ";
  const HEADER_TEXT = "Najczęściej zadawane pytania";

  return (
    <section className='w-full h-full py-8 md:py-16'>
      <div
        className={`mx-auto flex w-10/12 flex-col md:flex-row gap-6 md:w-[89%] 2xl:w-[1440px] md:gap-[5rem] lg:gap-[9.5rem]`}
      >
        <header
          className={` size-[14px] leading-[19.6px]  
          ${isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"}          
          md:sticky top-4 `}
        >
          <span>
            <span className='font-black text-2xl mr-2'>&bull;</span>
            {SECTION_TITLE}
          </span>
        </header>
        <div className={` font-medium md:w-full`}>
          <h4 className='text-[28px] leading-8 mb-8 md:text-[48px] md:leading-[58.51px]'>
            {HEADER_TEXT}
          </h4>
          <QuestionsMap forwardedRef={sectionRef} />
        </div>
      </div>
    </section>
  );
}
