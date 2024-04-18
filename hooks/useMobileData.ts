"use client";

import { MobileData } from "@/context/mobileDataProvider";
import { useContext } from "react";

export default function useMobileData() {
  return useContext(MobileData);
}
