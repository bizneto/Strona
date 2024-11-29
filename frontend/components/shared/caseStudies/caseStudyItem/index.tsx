import { imageUrl } from "@/shared";
import Image from "next/image";
import Link from "next/link";

export interface ICaseStudyItem {
  id: number;
  client: string;
  title: string;
  date: string;
  services: string;
  thumbnail: {
    image: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  };
  miniThumbnail?: {
    image: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  };
  isMobile?: boolean;
  colorOverride?: string;
}

export default function CaseStudyItem({
  id,
  date,
  services,
  thumbnail,
  title,
  miniThumbnail,
  isMobile,
  colorOverride,
  client,
}: ICaseStudyItem) {
  const {
    image: {
      data: {
        attributes: { url, width, height },
      },
    },
  } = thumbnail;

  let miniThumbnailUrl = "";
  let miniThumbnailWidth = 0;
  let miniThumbnailHeight = 0;

  if (miniThumbnail) {
    ({
      image: {
        data: {
          attributes: {
            url: miniThumbnailUrl,
            width: miniThumbnailWidth,
            height: miniThumbnailHeight,
          },
        },
      },
    } = miniThumbnail);
  }

  const displayMobileThumbnail = miniThumbnail && isMobile;

  return (
    <Link
      target='_top'
      href={`/digital/realizacje/${id}`}
      key={id}
      className={`md:h-[748px] ${
        colorOverride ? colorOverride : "text-white"
      } font-medium flex flex-col gap-4 md:gap-6 group rounded-[8px] relative w-full h-[492px] mx-auto`}
    >
      <div
        className={`${
          colorOverride ? colorOverride : "text-black"
        } h-[70px] md:h-[101px] flex flex-col font-medium`}
      >
        <h4 className='text-[32px] leading-[44.8px] md:text-[48px] md:leading-[67.2px] '>
          {client}
        </h4>
        <p className='text-[18px] leading-[25.2px] md:text-[24px] md:leading-[33.6px]'>
          {title}
        </p>
      </div>
      <div className='relative w-full h-[360px]  md:max-h-[560px] overflow-hidden md:w-full md:h-full rounded-[8px]'>
        <Image
          width={displayMobileThumbnail ? miniThumbnailWidth : width}
          height={displayMobileThumbnail ? miniThumbnailHeight : height}
          src={imageUrl(displayMobileThumbnail ? miniThumbnailUrl : url)}
          className='transform transition-transform duration-1000 hover:scale-110 rounded-[8px] object-cover size-full'
          alt='background image '
        />
      </div>
      <div
        className={`max-w-[360px] md:max-w-full flex justify-between items-center my-2 md:my-4 h-[30px] md:h-[39px] ${
          colorOverride ? colorOverride : "text-black"
        }`}
      >
        <div className='flex gap-2'>
          {services.split(",").map((el, index) => (
            <div
              className={`text-nowrap w-fit text-[12px] lg:text-[16px] lg:leading-[19.2px] leading-[14.4px] rounded-[100px] ${
                colorOverride ? colorOverride : "border-black"
              } border-[1.2px] px-[18px] py-2 h-[30px] md:h-[39px] flex items-center justify-center`}
              key={index}
            >
              {el}
            </div>
          ))}
        </div>
        <span className='text-[14px] leading-[19.6px] md:text-[18px] md:leading-[25.2px]'>
          {date}
        </span>
      </div>
    </Link>
  );
}
