import Image from "next/image";
import {
  BIZNETO_LOGOS,
  CONTACT_DATA,
  GRAY_TEXTS_ARR_DESKTOP,
  SOCIAL_MEDIA_LOGOS,
  WORKING_HOURS_STR,
} from "../data";
import biznetoDigital from "@/public/svgs/biznetoDigital.svg";
import Link from "next/link";
import rzetelnaFirma from "@/public/svgs/rzetelnaFirma.svg";

export default function FooterDesktop() {
  return (
    <div className='mx-auto h-fit md:w-[89%] 2xl:w-[1440px] flex flex-col gap-8'>
      <div className='flex w-full max-w-[1278px] justify-between'>
        <div className='flex lg:gap-12 md:gap-4 w-full max-w-[306px] h-full'>
          <Image src={BIZNETO_LOGOS[0]} alt='logo' />
          <Link
            target='_blank'
            href={"https://wizytowka.rzetelnafirma.pl/1RB990XXHZH6QSBO/"}
          >
            <Image src={rzetelnaFirma} alt='rzetelna firma' />
          </Link>
        </div>
        <div className='flex flex-col lg:flex-row max-w-[753px] w-full justify-between'>
          {BIZNETO_LOGOS.slice(1).map((logo, index) => (
            <div key={index} className='flex'>
              <Image src={logo} alt='logo' />
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-7 text-[12px] leading-[14.63px]'>
        <div className={`flex justify-between`}>
          {CONTACT_DATA.map(
            ({
              title,
              tel,
              telAlt,
              email,
              adress,
              workingHrs,
              postalCodeAndCity,
              nip,
              regon,
              krs,
            }) => (
              <div
                className={`flex  md:gap-7 lg:gap-32 xl: 2xl:gap-64`}
                key={title}
              >
                <span>
                  <p> {nip} </p>
                  <p> {regon} </p>
                  <p> {krs} </p>
                  <p className='hidden md:block mt-12 opacity-50 leading-[15.6px]'>
                    {GRAY_TEXTS_ARR_DESKTOP[0]}
                  </p>
                </span>
                <span>
                  <p> {adress} </p>
                  <p> {postalCodeAndCity} </p>
                  <p>
                    {WORKING_HOURS_STR}: {workingHrs}
                  </p>
                  <Link
                    target='_blank'
                    href='/pdf/PolitykaPrywatnosci.pdf'
                    className='hidden md:block mt-12 opacity-50 leading-[15.6px]'
                  >
                    {GRAY_TEXTS_ARR_DESKTOP[1]}
                  </Link>
                </span>
                <span>
                  <span className='flex gap-2'>
                    <p>t:</p>
                    <p>
                      {tel} <br /> {telAlt}
                    </p>
                  </span>
                  <p>m: {email}</p>
                  <Link
                    target='_blank'
                    href='/pdf/Regulamin.pdf'
                    className='hidden md:block mt-12 opacity-50 leading-[15.6px]'
                  >
                    {GRAY_TEXTS_ARR_DESKTOP[2]}
                  </Link>
                </span>
              </div>
            )
          )}
          <div>
            <div className={`flex gap-12 md:gap-11`}>
              {SOCIAL_MEDIA_LOGOS.map((logo, index) => (
                <Image
                  src={logo}
                  key={index}
                  className='size-[25.23px]'
                  alt='social media logo'
                />
              ))}
            </div>
            <span className='flex gap-2 mt-16 w-full max-h-[15px]'>
              <p className='opacity-50 leading-[15.6px]'>
                {GRAY_TEXTS_ARR_DESKTOP[3]}
              </p>
              <Image src={biznetoDigital} className='w-[95.25px]' alt='logo' />
            </span>
          </div>
        </div>
        <div
          className={`flex flex-col gap-2 md:flex-row md:justify-between opacity-50 leading-[15.6px] mb-10`}
        />
      </div>
    </div>
  );
}
