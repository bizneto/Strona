"use client";
import useGlobalContext from "@/hooks/useGlobalContext";
import { ReactLenis } from "@studio-freight/react-lenis";
import { PropsWithChildren } from "react";

export default function SmoothScrolling({ children }: PropsWithChildren) {
  const { isMobile } = useGlobalContext();

  return (
    <>
      {isMobile ? (
        <> {children} </>
      ) : (
        <ReactLenis
          root
          options={{ lerp: 0.1, duration: 1.1, smoothWheel: true }}
        >
          {children}
        </ReactLenis>
      )}
    </>
  );
}
