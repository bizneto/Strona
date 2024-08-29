"use client";

import { ButtonWithArrowTypeSumbit } from "@/components/shared/buttonWithArrow";
import { IContactPageContextType } from "@/context/contactPageContext";
import useContactPageContext from "@/hooks/useContactPageContext";
import { ChangeEvent, MouseEvent, useState } from "react";
import "./index.css";
import Link from "next/link";

export interface InputsData {
  "Imię i nazwisko": string;
  "Nr telefonu": string;
  "Nazwa firmy (opcjonalne)": string;
  "Adres email": string;
  "Wiadomość (opcjonalne)": string;
}

const inputsDataIntialState = {
  "Imię i nazwisko": "",
  "Nr telefonu": "",
  "Nazwa firmy (opcjonalne)": "",
  "Adres email": "",
  "Wiadomość (opcjonalne)": "",
};

export default function ContactUsContactForm() {
  const {
    checkIfAllSelected,
    dataToSend,
    setIsPopUpVisible,
    isError,
    setIsError,
    setSelectedOptions,
    setSelectedSubOptions,
  }: IContactPageContextType = useContactPageContext();
  const [isRadioChecked, setIsRadioChecked] = useState({
    checked: false,
    showWarning: false,
  });
  const [inputsData, setInputsData] = useState<InputsData>(
    inputsDataIntialState
  );

  const HEADER_TITLE = "Dane kontakowe";
  const ERROR_TEXT = "To pole jest wymagane";
  const RADIO_ERROR_TEXT =
    "Akceptacja Regulaminu i Polityki Prywatności jest wymagana";
  const CHECKBOX_LABEL = (
    <span>
      Akceptuję{"  "}
      <Link
        target='_blank'
        href='/pdf/Regulamin.pdf'
        className='underline hover:text-[#FF3C50] hover:cursor-pointer hover:underline'
      >
        Regulamin
      </Link>{" "}
      i{" "}
      <Link
        target='_blank'
        href='/pdf/PolitykaPrywatnosci.pdf'
        className='underline hover:text-[#FF3C50] hover:cursor-pointer hover:underline'
      >
        Politykę Prywatności
      </Link>
    </span>
  );
  const INPUTS_NAMES = [
    { inputName: "Imię i nazwisko", inputType: "text" },
    { inputName: "Nr telefonu", inputType: "number" },
    { inputName: "Nazwa firmy (opcjonalne)", inputType: "text" },
    { inputName: "Adres email", inputType: "email" },
    { inputName: "Wiadomość (opcjonalne)", inputType: "text" },
  ];
  const optionalInput1 = INPUTS_NAMES[4].inputName;
  const optionalInput2 = INPUTS_NAMES[2].inputName;

  function checkWhichInputIsEmpty() {
    INPUTS_NAMES.forEach(({ inputName }) => {
      if (inputName === optionalInput1 || inputName === optionalInput2) return;
      if (inputsData[inputName as keyof InputsData].trim() === "") {
        setIsError((prevstate) => [...prevstate, inputName]);
      }
      if (
        isError.includes(inputName) &&
        inputsData[inputName as keyof InputsData].trim() !== ""
      ) {
        setIsError((prevState) =>
          prevState.filter((input) => input != inputName)
        );
      }
    });
  }

  async function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const result = checkIfAllSelected();
    checkWhichInputIsEmpty();

    if (result) return;

    if (!isRadioChecked.checked) {
      setIsRadioChecked({
        checked: false,
        showWarning: true,
      });
      return;
    }

    if (isError.length !== 0) {
      return;
    }

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        dataToSend,
        inputsData,
      }),
    });

    setSelectedOptions([]);
    setSelectedSubOptions([]);
    setIsRadioChecked({
      checked: false,
      showWarning: false,
    });
    setInputsData(inputsDataIntialState);
    setIsPopUpVisible(true);
  }

  function handleInput(text: string, input: string) {
    if (text.trim() !== "") {
      setIsError((prevState) =>
        prevState.filter((prevState) => prevState !== input)
      );
    }
    setInputsData((prevState) => ({
      ...prevState,
      [input]: text,
    }));
  }

  return (
    <div className='flex flex-col gap-8 py-8'>
      <h6 className='font-medium text-[20px] md:text-[24px] leading-[22px] md:leading-[26.4px]'>
        {HEADER_TITLE}
      </h6>
      <form className='flex flex-col gap-12 md:gap-16'>
        <div className='flex flex-col gap-8 md:gap-14  md:flex-wrap  md:flex-row'>
          {INPUTS_NAMES.map(({ inputName, inputType }) => (
            <span key={inputName} className='relative'>
              <p
                className={`${
                  inputsData[inputName as keyof InputsData] === ""
                    ? "animate-[slideDownwards_0.3s_linear] top-1 text-[16px]"
                    : "animate-[slideUpwards_0.3s_linear] -top-5 text-[12px]"
                } -z-10 absolute leading-[22.4px] text-[#909090]`}
              >
                {inputName}
              </p>
              <input
                name={inputName}
                required={
                  inputName !== optionalInput1 || inputName !== optionalInput2
                }
                type={inputType}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInput(e.target.value, inputName)
                }
                value={inputsData[inputName as keyof InputsData]}
                className={`bg-transparent w-full ${
                  inputName === optionalInput1 && "xl:w-[661px]"
                } md:w-[300px]  text-[16px] leading-[22.4px] border-b border-[#909090] text-[#909090] h-[28px] focus-visible:outline-none focus-visible:border-[#FF3C50]`}
                key={inputName}
              />
              <p
                className={`${
                  isError.includes(inputName) ? "block" : "hidden"
                } pt-1 font-medium text-[12px] text-[#FF1010] leading-[16.8px] `}
              >
                {ERROR_TEXT}
              </p>
            </span>
          ))}
        </div>
        <span className='h-[24px]'>
          <span className='gap-3 flex  items-center'>
            <input
              checked={isRadioChecked.checked}
              required
              type='radio'
              id='radio'
              className='size-6 accent-[#FF3C50]'
              onChange={() =>
                setIsRadioChecked({
                  checked: true,
                  showWarning: false,
                })
              }
            />
            <label
              className='font-medium text-[12px] text-[#909090] leading-[16.8px]'
              htmlFor='radio'
            >
              {CHECKBOX_LABEL}
            </label>
          </span>
          <p
            className={`${
              isRadioChecked.showWarning ? "block" : "hidden"
            }   py-1 font-medium text-[12px] text-[#FF1010] leading-[16.8px]`}
          >
            {RADIO_ERROR_TEXT}
          </p>
        </span>
        <ButtonWithArrowTypeSumbit
          onClick={(event) => handleClick(event)}
          text='Wyślij'
          arrowColor='red'
          color='#FF3C50'
          altWidth={150}
        />
      </form>
    </div>
  );
}
