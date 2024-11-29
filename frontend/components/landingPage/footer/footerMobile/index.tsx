import Image from "next/image";
import {
  BIZNETO_LOGOS,
  CONTACT_DATA,
  GRAY_TEXTS_ARR,
  SOCIAL_MEDIA_LOGOS,
  WORKING_HOURS_STR,
} from "../data";
import biznetoDigital from "@/public/svgs/biznetoDigital.svg";
import Link from "next/link";
import rzetelnaFirma from "@/public/svgs/rzetelnaFirma.svg";

export default function FooterMobile() {
  return (
    <div className='w-10/12 mx-auto flex-col flex gap-8'>
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
            className={`text-[12px] leading-[14.63px] flex flex-col md:flex-row gap-4 md:gap-28 `}
            key={title}
          >
            <h5 className='text-[16px] leading-[22.4px]'>{title}</h5>
            <span>
              <p> {adress} </p>
              <p> {postalCodeAndCity} </p>
              <p>
                {WORKING_HOURS_STR}: {workingHrs}
              </p>
              <Link
                target='_blank'
                href='/pdf/Regulamin.pdf'
                className='hidden md:block mt-12 opacity-50 leading-[15.6px]'
              >
                {GRAY_TEXTS_ARR[1]}
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
                href='/pdf/PolitykaPrywatnosci.pdf'
                className='hidden md:block mt-12 opacity-50 leading-[15.6px]'
              >
                {GRAY_TEXTS_ARR[2]}
              </Link>
            </span>
            <span className={`md:hidden`}>
              <p> {nip} </p>
              <p> {regon} </p>
              <p> {krs} </p>
            </span>
          </div>
        )
      )}
      <div className='flex flex-col gap-4'>
        <Link target="_blank" href={"https://wizytowka.rzetelnafirma.pl/1RB990XXHZH6QSBO/"}>
          <Image src={rzetelnaFirma} alt='rzetelna firma' />
        </Link>
        {BIZNETO_LOGOS.map((img) => (
          <Image src={img} alt='logo' key={img} />
        ))}
      </div>
      <div className='flex gap-16'>
        {SOCIAL_MEDIA_LOGOS.map((logo) => (
          <Image src={logo} alt='logo' key={logo} />
        ))}
      </div>
      <div className='opacity-50 text-[12px] leading-[15.6px] flex flex-col gap-2'>
        <Link target='_blank' href='/pdf/Regulamin.pdf'>
          {GRAY_TEXTS_ARR[0]}
        </Link>
        <Link target='_blank' href='/pdf/PolitykaPrywatnosci.pdf'>
          {GRAY_TEXTS_ARR[1]}
        </Link>
        <p>{GRAY_TEXTS_ARR[2]}</p>
        <span className='max-h-[15px] flex gap-2 '>
          <p>{GRAY_TEXTS_ARR[3]}</p>
          <Image
            src={biznetoDigital}
            className='w-[92.25px] h-[14px]'
            alt='logo'
          />
        </span>
      </div>
    </div>
  );
}
