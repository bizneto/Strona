"use client";

import useContactPageContext from "@/hooks/useContactPageContext";

const DATA = {
  Services: [
    "Założenie firmy",
    "Księgowość",
    "Konsulting Biznesowy",
    "Kadry i Płace",
    "Audyt finansowy",
    "Doradztwo Podatkowe",
    "Obsługa prawna",
    "Inne",
  ],
  "Założenie firmy": [
    "JDG",
    "Spółka osobowa",
    "Spółka kapitałowa",
    "Fundacja",
    "Stowarzyszenie",
    "Potrzebuje konsultacji",
  ],
  Księgowość: ["Pełna księgowość", "Księgowość uproszczona"],
};
const HEADER_TITLE = "Jakie usługi Cię interesują?";
const SELECTED_BUTTON_STYLE = "bg-black text-[#fff]";
const REGULAR_BUTTON_STYLE = "bg-transparent text-[#909090] border-[#909090]";
const ERROR_TEXT = "To pole jest wymagane";

export default function ContactUsServices() {
  const {
    isError,
    selectedOptions,
    setSelectedOptions,
    selectedSubOptions,
    setSelectedSubOptions,
    showSubOptions,
    setShowSubOptions,
    setIsError,
  } = useContactPageContext();

  function handleOnClick(
    service: string,
    setterFn: React.Dispatch<React.SetStateAction<string[]>>,
    setterArray: string[],
    setterArrayName: string
  ) {
    const shouldAddOption =
      service === DATA.Services[0] || service === DATA.Services[1];

    if (isError.includes(setterArrayName)) {
      setIsError((prevState) =>
        prevState.filter((prev) => prev !== setterArrayName)
      );
    }

    if (setterArray.includes(service)) {
      setterFn((prevState) =>
        prevState.filter((prevString) => prevString !== service)
      );

      setShowSubOptions((prevState) =>
        prevState.map((option) =>
          option.optionName === service
            ? { ...option, isVisible: false }
            : option
        )
      );
    } else {
      setterFn((prevState) => [...prevState, service]);
      if (shouldAddOption) {
        setShowSubOptions((prevState) =>
          prevState.map((option) =>
            option.optionName === service
              ? { ...option, isVisible: true }
              : option
          )
        );
      }
    }
  }

  return (
    <div className='pt-8 md:py-2 md:w-full lg:w-full'>
      <div className='flex flex-col gap-6 overflow-hidden'>
        <h6 className='font-medium text-[20px] md:text-[24px] leading-[22px] md:leading-[26.4px]'>
          {HEADER_TITLE}
        </h6>
        <div className='flex flex-wrap gap-3 md:gap-4'>
          {DATA.Services.map((service) => (
            <div
              key={service}
              onClick={() =>
                handleOnClick(
                  service,
                  setSelectedOptions,
                  selectedOptions,
                  "selectedOptions"
                )
              }
              className={`h-10 rounded-[100px] border-[1.2px]  text-[14px] md:text-[16px] leading-[19.6px] md:leading-[22.4px] text-center cursor-pointer px-6 py-[10px]
             ${
               selectedOptions.includes(service)
                 ? SELECTED_BUTTON_STYLE
                 : REGULAR_BUTTON_STYLE
             }`}
            >
              {service}
            </div>
          ))}
          <p
            className={`${
              isError.includes("selectedOptions")
                ? "text-[#FF1010] block"
                : "hidden"
            } w-[217px] h-[17px] font-medium text-[12px] text-[#FF1010] self-center leading-[16.8px] `}
          >
            {ERROR_TEXT}
          </p>
        </div>
      </div>
      {showSubOptions.map(({ optionName, isVisible }, index) => (
        <div
          key={index}
          className={`flex flex-col transition-all duration-700 ease-in-out ${
            isVisible
              ? "max-h-[400px] opacity-100 py-6 gap-4"
              : "overflow-hidden opacity-0 max-h-[0px] gap-0"
          }`}
        >
          <h6
            className={`font-medium text-[20px] md:text-[24px] leading-[22px]md:leading-[26.4px] transition-all duration-700 ease-in-out`}
          >
            {optionName === "Założenie firmy"
              ? "Jaki rodzaj działalności planujesz?"
              : optionName}
          </h6>
          <div className={`flex flex-wrap gap-3 md:gap-4`}>
            {DATA[optionName as keyof typeof DATA]!.map((subOption) => (
              <div
                key={subOption}
                onClick={() =>
                  handleOnClick(
                    subOption,
                    setSelectedSubOptions,
                    selectedSubOptions,
                    "selectedSubOptions"
                  )
                }
                className={`transition-all duration-700 ease-in-out 
                    px-6 h-fit rounded-[100px]  border-[1.2px] text-center  py-[10px] cursor-pointer  text-[14px] md:text-[16px] leading-[19.6px] md:leading-[22.4px]
                    ${
                      selectedSubOptions.includes(subOption)
                        ? SELECTED_BUTTON_STYLE
                        : REGULAR_BUTTON_STYLE
                    }
                `}
              >
                {subOption}
              </div>
            ))}
            <p
              className={`${
                isError.includes("selectedSubOptions")
                  ? "text-[#FF1010] block"
                  : "hidden"
              } w-[217px] h-[17px] font-medium text-[12px] text-[#FF1010] self-center leading-[16.8px] `}
            >
              {ERROR_TEXT}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
