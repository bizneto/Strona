"use client";

import useCategoriesContext from "@/hooks/useBlogContext";

export default function Categories() {
  const { selectedCategories, handleCategorySelection } =
    useCategoriesContext();

  const CATEGORIES = [
    "Aktualności",
    "Biznes",
    "Finanse",
    "Marketing",
    "Technologie",
    "Wydarzenia",
  ];

  return (
    <section className='py-8'>
      <div className='w-10/12 md:w-[89%] 2xl:w-[1440px] mx-auto flex flex-wrap gap-5 md:gap-4'>
        {CATEGORIES.map((category) => (
          <div
            onClick={() => handleCategorySelection(category)}
            className={`${
              selectedCategories.includes(category) && "text-white bg-black"
            } hover:cursor-pointer h-[46px] md:h-[50px] max-w-[148px] border-[1.2px] border-black rounded-[100px] px-6 py-3 font-medium text-[16px] leading-[22.4px] flex justify-center items-center`}
            key={category}
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}
