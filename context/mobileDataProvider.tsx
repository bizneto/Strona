"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";

type MobileDataContextType = {
  isMobile: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileData = createContext<MobileDataContextType>({
  isMobile: false,
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: () => {},
});

export default function MobileDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  async function detectMobileDevice() {
    const mobile = await SSRMobileDetection();
    setIsMobile(mobile);
  }

  function handleResize() {
    if (!window) return;
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    handleResize();
    detectMobileDevice();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const memoContextValues = useMemo(
    () => ({ isMobile, isMobileMenuOpen, setIsMobileMenuOpen }),
    [isMobile, isMobileMenuOpen, setIsMobileMenuOpen]
  );

  return (
    <MobileData.Provider value={memoContextValues}>
      {children}
    </MobileData.Provider>
  );
}
