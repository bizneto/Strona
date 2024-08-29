"use client";

import useGlobalContext from "@/hooks/useGlobalContext";
import Image from "next/image";
import { useState } from "react";
import { useSwiper } from "swiper/react";
import blackCircle from "@/public/svgs/circleBlack.svg";
import blackArrowLeft from "@/public/svgs/blackArrowLeft.svg";
import blackArrowRight from "@/public/svgs/blackArrowRight.svg";
import grayCircle from "@/public/svgs/circleGray.svg";
import grayArrowLeft from "@/public/svgs/grayArrowLeft.svg";
import grayArrowRight from "@/public/svgs/grayArrowRight.svg";
interface SliderButtonsProps {
  dataArrLength: number;
}

interface IArrowWithCircle {
  color: "gray" | "black";
  arrow: "arrowLeft" | "arrowRight";
  onClick: () => void;
  hoverEffect: string;
}

const arrowsMap = {
  black: {
    circle: blackCircle,
    arrowLeft: blackArrowLeft,
    arrowRight: blackArrowRight,
  },
  gray: {
    circle: grayCircle,
    arrowLeft: grayArrowLeft,
    arrowRight: grayArrowRight,
  },
};

function ArrowWithCircle({
  color,
  arrow,
  onClick,
  hoverEffect,
}: IArrowWithCircle) {
  const { circle: CircleImage, [arrow]: ArrowImage } = arrowsMap[color];
  return (
    <div onClick={onClick} className='relative overflow-hidden group'>
      <Image src={CircleImage} alt='' className='object-cover -z-10' />
      <Image
        src={ArrowImage}
        alt=''
        className={`z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          group-hover:${hoverEffect}
          `}
      />
    </div>
  );
}

export default function SliderButtons({ dataArrLength }: SliderButtonsProps) {
  const { isMobile } = useGlobalContext();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiper = useSwiper();

  const firstPostion = activeIndex == 0;
  const lastPostion = activeIndex == dataArrLength - 1;

  function handleIndexChange(direction: "increment" | "decrement") {
    if (direction === "increment") {
      if (activeIndex === dataArrLength - 1) return;
      swiper.slideNext();
      setActiveIndex((curr) => curr + 1);
    } else if (direction === "decrement") {
      if (activeIndex === 0) return;
      swiper.slidePrev();
      setActiveIndex((curr) => curr - 1);
    }
  }

  return (
    <>
      {!isMobile && (
        <div className='flex gap-2'>
          <ArrowWithCircle
            color={firstPostion ? "gray" : "black"}
            arrow='arrowLeft'
            onClick={() => handleIndexChange("decrement")}
            hoverEffect={"animate-[moveLeftToRightSB_0.6s__ease-in]"}
          />
          <ArrowWithCircle
            color={lastPostion ? "gray" : "black"}
            arrow='arrowRight'
            onClick={() => handleIndexChange("increment")}
            hoverEffect={"animate-[moveRightToLeftSB_0.6s__ease-in]"}
          />
        </div>
      )}
    </>
  );
}
