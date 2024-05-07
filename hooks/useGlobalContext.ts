"use client";

import { globalContext } from "@/context/globalContextProvider";
import { useContext } from "react";

export default function useGlobalContext() {
  return useContext(globalContext);
}
