"use client";

import useSectionVisibility from "@/utils/intersectionObserver";
import { ReactNode, useRef } from "react";

interface IArticle {
  children: ReactNode;
  articleAdmission: string;
  articleHeader: string;
}

export default function Article({
  children,
  articleAdmission,
  articleHeader,
}: IArticle) {
  const SECTION_TITLE = "Artykuł";
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef, 0.5);

  return (
    <article className='relative py-8 md:py-16'>
      <div className='flex flex-col md:flex-row gap-8 font-medium mx-auto w-10/12 md:w-[89%] 2xl:w-[1440px]'>
        <div
          className={`md:sticky top-0 w-full md:max-w-[85px] h-full ${
            isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
          }
          `}
        >
          <span className='font-black text-2xl mr-2'>&bull;</span>
          {SECTION_TITLE}
        </div>
        <div className='flex flex-col gap-6  md:max-w-[1066px]'>
          <h2 className='text-[24px] leading-[33.6px] md:text-[32px] md:leading-[39.01px]'>
            {articleHeader}
          </h2>
          <span className='text-[16px] leading-[22.4px] md:text-[18px] md:leading-[25.2px]'>
            {articleAdmission}
          </span>
          <div ref={sectionRef}>{children}</div>
        </div>
      </div>
    </article>
  );
}
