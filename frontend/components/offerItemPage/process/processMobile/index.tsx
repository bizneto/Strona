"use client";

import SectionTitle from "@/components/shared/sectionTitle";
import useGlobalContext from "@/hooks/useGlobalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { HEADER, SECTION_TITLE } from "../data";
import { Scrollbar } from "swiper/modules";
import { IProces, SectionFooter } from "..";
import { useState } from "react";
import Image from "next/image";
import "swiper/css/scrollbar";
import "./index.css";
import "swiper/css";
import { imageUrl } from "@/shared";

export default function ProcessMobile({ Process }: IProces) {
  const { isMobile } = useGlobalContext();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='bg-black py-8 xl:hidden'>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col gap-12'>
          <div className='mx-auto w-[91%]  flex flex-col gap-8'>
            <SectionTitle
              nonStick
              sectionTitle={SECTION_TITLE}
              color='#006EEF'
            />
            <h4 className='text-white text-[48px] leading-[48px]'>{HEADER}</h4>
          </div>
          <div className='pl-4 h-[307px] md:w-[97%] relative'>
            <Swiper
              scrollbar={{
                hide: false,
                draggable: true,
                el: ".swiper-scrollbar",
              }}
              width={isMobile ? 225 : 250}
              modules={[Scrollbar]}
              className='mySwiper custom-swiper'
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {Process.map(({ Title, Text, Image: ProcessImage }, index) => {
                const isIndexActive = index === activeIndex;
                return (
                  <SwiperSlide key={index} className='custom-swiper-slide'>
                    <div className='transition-all duration-1000 slide-content flex flex-col items-center justify-center rounded-[50%] border-[0.81px] border-white size-[270.86px] gap-4'>
                      <Image
                        className={`${
                          isIndexActive
                            ? "invert size-[24px]"
                            : "opacity-100 size-[38.81px]"
                        } transition-all duration-1000`}
                        width={ProcessImage.data.attributes.width}
                        height={ProcessImage.data.attributes.height}
                        src={imageUrl(ProcessImage.data.attributes.url)}
                        alt='icon'
                      />
                      <h5
                        className={`${
                          isIndexActive ? "text-black" : "text-white"
                        } transition-all duration-1000  text-[16px] leading-[22.4px]`}
                      >
                        {Title}
                      </h5>
                      <span
                        className={`${
                          isIndexActive ? "h-66px" : "h-0"
                        } w-[75%] transition-all duration-500 overflow-hidden`}
                      >
                        <p className='text-[16px] leading-[22.4px] text-center'>
                          {Text}
                        </p>
                      </span>
                    </div>
                  </SwiperSlide>
                );
              })}
              <div
                style={{ width: "188px", margin: "auto" }}
                className='swiper-scrollbar'
              >
                <div
                  className='swiper-scrollbar-drag'
                  style={{ width: "67px" }}
                ></div>
              </div>
            </Swiper>
          </div>
        </div>
        <SectionFooter />
      </div>
    </section>
  );
}
