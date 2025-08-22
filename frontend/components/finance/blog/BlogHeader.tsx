import Image from "next/image";
import headerBackground from "@/public/images/headerDesktopBackground.webp";
import headerBackgroundMobile from "@/public/images/headerMobileBackground.png";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";
import HeaderNavbar from "@/components/financePage/header/headerNavbar";
import HeaderDesktopMenu from "@/components/financePage/header/headerDesktopMenu";
import BlogCategoriesCarousel from "./BlogCategoriesCarousel";

export default async function BlogHeader() {
  const isMobile = await SSRMobileDetection();
  
  return (
    <header
      id='blog-header'
      className={`w-full h-[65vh] md:h-[88.5vh] ${
        !isMobile && "bg-gradient1 "
      } relative flex flex-col overflow-hidden justify-between items-baseline text-white`}
    >
      {/* Background Image */}
      <Image
        priority
        id='blog-header-background'
        src={isMobile ? headerBackgroundMobile : headerBackground}
        alt='blog header background image'
        className={`absolute h-full w-full object-cover z-[-10]`}
      />
      
      {/* Navigation */}
      <span className='w-full'>
        <HeaderNavbar />
        <HeaderDesktopMenu />
      </span>
      
      {/* Header Content */}
      <div className={`w-full flex flex-col mb-[3%]`}>
        <div className={`mx-auto w-10/12 md:w-[89%] 2xl:w-[1440px] flex flex-col`}>
          <div className={`font-medium text-[32px] min-[420px]:text-[36px] text-left w-full lg:w-4/5 xl:w-3/5 2xl:w-4/5 md:mb-8`}>
            <h1 className={`md:text-[64px] md:leading-[78.02px] md:mb-10`}>
              Blog Finansowy
            </h1>
            <h6 className={`text-[18px] mt-8 mb-4 md:text-[24px] md:leading-[26.4px] md:mt-0 md:mb-0`}>
              Najnowsze artykuły o księgowości, finansach i prowadzeniu biznesu
            </h6>
          </div>
        </div>

        {/* Categories Buttons - positioned like on finance page */}
        <BlogCategoriesCarousel />
      </div>
    </header>
  );
}
