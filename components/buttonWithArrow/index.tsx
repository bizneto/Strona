"use client";

import Image from "next/image";
import React, { MouseEvent, useState } from "react";
import redArrow from "@/public/svgs/arrowRed.svg";
import whiteArrow from "@/public/svgs/arrowWhite.svg";
import blackArrow from "@/public/svgs/blackArrowRightSmall.svg";
import Link from "next/link";

interface IButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color: string;
  text: string;
  arrowColor: "red" | "white" | "black";
}

const arrowsMap = {
  black: blackArrow,
  red: redArrow,
  white: whiteArrow,
};

function ButtonWithArrow({ onClick, color, text, arrowColor }: IButtonProps) {
  const borderStyle = {
    borderColor: color,
  };
  const arrow = arrowsMap[arrowColor];

  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <Link href={"/kontakt"}>
      <button
        className={`text-[${color}] h-[42px] px-[24px] py-[10px] flex  items-center relative gap-4 rounded-full border  border-solid border-opacity-60`}
        onClick={onClick}
        style={borderStyle}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <p className='font-medium text-[16px] leading-[22.4px]'>{text}</p>
        <div className='overflow-hidden pr-[0.25rem]'>
          <p
            className={`${
              isMouseOver && "animate-[moveRightToLeft_0.6s__ease-in]"
            }`}
          >
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

export default ButtonWithArrow;

export function ButtonWithArrowTypeSumbit({
  onClick,
  color,
  text,
  arrowColor,
}: IButtonProps) {
  const borderStyle = {
    borderColor: color,
  };
  const arrow = arrowsMap[arrowColor];

  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <button
      className={`text-[${color}] h-[42px] px-[24px] py-[10px] flex  items-center relative gap-4 rounded-full border  border-solid border-opacity-60`}
      onClick={onClick}
      style={borderStyle}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      type='submit'
    >
      <p className='font-medium text-[16px] leading-[22.4px]'>{text}</p>
      <div className='overflow-hidden pr-[0.25rem]'>
        <p
          className={`${
            isMouseOver && "animate-[moveRightToLeft_0.6s__ease-in]"
          }`}
        >
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
