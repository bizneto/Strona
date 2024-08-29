"use client";

import Image from "next/image";
import logo from "@/public/svgs/biznetoLogo.svg";
import darkLogo from "@/public/svgs/biznetoLogoBlack.svg";
import logoMobile from "@/public/svgs/biznetoLogoMobile.svg";
import darkLogoMobile from "@/public/svgs/biznetoLogoMobileDark.svg";
import useGlobalContext from "@/hooks/useGlobalContext";
import Link from "next/link";

export default function HeaderNavbarImage() {
  const {
    isMobile,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isDesktopMenuVisible,
  } = useGlobalContext();

  return (
    <Link href={"/"} onClick={() => setIsMobileMenuOpen(false)}>
      <Image
        src={
          isMobile
            ? isMobileMenuOpen
              ? darkLogoMobile
              : logoMobile
            : isDesktopMenuVisible.isVisible
            ? darkLogo
            : logo
        }
        alt='logo'
      />
    </Link>
  );
}
