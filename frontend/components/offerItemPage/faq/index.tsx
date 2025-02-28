"use client";

import SectionTitle from "@/components/shared/sectionTitle";
import { useState } from "react";
import "./index.css";

interface IFAQ {
  FAQ: {
    Question: string;
    Answer: string;
  }[];
}

export default function FAQ({ FAQ }: IFAQ) {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  if (!FAQ) return null;

  const SECTION_TITLE = "FAQ";
  const HEADER = "Pytania?";
  const HEADER_SUBTEXT = "Oto kilka odpowiedzi";

  return (
    <section className='bg-black py-8 md:py-16'>
      <div className='w-[91%] md:w-[89%] 2xl:w-[1440px] mx-auto flex flex-col md:flex-row gap-12 md:gap-0'>
        <div className='mx-auto md:mx-0 w-[91%] md:w-fit flex flex-col gap-8'>
          <>
            <SectionTitle sectionTitle={SECTION_TITLE} color='#006EEF' />
          </>
          <span className='md:hidden flex flex-col gap-1 text-white'>
            <h5 className='text-[48px] leading-[48px]'>{HEADER}</h5>
            <p className='text-[24px] leading-[24px]'>{HEADER_SUBTEXT}</p>
          </span>
        </div>
        <div className='md:w-full flex flex-col justify-between text-white  md:gap-16'>
          <span className='hidden md:flex flex-col gap-4 text-white'>
            <h5 className='text-[48px] lg:text-[72px] leading-[48px] md:leading-[65.8px]'>
              {HEADER}
            </h5>
            <p className='text-[24px] lg:text-[48px] leading-[24px] lg:leading-[43.2px]'>
              {HEADER_SUBTEXT}
            </p>
          </span>
          <div>
            {FAQ.map(({ Question, Answer }, index) => {
              const isSelected = index === selectedQuestion;

              return (
                <div
                  onClick={() => setSelectedQuestion(isSelected ? null : index)}
                  key={index}
                  className={`w-[97%]  mx-auto flex flex-col justify-center border-b-[#8B8B8B] border-b-[1px] transition-all duration-700`}
                >
                  <div className='py-2 flex justify-between items-center overflow-hidden'>
                    <button
                      id='button'
                      className={`${isSelected ? "--active" : ""}`}
                    >
                      <span></span>
                      <span></span>
                    </button>
                    <p className='py-2 w-[90%] h-fit text-[20px] leading-[28px]'>
                      {Question}
                    </p>
                  </div>

                  <div
                    className={`text-ellipsis overflow-hidden flex flex-col transition-all duration-700 ease-in-out ${
                      isSelected
                        ? "max-h-[140px] md:max-h-[140px] h-fit opacity-100 visible pb-2"
                        : "max-h-[0px] opacity-0 invisible"
                    }`}
                  >
                    <p
                      className={`${
                        isSelected
                          ? "max-h-[260px] h-fit py-2 md:py-0"
                          : "h-0 overflow-hidden opacity-0"
                      } transition-all duration-700 ease-in-out text-[16px] leading-[22.4px]`}
                    >
                      {Answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
