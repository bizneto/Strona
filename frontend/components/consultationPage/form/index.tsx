"use client";

import { ButtonWithArrowTypeSumbit } from "@/components/shared/buttonWithArrow";
import { useEffect, useState } from "react";
import {
  CALL_TO_ACTION_TEXT,
  CHECKBOX_LABEL,
  DISCOUNT,
  errorKeys,
  INITIAL_PRICE,
  INPUTS_PLACEHOLDERS,
  PAYMENT_NOTICE,
  PRICE,
  PROMOTION_CODE,
  PROMOTION_INPUT_PLACEHOLDER,
  WRONG_DISCOUNT_CODE,
} from "./consts";
import { useFormState } from "react-dom";
import { sendConsultationMessage } from "@/utils/consultation";
import { ERROR_COMPONENT } from "@/components/digitalContactPage/contactForm/helper";
import dynamic from "next/dynamic";

type InputValues = {
  [key: string]: string;
};

interface IErrors {
  [key: string]: boolean | undefined;
}

const PopUp = dynamic(
  () => import("@/components/consultationPage/popUp/index")
);

export default function Form({
  discountInitiallyApplied,
}: {
  discountInitiallyApplied?: boolean;
}) {
  const [formState, action] = useFormState(sendConsultationMessage, null);
  const [errors, setErrors] = useState<IErrors>({});
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [inputValues, setInputValues] = useState(
    INPUTS_PLACEHOLDERS.reduce(
      (acc, placeholder) => {
        acc[placeholder] = "";
        return acc;
      },
      {
        [PROMOTION_INPUT_PLACEHOLDER]: discountInitiallyApplied
          ? PROMOTION_CODE
          : "",
      } as InputValues
    )
  );
  const isDiscountActivated =
    inputValues[PROMOTION_INPUT_PLACEHOLDER] === PROMOTION_CODE;
  const isDiscountInputEmpty =
    inputValues[PROMOTION_INPUT_PLACEHOLDER] === "" ||
    inputValues[PROMOTION_INPUT_PLACEHOLDER] === undefined;

  const handleInputChange = (placeholder: string, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [placeholder]: value,
    }));
  };

  useEffect(() => {
    function findError() {
      if (
        !formState?.message ||
        !Array.isArray(formState.message) ||
        formState.message.length === 0
      ) {
        setErrors({});
        return;
      }
      const errorPathsArray = formState.message.map((arr: any) => arr.path[0]);
      setErrors((prevErrors) => {
        const newErrors: IErrors = { ...prevErrors };
        errorPathsArray.forEach((path: string) => {
          newErrors[path] = true;
        });
        Object.keys(newErrors).forEach((path) => {
          if (!errorPathsArray.includes(path)) {
            newErrors[path] = false;
          }
        });
        return newErrors;
      });
    }
    if (formState?.message === "Email send!") setIsPopUpVisible(true);
    findError();
  }, [formState]);

  return (
    <>
      <form
        action={action}
        autoComplete='off'
        className='md:max-w-[650px] flex flex-col w-full gap-8'
      >
        <h3 className='text-[20px] leading-[26px] font-medium'>
          {CALL_TO_ACTION_TEXT}
        </h3>
        <div className='w-full flex flex-col md:flex-row md:flex-wrap gap-12'>
          {INPUTS_PLACEHOLDERS.map((input, index) => {
            const isEmailInput = index === 1;
            const isPhoneInput = index === 2;
            return (
              <div
                key={input}
                className={`relative ${
                  isEmailInput || isPhoneInput
                    ? "xl:w-[300px] w-full"
                    : "w-full"
                }`}
              >
                <label
                  htmlFor={input}
                  className={`text-[#909090] -z-20 duration-100 transition-all absolute ${
                    inputValues[input] !== "" ? "-top-4" : "top-1"
                  }`}
                >
                  {input}
                </label>
                <input
                  name={input}
                  value={inputValues[input]}
                  onChange={(e) => handleInputChange(input, e.target.value)}
                  className='outline-none bg-transparent z-40 w-full border-b-black border-b-[1px] text-[16px] leading-[22.4px] pt-[6px] focus:outline-none'
                />
                {errorKeys[input] &&
                  errors[errorKeys[input]] &&
                  ERROR_COMPONENT}
              </div>
            );
          })}
          <div className='relative w-full '>
            <label
              htmlFor={PROMOTION_INPUT_PLACEHOLDER}
              className={`text-[#909090] -z-20 duration-100 transition-all absolute ${
                isDiscountInputEmpty ? "top-1" : "-top-4"
              }`}
            >
              {PROMOTION_INPUT_PLACEHOLDER}
            </label>
            <input
              autoComplete='off'
              onChange={(e) =>
                setInputValues({
                  ...inputValues,
                  [PROMOTION_INPUT_PLACEHOLDER]: e.target.value,
                })
              }
              value={
                discountInitiallyApplied
                  ? PROMOTION_CODE
                  : inputValues[PROMOTION_INPUT_PLACEHOLDER]
              }
              readOnly={discountInitiallyApplied}
              name={PROMOTION_INPUT_PLACEHOLDER}
              className='relative outline-none bg-transparent z-50 w-full border-b-black border-b-[1px] text-[16px] leading-[22.4px] pt-[6px]'
            />
            <p
              className={`absolute ${
                !isDiscountActivated && !isDiscountInputEmpty
                  ? "top-8 opacity-100"
                  : "top-0 opacity-0"
              } duration-200 transition-all text-[12px] leading-[16.8px] text-[#FF1010]`}
            >
              {WRONG_DISCOUNT_CODE}
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='relative flex gap-4 w-fit text-[20px] leading-[26px] font-medium'>
            <span>{PRICE}</span>
            <span
              className={`whitespace-nowrap absolute left-20 ${
                isDiscountActivated
                  ? "block whitespace-nowrap opacity-100 top-0"
                  : "opacity-0 -top-5"
              } duration-300 transition-all text-[#FF3C50]`}
            >
              {DISCOUNT}
            </span>
            <span
              className={`absolute whitespace-nowrap duration-100 transition-all ${
                isDiscountActivated ? "left-48 line-through " : "left-24"
              }`}
            >
              {INITIAL_PRICE}
            </span>
          </div>

          <p className='text-[12px] leading-[16.8px] text-[#909090]'>
            {PAYMENT_NOTICE}
          </p>
        </div>
        <span className='h-[24px]'>
          <span className='gap-3 flex items-center'>
            <input
              name='radio'
              required
              type='radio'
              id='radio'
              className='size-6 accent-[#FF3C50]'
            />
            <label
              className='font-medium text-[12px] text-[#909090] leading-[16.8px]'
              htmlFor='radio'
            >
              {CHECKBOX_LABEL}
            </label>
          </span>
        </span>
        <ButtonWithArrowTypeSumbit
          text='Wyślij'
          arrowColor='red'
          color='#FF3C50'
          altWidth={200}
        />
      </form>
      {isPopUpVisible && <PopUp isPopUpVisible={isPopUpVisible} />}
    </>
  );
}
