"use client";

import useGlobalContext from "@/hooks/useGlobalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import { DesktopSlider } from "@/components/financePage/desktopSlider";
import OfferSegment from "../offerSegment";
import SliderButtons from "../sliderButtons";
import { useRef } from "react";
import useSectionVisibility from "@/utils/intersectionObserver";
import { CityData } from "@/data/cities";

interface WhoWeServeProps {
  cityData?: CityData;
}

export default function WhoWeServe({ cityData }: WhoWeServeProps) {
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef, 0.7);
  const { isMobile } = useGlobalContext();

  const SECTION_TITLE = "Oferta";
  const HEADER_TEXT = "Kogo obsługujemy?";
  const SEGMENTS_DATA = [
    {
      id: "01",
      header: "Jednoosobowe Działalności Gospodarcze",
      text: "Zapewniamy wsparcie finansowe i podatkowe, umożliwiając Ci skoncentrowanie się na rozwoju swojego biznesu.",
    },
    {
      id: "02",
      header: "Spółki Osobowe",
      text: "Oferujemy profesjonalną obsługę księgową, która wspiera Cię w budowaniu stabilnej i zyskownej działalności.",
    },
    {
      id: "03",
      header: "Spółki Kapitałowe",
      text: "Nasze wszechstronne podejście zapewnia nie tylko rzetelne prowadzenie ksiąg handlowych, ale także strategiczne doradztwo, które pomaga osiągnąć Twoje cele biznesowe.",
    },
    {
      id: "04",
      header: "Fundacje",
      text: "Nasza specjalistyczna obsługa księgowa dla fundacji to gwarancja sprawnego zarządzania finansami organizacji, pozwalając Ci skupić się na realizacji swojej misji.",
    },
    {
      id: "05",
      header: "Stowarzyszenia",
      text: "Stowarzyszenie potrzebuje nie tylko pomocy w rachunkowości, ale także partnera, który zrozumie jego unikatowe cele i misję.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className='overflow-x-clip relative w-full h-full py-8 md:py-16'
    >
      {isMobile ? (
        <>
          <header className={`mx-auto w-10/12`}>
            <span
              className={`${
                isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
              }`}
            >
              <span className='font-black text-2xl mr-2'>&bull;</span>
              {SECTION_TITLE}
            </span>
            <span ref={sectionRef} className={`font-medium`}>
              <h5 className='text-[28px] leading-8 mb-8'>{HEADER_TEXT}</h5>
            </span>
          </header>
          <Swiper
            modules={[Scrollbar, FreeMode]}
            slidesPerView={1}
            spaceBetween={25}
            width={424}
            height={247}
            freeMode
            style={{ overflow: "hidden" }}
          >
            {SEGMENTS_DATA.map(({ header, text, id }, index) => (
              <SwiperSlide key={index}>
                <OfferSegment
                  key={index}
                  id={id}
                  isMobile={isMobile}
                  header={header}
                  text={text}
                  index={index}
                  showMedia
                  extraMargin
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        DesktopSlider(
          <span
            className={` ${
              isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
            } sticky top-4 `}
          >
            <span className='font-black text-2xl mr-2'>&bull;</span>
            {SECTION_TITLE}
          </span>,
          <header
            className={`justify-between flex items-center  md:w-[70%] lg:w-[70%] xl:w-[69%] 2xl:w-[75rem] py-8}`}
          >
            <h2 className='md:text-[40px] text-[48px] font-medium leading-[58.51px]'>
              {HEADER_TEXT}
            </h2>
            <SliderButtons dataArrLength={SEGMENTS_DATA.length} />
          </header>,
          SEGMENTS_DATA,
          "Oferta"
        )
      )}
    </section>
  );
}
