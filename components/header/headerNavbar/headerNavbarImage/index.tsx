"use client";

import Image from "next/image";
import logo from "@/public/svgs/biznetoLogo.svg";
import darkLogo from "@/public/svgs/biznetoLogoBlack.svg";
import logoMobile from "@/public/svgs/biznetoLogoMobile.svg";
import darkLogoMobile from "@/public/svgs/biznetoLogoMobileDark.svg";
import useMobileData from "@/hooks/useMobileData";
import Link from "next/link";

export default function HeaderNavbarImage() {
  const { isMobile, isMobileMenuOpen } = useMobileData();

  return (
    <Link href={"/"}>
      <Image
        src={
          isMobile
            ? isMobileMenuOpen
              ? darkLogoMobile
              : logoMobile
            : isMobileMenuOpen
            ? darkLogo
            : logo
        }
        alt='logo'
      />
    </Link>
  );
}
