import Image from "next/image";
import { IImage } from "@/components/digitalPage/smallImage";
import { imageUrl } from "@/shared";

export default function BigImage({ image }: IImage) {
  const {
    data: {
      attributes: { height, url, width },
    },
  } = image;

  return (
    <section className='py-2 h-full w-[97%] 2xl:w-[1440px] mx-auto'>
      <div className='relative w-full max-h-[1296px] h-auto overflow-hidden'>
        <Image
          height={height}
          width={width}
          src={imageUrl(url)}
          className='size-full rounded-[8px]'
          alt='image'
        />
      </div>
    </section>
  );
}
