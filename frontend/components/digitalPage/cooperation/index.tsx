"use client";

import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import useSectionVisibility from "@/utils/intersectionObserver";
import { useRef } from "react";
import "./index.css";
import backgroundGradient from "@/public/images/backgroundGradient.jpg";
import Image from "next/image";
import SectionTitle from "@/components/shared/sectionTitle";

export default function Cooperation() {
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef, 0.8);
  const SECTION_TITLE = "Współpraca";
  const ARE_YOU_INTERESTED = "Jesteś zainteresowany?";
  const CONTACT = "Skontaktuj się";

  return (
    <section
      ref={sectionRef}
      className='bg-black relative w-full mt-8 py-8 md:mt-16 md:py-16'
    >
      <Image
        fill
        className={`transition-all duration-1000 ease-in-out ${
          isSectionVisible ? "opacity-100" : "opacity-0"
        }`}
        src={backgroundGradient}
        alt='background'
      ></Image>
      <div className='font-medium w-[91%] md:w-[89%] 2xl:w-[1440px] mx-auto flex flex-col justify-between gap-8 relative z-20'>
        <SectionTitle nonStick color='#006EEF' sectionTitle={SECTION_TITLE} />
        <h3 className='md:max-w-[873px] text-[48px] md:text-[96px] md:leading-[86.4px] leading-[43.2px] text-white'>
          {ARE_YOU_INTERESTED}
        </h3>
        <ButtonWithArrow
          altHref='/digital/kontakt'
          text={CONTACT}
          arrowColor='white'
          altHeight={50}
          color='#FFF'
          borderColor='#006EEF'
          fillColor='#006EEF'
        />
      </div>
    </section>
  );
}
