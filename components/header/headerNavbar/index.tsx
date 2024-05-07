"use client";

import HeaderNavbarMobile from "./headerNavbarMobile";
import HeaderNavbarDesktop from "./headerNavbarDesktop";
import useGlobalContext from "@/hooks/useGlobalContext";
export default function HeaderNavbar() {
  const { isDesktopMenuVisible } = useGlobalContext();

  return (
    <div
      className={`${
        isDesktopMenuVisible.isVisible ?
        "bg-white border-b-[1px] border-b-[#CFCFCF] relative pt-8 pb-4" : "py-8"
      } w-full`}
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
