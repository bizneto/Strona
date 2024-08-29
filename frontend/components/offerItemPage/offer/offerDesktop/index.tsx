"use client";

import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import SectionTitle from "@/components/shared/sectionTitle";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IOffer } from "..";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade } from "swiper/modules";
import { Swiper as SwiperInstance } from "swiper/types";
import { imageUrl } from "@/shared";

export default function OfferDesktop({ Offer }: IOffer) {
  const SECTION_TITLE = "Oferta";
  const stickyRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const stickyPosition = stickyRef.current.getBoundingClientRect().top;
        let newIndex = 1;
        sectionRefs.current.forEach((ref, index) => {
          if (ref && ref.getBoundingClientRect().top - 100 < stickyPosition) {
            newIndex = index;
          }
        });
        if (newIndex < Offer.length && newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex, Offer]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(currentIndex);
    }
  }, [currentIndex]);

  return (
    <section className='hidden 880px:block py-16'>
      <div className='flex flex-row md:justify-between md:w-[89%] 2xl:w-[1440px] mx-auto'>
        <span className='hidden xl:block mb-8 md:mb-0'>
          <SectionTitle color='#006EEF' sectionTitle={SECTION_TITLE} />
        </span>
        <div className='w-full flex flex-row justify-between gap-[48px]'>
          <div
            ref={stickyRef}
            className='sticky top-6 w-[41%] md:max-w-[460px] md:h-[550px] lg:h-[460px]'
          >
            <Swiper
              effect={"fade"}
              modules={[EffectFade]}
              className='mySwiper'
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {Offer.map(
                (
                  {
                    Image: {
                      data: {
                        attributes: { height, url, width },
                      },
                    },
                  },
                  index
                ) => (
                  <SwiperSlide key={index}>
                    <Image
                      priority
                      width={width}
                      height={height}
                      className={`z-50 transition-opacity duration-300 ease-in-out rounded-[10.12px] size-full object-cover`}
                      src={imageUrl(url)}
                      alt={`slide-${index}`}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </div>
          <div className='relative mx-auto w-[54%] flex flex-col items-end justify-end gap-8 xl:gap-24'>
            {Offer.map(({ Title, ButtonText, Text }, index) => (
              <div
                key={index}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className='p-8 justify-between font-medium flex flex-col group bg-white rounded-lg size-full max-w-[612px] lg:h-[460px] md:h-[550px]'
              >
                <div className='transition-all duration-500 ease-linear flex flex-col md:gap-4 lg:gap-1 xl:gap-8'>
                  <h3 className='md:text-[36px] md:leading-[36px] xl:text-[48px] xl:leading-[67.2px]'>
                    {Title}
                  </h3>
                  <p className='md:text-[16px] md:leading-[22.4px] xl:text-[18px] xl:leading-[25.2px]'>
                    {Text}
                  </p>
                </div>
                <ButtonWithArrow
                  arrowColor='white'
                  color='#FFF'
                  fillColor='#006EEF'
                  altHeight={50}
                  text={ButtonText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
