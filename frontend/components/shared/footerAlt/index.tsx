"use client";

import logo from "@/public/svgs/biznetoLogo.svg";
import fbLogo from "@/public/svgs/fbLogo.svg";
import igLogo from "@/public/svgs/igLogo.svg";
import ttLogo from "@/public/svgs/ttLogo.svg";
import Image from "next/image";
import useGlobalContext from "@/hooks/useGlobalContext";
import Link from "next/link";
import rzetelnaFirma from "@/public/svgs/rzetelnaFirma.svg";
import { getCitiesForFooter } from "@/data/cities";

export default function FooterAlt() {
  const { isMobile } = useGlobalContext();
  const citiesForFooter = getCitiesForFooter();
  const WORKING_HOURS_STR = "Godziny otwarcia:";
  const CONTACT_DATA = [
    {
      title: "Kontakt",
      tel: "177 852 631",
      telAlt: "788 489 558",
      email: "biuro@bizneto.pl",
      adress: "Mieszka I 38",
      postalCodeAndCity: "35-308 Rzeszów",
      workingHrs: "7:00 - 15:00",
      nip: "NIP: 8133793363",
      regon: "REGON: 381513359",
      krs: "KRS: 0000752177",
    },
  ];
  const LOGOS = [fbLogo, igLogo, ttLogo];
  const GRAY_TEXTS_ARR_DESKTOP = [
    "© 2024 Bizneto Sp. z o.o. All rights reserved",
    "Polityka Prywatności",
    "Regulamin",
    "Design by: Arkadiusz Dykiel",
  ];

  const GRAY_TEXTS_ARR = [
    "Regulamin",
    "Polityka Prywatności",
    "© 2024 Bizneto Sp. z o.o. All rights reserved",
    "Design by: Arkadiusz Dykiel",
  ];

  return (
    <div className='w-full bg-black text-white overflow-hidden'>
      <div className={`w-10/12 md:w-[89%] 2xl:w-[1440px] mx-auto py-16`}>
        <div className='flex flex-col gap-7 text-[12px] leading-[14.63px]'>
          <div
            className={`flex md:items-center flex-col gap-8 md:flex-row md:justify-between lg:gap-0 md:gap-1`}
          >
            <span className='w-full max-w-[306px]'>
              <span className='flex justify-between '>
                <Image src={logo} alt='logo' />
                <Link
                  target='_blank'
                  href={"https://wizytowka.rzetelnafirma.pl/1RB990XXHZH6QSBO/"}
                >
                  <Image src={rzetelnaFirma} alt='rzetelna firma' />
                </Link>
              </span>
              <p className='hidden md:block mt-12 opacity-50 leading-[15.6px]'>
                {GRAY_TEXTS_ARR_DESKTOP[0]}
              </p>
            </span>
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
                  className={`flex flex-col md:flex-row gap-4 md:gap-22 lg:gap-24`}
                  key={title}
                >
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
                  <span className={`md:hidden`}>
                    <p> {nip} </p>
                    <p> {regon} </p>
                    <p> {krs} </p>
                  </span>
                </div>
              )
            )}

            {/* Sekcja z usługami */}
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-[16px] leading-[22.4px]">
                Nasze usługi
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/finanse/uslugi/ksiegowosc"
                  className="text-[12px] leading-[14.63px] hover:text-blue-400 transition-colors"
                >
                  Księgowość
                </Link>
                <Link
                  href="/finanse/uslugi/doradztwo-podatkowe"
                  className="text-[12px] leading-[14.63px] hover:text-blue-400 transition-colors"
                >
                  Doradztwo Podatkowe
                </Link>
                <Link
                  href="/finanse/uslugi/kadry-place"
                  className="text-[12px] leading-[14.63px] hover:text-blue-400 transition-colors"
                >
                  Kadry i Płace
                </Link>
                <Link
                  href="/finanse/uslugi/konsulting-biznesowy"
                  className="text-[12px] leading-[14.63px] hover:text-blue-400 transition-colors"
                >
                  Konsulting Biznesowy
                </Link>
                <Link
                  href="/finanse/uslugi/audyt-finansowy"
                  className="text-[12px] leading-[14.63px] hover:text-blue-400 transition-colors"
                >
                  Audyt Finansowy
                </Link>
                <Link
                  href="/finanse/uslugi/obsluga-prawna"
                  className="text-[12px] leading-[14.63px] hover:text-blue-400 transition-colors"
                >
                  Obsługa Prawna
                </Link>
                <Link
                  href="/finanse/otworz-firme"
                  className="text-[12px] leading-[14.63px] hover:text-blue-400 transition-colors"
                >
                  Otwórz Firmę
                </Link>
                <Link
                  href="/finanse/przenies-ksiegowosc"
                  className="text-[12px] leading-[14.63px] hover:text-blue-400 transition-colors"
                >
                  Przenieś Księgowość
                </Link>
                <Link
                  href="/finanse/ceny"
                  className="text-[12px] leading-[14.63px] hover:text-blue-400 transition-colors"
                >
                  Cennik Usług
                </Link>
                <Link
                  href="/finanse/uslugi"
                  className="text-[12px] leading-[14.63px] text-blue-400 hover:text-blue-300 transition-colors mt-2"
                >
                  Zobacz wszystkie usługi →
                </Link>
              </div>
            </div>

            {/* Sekcja z miastami */}
            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-[16px] leading-[22.4px]">
                Nasze miasta
              </h3>
              <div className="flex flex-col gap-3">
                {citiesForFooter.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/finanse/${city.slug}`}
                    className="text-[12px] leading-[14.63px] hover:text-blue-400 transition-colors"
                  >
                    Księgowość {city.name}
                  </Link>
                ))}
                <Link
                  href="/finanse/miasta"
                  className="text-[12px] leading-[14.63px] text-blue-400 hover:text-blue-300 transition-colors mt-2"
                >
                  Zobacz wszystkie miasta →
                </Link>
              </div>
            </div>

            <div>
              <div className={`flex gap-12 md:gap-11`}>
                {LOGOS.map((logo, index) => (
                  <Image
                    src={logo}
                    key={index}
                    className='size-[25.23px]'
                    alt='social media logo'
                  />
                ))}
              </div>
              <p className='hidden md:block mt-12 opacity-50 leading-[15.6px]'>
                {GRAY_TEXTS_ARR_DESKTOP[3]}
              </p>
            </div>
          </div>
          <div
            className={`flex flex-col gap-2 md:flex-row md:justify-between opacity-50 leading-[15.6px] mb-10`}
          >
            {isMobile && (
              <>
                <Link target='_blank' href='/pdf/Regulamin.pdf'>
                  {GRAY_TEXTS_ARR[0]}
                </Link>
                <Link target='_blank' href='/pdf/PolitykaPrywatnosci.pdf'>
                  {GRAY_TEXTS_ARR[1]}
                </Link>
                <p>{GRAY_TEXTS_ARR[2]}</p>
                <p>{GRAY_TEXTS_ARR[3]}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
