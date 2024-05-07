"use client";

import useGlobalContext from "@/hooks/useGlobalContext";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import arrowRight from "@/public/svgs/smallerRightArrow.svg";
import HeaderNavbarMobile from "../headerNavbar/headerNavbarMobile";
import dynamic from "next/dynamic";
import HeaderNavbar from "../headerNavbar";

export interface IMobileMenu {
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: Dispatch<SetStateAction<boolean>>;
  data?: string[];
}

export default function MobileMenu() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobalContext();
  const [selectedLanguage, setSelectedLanguage] = useState("PL");
  const [subPageData, setSubPageData] = useState({
    isVisible: false,
    routeOption: "",
  });

  useEffect(() => {
    document.documentElement.style.overflowY = isMobileMenuOpen
      ? "hidden"
      : "auto";

    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, [isMobileMenuOpen]);

  const NAVBAR_ROUTES = ["O nas", "Oferta", "Klienci", "Produkty"];
  const LANGUAGES = ["PL", "EN"];
  const CONTACT_BTTN = "Kontakt";

  const MobileMenuSubPage = dynamic(() => import("./headerMobileMenuSubPage"));

  return (
    <>
      {subPageData.isVisible && (
        <MobileMenuSubPage
          setSubPageData={setSubPageData}
          subPageData={subPageData}
        />
      )}
      <div
        className={`absolute overflow-hidden transition-all duration-700 w-screen z-10 left-0 bg-white ${
          isMobileMenuOpen
            ? "animate-[slideOutFromTop_0.7s_linear] h-full"
            : "animate-[slideToTop_0.7s_linear] h-0"
        }`}
      >
        <div className='relative font-medium h-full flex flex-col items-start '>
          <span className='w-full mb-4  mx-auto flex justify-between items-center h-[69px]'>
            <HeaderNavbar />
          </span>
          {NAVBAR_ROUTES?.map((route) => (
            <span
              onClick={() =>
                setSubPageData({ isVisible: true, routeOption: route })
              }
              key={route}
              className='w-screen border-y-[#CFCFCF]  border-[1px] '
            >
              <span className='w-10/12 mx-auto  h-[69px] flex justify-between items-center'>
                <p className='text-[18px] leading-[25.2px]'>{route}</p>
                <Link href={"/kontakt"}>
                  <Image src={arrowRight} alt='arrow right' />
                </Link>
              </span>
            </span>
          ))}
          <div className='absolute w-full bottom-8'>
            <span className='w-10/12 mx-auto flex flex-col justify-start font-medium gap-4'>
              <span className='flex gap-2'>
                {LANGUAGES.reverse().map((language) => (
                  <div key={language} className='relative'>
                    <button
                      key={language}
                      className='text-[16px] leading-[22.4px]'
                      onClick={() => setSelectedLanguage(language)}
                    >
                      {language}
                    </button>
                    <div
                      className={`${
                        selectedLanguage === language
                          ? "transition-transform duration-1000 bg-black "
                          : ""
                      } absolute bottom-0 left-0  h-[2px] w-full `}
                    />
                  </div>
                ))}
              </span>
              <Link
                href={"/kontakt"}
                onClick={() => setIsMobileMenuOpen(false)}
                className=' rounded-[100px] py-[10px] gap-2 px-6 flex justify-center items-center  border-[1.2px] border-black'
              >
                {CONTACT_BTTN}
                <Image
                  src={arrowRight}
                  className='size-[12.5px]'
                  alt='arrow right'
                />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
