"use client";

import useGlobalContext from "@/hooks/useGlobalContext";
import HeaderMenuArticle from "../headerMenuArticle";
import { SubPageData } from "@/data/headerMenuData";

export default function HeaderDesktopMenu() {
  const { isDesktopMenuVisible, setIsDesktopMenuVisible } = useGlobalContext();
  const optionsArray = SubPageData[isDesktopMenuVisible.selectedOption];

  function specialLabel(text: string, colors: string) {
    return (
      <p
        style={{ border: `1px solid ${colors}` }}
        className={`rounded-[50px] px-[10px] py-[5px] text-[12px] leading-[16.8px] max-w-[100px] max-h-[27px] font-medium text-center text-[${colors}]`}
      >
        {text}
      </p>
    );
  }

  if (isDesktopMenuVisible.isVisible)
    return (
      <div
        onMouseLeave={() =>
          setIsDesktopMenuVisible({ isVisible: false, selectedOption: "" })
        }
        className='bg-white w-screen   pb-4 transition-all'
      >
        <span className='mx-auto flex justify-between text-black h-[395px] w-full 2xl:max-w-[1440px] '>
          <div className='min-w-[450px] flex justify-end items-center border-r-[1px] border-r-[#CFCFCF] pr-6 '>
            <HeaderMenuArticle option={isDesktopMenuVisible.selectedOption} />
          </div>
          <div className='w-full  flex pt-14 justify-center'>
            <span className='max-w-[850px] h-full lg:max-h-[215px] flex flex-wrap gap-6 items-center overflow-y-scroll lg:overflow-y-visible '>
              {optionsArray.map(({ title, subtext }) => (
                <div
                  key={title}
                  className='rounded-[10px] max-w-[264px] px-6 py-3 gap-2 flex flex-col hover:bg-[#CFCFCF] hover:bg-opacity-15  hover:cursor-pointer relative'
                >
                  <span className='font-medium gap-2 flex items-center text-[16px] leading-[22.4px]'>
                    {title}
                    {title === "Kariera" &&
                      specialLabel("Rekrutujemy", "#17993B")}
                    {title === "Bizneto Prime™" &&
                      specialLabel("Wkrótce", "#FF3C50")}
                  </span>
                  <p className='text-[#505050] text-[14px] leading-[19.6px] font-normal'>
                    {subtext}
                  </p>
                </div>
              ))}
            </span>
          </div>
        </span>
      </div>
    );
}
