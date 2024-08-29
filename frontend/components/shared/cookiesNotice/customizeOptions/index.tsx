"use client";

import Image from "next/image";
import xIcon from "@/public/svgs/xIcon.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { acceptCookies, pageDisplayData, TPage } from "..";
import "./index.css";

interface ICustomizeOptions {
  setIsInitialNoticeVisible: Dispatch<SetStateAction<boolean>>;
  setShowMoreOptions: Dispatch<SetStateAction<boolean>>;
  setAreCookiesAccepted: Dispatch<SetStateAction<boolean>>;
  displayInfo: pageDisplayData;
  page: TPage;
}

export default function CustomizeOptions({
  setIsInitialNoticeVisible,
  setShowMoreOptions,
  setAreCookiesAccepted,
  displayInfo,
  page,
}: ICustomizeOptions) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const PRIVACY_PREFERENCE = "Preferencje prywatności";
  const REQUIRED = "Wymagane";
  const SELECTABLE_OPTIONS = [
    "Niezbędne",
    "Marketingowe",
    "Analityczne",
    "Funkcjonalne",
  ];

  const BUTTONS_OPTIONS = [
    { label: "Odrzuć wszystkie", color: "#FFFFFF" },
    { label: "Zaakceptuj wszystkie", color: displayInfo.main },
    { label: "Zaakceptuj wybrane", color: "#000000" },
  ];

  function returnToInitalView() {
    setShowMoreOptions(false);
    setIsInitialNoticeVisible(true);
  }

  async function closeAll() {
    await acceptCookies(page);
    setShowMoreOptions(false);
    setIsInitialNoticeVisible(false);
    setAreCookiesAccepted(true);
  }

  return (
    <div
      style={{ borderRadius: displayInfo.borderRadius }}
      className={`transition-all duration-300 bg-white h-[604px] md:w-[440px] md:h-[628px] fixed bottom-4 w-[95%] left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 p-8 flex flex-col gap-12 drop-shadow-lg`}
    >
      <div className='flex justify-between w-full'>
        <p className='w-[70%] text-[36px] leading-[36px] md:text-[48px] md:leading-[48px] font-medium'>
          {PRIVACY_PREFERENCE}
        </p>
        <Image
          className='cursor-pointer'
          onClick={() => returnToInitalView()}
          src={xIcon}
          alt='x icon'
        />
      </div>
      <div>
        {SELECTABLE_OPTIONS.map((option, index) => (
          <label
            className='flex items-center justify-between h-[54px] border-b border-b-[#909090] text-[18px] leading-[21.6px] font-medium'
            key={option}
          >
            {option}
            {index !== 0 ? (
              <input
                className={`size-6 ${page === "finance" && "custom-checkbox"}`}
                type='checkbox'
              ></input>
            ) : (
              <p>{REQUIRED}</p>
            )}
          </label>
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        {BUTTONS_OPTIONS.map(({ label, color }, index) => (
          <button
            onClick={
              index === 0 ? () => returnToInitalView() : () => closeAll()
            }
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`${
              color === "#FFFFFF"
                ? "text-black border-black"
                : "text-white border-white"
            }
            ${index !== 1 && "hover:invert"}
            font-medium border-[1px] w-full h-[50px] rounded-[100px] transition-all duration-300`}
            style={{
              ...(hoveredIndex === index && index === 1
                ? { backgroundColor: displayInfo.hovered }
                : { backgroundColor: color }),
            }}
            type='button'
            key={label}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
