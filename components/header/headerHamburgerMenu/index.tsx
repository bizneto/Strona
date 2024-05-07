"use client";

import useGlobalContext from "@/hooks/useGlobalContext";
import "./index.css";

export default function HamburgerMenu() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobalContext();

  return (
    <div
      id='nav-icon1'
      className={isMobileMenuOpen ? "open" : ""}
      onClick={() => setIsMobileMenuOpen!((curr) => !curr)}
    >
      <span />
      <span />
      <span />
    </div>
  );
}
