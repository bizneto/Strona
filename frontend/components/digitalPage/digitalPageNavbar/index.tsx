"use client";

import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import HamburgerMenu from "@/components/financePage/header/headerHamburgerMenu";
import logoLightDesktop from "@/public/svgs/biznetoDigitalLogoDesktop.svg";
import logoLight from "@/public/svgs/biznetoDigitalLogoMobile.svg";
import Image, { StaticImageData } from "next/image";
import useGlobalContext from "@/hooks/useGlobalContext";
import logoDark from "@/public/svgs/biznetoDigitalLogoMobileDark.svg";
import logoDarkDesktop from "@/public/svgs/biznetoDigitalLogoDesktopDark.svg";
import Link from "next/link";
import { useState } from "react";
import DesktopMenu from "@/components/digitalPage/header/desktopMenu";

interface INavbar {
  UIColor: "dark" | "light";
  params?: number;
}

const logos: Record<
  string,
  { mobileLogo: StaticImageData; desktopLogo: StaticImageData }
> = {
  dark: {
    mobileLogo: logoDark,
    desktopLogo: logoDarkDesktop,
  },
  light: {
    mobileLogo: logoLight,
    desktopLogo: logoLightDesktop,
  },
};

export default function Navbar({ UIColor, params }: INavbar) {
  const {
    isMobile,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    setIsDesktopMenuVisible,
    isDesktopMenuVisible,
  } = useGlobalContext();
  const NAVBAR_ROUTES = ["Oferta", "Realizacje"];
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });

  const hamburgerMenuColor = isMobileMenuOpen
    ? UIColor === "dark"
      ? "white"
      : "black"
    : UIColor === "dark"
    ? "black"
    : "white";

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    opt: string
  ) => {
    const target = event.target as HTMLSpanElement;
    const width = target.offsetWidth;
    const left = target.offsetLeft;
    setUnderlineStyle({ width, left });
    if (opt === "Oferta") {
      setIsDesktopMenuVisible({
        isVisible: true,
        selectedOption: opt,
      });
    } else {
      setIsDesktopMenuVisible({
        isVisible: false,
        selectedOption: opt,
      });
    }
  };

  return (
    <nav className='flex flex-col w-full'>
      <div
        className={`w-full ${
          isDesktopMenuVisible.isVisible &&
          "bg-white border-b-[1.2px] transition-all duration-700 border-b-[#CFCFCF] group"
        }`}
      >
        <div className='pt-8 pb-4 mx-auto w-[91%] md:w-[89%] 2xl:w-[1440px] z-20 flex justify-between'>
          <Link href='/digital'>
            <Image
              onClick={() => setIsMobileMenuOpen(false)}
              onMouseEnter={() =>
                setIsDesktopMenuVisible({
                  isVisible: false,
                  selectedOption: "Oferta",
                })
              }
              src={
                params && UIColor === "dark"
                  ? logos["dark"].desktopLogo
                  : isMobile
                  ? isMobileMenuOpen
                    ? logos["dark"].mobileLogo
                    : UIColor === "dark"
                    ? logos["dark"].mobileLogo
                    : logos["light"].mobileLogo
                  : isDesktopMenuVisible.isVisible
                  ? logos["dark"].desktopLogo
                  : UIColor === "dark"
                  ? logos["dark"].desktopLogo
                  : logos["light"].desktopLogo
              }
              alt='logo'
            />
          </Link>
          <span className='block md:hidden'></span>
          {isMobile && <HamburgerMenu color={hamburgerMenuColor} />}
          <div className='relative hidden md:flex md:items-center'>
            {NAVBAR_ROUTES.map((el) =>
              el === "Oferta" ? (
                <span
                  onMouseEnter={(event) => handleMouseEnter(event, el)}
                  className={`${
                    params ||
                    UIColor === "dark" ||
                    isDesktopMenuVisible.isVisible
                      ? "text-black"
                      : "text-white"
                  } cursor-pointer w-[122px] h-[21px] text-[16px] leading-[22.4px] text-center`}
                  key={el}
                >
                  {el}
                </span>
              ) : (
                <Link
                  href={`/digital/${el.toLowerCase()}`}
                  onMouseEnter={(event) => handleMouseEnter(event, el)}
                  className={`${
                    params ||
                    UIColor === "dark" ||
                    isDesktopMenuVisible.isVisible
                      ? "text-black"
                      : "text-white"
                  } cursor-pointer w-[122px] h-[21px] text-[16px] leading-[22.4px] text-center`}
                  key={el}
                >
                  {el}
                </Link>
              )
            )}
            {isDesktopMenuVisible.isVisible && (
              <div
                className='absolute -bottom-[15px] left-0 bg-black transition-all duration-300'
                style={{
                  width: `${underlineStyle.width}px`,
                  transform: `translateX(${underlineStyle.left}px)`,
                  height: "2px",
                }}
              />
            )}
          </div>
          <span className='hidden md:block'>
            <ButtonWithArrow
              altHref='/digital/kontakt'
              arrowColor={
                UIColor === "dark" || params || isDesktopMenuVisible.isVisible
                  ? "black"
                  : "white"
              }
              color={
                UIColor === "dark" || params || isDesktopMenuVisible.isVisible
                  ? "black"
                  : "white"
              }
              text='Kontakt'
              altHeight={50}
            />
          </span>
        </div>
      </div>
      {!isMobile && <DesktopMenu />}
    </nav>
  );
}
