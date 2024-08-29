"use client";

import FooterMobile from "@/components/landingPage/footer/footerMobile";
import FooterAlt from "@/components/shared/footerAlt";
import useGlobalContext from "@/hooks/useGlobalContext";

export default function Footer() {
  const { isMobile } = useGlobalContext();

  return (
    <div className='bg-black w-full h-fit  text-white py-8 md:py-16'>
      {isMobile ? <FooterMobile /> : <FooterAlt />}
    </div>
  );
}
