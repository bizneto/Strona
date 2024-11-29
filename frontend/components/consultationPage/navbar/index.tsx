import Image from "next/image";
import logo from "@/public/svgs/biznetoLogoBlack.svg";
import HamburgerMenu from "@/components/financePage/header/headerHamburgerMenu";
import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import Link from "next/link";

export default async function Navbar() {
  return (
    <nav className='w-auto overflow-hidden mb-8  relative flex flex-col justify-between text-white'>
      <span className='pt-[25px] w-10/12 md:w-[89%] mx-auto flex justify-between'>
        <Image
          src={logo}
          alt='logo'
          className='w-[99.25px] md:w-[148px] h-[21.27px] md:h-[31.72px]'
        />
        <div className='md:hidden'>
          <HamburgerMenu color='black' />
        </div>
        <div className='hidden md:block'>
          <ButtonWithArrow arrowColor='black' color='#000' text='Kontakt' />
        </div>
      </span>
    </nav>
  );
}
