import { imageUrl } from "@/shared";
import Image from "next/image";

export interface IArticleImage {
  image: {
    data: {
      attributes: {
        width: number;
        height: number;
        url: string;
      };
    };
  };
}

export default async function Thumbnail({ image }: IArticleImage) {
  const {
    data: {
      attributes: { width, height, url },
    },
  } = image;

  return (
    <Image
      priority
      height={height}
      width={width}
      src={imageUrl(url)}
      className='md:max-h-[664px]  rounded-[10px] my-8 md:my-16 mx-auto w-10/12 md:w-[89%] 2xl:w-[1440px]'
      alt='admisson image'
    />
  );
}
