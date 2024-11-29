import financeImg from "@/public/images/finance.webp";
import financeMobileImg from "@/public/images/financeMobile.png";
import Image from "next/image";
import Link from "next/link";
import CarouselAlt from "../carouselAlt";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";
import brandingImg from "@/public/images/Branding&Web-Digital.webp";

export default async function Main() {
  const isMobile = await SSRMobileDetection();
  const MAP_DATA = [
    {
      title: "Finanse",
      optionsArr: [
        "Księgowość",
        "Kadry i Płace",
        "Obsługa Prawna",
        "Doradztwo Podatkowe",
      ],
      image: financeImg,
      imageMobile: financeMobileImg,
    },
    {
      title: `Branding \n & Web Design`,
      optionsArr: ["Branding", "Chatboty AI", "Web Design", "Graphic Design"],
      image: brandingImg,
      imageMobile: brandingImg,
    },
  ];
  const DIGITAL_CTA = "Poznaj naszą kreatywność";
  const FINANCE_CTA = "Poznaj jakość naszych usług";

  return (
    <main>
      <div className='w-full mx-auto flex flex-col md:flex-row'>
        {MAP_DATA.map(({ title, optionsArr, image, imageMobile }) => (
          <Link
            target='_top'
            href={title === "Finanse" ? `/${title.toLowerCase()}` : "/digital"}
            key={title}
            className='relative flex flex-col items-center justify-end overflow-hidden h-[700px] w-full group'
          >
            <Image
              src={isMobile ? imageMobile : image}
              alt='background'
              className='absolute w-full h-full object-cover -z-20 transition-all duration-300 ease-in-out group-hover:blur-md group-hover:scale-110'
            />
            <div className='pb-12 min-h-full w-full md:px-8 xl:px-12 2xl:px-16 mx-auto flex flex-col gap-4 md:flex-row md:justify-between justify-end md:items-end text-[#fff]'>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-30'>
                <span className='text-[24px] leading-[18.63px] lg:text-[32px] text-center lg:leading-[32px] font-normal'>
                  {title === "Finanse" ? FINANCE_CTA : DIGITAL_CTA}
                </span>
              </div>
              <div className='md:w-full md:pb-4 flex flex-col items-end gap-4 md:gap-0 md:flex-row md:items-end md:justify-between transition-opacity overflow-hidden duration-300 ease-in-out group-hover:opacity-0'>
                <span className='flex flex-col gap-0 w-[92%] mx-auto md:mx-0'>
                  <h2 className='text-[36px] md:text-[32px] leading-[43.88px] lg:text-[44px] xl:text-[64px] xl:leading-[78.02px]'>
                    {title?.split("&").map((part, index) => (
                      <span key={index}>
                        {part}
                        {index !== title.split("&").length - 1 && <br />}
                      </span>
                    ))}
                  </h2>
                </span>
                <span className='md:hidden w-full'>
                  <CarouselAlt optionsArr={optionsArr} />
                </span>
                <ul className='hidden md:flex flex-col items-end gap-[14px]'>
                  {optionsArr.map((el) => (
                    <li
                      className='bg-[rgba(255,255,255,0.01)] flex max-w-fit md:text-[12px] lg:text-[14px] xl:text-[16px] leading-[19.5px] max-h-[40px] rounded-[100px] border-[1.2px] border-[#FFF] lg:px-6 lg:py-[10px] md:px-4 py-2 text-nowrap backdrop-blur-sm'
                      key={el}
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
