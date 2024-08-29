import { imageUrl } from "@/shared";
import Image from "next/image";

export interface IImage {
  image: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
}

export default function SmallImage({ image }: IImage) {
  const { url, width, height } = image.data.attributes;
  return (
    <section className='py-2 mx-auto w-[97%] 2xl:w-[1440px]'>
      <Image
        width={width}
        height={height}
        className='size-full rounded-[8px] md:max-h-[704px] mx-auto'
        src={imageUrl(url)}
        alt='image'
      ></Image>
    </section>
  );
}
