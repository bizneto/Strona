"use client";

import useContactPageContext from "@/hooks/useContactPageContext";
import xIcon from "@/public/images/xIcon.png";
import Image from "next/image";

export default function ContactUsPopUp() {
  const { isPopUpVisible, setIsPopUpVisible } = useContactPageContext();

  const ACKNOWLEDGEMENTS = "Dziękujemy";
  const SUB_TEXT = (
    <span className='text-[16px] leading-[22.4px]'>
      <p>Dziękujemy za przesłanie wiadomości.</p>
      <p>Odpowiemy na nią tak szybko, jak to możliwe.</p>
    </span>
  );

  if (!isPopUpVisible) return;

  return (
    <div
      style={{ boxShadow: "0px 0px 30px -1px rgba(0, 0, 0, 0.1)" }}
      className='text-center fixed z-50  bg-white w-10/12 md:w-[541px] max-h-[350px]  md:max-h-[211px] rounded-[10px] pt-8 pr-8 pb-12 pl-8  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '
    >
      <span className='w-full h-min flex justify-end '>
        <Image
          src={xIcon}
          alt='x icon'
          className='cursor-pointer'
          onClick={() => setIsPopUpVisible(false)}
        />
      </span>
      <span className='flex flex-col gap-6 mx-auto font-medium'>
        <h4 className='text-[32px] leading-[39.01px]'>{ACKNOWLEDGEMENTS}</h4>
        {SUB_TEXT}
      </span>
    </div>
  );
}
