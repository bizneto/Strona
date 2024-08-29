import { imageUrl } from "@/shared";
import Image from "next/image";

interface IImagesPair {
  imagesPair: {
    data: [
      {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      }
    ];
  };
}

export default function ImagePair({ imagesPair }: IImagesPair) {
  return (
    <section className='py-2 relative mx-auto w-[97%] 2xl:w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-4 '>
      {Object.entries(imagesPair)[0][1].map(
        ({ attributes: { url, width, height } }) => (
          <Image
            key={width}
            width={width}
            height={height}
            src={imageUrl(url)}
            alt={`image`}
            className='mx-auto size-full md:max-h-[680px] rounded-[8px]'
          />
        )
      )}
    </section>
  );
}
