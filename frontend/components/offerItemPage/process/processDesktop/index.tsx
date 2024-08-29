"use client";

import SectionTitle from "@/components/shared/sectionTitle";
import { HEADER, SECTION_TITLE } from "../data";
import { IProces, SectionFooter } from "..";
import { useState } from "react";
import Image from "next/image";
import useGlobalContext from "@/hooks/useGlobalContext";
import { imageUrl } from "@/shared";

export default function ProcessDesktop({ Process }: IProces) {
  const [activeIndex, setActiveIndex] = useState<number | null>();
  const { isMobile } = useGlobalContext();

  if (isMobile) return;
  return (
    <section className='hidden xl:block py-16 bg-black'>
      <div className='mx-auto flex flex-col gap-16 w-[89%] 2xl:w-[1440px]'>
        <div className='flex'>
          <span>
            <SectionTitle sectionTitle={SECTION_TITLE} color='#006EEF' />
          </span>
          <h4 className='text-white text-[48px] md:text-[64px] leading-[48px] md:leading-[64px] lg:text-[72px] lg:leading-[72px]'>
            {HEADER}
          </h4>
        </div>
        <div className='transition-all duration-1000  ease-in-out mx-auto w-full  max-w-[1160px] h-[335px] relative flex'>
          {Process.map(({ Title, Text, Image: ProcessImage }, index) => {
            const isIndexActive = activeIndex === index;
            return (
              <div
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                key={index}
                className='hover:bg-white group absolute transition-all duration-1000  ease-in-out slide-content flex flex-col items-center justify-center rounded-[50%] border-[0.81px] border-white w-[335px] h-[335px] gap-4'
                style={{ left: `${index * 275}px`, top: 0 }}
              >
                <Image
                  priority
                  className={`${
                    isIndexActive
                      ? "invert size-[24px]"
                      : "opacity-100 size-[48px]"
                  } transition-all duration-1000  ease-in-out`}
                  height={ProcessImage.data.attributes.height}
                  width={ProcessImage.data.attributes.width}
                  src={imageUrl(ProcessImage.data.attributes.url)}
                  alt='icon'
                />
                <h5 className='transition-all duration-1000  ease-in-out text-[18px] leading-[22.4px] text-white group-hover:text-black'>
                  {Title}
                </h5>
                <span className='group-hover:block group-hover:text-black hidden text-white w-[75%] transition-all duration-1000 overflow-hidden'>
                  <p className='text-[16px] leading-[22.4px] text-center'>
                    {Text}
                  </p>
                </span>
              </div>
            );
          })}
        </div>
        <SectionFooter />
      </div>
    </section>
  );
}
