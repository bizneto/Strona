"use client";

import SectionTitle from "@/components/shared/sectionTitle";
import arrowInCircle from "@/public/svgs/arrowInCircle.svg";
import xInACricle from "@/public/svgs/xInACircle.svg";
import { useState } from "react";
import Image from "next/image";
import { IPassedData } from "..";

export default function CaseDataMobile({ data }: IPassedData) {
  const [isPopUpVisbile, setIsPopUpVisbile] = useState(false);
  const SECTION_TITLE = "Informacje";

  return (
    <div className='block md:hidden'>
      <Image
        src={arrowInCircle}
        onClick={() => setIsPopUpVisbile(true)}
        alt='arrow in circle'
        className={`${isPopUpVisbile ? "hidden" : "block"}`}
      />
      {isPopUpVisbile && (
        <div className='fixed inset-0 z-10'>
          <div className='absolute inset-0 bg-black bg-opacity-[5%]'></div>
          <div className='fixed bottom-0 w-screen h-[393px] left-0 z-20 flex items-end'>
            <div className='w-full bg-white bg-opacity-70 backdrop-blur-[10px] rounded-t-[8px] relative p-4'>
              <Image
                src={xInACricle}
                onClick={() => setIsPopUpVisbile(false)}
                className='absolute right-5 top-6'
                alt='closing button'
              />
              <div className='py-4 h-full w-10/12 mx-auto flex flex-col gap-6'>
                <div className='w-full max-h-[19px]'>
                  <SectionTitle sectionTitle={SECTION_TITLE} color='#006EEF' />
                </div>
                <div className='font-medium flex flex-col gap-4'>
                  {Object.entries(data).map(([label, value], index) => (
                    <span
                      key={index}
                      className='flex flex-col gap-3 max-h-[67px]'
                    >
                      <p className='text-[14px] leading-[19.6px] text-[#505050]'>
                        {label}
                      </p>
                      <span className='flex gap-2 text-[18px] leading-[25.2px]'>
                        {Array.isArray(value)
                          ? value.map((el) => (
                              <span
                                className='px-6 py-[10px] rounded-[100px] border-[1.2px] border-black'
                                key={el}
                              >
                                {el}
                              </span>
                            ))
                          : value}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
