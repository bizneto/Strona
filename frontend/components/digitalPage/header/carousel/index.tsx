import React from "react";

export default async function Carousel() {
  const CAROUSEL_DATA = [
    "Branding",
    "Web Design",
    "Chatboty AI",
    "Graphic Design",
  ];

  const CAROUSEL_DATA_COPY = [...CAROUSEL_DATA];

  return (
    <div
      className={`pb-8 text-white md:flex  md:mx-auto md:max-w-[89%] 2xl:w-[1440px]`}
    >
      <div className='md:hidden flex overflow-x-clip whitespace-nowrap '>
        <div className='flex animate-[slide_17s_linear_infinite]'>
          {CAROUSEL_DATA.map((opt) => {
            return (
              <span
                key={opt}
                className={`w-[164px] h-[44px] text-center border-b  px-[14px] py-[10px] ml-[16px] backdrop-blur-[1.216854214668274px] text-[18px] leading-[140%]`}
              >
                {opt}
              </span>
            );
          })}
        </div>
        <div className='flex animate-[slide_17s_linear_infinite]'>
          {CAROUSEL_DATA.map((opt) => {
            return (
              <span
                key={opt}
                className={`w-[164px] h-[44px] text-center border-b  px-[14px] py-[10px] ml-[16px] backdrop-blur-[1.216854214668274px] text-[18px] leading-[140%]`}
              >
                {opt}
              </span>
            );
          })}
        </div>
      </div>
      <div className='hidden md:flex w-full justify-between'>
        <span className='w-full justify-between flex py-8 gap-3'>
          {CAROUSEL_DATA_COPY.map((opt, index) => (
            <span
              key={index}
              className={`max-w-[307px] w-full h-[50px] text-center border-b px-[14px] py-[10px] backdrop-blur-[1.216854214668274px] md:text-[18px] lg:text-[24px]  md:leading-[18.6px] lg:leading-[21.6px]`}
            >
              {opt}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
