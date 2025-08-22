import React from "react";
import Link from "next/link";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";

export default async function BlogCategoriesCarousel() {
  const CATEGORIES_ARR = [
    { name: "Księgowość", slug: "ksiegowosc" },
    { name: "Podatki", slug: "podatki" },
    { name: "Prawo", slug: "prawo" },
    { name: "Kadry", slug: "kadry" },
    { name: "Biznes", slug: "biznes" },
    { name: "Audyt", slug: "audyt" },
  ];
  const CATEGORIES_ARR_COPY = [...CATEGORIES_ARR];

  return (
    <div
      className={`md:flex md:flex-col md:gap-[16px] md:mx-auto md:w-[89%] 2xl:w-[1440px] md:flex-wrap`}
    >
      {/* Mobile version - scrolling animation */}
      <div className='md:hidden .no-scrollbar .no-scrollbar::-webkit-scrollbar py-2 flex justify-normal overflow-x-hidden flex-nowrap whitespace-nowrap'>
        <div className='animate-[slide_17s_linear_infinite]'>
          {CATEGORIES_ARR.map((category) => {
            return (
              <span
                key={category.slug}
                className={`text-center border rounded-[60.843px] px-[14px] py-[6px] ml-[9px] backdrop-blur-[1.216854214668274px] text-[14px] leading-[140%]`}
              >
                {category.name}
              </span>
            );
          })}
        </div>
        <div className='animate-[slide_17s_linear_infinite]'>
          {CATEGORIES_ARR.map((category) => {
            return (
              <span
                key={`${category.slug}-copy`}
                className={`text-center border rounded-[60.843px] px-[14px] py-[6px] ml-[9px] backdrop-blur-[1.216854214668274px] text-[14px] leading-[140%]`}
              >
                {category.name}
              </span>
            );
          })}
        </div>
      </div>

      {/* Desktop version - clickable buttons */}
      <div className='hidden md:flex flex-col gap-3 h-full w-full'>
        <span className='flex gap-3'>
          {CATEGORIES_ARR_COPY.splice(0, 3).map((category, index) => (
            <Link
              href={category.slug ? `/finanse/blog/kategoria/${category.slug}` : `/finanse/blog`}
              key={index}
              className='md:p-2 lg:px-6 lg:py-[10px] gap-4 border-[1.2px] rounded-[60.843px] backdrop-blur-[1.216854214668274px] text-[16px] leading-[19.5px] hover:bg-white/10 transition-colors duration-200'
            >
              {category.name}
            </Link>
          ))}
        </span>
        <span className='flex gap-3'>
          {CATEGORIES_ARR.splice(3).map((category, index) => (
            <Link
              href={category.slug ? `/finanse/blog/kategoria/${category.slug}` : `/finanse/blog`}
              key={index}
              className='lg:px-6 lg:py-[10px] md:p-2 gap-4 border-[1.2px] rounded-[60.843px] backdrop-blur-[1.216854214668274px] text-[16px] leading-[19.5px] hover:bg-white/10 transition-colors duration-200'
            >
              {category.name}
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
}
