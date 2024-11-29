"use client";

import ButtonWithArrow from "@/components/shared/buttonWithArrow";

export default function Error() {
  return (
    <div className='w-screen h-screen flex flex-col gap-12 items-center justify-center'>
      <h1 className='text-[512px] leading-[460.8px]'>404</h1>
      <p className='text-[32px] leading-[35.2px] text-center w-[60%] '>
        Przepraszamy, ta strona nie istnieje lub została usunięta. Proszę, wróć
        do strony głównej.
      </p>
      <p className='text-[32px] leading-[35.2px] text-center w-[60%] '></p>
      <ButtonWithArrow
        text='Wróć'
        altHref='/digital'
        arrowColor='white'
        color='#FFF'
        altHeight={50}
        fillColor='#006EEF'
      />
    </div>
  );
}
