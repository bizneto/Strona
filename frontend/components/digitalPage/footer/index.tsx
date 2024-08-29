"use client";

import useGlobalContext from "@/hooks/useGlobalContext";
import FooterMobile from "./footerMobile";
import FooterDesktop from "./footerDesktop";

export default function Footer() {
  const { isMobile } = useGlobalContext();

  return (
    <footer className='bg-black py-8 md:py-16'>
      {isMobile ? <FooterMobile /> : <FooterDesktop />}
    </footer>
  );
}
