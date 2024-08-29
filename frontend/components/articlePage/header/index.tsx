"use client";

import useSectionVisibility from "@/utils/intersectionObserver";
import { useRef } from "react";

export interface IHeader {
  title: string;
  category: string;
}

export default function Header({ title, category }: IHeader) {
  const SECTION_TITLE = "Tytuł";
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef, 0.5);

  return (
    <header ref={sectionRef} className='relative py-8 md:py-16'>
      <div className='mx-auto w-10/12 gap-4 md:gap-8 md:w-[89%] 2xl:w-[1440px] flex flex-col md:flex-row'>
        <div
          className={`md:sticky top-0 w-full md:max-w-[85px] h-full ${
            isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
          }
          `}
        >
          <span className='font-black text-2xl mr-2'>&bull;</span>
          {SECTION_TITLE}
        </div>
        <div className='w-full md:max-w-[1147px] flex flex-col md:flex-col gap-8'>
          <h1 className='font-medium text-[32px] leading-[39.01px] md:text-[64px] md:leading-[78.02px]'>
            {title}
          </h1>
          <div className='text-[16px] leading-[22.4px] font-medium text-center border-[1.2px] border-black rounded-[100px] px-6 py-3 max-w-[150px] h-[46px]'>
            {category}
          </div>
        </div>
      </div>
    </header>
  );
}
