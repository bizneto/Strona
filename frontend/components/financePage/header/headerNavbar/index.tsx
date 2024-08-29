"use client";

import HeaderNavbarMobile from "./headerNavbarMobile";
import HeaderNavbarDesktop from "./headerNavbarDesktop";
import useGlobalContext from "@/hooks/useGlobalContext";
export default function HeaderNavbar() {
  const { isDesktopMenuVisible } = useGlobalContext();

  return (
    <div
      className={`${
        isDesktopMenuVisible.isVisible
          ? "bg-white border-b-[#CFCFCF] relative"
          : "border-b-transparent"
      } w-full pt-8 pb-4 transition-all duration-500  border-b-[1px] `}
    >
      <div className='w-10/12 md:hidden  flex mx-auto justify-between items-center '>
        <HeaderNavbarMobile />
      </div>
      <div className='hidden md:flex md:w-[89%] 2xl:w-[1440px] mx-auto justify-between items-center'>
        <HeaderNavbarDesktop />
      </div>
    </div>
  );
}
