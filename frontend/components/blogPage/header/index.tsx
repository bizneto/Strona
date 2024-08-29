import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import HamburgerMenu from "@/components/financePage/header/headerHamburgerMenu";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";
import Image from "next/image";
import logoDesktop from "@/public/svgs/biznetoLogoBlack.svg";
import logo from "@/public/svgs/biznetoLogoMobileDark.svg";
import Link from "next/link";

export default async function Header() {
  const isMobile = await SSRMobileDetection();
  const HEADER = "Blog";
  const SUBTEXT = "Wiedza i wiadomości ze świata biznesu.";

  return (
    <header className='h-[260px] md:h-[369px] mt-8 mb-4 flex flex-col justify-between w-10/12 md:w-[89%] 2xl:w-[1440px] mx-auto'>
      <div className='flex justify-between w-full'>
        <Link href={"/"}>
          <Image quality={50} src={isMobile ? logo : logoDesktop} alt='logo' />
        </Link>
        <span className='block md:hidden'>
          <HamburgerMenu color='black' />
        </span>
        <span className='hidden md:block'>
          <ButtonWithArrow
            arrowColor='black'
            color='#000'
            text='Blog'
            altHref='/blog'
          />
        </span>
      </div>
      <div className='font-medium flex flex-col md:flex-row justify-around  max-w-[265px]  md:max-w-[633px] h-[134px] md:gap-32'>
        <h1 className='leading-[43.88px] text-[36px] md:text-[64px] md:leading-[78.02px]'>
          {HEADER}
        </h1>
        <p className='text-[24px] leading-[28.8px] md:text-[32px] md:leading-[39px]'>
          {SUBTEXT}
        </p>
      </div>
    </header>
  );
}
