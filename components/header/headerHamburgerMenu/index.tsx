"use client";

import useMobileData from "@/hooks/useMobileData";
import "./index.css";

export default function HamburgerMenu() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileData();

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
