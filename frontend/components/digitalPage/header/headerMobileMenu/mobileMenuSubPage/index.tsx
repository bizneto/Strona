import HamburgerMenu from "@/components/financePage/header/headerHamburgerMenu";
import MenuArticle from "../../menuArticle";
import { DigitalSubPageData } from "@/data/DigitalMenuData";
import arrowLeft from "@/public/svgs/blackArrowLeft.svg";
import Image from "next/image";
import { stringToRoute } from "@/shared";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

interface IMobileMenuSubPage {
  subPageData: {
    isVisible: boolean;
    routeOption: string;
  };
  setSubPageData: Dispatch<
    SetStateAction<{
      isVisible: boolean;
      routeOption: string;
    }>
  >;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default function DigitalMobileMenuSubPage({
  subPageData,
  setSubPageData,
  setIsMobileMenuOpen,
}: IMobileMenuSubPage) {
  const RETURN_TXT = "Cofnij";
  const optionsArray = DigitalSubPageData[subPageData.routeOption];

  function goBack() {
    setSubPageData({
      isVisible: false,
      routeOption: "",
    });
  }

  function closeMenu() {
    setSubPageData({
      isVisible: false,
      routeOption: "",
    });
    setIsMobileMenuOpen(false);
  }

  return (
    <div className='w-screen h-[100dvh] overflow-scroll bg-white z-20 flex flex-col'>
      <header>
        <span className='w-10/12 mx-auto flex justify-between items-center'>
          <span
            onClick={() => goBack()}
            className='h-[69px] flex gap-2 items-center  text-center'
          >
            <Image src={arrowLeft} className='size-[15px]' alt='return arrow' />
            <p className='text-[16px] leading-[22.4px] font-medium'>
              {RETURN_TXT}
            </p>
          </span>
          <span onClick={() => goBack()}>
            <HamburgerMenu color='white' />
          </span>
        </span>
      </header>
      <main className='w-full border-y-[1px] border-y-[#CFCFCF] '>
        <span className='flex flex-col gap-4 w-10/12 mx-auto items-start pt-2 pb-8'>
          {optionsArray.map(({ title, subtext, icon }) => (
            <Link
              target='_top'
              onClick={() => closeMenu()}
              href={`/digital/${stringToRoute(title)}`}
              key={title}
              className='flex'
            >
              <Image src={icon} alt='icon' />
              <div className='px-6 py-3 flex flex-col gap-2'>
                <p className='font-medium flex gap-4 items-center text-[16px] leading-[22.4px]'>
                  {title}
                </p>
                <p className='text-[#505050] text-[14px] leading-[19.6px] font-normal'>
                  {subtext}
                </p>
              </div>
            </Link>
          ))}
        </span>
      </main>
      <span onClick={() => closeMenu()}>
        <MenuArticle />
      </span>
    </div>
  );
}
