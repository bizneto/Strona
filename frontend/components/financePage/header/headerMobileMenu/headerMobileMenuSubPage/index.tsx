import Image from "next/image";
import arrowLeft from "@/public/svgs/blackArrowLeft.svg";
import HamburgerMenu from "../../headerHamburgerMenu";
import { Dispatch, SetStateAction } from "react";
import { SubPageData, routeToArticleData } from "@/data/headerMenuData";
import HeaderMenuArticle from "../../headerMenuArticle";

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
}

export default function MobileMenuSubPage({
  subPageData,
  setSubPageData,
}: IMobileMenuSubPage) {
  const RETURN_TXT = "Cofnij";
  const optionsArray = SubPageData[subPageData.routeOption];

  function specialLabel(text: string, colors: string) {
    return (
      <p
        style={{ border: `1px solid ${colors}` }}
        className={`rounded-[50px] px-[10px] py-[5px] text-[12px] leading-[16.8px] font-medium text-center text-[${colors}]`}
      >
        {text}
      </p>
    );
  }

  function closeMenu() {
    setSubPageData({
      isVisible: false,
      routeOption: "",
    });
  }

  return (
    <div className='w-screen h-[100dvh] overflow-scroll bg-white z-20 flex flex-col'>
      <header>
        <span className='w-10/12 mx-auto flex justify-between items-center'>
          <span
            onClick={() => closeMenu()}
            className='h-[69px] flex gap-2 items-center  text-center'
          >
            <Image src={arrowLeft} className='size-[15px]' alt='return arrow' />
            <p className='text-[16px] leading-[22.4px] font-medium'>
              {RETURN_TXT}
            </p>
          </span>
          <span onClick={() => closeMenu()}>
            <HamburgerMenu color='white' />
          </span>
        </span>
      </header>
      <main className='w-full border-y-[1px] border-y-[#CFCFCF] '>
        <span className='flex flex-col gap-4 w-10/12 mx-auto items-start pt-2 pb-8'>
          {optionsArray.map(({ title, subtext }) => (
            <div key={title} className='px-6 py-3 flex flex-col gap-2'>
              <p className='font-medium flex gap-4 items-center text-[16px] leading-[22.4px]'>
                {title}
                {title === "Kariera" && specialLabel("Rekrutujemy", "#17993B")}
                {title === "Bizneto Prime™" &&
                  specialLabel("Wkrótce", "#FF3C50")}
              </p>
              <p className='text-[#505050] text-[14px] leading-[19.6px] font-normal'>
                {subtext}
              </p>
            </div>
          ))}
        </span>
      </main>
      <HeaderMenuArticle option={subPageData.routeOption} />
    </div>
  );
}
