"use client";

import useGlobalContext from "@/hooks/useGlobalContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import arrowRight from "@/public/svgs/smallerRightArrow.svg";
import dynamic from "next/dynamic";
import Navbar from "@/components/digitalPage/digitalPageNavbar";
import { stringToRoute } from "@/shared";
import { useRouter } from "next/navigation";

export default function DigitalMobileMenu() {
  const { isMobile, isMobileMenuOpen, setIsMobileMenuOpen } =
    useGlobalContext();
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

  if (!isMobile) return null;

  const NAVBAR_ROUTES = [
    {
      route: "/digital",
      label: "Home",
    },
    {
      route: "",
      label: "Oferta",
    },
    {
      route: "/digital/realizacje",
      label: "Realizacje",
    },
  ];
  const CONTACT_BTTN = "Kontakt";
  const MobileMenuSubPage = dynamic(() => import("./mobileMenuSubPage"));
  function optionDiv(label: string, route: string) {
    return (
      <div
        key={label}
        onClick={
          route === ""
            ? () => setSubPageData({ isVisible: true, routeOption: label })
            : () => setIsMobileMenuOpen(false)
        }
        className='w-screen border-y-[#CFCFCF] border-[1px]'
      >
        <span className='w-[89%] mx-auto h-[69px] flex justify-between items-center'>
          <p className='text-[18px] leading-[25.2px]'>{label}</p>
          <span>
            <Image src={arrowRight} alt='arrow right' />
          </span>
        </span>
      </div>
    );
  }

  return (
    <>
      {subPageData.isVisible && (
        <MobileMenuSubPage
          setSubPageData={setSubPageData}
          subPageData={subPageData}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
      <div
        className={`absolute overflow-hidden transition-all duration-700 w-screen z-[999] left-0 bg-white ${
          isMobileMenuOpen
            ? "animate-[slideOutFromTop_0.7s_linear] h-[100dvh]"
            : "animate-[slideToTop_0.7s_linear] h-0"
        }`}
      >
        <div className='relative font-medium h-[100dvh] flex flex-col items-start justify-between'>
          <div>
            <Navbar UIColor='dark' />
            <span>
              {NAVBAR_ROUTES.map(({ route, label }) => (
                <>
                  {route === "" ? (
                    optionDiv(label, route)
                  ) : (
                    <Link href={stringToRoute(route)}>
                      {optionDiv(label, route)}
                    </Link>
                  )}
                </>
              ))}
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                href={"/digital/kontakt"}
                className='w-[89%] h-[50px] mx-auto mt-8 rounded-[100px] py-[10px] gap-2 px-6 flex justify-center items-center border-[1.2px] text-white bg-[#006EEF]'
              >
                {CONTACT_BTTN}
                <Image
                  src={arrowRight}
                  className='size-[12.5px] invert'
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
