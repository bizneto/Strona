"use client";

import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "@/shared";
import { ICaseStudiesPassedProps } from "@/components/shared/caseStudies/caseStudyView";
import useCategoriesContext from "@/hooks/useBlogContext";

export default function SortableCaseStudies({
  caseStudiesList,
  isMobile,
}: ICaseStudiesPassedProps) {
  const { selectedCategories } = useCategoriesContext();
  if (!caseStudiesList || !Array.isArray(caseStudiesList))
    return <div>Error!</div>;

  return (
    <>
      {caseStudiesList.map(
        ({ id, title, date, services, thumbnail, miniThumbnail, client }) => {
          const servicesToArr: string[] = services.split(",");

          if (
            !selectedCategories.every((category) =>
              servicesToArr.includes(category)
            ) &&
            selectedCategories.length > 0 &&
            !selectedCategories.includes("Wszystkie")
          ) {
            return null;
          }

          return (
            <Link
              target='_top'
              href={`/digital/realizacje/${id}`}
              key={id}
              className={`md:h-[748px] text-white font-medium flex flex-col gap-4 md:gap-6 group rounded-[8px] relative w-full h-[492px] mx-auto`}
            >
              <div className='text-black h-[70px] md:h-[101px] flex flex-col font-medium'>
                <h4 className='text-[32px] leading-[44.8px] md:text-[48px] md:leading-[67.2px] '>
                  {client}
                </h4>
                <p className='text-[18px] leading-[25.2px] md:text-[24px] md:leading-[33.6px]'>
                  {title}
                </p>
              </div>
              <div className='w-full h-[360px] md:max-w-[1130px] md:max-h-[560px] overflow-hidden md:w-full md:h-full rounded-[8px]'>
                <Image
                  quality={100}
                  width={
                    isMobile ? miniThumbnail?.width : thumbnail.width || 2000
                  }
                  height={
                    isMobile ? miniThumbnail?.width : thumbnail.height || 1500
                  }
                  src={imageUrl(
                    isMobile && miniThumbnail?.url
                      ? miniThumbnail.url
                      : thumbnail.url
                  )}
                  className='transform transition-transform duration-1000 hover:scale-110 w-full h-full object-cover rounded-[8px]'
                  alt='background image'
                />
              </div>
              <div className='w-full  md:max-w-[1130px] flex justify-between items-center my-2 md:my-4 h-[30px] md:h-[39px] text-black'>
                <div className='flex w-[95%] flex-wrap gap-2'>
                  {servicesToArr.map((el, index) => (
                    <div
                      className='text-nowrap w-fit text-[12px] lg:text-[16px] lg:leading-[19.2px] leading-[14.4px] rounded-[100px] border-black border-[1.2px] px-[18px] py-2 h-[30px] md:h-[39px] flex items-center justify-center'
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
      )}
    </>
  );
}
