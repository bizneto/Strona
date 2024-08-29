import Image from "next/image";
import { IImage } from "@/components/digitalPage/smallImage";
import { imageUrl } from "@/shared";

export default function Thumbnail({ image }: IImage) {
  const {
    data: {
      attributes: { height, url, width },
    },
  } = image;

  return (
    <div className='relative py-2 w-[97%] 2xl:w-[1440px] mx-auto'>
      <Image
        priority
        width={width}
        height={height}
        className='rounded-[8px] size-full max-h-[712px]'
        src={imageUrl(url)}
        alt='main image'
      ></Image>
    </div>
  );
}
