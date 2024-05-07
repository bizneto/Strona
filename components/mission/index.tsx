"use client";

import useGlobalContext from "@/hooks/useGlobalContext";
import useSectionVisibility from "@/utils/intersectionObserver";
import { useEffect, useRef, useState } from "react";

export default function Mission() {
  const { isMobile } = useGlobalContext();
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const SECTION_TITLE = "Misja";
  const HEADER_TEXT = "Kształtujemy przyszłość biznesu";
  const ARTICLE_TEXT =
    " Zapewniamy kompleksową obsługę rachunkową, by wspierać szybki rozwój      biznesów poprzez indywidualne podejście do każdego klienta.      Nasza wizja skupia się na budowaniu trwałych relacji biznesowych opartych      na zaufaniu, solidności oraz wysokim standardzie profesjonalizmu.";
  const DATA = [
    { top: "20", bottom: "Lat doświadczenia" },
    { top: "+300", bottom: "Zadowolonych klientów" },
    { top: "+2 tys", bottom: "Godzin konsultacji" },
  ];

  useEffect(() => {
    if (isSectionVisible) {
      setAnimationTriggered(true);
    }
  }, [isSectionVisible]);

  return (
    <section
      ref={sectionRef}
      className={`h-full w-full  border-b border-[#CFCFCF] py-8 md:py-16 `}
    >
      <div
        className={`flex  mx-auto flex-col md:flex-row w-10/12 gap-5 md:w-[89%] 2xl:w-[1440px] md:gap-[5rem] lg:gap-[9.5rem]`}
      >
        <header
          className={`size-[14px] leading-[19.6px] 
          ${
            isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
          } md:sticky md:top-4 `}
        >
          <span>
            <span className='font-black text-2xl mr-2'>&bull;</span>
            {SECTION_TITLE}
          </span>
        </header>
        <div className={`flex flex-col gap-6 md:gap-16`}>
          <div className={` w-[90%] md:w-3/4 font-medium`}>
            <article>
              <div className={`lg:w-4/5 xl:w-3/5`}>
                {isMobile ? (
                  <h5 className='text-[28px] leading-8 mb-8'>{HEADER_TEXT}</h5>
                ) : (
                  <h2 className='text-[48px] leading-[58.51px] mb-8'>
                    {HEADER_TEXT}
                  </h2>
                )}
              </div>
              <p>{ARTICLE_TEXT}</p>
            </article>
          </div>
          <div
            className={`h-[93px] md:h-[125px] lg:h-[135px] xl:h-[135px] flex justify-between gap-4 md:gap-0 w-max md:w-full  xl:w-11/12 mb-2`}
          >
            {DATA.map(({ top, bottom }, index) => (
              <div
                key={index}
                className={`${index === 2 && "hidden md:block"}
              border-l border-l-[#CFCFCF] pl-2
              overflow-hidden`}
              >
                <div
                  className={`h-full md:flex md:flex-col md:justify-end md:gap-[9px] ${
                    animationTriggered
                      ? "w-full animate-[slideOutFromLeft_2s_ease-in-out]"
                      : "opacity-0"
                  } `}
                >
                  <span
                    className={`text-[64px] leading-[78.02px] md:text-[64px]  lg:text-[96px] lg:leading-[117.02px]`}
                  >
                    {top}
                  </span>
                  <p
                    className={`text-[12px] leading-[16.08px] md:text-[16px] md:leading-[22.4px] font-medium`}
                  >
                    {bottom}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
