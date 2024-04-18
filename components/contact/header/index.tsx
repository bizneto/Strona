import Image from "next/image";
import mobileHeader from "@/public/images/contactMobileHeader.png";
import desktopHeaderBackground from "@/public/images/contactDesktopBackground.webp";
import HeaderNavbar from "@/components/header/headerNavbar";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";

export default async function Header() {
  const isMobile = await SSRMobileDetection();
  const BUTTON_TEXT = "Kontakt";
  const HEADER_TEXT = "W czym możemy Ci pomóc?";

  return (
    <div className='bg-gradient1 w-auto h-[50vh] md:h-[560px] overflow-hidden  2xl:h-[800px] mb-8  relative flex flex-col justify-between text-white'>
      <Image
        priority
        src={isMobile ? mobileHeader : desktopHeaderBackground}
        alt='background header'
        className='w-full h-full md:w-screen   md:h-[700px] 2xl:h-[1200px] object-cover absolute top-0 left-0  -z-10'
      />
      <HeaderNavbar />
      <div className='w-10/12 md:w-[89%] 2xl:w-[1440px] mx-auto mb-2'>
        <div className='w-[355px] md:w-[633px] flex font-medium flex-col items-start  h-[152px] md:h-[210px] md:mb-[4rem]  gap-[14px] '>
          <div className='w-[113px] h-[40px] text-[16px] leading-[19.5px] text-center border backdrop-blur-sm  border-white  rounded-[100px] px-[24px] py-[10px] '>
            {BUTTON_TEXT}
          </div>
          <span className='sm:w-screen  lg:w-[90%]'>
            {isMobile ? (
              <h3 className='text-[36px] leading-[43.88px]'> {HEADER_TEXT}</h3>
            ) : (
              <h1 className='sm:text-[32px] md:text-[48px] lg:text-[64px] leading-[78.02px]'>
                {HEADER_TEXT}
              </h1>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
