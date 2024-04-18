import React from "react";
import Link from "next/link";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";

export default async function HeaderCarousel() {
  const isMobile = await SSRMobileDetection();

  const OPTIONS_ARR = [
    "Konsulting Biznesowy",
    "Księgowość",
    "Doradztwo Podatkowe",
    "Audyt Finansowy",
    "Kadry i Płace",
    "Obsługa Prawna",
  ];
  const OPTIONS_ARR_COPY = [...OPTIONS_ARR];

  return (
    <div
      className={`md:flex md:flex-col md:gap-[16px]  md:mx-auto md:w-[89%] 2xl:w-[1440px]  md:flex-wrap`}
    >
      <div className='md:hidden .no-scrollbar .no-scrollbar::-webkit-scrollbar py-2 flex justify-normal overflow-x-hidden  flex-nowrap whitespace-nowrap '>
        <div className='animate-[slide_17s_linear_infinite]'>
          {OPTIONS_ARR.map((opt) => {
            return (
              <span
                key={opt}
                className={`text-center border rounded-[60.843px] px-[14px] py-[6px] ml-[9px] backdrop-blur-[1.216854214668274px] text-[14px] leading-[140%]`}
              >
                {opt}
              </span>
            );
          })}
        </div>
        <div className='animate-[slide_17s_linear_infinite]'>
          {OPTIONS_ARR.map((opt) => {
            return (
              <span
                key={opt}
                className={`text-center border rounded-[60.843px] px-[14px] py-[6px] ml-[9px] backdrop-blur-[1.216854214668274px] text-[14px] leading-[140%]`}
              >
                {opt}
              </span>
            );
          })}
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-3 h-full w-full">
        <span className='flex gap-3'>
          {OPTIONS_ARR_COPY.splice(0, 3).map((opt, index) => (
            <Link
              // Temporary routing
              href={"/kontakt"}
              key={index}
              className=' md:p-2 lg:px-6 lg:py-[10px] gap-4 border-[1.2px] rounded-[60.843px] backdrop-blur-[1.216854214668274px] text-[16px] leading-[19.5px]'
              // onMouseEnter={() =>
              //   arrItemsIntoRoutes(opt, OPTIONS_ARR, setRoute)
              // }
            >
              {opt}
            </Link>
          ))}
        </span>
        <span className='flex gap-3'>
          {OPTIONS_ARR.splice(3).map((opt, index) => (
            <Link
              // Temporary routing
              href={"/kontakt"}
              key={index}
              className='lg:px-6 lg:py-[10px] md:p-2 gap-4 border-[1.2px] rounded-[60.843px] backdrop-blur-[1.216854214668274px] text-[16px] leading-[19.5px]'
              // onMouseEnter={() =>
              //   arrItemsIntoRoutes(opt, OPTIONS_ARR, setRoute)
              // }
            >
              {opt}
            </Link>
          ))}
        </span>
      </div>
    </div>
  );
}
