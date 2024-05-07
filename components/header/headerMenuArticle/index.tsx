import { IArticleData } from "@/data/headerMenuData";
import Image from "next/image";

export default function HeaderMenuArticle({
  sectionTitle,
  articleText,
  articleTitle,
  thumbnail,
}: IArticleData) {
  return (
    <article className='w-10/12 mx-auto px-6 py-4 flex flex-col gap-[18px]'>
      <span>
        <span className='font-black text-2xl mr-2'>&bull;</span>
        {sectionTitle}
      </span>
      <Image src={thumbnail} alt='article thumbnail' className='rounded-lg' />
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
