import Link from "next/link";

export type TFormInputKeys = "Imię i nazwisko*" | "Adres email*";

export interface IOptionButtonProps {
  text: string;
  clickHandler: (text: string) => void;
  selected: boolean;
  formDataId: string;
}

export interface IFormRowProps {
  title: string;
  data: string[];
  selectedOptions: string[];
  handleOptionClick: (option: string) => void;
  formDataId: string;
}

export function OPTION_BUTTON({
  text,
  clickHandler,
  selected,
  formDataId,
}: IOptionButtonProps) {
  return (
    <button
      name='option'
      type='button'
      className={`cursor-pointer relative w-fit h-[50px] py-[14px] px-8 rounded-[100px] text-center border-[1.2px] ${
        selected
          ? "border-[#006EEF] bg-[#006EEF] text-white"
          : "border-[#909090] text-[#909090] hover:bg-[#f0f0f0]"
      }`}
      onClick={() => clickHandler(text)}
    >
      <input
        type={formDataId === "services" ? "checkbox" : "radio"}
        name={`clickableOption-${formDataId}`}
        className='opacity-0 cursor-pointer w-full h-full absolute top-0 left-0'
        placeholder={text}
        value={text}
      />
      {text}
    </button>
  );
}

export function TITLE(title: string) {
  return (
    <h3 className='text-[24px] leading-[28.8px] md:text-[32px] md:leading-[38.4px]'>
      {title}
    </h3>
  );
}

export function FORM_ROW({
  title,
  data,
  selectedOptions,
  handleOptionClick,
  formDataId,
}: IFormRowProps) {
  return (
    <div className='flex flex-col gap-6 font-medium'>
      {TITLE(title)}
      <span className='w-[80%] flex flex-wrap gap-2'>
        {data.map((option) => (
          <OPTION_BUTTON
            key={option}
            text={option}
            clickHandler={handleOptionClick}
            selected={selectedOptions.includes(option)}
            formDataId={formDataId}
          />
        ))}
      </span>
    </div>
  );
}

export const CHECKBOX_LABEL = (
  <span className='text-[12px] leading-[16.8px] flex gap-1'>
    Akceptuję
    <Link
      target='_blank'
      href='/pdf/Regulamin.pdf'
      className='underline hover:text-[#006EEF] hover:cursor-pointer hover:underline'
    >
      Regulamin
    </Link>
    i
    <Link
      target='_blank'
      href='/pdf/PolitykaPrywatnosci.pdf'
      className='underline hover:text-[#006EEF] hover:cursor-pointer hover:underline'
    >
      Politykę Prywatności
    </Link>
  </span>
);

export const ERROR_MESSAGE = "To pole jest wymagane!";
export const ERROR_COMPONENT = (
  <p className='text-[12px] leading-[16.8px] text-[#FF1010]'>
    {" "}
    To pole jest wymagane!{" "}
  </p>
);

export const RADIO_ERROR_MESSAGE = (
  <p className='text-[12px] leading-[16.8px] text-[#FF1010]'>
    {" "}
    Akceptacja <span className='underline'>Regulaminu</span> i{" "}
    <span className='underline'>Polityki Prywatności</span> jest wymagana{" "}
  </p>
);
