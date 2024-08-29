"use client";

import { useState } from "react";
import useGlobalContext from "@/hooks/useGlobalContext";
import MenuArticle from "../menuArticle";
import { DigitalSubPageData } from "@/data/DigitalMenuData";
import Image from "next/image";
import Link from "next/link";
import { stringToRoute } from "@/shared";

export default function DesktopMenu() {
  const { isMobile, isDesktopMenuVisible, setIsDesktopMenuVisible } =
    useGlobalContext();
  const optionsArray = DigitalSubPageData["Oferta"];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (isDesktopMenuVisible.selectedOption === "" || isMobile) return null;

  return (
    <div
      onMouseLeave={() =>
        setIsDesktopMenuVisible({
          isVisible: false,
          selectedOption: isDesktopMenuVisible.selectedOption,
        })
      }
      className={`${
        isDesktopMenuVisible.isVisible ? "max-h-[394px] bg-white" : "max-h-0 "
      }  w-full overflow-hidden  pb-4 transition-all ease-in-out duration-500 z-50`}
    >
      <div className='mx-auto flex items-center text-black w-full h-[394px] md:w-[89%] 2xl:max-w-[1440px]'>
        <div className='w-full pt-4 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-2 lg:gap-12'>
          {optionsArray.map(({ title, subtext, icon, iconBlue }, index) => (
            <Link
              target='_top'
              href={`/digital/${stringToRoute(title)}`}
              key={title}
              className='h-[82px] max-w-[381px] gap-8 flex items-center hover:cursor-pointer relative transition-all duration-300'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className='w-[48px] h-[48px] relative transition-opacity duration-300'>
                <Image
                  src={icon}
                  alt='icon'
                  className={`object-contain absolute inset-0 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                />
                <Image
                  src={iconBlue}
                  alt='iconBlue'
                  className={`object-contain  absolute inset-0 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
              <div className='w-fit font-medium flex flex-col gap-1'>
                <span className='gap-2 flex items-center text-[24px] leading-[33.6px]'>
                  {title}
                </span>
                <p className='text-[#505050] hidden lg:block text-[16px] leading-[22.4px]'>
                  {subtext}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <MenuArticle />
      </div>
    </div>
  );
}
