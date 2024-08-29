"use client";

import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import HeaderNavbarImage from "../headerNavbarImage";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useState } from "react";

export default function HeaderNavbarDesktop() {
  const CONTACT_BTN = "Kontakt";
  // const NAVBAR_ROUTES = ["O nas", "Oferta", "Klienci", "Produkty", "Kontakt"];
  // const LANGUAGES = ["EN", "PL"];
  // const { setIsDesktopMenuVisible, isDesktopMenuVisible } = useGlobalContext();
  // const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  // const [selectedLanguage, setSelectedLanguage] = useState("PL");

  // const handleMouseEnter = (
  //   event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  //   opt: string
  // ) => {
  //   const target = event.target as HTMLSpanElement;
  //   const width = target.offsetWidth;
  //   const left = target.offsetLeft;
  //   setUnderlineStyle({ width, left });
  //   setIsDesktopMenuVisible({
  //     isVisible: true,
  //     selectedOption: opt,
  //   });
  // };

  return (
    <>
      <HeaderNavbarImage />
      <div className='max-w-[400px] flex sm:gap-4 lg:gap-14 text-[16px] relative'>
        {/* {NAVBAR_ROUTES.slice(0, NAVBAR_ROUTES.length - 1).map((opt, index) => (
          <span
            onMouseEnter={(event) => handleMouseEnter(event, opt)}
            className={`${
              isDesktopMenuVisible.isVisible ? "text-black" : ""
            }  hover:cursor-pointer mx-auto`}
            key={index}
          >
            {opt}
          </span>
        ))}
        {isDesktopMenuVisible.isVisible && (
          <div
            className='absolute -bottom-[25px] left-0 bg-black transition-all duration-300'
            style={{
              width: `${underlineStyle.width}px`,
              transform: `translateX(${underlineStyle.left}px)`,
              height: "2px",
            }}
          />
        )} */}
      </div>
      <span className='flex items-center justify-between gap-3'>
        {/* {LANGUAGES.map((language) => (
          <div
            onClick={() => setSelectedLanguage(language)}
            className={`${
              !isDesktopMenuVisible.isVisible && "opacity-0"
            } hidden lg:block w-[21px] h-[21px] text-black hover:cursor-pointer`}
            key={language}
          >
            <p
              className={` ${
                selectedLanguage == language && "border-b-[2px] border-black"
              } font-medium text-[16px] leading-[22.4px]`}
            >
              {language}
            </p>
          </div>
        ))} */}
        <ButtonWithArrow
          text={CONTACT_BTN}
          color={"#FFF"}
          arrowColor={"white"}
        />
      </span>
    </>
  );
}
