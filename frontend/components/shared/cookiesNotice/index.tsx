"use client";

import { useState } from "react";
import { setClientID } from "@/utils/cookies";
import { generateValidID } from "@/shared";
import CustomizeOptions from "./customizeOptions";
import Link from "next/link";

export type TPage = "digital" | "finance";

interface ICookiesNotice {
  clientID: string | null;
  page: TPage;
}
export interface pageDisplayData {
  main: string;
  hovered: string;
  borderRadius: string;
}

interface displayData {
  digital: pageDisplayData;
  finance: pageDisplayData;
}

const displayData: displayData = {
  digital: {
    main: "#006EEF",
    hovered: "#005AC3",
    borderRadius: "8px",
  },
  finance: { main: "#FF3C50", hovered: "#BD1728", borderRadius: "16px" },
};

export async function acceptCookies(page: TPage) {
  await setClientID(generateValidID(), page);
}

export default function CookiesNotice({ clientID, page }: ICookiesNotice) {
  const [isInitialNoticeVisible, setIsInitialNoticeVisible] = useState(true);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (clientID || areCookiesAccepted) return null;
  if (!isInitialNoticeVisible && !showMoreOptions) return null;

  const displayInfo = displayData[page];
  const INFO_TEXT = (
    <p className={`text-[14px] leading-[18.2px]`}>
      Ta strona używa plików cookies, korzystając z niej wyrażasz zgodę na
      przetwarzanie przez nas plików cookies. W każdej chwili możesz zmienić
      ustawienia. Zapoznaj się z naszą
      <Link
        className=' px-1 underline'
        target='_blank'
        href='/pdf/PolitykaPrywatnosci.pdf'
      >
        Polityką prywatności,
      </Link>
      aby uzyskać więcej informacji.
    </p>
  );

  const BUTTONS_DATA = [{ text: "Zaakceptuj" }, { text: "Dostosuj" }];

  async function handleButtonClick(text: string) {
    if (text === "Zaakceptuj") {
      setIsInitialNoticeVisible(false);
      await acceptCookies(page);
      setAreCookiesAccepted(true);
    } else if (text === "Dostosuj") {
      setIsInitialNoticeVisible(false);
      setShowMoreOptions(true);
    }
  }

  return (
    <>
      <section
        style={{ borderRadius: displayInfo.borderRadius }}
        className={`${
          isInitialNoticeVisible ? "flex" : "hidden"
        } fixed bottom-4 h-[254px] bg-white z-50 mx-auto w-[95%] md:w-[440px] sm:h-[200px] md:h-[236px] left-1/2  md:left-8 -translate-x-1/2 md:-translate-x-0 p-8 flex-col gap-6 sm:gap-8  drop-shadow-lg transition-[width] duration-300`}
      >
        <span className='transition-all duration-300 w-full h-full md:h-[90px] md:max-w-[376px] mx-auto'>
          {INFO_TEXT}
        </span>
        <span
          className={`transition-all duration-300 w-full mx-auto flex h-[50px] gap-2`}
        >
          {BUTTONS_DATA.map(({ text }, index) => (
            <button
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={index}
              type='button'
              className={`text-white w-fit rounded-full py-[14px] px-8 text-center transition-all duration-300 ${
                index === 1 &&
                "!bg-black hover:invert hover:border-white border-[1px]"
              }`}
              style={{
                ...(hoveredIndex === index && index === 0
                  ? { backgroundColor: displayInfo.hovered }
                  : { backgroundColor: displayInfo.main }),
              }}
              onClick={() => handleButtonClick(text)}
            >
              {text}
            </button>
          ))}
        </span>
      </section>
      {showMoreOptions && (
        <CustomizeOptions
          setShowMoreOptions={setShowMoreOptions}
          setIsInitialNoticeVisible={setIsInitialNoticeVisible}
          setAreCookiesAccepted={setAreCookiesAccepted}
          displayInfo={displayInfo}
          page={page}
        />
      )}
    </>
  );
}
