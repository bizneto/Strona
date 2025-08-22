import Image from "next/image";
import ButtonWithArrow from "../../shared/buttonWithArrow";
import eclipse from "@/public/svgs/eclipse.svg";

export default function CalculatorBanner() {
  return (
    <section
      className={`bg-black overflow-hidden rounded-[8px] z-10 w-10/12 my-8 md:my-16 md:w-[89%] 2xl:w-[1440px] h-full mx-auto relative font-medium`}
    >
      <Image
        src={eclipse}
        alt='background eclipse'
        className={`absolute -z-10 size-[158.52px] -right-14 -rotate-[15deg] -top-4 md:size-[427px] md:right-32 md:bottom-3`}
      />
      <Image
        src={eclipse}
        alt='background eclipse'
        className={`absolute -z-10 size-[158.52px] right-1 -top-20 md:size-[427px] md:right-80 md:-top-56`}
      />
      <Image
        src={eclipse}
        alt='background eclipse'
        className={`absolute -z-10  -rotate-[60deg]  scale-y-[-1] size-[158.52px] top-11 -right-32 md:size-[427px] md:-right-16 md:-bottom-32`}
      />

      <div
        className={`text-[#FFF] z-20 p-6 gap-6 w-10/12 md:w-[40%] lg:w-[28.5%] md:gap-12 md:ml-[4.5rem] lg:ml-[9rem] md:py-10 flex flex-col`}
      >
        <h5 className='md:hidden text-[28px] leading-[30.8px]'>Sprawdź koszt księgowości</h5>
        <h2 className='hidden md:block text-[48px] leading-[58.51px]'>
          Sprawdź koszt księgowości dla Twojej firmy
        </h2>
        <p
          className={`text-[14px] leading-[19.6px] md:text-[16px] md:leading-[22.4px]`}
        >
          Skorzystaj z naszego kalkulatora i otrzymaj spersonalizowaną wycenę usług księgowych.
          Uwzględniamy rodzaj działalności, liczbę dokumentów i lokalizację firmy.
        </p>
        <ButtonWithArrow arrowColor='white' text='Oblicz koszt' color='#FFF' altHref='/finanse/kalkulator' />
      </div>
    </section>
  );
}
