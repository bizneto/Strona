"use client";

import { categoriesContext } from "@/context/blogPageContext";
import { useContext } from "react";

export default function useCategoriesContext() {
  return useContext(categoriesContext);
}
