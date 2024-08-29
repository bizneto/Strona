import Image from "next/image";
import React, { MouseEvent } from "react";
import redArrow from "@/public/svgs/arrowRed.svg";
import whiteArrow from "@/public/svgs/arrowWhite.svg";
import blackArrow from "@/public/svgs/blackArrowRightSmall.svg";
import Link from "next/link";

interface IButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color: string;
  text: string;
  arrowColor: "red" | "white" | "black";
  altHref?: string;
  altHeight?: number;
  altWidth?: number;
  borderColor?: string;
  fillColor?: string;
}

const arrowsMap = {
  black: blackArrow,
  red: redArrow,
  white: whiteArrow,
};

export default function ButtonWithArrow({
  onClick,
  color,
  text,
  borderColor,
  arrowColor,
  altHref,
  altHeight,
  fillColor,
}: IButtonProps) {
  const dynamicStyle = {
    borderColor: borderColor ?? color,
    color,
    backgroundColor: fillColor || "transparent",
  };
  const arrow = arrowsMap[arrowColor];

  return (
    <Link target='_top' href={altHref || "/kontakt"}>
      <button
        className={`group h-[${
          altHeight || "42"
        }px] px-[24px] py-[10px] flex  items-center relative gap-4 rounded-full border  border-solid border-opacity-60`}
        onClick={onClick}
        style={dynamicStyle}
      >
        <p className='font-medium text-[16px] leading-[22.4px]'>{text}</p>
        <div className='overflow-hidden pr-[0.25rem]'>
          <p className={`group-hover:animate-[moveRightToLeft_0.6s__ease-in]`}>
            <Image
              src={arrow}
              alt='arrow picture'
              style={{ width: "auto", height: "auto" }}
            />
          </p>
        </div>
      </button>
    </Link>
  );
}

export function ButtonWithArrowTypeSumbit({
  onClick,
  color,
  text,
  arrowColor,
  fillColor,
  altHeight,
  altWidth,
}: IButtonProps) {
  const dynamicStyle = {
    width: altWidth ? `${altWidth}px` : "100%",
    borderColor: color,
  };
  const arrow = arrowsMap[arrowColor];
  return (
    <button
      className={`group text-[${color}] bg-[${fillColor}]
       h-[${altHeight || "42"}px]
       px-[24px]  py-[10px] flex  items-center justify-center relative gap-4 rounded-full border  border-solid border-opacity-60`}
      onClick={onClick}
      style={dynamicStyle}
      type='submit'
    >
      <p className='font-medium text-[16px] leading-[22.4px]'>{text}</p>
      <div className='overflow-hidden pr-[0.25rem]'>
        <p className={`group-hover:animate-[moveRightToLeft_0.6s__ease-in]`}>
          <Image
            src={arrow}
            alt='arrow picture'
            style={{ width: "auto", height: "auto" }}
          />
        </p>
      </div>
    </button>
  );
}
