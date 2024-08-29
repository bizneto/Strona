import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";
import Image from "next/image";
import backgroundMobile from "@/public/images/biznetoDigitalBackgroundMobile.png";
import backgroundDesktop from "@/public/images/biznetoDigitalBackgroundDesktop.jpg";
import Carousel from "./carousel";
import Navbar from "../digitalPageNavbar";

export default async function Header() {
  const isMobile = await SSRMobileDetection();
  const HEADER_TOP = `Web & Branding`;
  const HEADER_BOTTOM = `Design Studio`;

  return (
    <header className='mb-8 md:mb-16 w-full h-[564px]  md:h-[841px] relative'>
      <Image
        priority
        src={isMobile ? backgroundMobile : backgroundDesktop}
        className='absolute w-full h-full object-cover'
        alt='background image'
      />
      <div className='h-[85%] relative flex flex-col justify-between md:justify-normal pb-4 md:pb-0'>
        <Navbar UIColor='light' />
        <div className='mx-auto w-[91%] md:w-[89%] 2xl:w-[1440px]'>
          <span className='absolute bottom-5 md:bottom-44  text-white lg:text-[60px] md:leading-[50px] xl:text-[96px] lg:leading-[86.4px] text-[36px] leading-[43.2px] max-w-[337px] md:max-w-[873px] max-h-[86px] md:h-[90px] lg:max-h-[182px]'>
            <h1>
              {HEADER_TOP} <br /> {HEADER_BOTTOM}
            </h1>
          </span>
          <div className='hidden md:block' />
        </div>
      </div>
      <span className='md:max-w-[89%]'>
        <Carousel />
      </span>
    </header>
  );
}
