"use client";

import useGlobalContext from "@/hooks/useGlobalContext";
import { DesktopSlider } from "@/components/financePage/desktopSlider";
import { A11y, FreeMode, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import BlogPost from "./blogPost";
import thumbnail1 from "@/public/images/thumbnail.png";
import SliderButtons from "../../financePage/offer/sliderButtons";
import { useRef } from "react";
import useSectionVisibility from "@/utils/intersectionObserver";

export default function Blog() {
  const { isMobile } = useGlobalContext();
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef);

  const SECTION_TITLE = "Blog";
  const HEADER_TITLE = "Najnowsze artykuły";
  const DATA = {
    image: thumbnail1,
    category: "Finanse",
    title: "Weryfikacja formy opodatkowania",
    subtitle:
      "Umów się na konsultację z naszym ekspertem, który odpowie na Twoje pytania.",
  };
  const mockData = [{ ...DATA }, { ...DATA }, { ...DATA }];

  return (
    <section ref={sectionRef} className='w-full h-full py-8 md:py-16'>
      {isMobile ? (
        <div className='mx-auto overflow-hidden'>
          <header className={"mx-auto w-10/12"}>
            <span
              className={`${
                isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
              }`}
            >
              <span className='font-black text-2xl mr-2'>&bull;</span>
              {SECTION_TITLE}
            </span>
            <span className={`font-medium`}>
              <h5 className='text-[28px] leading-8 mb-8'>{HEADER_TITLE}</h5>
            </span>
          </header>
          <Swiper
            modules={[A11y, Scrollbar, FreeMode]}
            freeMode
            width={250}
            style={{
              width: "105vw",
              display: "flex",
              justifyContent: "start",
            }}
          >
            {mockData.map(({ image, category, subtitle, title }, index) => (
              <SwiperSlide
                key={index}
                style={{
                  marginLeft: `${index == 0 && "9.5vw"}`,
                }}
              >
                <BlogPost
                  image={image}
                  category={category}
                  subtitle={subtitle}
                  title={title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        DesktopSlider(
          <span
            className={`${
              isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
            } pr-5`}
          >
            <span className='font-black text-2xl mr-2'>&bull;</span>
            {SECTION_TITLE}
          </span>,
          <header
            className={`justify-between flex items-center    md:w-[70%] lg:w-[70%] xl:w-[69%] 2xl:w-[75rem]  py-12}`}
          >
            <h2
              ref={sectionRef}
              className='text-[48px] font-medium leading-[58.51px]'
            >
              {HEADER_TITLE}
            </h2>
            <SliderButtons dataArrLength={mockData.length} />
          </header>,
          mockData,
          "Blog"
        )
      )}
    </section>
  );
}
