"use client";

import { useState, useEffect, MutableRefObject } from "react";

export default function useSectionVisibility(
  ref: MutableRefObject<any>,
  customThreshold?: number
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: customThreshold || 1 }
    );

    const currRef = ref.current;

    if (currRef) {
      observer.observe(ref.current);
    }

    return () => {
      if (currRef) {
        observer.unobserve(currRef);
      }
    };
  }, [ref, customThreshold]);

  return isVisible;
}
