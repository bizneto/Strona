import Link from "next/link";
import darkArrow from "@/public/svgs/blackArrowRight.svg";
import Image, { StaticImageData } from "next/image";
import offer01 from "@/public/images/offer-01.png";
import offer02 from "@/public/images/offer-02.png";
import offer03 from "@/public/images/offer-03.png";
import offer04 from "@/public/images/offer-04.png";
import offer05 from "@/public/images/offer-05.png";
import { useState } from "react";

interface IOfferSegment {
  header?: string;
  text?: string;
  isMobile?: boolean;
  id?: string;
  activeIndex?: number;
  index?: number;
  showMedia?: boolean;
  mobileWidth?: number;
  mobileHeight?: number;
  desktopWidth?: number;
  desktopHeight?: number;
  extraMargin?: boolean;
}

const idToImageMap: Record<string, StaticImageData> = {
  "01": offer01,
  "02": offer02,
  "03": offer03,
  "04": offer04,
  "05": offer05,
};

export default function OfferSegment({
  header,
  text,
  isMobile,
  id,
  index,
  showMedia,
  mobileHeight,
  extraMargin,
}: IOfferSegment) {
  const LINK_TEXT = "Sprawdź";
  const image = idToImageMap[id!];
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      className={`border flex
        ${
          isMobile
            ? `${index === 0 && extraMargin && "ml-9"}
              w-full 
              h-${mobileHeight ? `[${mobileHeight}rem]` : "full"}
              ${showMedia ? "gap-11" : "gap-6"}
                justify-between px-6 py-8  items-start rounded-[8px]`
            : `border border-[#CFCFCF]
            ${index == 0 && extraMargin && "ml-52"}
              w-full
              h-full
               ${showMedia ? "gap-6" : "gap-8"}
                rounded-[10px] px-6 ${showMedia ? "py-12" : "py-5"}`
        }`}
    >
      <div
        className={`flex flex-col items-start justify-between   ${
          isMobile
            ? `${showMedia ? "h-44 w-52" : "h-44"}`
            : ` ${showMedia ? "w-56 h-[234px]" : "h-[217px]"} `
        }`}
      >
        <p
          className={`font-medium ${
            isMobile
              ? "text-[14px] leading-[19.6px]"
              : "text-[16px] leading-[22.4px]"
          }  text-[#FF3C50]`}
        >
          {id}
        </p>
        {showMedia ? (
          <Image
            src={image}
            alt='animations'
            className={`${isMobile ? "size-[60.42px]" : "size-[90px]"}`}
          />
        ) : null}
      </div>
      <div
        className={`${
          isMobile
            ? mobileHeight
              ? `h-[calc(${mobileHeight}rem - 5rem)]`
              : `h-44`
            : showMedia
            ? "234px"
            : "217px"
        } relative  flex flex-col justify-start`}
      >
        <span className='font-medium text-[#FF3C50]'>
          {isMobile ? (
            <h6 className=' text-[20px] leading-[22px] '>{header}</h6>
          ) : (
            <h5 className='text-[28px] leading-[30.8px]'>{header}</h5>
          )}
        </span>
        <p
          className={`font-normal ${
            isMobile
              ? "text-[14px] leading-[19.6px] mt-[10.74px] mb-14 "
              : "text-[16px] leading-[22.4px] mb-10 mt-4 "
          }`}
        >
          {text}
        </p>
        <Link className='w-full h-full' href={"/kontakt"}>
          <div
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            className={`absolute ${
              isMobile ? "bottom-0" : "bottom-2"
            } left-0 flex  items-center w-[100px] pr-[6.71px] gap-2`}
          >
            <p className='font-medium text-[16px] leading-[22.4px] text-center'>
              {LINK_TEXT}
            </p>
            <div className='w-full overflow-hidden'>
              <Image
                src={darkArrow}
                alt='link arrow'
                className={`${
                  isMouseOver && "animate-[moveRightToLeft_0.6s__ease-in]"
                } w-[15.25px] h-[16.19px]`}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
