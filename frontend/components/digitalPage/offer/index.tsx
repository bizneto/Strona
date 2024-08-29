"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import blueArrowDesktop from "@/public/svgs/blueArrowDesktop.svg";
import useGlobalContext from "@/hooks/useGlobalContext";
import blueArrow from "@/public/svgs/blueArrow.svg";
import Image from "next/image";
import SectionTitle from "@/components/shared/sectionTitle";
import Link from "next/link";
import { stringToRoute } from "@/shared";

export default function Offer() {
  const SECTION_TITLE = "Oferta";
  const DATA = useMemo(
    () => [
      {
        index: 1,
        title: "Branding",
        text: "Tworzymy unikalne identyfikacje wizualne, które pozostają w pamięci i wyróżniają Twoją markę w tłumie.",
        tags: ["Logo", "Identyfikacja wizualna", "Materiały reklamowe"],
      },
      {
        index: 2,
        title: "Web Design",
        text: "Tworzymy unikalne identyfikacje wizualne, które pozostają w pamięci i wyróżniają Twoją markę w tłumie.",
        tags: ["Logo", "Identyfikacja wizualna", "Materiały reklamowe"],
      },
      {
        index: 3,
        title: "Chatboty AI",
        text: "Tworzymy unikalne identyfikacje wizualne, które pozostają w pamięci i wyróżniają Twoją markę w tłumie.",
        tags: ["Logo", "Identyfikacja wizualna", "Materiały reklamowe"],
      },
      {
        index: 4,
        title: "Graphic Design",
        text: "Tworzymy unikalne identyfikacje wizualne, które pozostają w pamięci i wyróżniają Twoją markę w tłumie.",
        tags: ["Logo", "Identyfikacja wizualna", "Materiały reklamowe"],
      },
    ],
    []
  );

  const { isMobile } = useGlobalContext();
  const stickyRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | HTMLAnchorElement | null)[]>(
    new Array(DATA.length).fill(null)
  );
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const stickyPosition = stickyRef.current.getBoundingClientRect().top;
        let newIndex = 1;

        sectionRefs.current.forEach((ref, index) => {
          if (ref && ref.getBoundingClientRect().top + 200 < stickyPosition) {
            newIndex = DATA[index]?.index ?? 1;
          }
        });

        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [DATA]);

  return (
    <section className='py-8 md:py-24'>
      <div className='flex flex-col md:flex-row md:justify-between w-[91%] md:w-[89%] 2xl:w-[1440px] mx-auto'>
        <span className='mb-8 md:mb-0'>
          <SectionTitle color='#006EEF' sectionTitle={SECTION_TITLE} />
        </span>
        <div className='w-full flex flex-row justify-between'>
          <div
            ref={stickyRef}
            className='hidden md:flex items-start justify-start flex-col sticky top-6 md:text-[180px] lg:text-[250px] xl:text-[320px] md:leading-[130px] lg:leading-[190px] xl:leading-[225px] md:mr-12 md:h-[250px] xl:h-[351px]  md:w-[45%]  lg:w-full  md:max-w-[371px] text-[#cfcfcf] lg:mr-8'
          >
            {currentIndex < 10 ? `0${currentIndex}` : currentIndex}
          </div>
          <div className='relative w-full md:w-[78%] max-w-[726px] flex flex-col items-end justify-end gap-8'>
            {DATA.map(({ title, tags, text, index }) => (
              <Link
                target='_top'
                href={`/digital/${stringToRoute(title)}`}
                key={index}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className='group font-medium border-t-[1px] border-black'
              >
                <span className='my-4 md:my-12  max-h-[287px] md:max-h-[410px] lg:max-h-[320px] flex justify-center flex-col gap-8 lg:gap-8 xl:gap-8 '>
                  <span className='flex items-center h-fit gap-4'>
                    <Image
                      src={isMobile ? blueArrow : blueArrowDesktop}
                      className='md:size-[24px] lg:size-[36px] xl:size-[43px] hidden group-hover:block'
                      alt='arrow'
                    />
                    <h2 className='group-hover:text-[#006EEF] text-[36px] lg:text-[48px] text-nowrap xl:text-[72px] leading-[50.4px] lg:leading-[75px] xl:leading-[100.8px]'>
                      {title}
                    </h2>
                  </span>
                  <p className='text-[18px] lg:text-[24px] leading-[25.2px] lg:leading-[33.6px]'>
                    {text}
                  </p>
                  <div className='w-full flex flex-wrap gap-2'>
                    {tags.map((el) => (
                      <span
                        className='text-[14px] md:text-[16px] leading-[16.8px] md:leading-[19.2px] text-center rounded-[100px] border-[1.2px] border-black py-[10px] px-6'
                        key={el}
                      >
                        {el}
                      </span>
                    ))}
                  </div>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
