import { imageUrl } from "@/shared";
import Image from "next/image";

interface IBlogPost {
  image: {
    data: {
      attributes: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  category?: string;
  subtitle?: string;
  title?: string;
}

export default function BlogPostAlt({ image, category, title }: IBlogPost) {
  return (
    <div className='flex flex-col gap-8 max-w-[620px] max-h-[665px]'>
      <div className='rounded-lg'>
        <Image
          width={image.data.attributes.width}
          height={image.data.attributes.height}
          src={imageUrl(image.data.attributes.url)}
          alt='thumbnail'
          className='rounded-lg'
        />
      </div>
      <div className='flex flex-col gap-8'>
        <p
          className={`font-medium text-[18px] leading-[25.2px] md:text-[32px] md:leading-[39.01px]`}
        >
          {title}
        </p>
        <div className='text-[16px] leading-[22.4px] w-fit border-[1.2px] border-black rounded-[100px] px-8 py-[14px] font-medium '>
          {category}
        </div>
      </div>
    </div>
  );
}
