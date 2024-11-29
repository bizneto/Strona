import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import HamburgerMenu from "@/components/financePage/header/headerHamburgerMenu";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";
import Image from "next/image";
import logoDesktop from "@/public/svgs/biznetoLogoBlack.svg";
import logo from "@/public/svgs/biznetoLogoMobileDark.svg";

export default async function Header() {
  const isMobile = await SSRMobileDetection();
  const HEADER = "Kompleksowa obsługa Twojej firmy.";

  return (
    <header className='h-[260px] md:h-[472px] mt-8 flex flex-col justify-between w-10/12 md:w-[89%] 2xl:w-[1440px] mx-auto'>
      <div className='flex justify-between w-full'>
        <Image quality={50} src={isMobile ? logo : logoDesktop} alt='logo' />
        {/* <span className='block md:hidden'>
          <HamburgerMenu color='black' />
        </span>
        <span className='hidden md:block'>
          <ButtonWithArrow
            arrowColor='black'
            color='#000'
            text='Blog'
            altHref='/blog'
            altHeight={50}
          />
        </span> */}
      </div>
      <div className='flex flex-col justify-around  max-w-[347px]  md:max-w-[803px] h-[192px] md:mb-20 lg:mb-14'>
        <h1 className='font-medium leading-[39.01px] text-[32px] md:text-[72px] md:leading-[87.77px]'>
          {HEADER}
        </h1>
      </div>
    </header>
  );
}
