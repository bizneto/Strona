"use client";

import SectionTitle from "@/components/shared/sectionTitle";
import useCategoriesContext from "@/hooks/useBlogContext";

export default function Header() {
  const { selectedCategories, handleCategorySelection } =
    useCategoriesContext();

  const FILTERS = "Filtry";
  const SECTION_TITLE = "Case Study";
  const HEADER = "Nasze realizacje";
  const CATEGORIES_LIST = [
    "Wszystkie",
    "Branding",
    "Web Design",
    "Chatboty AI",
    "Graphic Design",
  ];

  return (
    <>
      <section className='realtive py-8 md:py-16'>
        <div className='flex flex-col md:flex-row md:gap-0 w-[91%] mx-auto md:w-[89%] 2xl:w-[1440px] gap-8'>
          <span className='items-start flex flex-col md:block gap-4'>
            <div className='md:absolute md:h-screen'>
              <SectionTitle color='#006EEF' sectionTitle={SECTION_TITLE} />
            </div>
            <h3 className='md:hidden font-medium text-[48px] leading-[43.2px]'>
              {HEADER}
            </h3>
          </span>
          <div className='md:pl-[120px] lg:pl-[177px] flex flex-col gap-12 md:gap-16 md:w-full'>
            <h3 className='hidden md:block font-medium md:text-[72px] md:leading-[64px] lg:text-[96px] lg:leading-[86.4px]'>
              {HEADER}
            </h3>
            <div className='w-full h-full flex md:gap-12 items-end'>
              <p className='hidden md:block text-[18px] leading-[25.2px]'>
                {FILTERS}
              </p>
              <div className='hidden md:flex md:w-fit md:flex-wrap gap-2 md:gap-4'>
                {CATEGORIES_LIST.map((category) => (
                  <div
                    onClick={() => handleCategorySelection(category)}
                    className={`${
                      selectedCategories.includes(category) &&
                      "text-white bg-black"
                    } hover:cursor-pointer h-[46px] md:h-[50px] max-w-[148px] border-[1.2px] border-black rounded-[100px] px-6 py-3 font-medium text-[16px] leading-[22.4px] flex justify-center items-center text-nowrap`}
                    key={category}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='no-scrollbar md:hidden px-4  flex w-full overflow-x-auto md:w-[60%] gap-2 md:gap-4'>
          {CATEGORIES_LIST.map((category) => (
            <div
              onClick={() => handleCategorySelection(category)}
              className={`${
                selectedCategories.includes(category) && "text-white bg-black"
              } hover:cursor-pointer h-[46px] md:h-[50px] max-w-[148px] border-[1.2px] border-black rounded-[100px] px-6 py-3 font-medium text-[16px] leading-[22.4px] flex justify-center items-center text-nowrap`}
              key={category}
            >
              {category}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
