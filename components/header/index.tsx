import HeaderCarousel from "./headerCarousel";
import HeaderNavbar from "./headerNavbar";
import HeaderImage from "./headerImage";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";

export default async function Header() {
  const isMobile = await SSRMobileDetection();
  const MAIN_TEXT = "Dbamy o finanse Twojej firmy.";
  const SUB_TEXT = "Wszystko w jednym miejscu";
  return (
    <header
      id='header'
      className={`w-full h-[65vh] md:h-[88.5vh] ${
        !isMobile && "bg-gradient1"
      }  relative flex flex-col overflow-hidden justify-between  items-baseline  text-white `}
    >
      <HeaderImage />
      <HeaderNavbar />
      <div className={`w-full flex flex-col mb-[3%]`}>
        <div
          className={`mx-auto w-10/12 md:w-[89%] 2xl:w-[1440px]  flex flex-col`}
        >
          <div
            className={`font-medium  text-[32px] min-[420px]:text-[36px] text-left w-full lg:w-4/5 xl:w-3/5 2xl:w-4/5 md:mb-8`}
          >
            <h1 className={`md:text-[64px] md:leading-[78.02px] md:mb-10`}>
              {MAIN_TEXT}
            </h1>
            <h6
              className={`text-[18px] mt-8 mb-4 md:text-[24px] md:leading-[26.4px] md:mt-0 md:mb-0`}
            >
              {SUB_TEXT}
            </h6>
          </div>
        </div>
        <HeaderCarousel />
      </div>
    </header>
  );
}
