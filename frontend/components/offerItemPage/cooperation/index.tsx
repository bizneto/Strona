"use client";

import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import useSectionVisibility from "@/utils/intersectionObserver";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "@/components/shared/sectionTitle";

export default function Cooperation() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isSectionVisible = useSectionVisibility(sectionRef, 0.8);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const SECTION_TITLE = "Współpraca";
  const TIME_FOR_YOUR_IDEA = "Czas na Twój pomysł!?";
  const CONTACT = "Skontaktuj się";

  useEffect(() => {
    if (isSectionVisible) {
      setHasBeenSeen(true);
    }
  }, [isSectionVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rect.top >= windowHeight) {
          setHasBeenSeen(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-black relative w-screen py-8 md:py-24 duration-700 transition-all z-0 ease-in overflow-hidden`}
    >
      <div
        className={`${
          isSectionVisible || hasBeenSeen ? "w-[200vw] h-[200vw]" : "w-0 h-0"
        } z-10 bg-[#006EEF] absolute top-1/2 left-1/2 -translate-y-1/2 transition-all duration-700 -translate-x-1/2 rounded-full`}
      ></div>

      <div className='font-medium w-[91%] md:w-[89%] 2xl:w-[1440px] mx-auto flex flex-col justify-between gap-8 relative z-20'>
        <SectionTitle color='#FFF' sectionTitle={SECTION_TITLE} />
        <h3 className='md:max-w-[873px] text-[48px] md:text-[96px] md:leading-[86.4px] leading-[43.2px] text-white'>
          {TIME_FOR_YOUR_IDEA}
        </h3>
        <ButtonWithArrow
          text={CONTACT}
          arrowColor='black'
          altHeight={50}
          color='#000'
          borderColor='#FFF'
          fillColor='#FFF'
          altHref="/digital/kontakt"
        />
      </div>
    </section>
  );
}
