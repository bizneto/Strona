"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";

type TCategoriesContext = {
  selectedCategories: string[];
  setSelectedCategories: Dispatch<SetStateAction<string[]>>;
  handleCategorySelection: (category: string) => void;
};
export const categoriesContext = createContext<TCategoriesContext>({
  selectedCategories: [],
  setSelectedCategories: () => [],
  handleCategorySelection: () => {},
});

export default function CategoriesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  function handleCategorySelection(category: string) {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevState) =>
        prevState.filter((el) => el !== category)
      );
    } else setSelectedCategories((prevState) => [...prevState, category]);
  }

  const memoContextValues = useMemo(
    () => ({
      selectedCategories,
      setSelectedCategories,
    }),
    [selectedCategories, setSelectedCategories]
  );

  const contextValue = {
    handleCategorySelection,
    ...memoContextValues,
  };

  return (
    <categoriesContext.Provider value={contextValue}>
      {children}
    </categoriesContext.Provider>
  );
}
