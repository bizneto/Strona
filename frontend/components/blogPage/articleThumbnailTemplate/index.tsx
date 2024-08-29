"use client";

import { imageUrl } from "@/shared";
import Image from "next/image";

interface IArticleThumbnailTemplate {
  title: string;
  category: string;
  thumbnail: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

export default function ArticleThumbnailTemplate({
  title,
  category,
  thumbnail,
}: IArticleThumbnailTemplate) {
  const {
    data: {
      attributes: { url, width, height },
    },
  } = thumbnail;

  return (
    <article className='flex flex-col w-full'>
      <div className='font-medium flex flex-col w-full gap-8'>
        <Image
          src={imageUrl(url)}
          width={width}
          height={height}
          className='md:h-[401px] object-cover w-full rounded-[10px]'
          alt='article thumbnail'
        />
        <h2 className='md:h-[80px] text-wrap text-[24px] leading-[28.8px] lg:text-[32px] md:leading-[39.01px]'>
          {title}
        </h2>
        <h3 className='text-[16px] leading-[22.4px] border-[1.2px] text-center border-black px-6 py-3 w-fit rounded-[100px]'>
          {category}
        </h3>
      </div>
    </article>
  );
}
