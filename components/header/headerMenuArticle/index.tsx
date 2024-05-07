"use client";

import { routeToArticleData } from "@/data/headerMenuData";
import HeaderMenuArticleImage from "./headerMenuArticleImage";
import { useState } from "react";

interface IHeaderMenuArticle {
  option: string;
}

export default function HeaderMenuArticle({ option }: IHeaderMenuArticle) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { sectionTitle, articleText, articleTitle, thumbnail } =
    routeToArticleData[option || "O nas"];
  return (
    <article
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className={`${
        isMouseOver && "bg-[#CFCFCF] bg-opacity-15"
      } md:w-[326px] md:max-h-[360px] md:mx-0 text-black w-10/12 mx-auto px-6 py-4 flex flex-col gap-[18px] rounded-[15px]`}
    >
      <span className={`${isMouseOver && "text-[#FF3C50]"}`}>
        <span className='font-black text-2xl mr-2'>&bull;</span>
        {sectionTitle}
      </span>
      <HeaderMenuArticleImage thumbnail={thumbnail} />
      <span className='w-[90%] pb-8'>
        <p className='font-medium text-[16px] leading-[22.4px] pb-2'>
          {articleTitle}
        </p>
        <p className='font-normal text-[14px] leading-[19.6px]'>
          {articleText}
        </p>
      </span>
    </article>
  );
}
