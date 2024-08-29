"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";

type globalContextType = {
  isMobile: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  isDesktopMenuVisible: {
    isVisible: boolean;
    selectedOption: string;
  };
  setIsDesktopMenuVisible: Dispatch<
    SetStateAction<{
      isVisible: boolean;
      selectedOption: string;
    }>
  >;
};
export const globalContext = createContext<globalContextType>({
  isMobile: false,
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
  isDesktopMenuVisible: { isVisible: false, selectedOption: "Oferta" },
  setIsDesktopMenuVisible: () => {},
});

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuVisible, setIsDesktopMenuVisible] = useState({
    isVisible: false,
    selectedOption: "O nas",
  });

  function handleResize() {
    if (!window) return;
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsMobileMenuOpen(false);
    }
  }

  useEffect(() => {
    handleResize();

    window.addEventListener("DOMContentLoaded", handleResize);
    window.addEventListener("resize", handleResize);

    if (isMobile)
      setIsDesktopMenuVisible({
        isVisible: false,
        selectedOption: "",
      });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const memoContextValues = useMemo(
    () => ({
      isMobile,
      isMobileMenuOpen,
      setIsMobileMenuOpen,
      isDesktopMenuVisible,
      setIsDesktopMenuVisible,
    }),
    [
      isMobile,
      isMobileMenuOpen,
      setIsMobileMenuOpen,
      isDesktopMenuVisible,
      setIsDesktopMenuVisible,
    ]
  );

  return (
    <globalContext.Provider value={memoContextValues}>
      {children}
    </globalContext.Provider>
  );
}
