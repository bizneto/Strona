import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import HamburgerMenu from "@/components/financePage/header/headerHamburgerMenu";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";
import Image from "next/image";
import logoDesktop from "@/public/svgs/biznetoLogoBlack.svg";
import logo from "@/public/svgs/biznetoLogoMobileDark.svg";
import Link from "next/link";

export default async function Navbar() {
  const isMobile = await SSRMobileDetection();

  return (
    <nav className='h-fit  my-8  flex flex-col justify-between w-10/12 md:w-[89%] 2xl:w-[1440px] mx-auto'>
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
    </nav>
  );
}
