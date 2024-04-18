"use client";

import { contactPageContext } from "@/context/contactPageContext";
import { useContext } from "react";

export default function useContactPageContext() {
  return useContext(contactPageContext);
}
