"use client";

import xIcon from "@/public/svgs/xIcon.svg";
import Image from "next/image";
import Link from "next/link";

interface IPopup {
  isPopUpVisible: boolean;
}

const THANK_YOU = "Dziękujemy";
const MESSAGE = `Dziękujemy za przesłanie zgłoszenia. \n Nasi konsultanci skontaktują się z Państwem w celu ustalenia dogodnego terminu spotkania.`;

export default function PopUp({ isPopUpVisible }: IPopup) {
  if (!isPopUpVisible) return;

  return (
    <div className='absolute w-screen h-screen bg-transparent z-[999]'>
      <div className='fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[91%] bg-white md:w-full md:max-w-[541px] h-[400px] md:h-[233px] border-[1px] border-[#505050] rounded-[10px]  p-4 md:p-8 font-medium flex flex-col justify-center items-center'>
        <Link href={"/finanse"} className='self-end'>
          <Image src={xIcon} alt='X icon ' />
        </Link>
        <div className='flex flex-col gap-[25px]'>
          <h4 className='text-[24px] md:text-[32px] leading-[28.8px] md:leading-[35.4px] text-center'>
            {THANK_YOU}
          </h4>

          <div className='flex flex-col'>
            {MESSAGE.split("\n").map((text) => (
              <p
                key={text}
                className='text-[16px] leading-[22.4px] text-center'
              >
                {" "}
                {text}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
