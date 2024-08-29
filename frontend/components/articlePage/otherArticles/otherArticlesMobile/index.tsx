"use client";

import useSectionVisibility from "@/utils/intersectionObserver";
import useGlobalContext from "@/hooks/useGlobalContext";
import { FreeMode, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import "./style.css";
import "swiper/css";
import { imageUrl } from "@/shared";

interface ArticleComponent {
  __component: string;
  title: string;
  category: string;
  text?: {}[];
  image?: {
    data: {
      attributes: {
        width: number;
        url: string;
        height: number;
      };
    };
  };
  articleAdmission?: string;
  articleHeader?: string;
  articleMain?: {}[];
}

interface Article {
  id: number;
  attributes: {
    Page: ArticleComponent[];
  };
}

interface OtherArticlesMobileProps {
  data: Article[];
}

export default function OtherArticlesMobile({
  data,
}: OtherArticlesMobileProps) {
  const SECTION_TITLE = "Blog";
  const HEADER_TITLE = "Powiązane artykuły";
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef);
  const { isMobile } = useGlobalContext();

  if (data.length === 0) return;
  if (!isMobile) return null;

  return (
    <section ref={sectionRef} className='relative w-full h-full pb-8'>
      <div className='w-10/12 mx-auto flex flex-col gap-8'>
        <span>
          <div
            className={`pr-6 md:sticky top-0 max-w-[85px] h-full ${
              isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
            }`}
          >
            <span className='font-black text-2xl mr-2'>&bull;</span>
            {SECTION_TITLE}
          </div>
          <h5 className='text-[28px] leading-[30.8px] font-medium '>
            {HEADER_TITLE}
          </h5>
        </span>
        <Swiper
          modules={[Scrollbar, FreeMode]}
          width={358}
          height={431}
          freeMode
          style={{ width: "100%" }}
        >
          {data.map(({ id, attributes: { Page } }) => {
            const header = Page.find(
              (component) => component.__component === "blog-components.header"
            );
            const thumbnail = Page.find(
              (component) =>
                component.__component === "blog-components.thumbnail"
            );

            if (!header || !thumbnail || !thumbnail.image) return null;

            return (
              <SwiperSlide key={header.title}>
                <Link
                  target='_top'
                  href={`/blog/${id}`}
                  className='w-[358px] h-[431.px] font-medium flex flex-col gap-6'
                >
                  <Image
                    src={imageUrl(thumbnail.image.data.attributes.url)}
                    width={thumbnail.image.data.attributes.width}
                    height={thumbnail.image.data.attributes.height}
                    className='w-full h-full object-cover'
                    alt='thumbnail'
                  />
                  <h6 className='text-[24px] leading-[28.8px]'>
                    {header.title}
                  </h6>
                  <p className='border-[1.2px] border-black rounded-[100px] px-6 py-3 w-fit text-center text-[16px] leading-[22.4px] '>
                    {header.category}
                  </p>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
