"use client";

import SliderButtons from "@/components/financePage/offer/sliderButtons";
import useSectionVisibility from "@/utils/intersectionObserver";
import BlogPostAlt from "@/components/shared/blog/blogPostAlt";
import useGlobalContext from "@/hooks/useGlobalContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import Link from "next/link";
import "swiper/css";
import "./index.css";

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

interface OtherArticlesDesktopProps {
  data: Article[];
}

export default function OtherArticlesDesktop({
  data,
}: OtherArticlesDesktopProps) {
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef, 0.5);
  const { isMobile } = useGlobalContext();
  const SECTION_TITLE = "Więcej";
  const HEADER_TITLE = "Powiązane artykuły";

  if (data.length === 0) return;
  if (isMobile) return null;

  return (
    <section ref={sectionRef} className='py-16'>
      <div className='w-[89%] 2xl:w-[1440px] mx-auto flex'>
        <span
          className={`${
            isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
          } md:sticky md:max-w-[85px] top-4 h-full`}
        >
          <span className='font-black text-2xl mr-2'>&bull;</span>
          {SECTION_TITLE}
        </span>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            noSwiping={true}
            allowTouchMove={false}
            noSwipingClass='slide'
            className='swiper-box-article'
            width={620}
            height={665}
          >
            <header
              className={`justify-between flex items-center md:w-[70%] lg:w-[70%] xl:w-[69%] 2xl:w-[75rem]`}
            >
              <h2 className='md:text-[40px] text-[48px] font-medium leading-[58.51px]'>
                {HEADER_TITLE}
              </h2>
              <SliderButtons dataArrLength={data.length} />
            </header>
            {data.map(({ id, attributes: { Page } }) => {
              const header = Page.find(
                (component) =>
                  component.__component === "blog-components.header"
              );
              const thumbnail = Page.find(
                (component) =>
                  component.__component === "blog-components.thumbnail"
              );

              if (!header || !thumbnail || !thumbnail.image) return null;

              return (
                <SwiperSlide className='slide' key={header.title}>
                  <Link target='_top' href={`/blog/${id}`}>
                    <BlogPostAlt
                      title={header.title}
                      image={thumbnail.image}
                      category={header.category}
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
