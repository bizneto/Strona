"use client";

import Link from "next/link";
import darkArrow from "@/public/svgs/blackArrowRight.svg";
import Image from "next/image";
import { useState } from "react";

interface ICalculatorSegment {
  isMobile?: boolean;
  index?: number;
  mobileHeight?: number;
  extraMargin?: boolean;
}

export default function CalculatorSegment({
  isMobile,
  index,
  mobileHeight,
  extraMargin,
}: ICalculatorSegment) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      className={`border flex bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200
        ${
          isMobile
            ? `${index === 0 && extraMargin && "ml-9"}
              w-full 
              h-${mobileHeight ? `[${mobileHeight}rem]` : "full"}
              gap-6
              justify-between px-6 py-8 items-start rounded-[8px]`
            : `${index == 0 && extraMargin && "ml-52"}
              w-full
              h-full
              gap-8
              rounded-[10px] px-6 py-5`
        }`}
    >
      <div
        className={`flex flex-col items-start justify-between ${
          isMobile ? "h-44" : "h-[217px]"
        }`}
      >
        <p
          className={`font-medium ${
            isMobile
              ? "text-[14px] leading-[19.6px]"
              : "text-[16px] leading-[22.4px]"
          } text-blue-600`}
        >
          AI
        </p>
        
        {/* Calculator Icon */}
        <div className={`${isMobile ? "size-[60.42px]" : "size-[90px]"} bg-blue-600 rounded-full flex items-center justify-center`}>
          <svg 
            className={`${isMobile ? "w-8 h-8" : "w-12 h-12"} text-white`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
            />
          </svg>
        </div>
      </div>
      
      <div
        className={`${
          isMobile
            ? mobileHeight
              ? `h-[calc(${mobileHeight}rem - 5rem)]`
              : `h-44`
            : "h-[217px]"
        } relative flex flex-col justify-start`}
      >
        <span className='font-medium text-blue-600'>
          {isMobile ? (
            <h6 className='text-[20px] leading-[22px]'>Kalkulator Usług Księgowych</h6>
          ) : (
            <h5 className='text-[28px] leading-[30.8px]'>Kalkulator Usług Księgowych</h5>
          )}
        </span>

        <p
          className={`font-normal ${
            isMobile
              ? "text-[14px] leading-[19.6px] mt-[10.74px] mb-14"
              : "text-[16px] leading-[22.4px] mb-10 mt-4"
          }`}
        >
          Oblicz cenę usług księgowych w kilka minut.
          Nasz inteligentny kalkulator AI analizuje Twoje potrzeby i proponuje optymalne rozwiązania cenowe.
        </p>
        
        <Link className='w-full h-full' href={"/finanse/kalkulator"}>
          <div
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            className={`absolute ${
              isMobile ? "bottom-0" : "bottom-2"
            } left-0 flex items-center w-[140px] pr-[6.71px] gap-2`}
          >
            <p className='font-medium text-[16px] leading-[22.4px] text-center text-blue-600'>
              Oblicz cenę
            </p>
            <div className='w-full overflow-hidden'>
              <Image
                src={darkArrow}
                alt='link arrow'
                className={`${
                  isMouseOver && "animate-[moveRightToLeft_0.6s__ease-in]"
                } w-[15.25px] h-[16.19px] filter brightness-0 saturate-100 hue-rotate-[220deg]`}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
