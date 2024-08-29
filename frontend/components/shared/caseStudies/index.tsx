import { imageUrl } from "@/shared";
import { fetchAllCaseStudies } from "@/utils/caseStudies";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";
import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  id: number;
  attributes: {
    Page: Array<{
      shortDescription: string;
      client: string;
      date: string;
      __component: string;
      title?: string;
      services?: string;
      image?: {
        data: {
          attributes: {
            formats: {
              large?: { url: string; width: number; height: number };
              medium?: { url: string; width: number; height: number };
              thumbnail?: { url: string; width: number; height: number };
            };
          };
        };
      };
    }>;
  };
}

interface CaseStudyItem {
  id: number;
  shortDescription: string;
  title: string;
  date: string;
  services: string;
  client: string;
  thumbnail: { url: string; width: number; height: number };
  miniThumbnail?: { url: string; width: number; height: number };
}

export default async function CaseStudies() {
  const isMobile = await SSRMobileDetection();
  const data: CaseStudy[] = await fetchAllCaseStudies();
  if (!data)
    return <div className='text-black'>Error loading realizations!</div>;

  const caseStudiesList: CaseStudyItem[] = data.map(
    ({ id, attributes: { Page } }) => {
      const headerComponent = Page.find(
        (component) => component.__component === "component.header"
      );
      const thumbnailComponent = Page.find(
        (component) => component.__component === "component.thumbnail"
      );
      const miniThumbnailComponent = Page.find(
        (component) => component.__component === "component.mini-thumbnail"
      );

      const getImageFormats = (component: any) => {
        return component && component.image
          ? component.image.data.attributes.formats
          : null;
      };

      const thumbnailFormats = getImageFormats(thumbnailComponent);
      const miniThumbnailFormats = getImageFormats(miniThumbnailComponent);

      const thumbnail = thumbnailFormats
        ? thumbnailFormats.large ||
          thumbnailFormats.medium ||
          thumbnailFormats.thumbnail
        : { url: "/default-thumbnail.png", width: 800, height: 600 };

      const miniThumbnail = miniThumbnailFormats?.thumbnail;

      return {
        id: id,
        shortDescription: headerComponent
          ? headerComponent.shortDescription || "Brak opisu"
          : "Brak opisu",
        title: headerComponent
          ? headerComponent.title || "Brak tytułu"
          : "Brak tytułu",
        client: headerComponent
          ? headerComponent.client || "Brak klienta"
          : "Brak klienta",
        date: headerComponent
          ? headerComponent.date || "Brak daty"
          : "Brak daty",
        services: headerComponent
          ? headerComponent.services || "Brak usług"
          : "Brak usług",
        thumbnail: thumbnail,
        miniThumbnail: miniThumbnail,
      };
    }
  );

  return (
    <>
      {caseStudiesList.map(
        ({ id, title, date, services, thumbnail, miniThumbnail, client }) => (
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
                width={thumbnail.width}
                height={thumbnail.height}
                src={imageUrl(
                  miniThumbnail && isMobile ? miniThumbnail.url : thumbnail.url
                )}
                className='transform transition-transform duration-1000 hover:scale-110 w-full h-full rounded-[8px]  object-cover '
                alt='background image'
              />
            </div>
            <div className='max-w-[360px] md:max-w-[1130px] flex justify-between items-center my-2 md:my-4 h-[30px] md:h-[39px] text-black'>
              <div className='flex gap-2'>
                {services.split(",").map((el, index) => (
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
        )
      )}
    </>
  );
}
