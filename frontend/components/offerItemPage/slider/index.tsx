"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import Image from "next/image";
import "./index.css";
import { imageUrl } from "@/shared";

interface ImageAttributes {
  url: string;
  width: number;
  height: number;
}

interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

interface SliderData {
  id: number;
  images: {
    data: ImageData[];
  };
}

interface SliderProps {
  Slider?: SliderData;
}

export default function Slider({ Slider }: SliderProps) {
  if (!Slider?.images?.data || !Slider) return null;

  const imagesArr = Slider?.images?.data || [];

  return (
    <section className='my-8 md:my-16'>
      <div className='w-[97%] 2xl:w-[1440px] mx-auto relative'>
        <Swiper
          autoplay
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            type: "bullets",
          }}
          modules={[Pagination, Mousewheel, Autoplay]}
          className='mySwiper-1'
        >
          {imagesArr.map(
            (
              { attributes: { url = "", width = 0, height = 0 } = {} },
              index
            ) => (
              <SwiperSlide key={index}>
                <Image
                  priority
                  className='rounded-lg'
                  width={width}
                  height={height}
                  src={imageUrl(url)}
                  alt={`slider image ${index}`}
                />
              </SwiperSlide>
            )
          )}
          <div className='swiper-pagination'></div>
        </Swiper>
      </div>
    </section>
  );
}
