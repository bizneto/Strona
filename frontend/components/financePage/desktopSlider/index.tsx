import OfferSegment from "@/components/financePage/offer/offerSegment";
import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { StaticImageData } from "next/image";
import "swiper/css";
import "./index.css";
import BlogPost from "@/components/shared/blog/blogPost";

export function DesktopSlider(
  sectionTitle: ReactNode,
  header: ReactNode,
  data: {
    image?: StaticImageData;
    category?: string;
    title?: string;
    subtitle?: string;
    id?: string;
    header?: string;
    text?: string;
  }[],
  sectionName: string
) {
  return (
    <section className='max-w-[89%] 2xl:max-w-[1440px] mx-auto flex relative gap-6'>
      <div className='h-full max-w-[69px] sticky top-4'>{sectionTitle}</div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          noSwiping={true}
          allowTouchMove={false}
          noSwipingClass='slide'
          className='swiper-box'
          width={sectionName === "Oferta" ? 632 : 620}
          height={sectionName === "Oferta" ? 334 : 665}
        >
          {header}
          {data.map((el, index) => (
            <SwiperSlide className='slide' key={index}>
              {sectionName === "Oferta" ? (
                <OfferSegment
                  key={index}
                  id={el.id}
                  header={el.header}
                  text={el.text}
                  index={index}
                  showMedia
                />
              ) : (
                <BlogPost
                  title={el.title}
                  image={el.image}
                  category={el.category}
                  subtitle={el.subtitle}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
