"use client";

import useGlobalContext from "@/hooks/useGlobalContext";
import "./index.css";

interface IHamburgerMenu {
  color: "black" | "white";
}

export default function HamburgerMenu({ color }: IHamburgerMenu) {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobalContext();

  return (
    <div
      id='nav-icon1'
      className={`${isMobileMenuOpen ? `open ${color}` : `${color}`} md:hidden`}
      onClick={() => setIsMobileMenuOpen!((curr) => !curr)}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
