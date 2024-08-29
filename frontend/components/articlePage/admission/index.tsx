"use client";

import useSectionVisibility from "@/utils/intersectionObserver";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useRef } from "react";

interface IAdmission {
  text: [];
}

export default function Admission({ text }: IAdmission) {
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef, 0.5);
  const SECTION_TITLE = "Wstęp";

  return (
    <section ref={sectionRef} className='relative py-8 md:py-16'>
      <div className='font-medium flex flex-col md:flex-row mx-auto w-10/12 gap-8 md:w-[89%] 2xl:w-[1440px]'>
        <div
          className={`md:sticky top-0 w-full h-full md:max-w-[85px] ${
            isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
          }
          `}
        >
          <span className='font-black text-2xl mr-2'>&bull;</span>
          {SECTION_TITLE}
        </div>
        <span className='md:max-w-[1024px] 2xl:max-w-[1280px]  md:pt-2 pb-8 text-[18px] leading-[25.2px] md:text-[24px] md:leading-[33.6px]'>
          <BlocksRenderer content={text} />
        </span>
      </div>
    </section>
  );
}
