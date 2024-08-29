import { createContext, useMemo, useState } from "react";

interface IShowSubOption {
  optionName: string;
  isVisible: boolean;
}

export interface IContactPageContextType {
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSubOptions: string[];
  setSelectedSubOptions: React.Dispatch<React.SetStateAction<string[]>>;
  showSubOptions: IShowSubOption[];
  setShowSubOptions: React.Dispatch<React.SetStateAction<IShowSubOption[]>>;
  isError: string[];
  setIsError: React.Dispatch<React.SetStateAction<string[]>>;
  checkIfAllSelected: () => boolean;
  dataToSend: { field: string; data: string[] }[];
  isPopUpVisible: boolean;
  setIsPopUpVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const contactPageContext = createContext<IContactPageContextType>({
  selectedOptions: [],
  setSelectedOptions: () => {},
  selectedSubOptions: [],
  setSelectedSubOptions: () => {},
  showSubOptions: [],
  setShowSubOptions: () => {},
  isError: [],
  setIsError: () => [],
  checkIfAllSelected: () => true,
  dataToSend: [],
  isPopUpVisible: false,
  setIsPopUpVisible: () => {},
});

const initialSubOptions = [
  {
    optionName: "Założenie firmy",
    isVisible: false,
  },
  {
    optionName: "Księgowość",
    isVisible: false,
  },
];

export default function ContactPageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedSubOptions, setSelectedSubOptions] = useState<string[]>([]);
  const [showSubOptions, setShowSubOptions] = useState(initialSubOptions);
  const [isError, setIsError] = useState<string[]>([]);
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  const dataToSend = [
    { field: "Główne opcje", data: [...selectedOptions] },
    { field: "Podopcje", data: [...selectedOptions] },
  ];

  function checkIfNonEmpty(arr: any[], name: string): boolean {
    if (arr.length === 0) {
      setIsError((prevState) => [...prevState, name]);
      return true; // Indicates an error
    }
  
    if (isError.includes(name) && arr.length !== 0) {
      setIsError((prevState) => prevState.filter((el) => el !== name));
    }
  
    return false; // No error
  }
  

  function checkIfAllSelected(): boolean {
    const arraysToCheck = [
      { name: "selectedSubOptions", arr: [...selectedSubOptions] },
      { name: "selectedOptions", arr: [...selectedOptions] },
    ];
  
    let hasError = false;
    for (const { name, arr } of arraysToCheck) {
      if (checkIfNonEmpty(arr, name)) {
        hasError = true;
      }
    }
  
    return hasError;
  }
  
  const memoContextValues = useMemo(
    () => ({
      selectedOptions,
      setSelectedOptions,
      selectedSubOptions,
      setSelectedSubOptions,
      showSubOptions,
      setShowSubOptions,
      isPopUpVisible,
      setIsPopUpVisible,
    }),
    [
      selectedOptions,
      selectedSubOptions,
      showSubOptions,
      isPopUpVisible,
      setIsPopUpVisible,
    ]
  );

  const contextValues = {
    ...memoContextValues,
    dataToSend,
    checkIfAllSelected,
    isError,
    setIsError,
  };

  return (
    <contactPageContext.Provider value={contextValues}>
      {children}
    </contactPageContext.Provider>
  );
}
