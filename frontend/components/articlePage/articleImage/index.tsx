import Image from "next/image";
import { IArticleImage } from "../thumbnail";
import { imageUrl } from "@/shared";

export default async function ArticleImage({ image }: IArticleImage) {
  if (!image || !image.data || !image.data.attributes) return null;

  const {
    data: {
      attributes: { width, height, url },
    },
  } = image;

  return (
    <Image
      width={width}
      height={height}
      src={imageUrl(url)}
      className='md:max-w-[800px] rounded-[10px] md:max-h-[600px] my-8 mx-auto w-10/12 md:w-[89%] 2xl:w-[1440px]'
      alt='admission image'
    />
  );
}
