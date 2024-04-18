"use client";

import { useState, useEffect, MutableRefObject } from "react";

export default function useSectionVisibility(ref: MutableRefObject<any>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    let currRef = ref.current;

    if (currRef) {
      observer.observe(ref.current);
    }

    return () => {
      if (currRef) {
        observer.unobserve(currRef);
      }
    };
  }, [ref]);

  return isVisible;
}
