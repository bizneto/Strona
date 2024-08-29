"use client";

import { useEffect, useState } from "react";
import { ButtonWithArrowTypeSumbit } from "@/components/shared/buttonWithArrow";
import { CONTACT_FORM_DATA, CONTACT_INFO } from "./data";
import {
  CHECKBOX_LABEL,
  ERROR_COMPONENT,
  FORM_ROW,
  RADIO_ERROR_MESSAGE,
  TITLE,
} from "./helper";
import { useFormState } from "react-dom";
import { sendEmail } from "@/utils/emails";
import ReactTextareaAutosize from "react-textarea-autosize";
import dynamic from "next/dynamic";

interface IErrors {
  [key: string]: boolean | undefined;
}

const PopUp = dynamic(
  () => import("@/components/digitalContactPage/popUp/index")
);

export default function ContactForm() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [errors, setErrors] = useState<IErrors>({});
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [formState, action] = useFormState(sendEmail, null);

  function handleOptionClick(option: string) {
    selectedOptions.forEach((el) => {
      if (CONTACT_FORM_DATA.budget.data.includes(el)) {
        setSelectedOptions((prevState) =>
          prevState.filter((opt) => opt !== el)
        );
      }
    });
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((opt) => opt !== option)
        : [...prev, option]
    );
  }

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

  const BUTTON_TEXT = "Wyślij";

  return (
    <>
      <section className='md:pl-[120px] lg:pl-[177px] py-8 md:py-16 grid md:grid-cols-[auto_135px] gap-8 w-[91%] mx-auto md:w-[89%] 2xl:w-[1440px]'>
        <form
          autoComplete='off'
          className='flex flex-col gap-8'
          action={action}
        >
          <FORM_ROW
            formDataId='services'
            title={CONTACT_FORM_DATA.services.title}
            data={CONTACT_FORM_DATA.services.data}
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          {errors["clickableOption-services"] && ERROR_COMPONENT}
          <FORM_ROW
            formDataId='budget'
            title={CONTACT_FORM_DATA.budget.title}
            data={CONTACT_FORM_DATA.budget.data}
            selectedOptions={selectedOptions}
            handleOptionClick={handleOptionClick}
          />
          {errors["clickableOption-budget"] && ERROR_COMPONENT}

          <div className='flex flex-col gap-6'>
            {TITLE(CONTACT_FORM_DATA.inputsPlaceholders.title)}
            <div className='max-w-[650px] flex flex-col gap-8 md:flex-row flex-wrap  md:justify-between '>
              {CONTACT_FORM_DATA.inputsPlaceholders.placeholders
                .slice(0, 4)
                .map((placeholder, index) => (
                  <>
                    <div key={index} className='flex flex-col gap-2'>
                      <input
                        className={`focus:border-b-[#006EEF] outline-none pb-2 w-[300px] bg-transparent border-b-[1.2px] border-b-[#909090] text-ellipsis`}
                        name={placeholder}
                        placeholder={placeholder}
                      />

                      {placeholder === "Imię i nazwisko*" &&
                        errors["name"] &&
                        ERROR_COMPONENT}
                      {placeholder === "Adres email*" &&
                        errors["email"] &&
                        ERROR_COMPONENT}
                    </div>
                  </>
                ))}
              <ReactTextareaAutosize
                placeholder={
                  CONTACT_FORM_DATA.inputsPlaceholders.placeholders[4]
                }
                name={CONTACT_FORM_DATA.inputsPlaceholders.placeholders[4]}
                rows={4}
                className='max-w-[300px] h-[30px] xl:max-w-full whitespace-pre-wrap w-full resize-none focus:border-b-[#006EEF] outline-none bg-transparent border-b-[1.2px] border-b-[#909090]'
              ></ReactTextareaAutosize>
            </div>
          </div>
          <span className='flex flex-col gap-2'>
            <div className='flex gap-3 items-center'>
              <input
                type='radio'
                id='radio'
                name='agreement'
                className='size-4 accent-[#006EEF]'
              />
              <label
                className='font-medium text-[12px] text-[#909090] leading-[16.8px]'
                htmlFor='radio'
              >
                {CHECKBOX_LABEL}
              </label>
            </div>
            {errors["agreement"] && RADIO_ERROR_MESSAGE}
          </span>
          <ButtonWithArrowTypeSumbit
            altWidth={180}
            altHeight={50}
            arrowColor='white'
            color='#FFF'
            text={BUTTON_TEXT}
            borderColor='#006EEF'
            fillColor='#006EEF'
          />
        </form>

        <div className='md:w-[135px] pt-4 font-medium flex flex-row md:flex-col-reverse md:items-start md:justify-end gap-[31px]'>
          {Object.entries(CONTACT_INFO).map(([key, value]) => (
            <div className='flex flex-col items-start gap-4' key={key}>
              <h4 className='text-[16px] leading-[20.8px] text-[#909090]'>
                {key}
              </h4>
              <div className='flex flex-col'>
                {value.map((item, index) => (
                  <span key={item} className={index === 2 ? "mt-4" : ""}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {isPopUpVisible && <PopUp isPopUpVisible={isPopUpVisible} />}
    </>
  );
}
