"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { PropsWithChildren } from "react";

export default function SmoothScrolling({ children }: PropsWithChildren) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
