"use client";

import { useRef } from "react";
import useSectionVisibility from "@/utils/intersectionObserver";
import useGlobalContext from "@/hooks/useGlobalContext";
import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import { CityData, getCityWithPreposition } from "@/data/cities";

interface StartProps {
  cityData?: CityData;
}

export default function Start({ cityData }: StartProps) {
  const { isMobile } = useGlobalContext();
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef, 1);
  const SECTION_TITLE = cityData ? `Start ${getCityWithPreposition(cityData)}` : `Start`;
  const BTN_TEXT = "Zaczynajmy";
  const DATA = [
    {
      header: "Otwórz firmę!",
      article:
        "Nie wiesz jak otworzyć firmę? Nie chcesz zajmować się formalnościami? Przeprowadzimy Cię przez cały proces i doradzimy na każdym etapie.",
      link: "/finanse/otworz-firme",
    },
    {
      header: "Przenieś księgowość",
      article: "Potrzebujesz zmienić biuro rachunkowe?",
      additionalText: "Czekamy na Ciebie i jesteśmy gotowi do współpracy.",
      link: "/finanse/przenies-ksiegowosc",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className='w-full h-full border-b border-[#CFCFCF]'
    >
      <div
        className={`flex mx-auto flex-col md:flex-row gap-6 md:w-[89%] 2xl:w-[1440px] md:gap-[2.5rem] lg:gap-[6.7rem]  xl:gap-[7rem]`}
      >
        <div
          className={`w-10/12 md:w-fit mx-auto md:sticky md:top-0 md:py-8 pt-8 pb-4
          ${isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"}
          size-[14px]  leading-[19.6px] 
          `}
        >
          <span className='font-black text-2xl mr-2'>&bull;</span>
          {SECTION_TITLE}
        </div>
        <div
          className={`w-full md:w-[90%]  md:flex  lg:justify-between 2xl:justify-normal 2xl:gap-8`}
        >
          {DATA.map(({ header, article, additionalText, link }, index) => (
            <div
              key={index}
              className={`h-full relative 
              ${index === 0 && "2xl:w-2/4"} 
              ${
                index == 1 &&
                "md:pl-[2rem]  xl:pl-[5rem] 2xl:gap-2 2xl:w-full border-l border-[#CFCFCF]"
              } ${
                isMobile && index == 0 && "border-b border-[#CFCFCF] pb-8 mb-8"
              } sm:flex  `}
            >
              <div
                key={index}
                className={`relative  flex flex-col gap-6 mx-auto w-10/12 h-[250px] md:w-full md:gap-4 lg:gap-8  sm:h-[226px]  md:h-[355px] md:py-6 font-medium`}
              >
                <h4 className='text-[28px] leading-[30.8px] md:text-[36px]  lg:text-[48px] lg:leading-[58.51px]'>
                  {header}
                </h4>
                <article
                  className={`text-[16px] leading-[22.4px] ${
                    !isMobile && index == 0 && "w-[33.5vw] 2xl:w-[25vw]"
                  } `}
                >
                  {article}
                  {isMobile ? (
                    <> {additionalText} </>
                  ) : (
                    <>
                      <br /> {additionalText}
                    </>
                  )}
                </article>
                <span
                  className={`sm:absolute bottom-4  md:bottom-8 lg:bottom-12`}
                >
                  <ButtonWithArrow
                    text={BTN_TEXT}
                    color={"#FF3C50"}
                    arrowColor='red'
                    altHref={link}
                  />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
