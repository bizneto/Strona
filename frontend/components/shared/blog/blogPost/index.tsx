import Image, { StaticImageData } from "next/image";

interface IBlogPost {
  image?: StaticImageData;
  category?: string;
  subtitle?: string;
  title?: string;
}

export default function BlogPost({
  image,
  category,
  subtitle,
  title,
}: IBlogPost) {
  return (
    <div
      className={`flex flex-col md:gap-4 md:w-full md:h-full  w-60 h-72 gap-2`}
    >
      <div className='relative rounded-lg'>
        <Image src={image!} alt='thumbnail' />
        <div
          className={
            "absolute bg-white font-medium rounded-2xl top-4 right-4 text-center w-[59.02px] h-[20.13px] text-[10px] leading-[13px]  px-[9.51px] py-[3.57px] md:w-[80px] md:h-[29px] md:text-[12px] md:leading-[16.8px] md:px-[16px] md:py-[6px]"
          }
        >
          {category}
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <p
          className={`font-medium text-[18px] leading-[25.2px] md:text-[20px] md:leading-[22px]`}
        >
          {title}
        </p>
        <p className='text-[14px] leading-[19.6px]'>{subtitle}</p>
      </div>
    </div>
  );
}
