import Image from "next/image";
import logo from "@/public/svgs/biznetoLogo.svg";
import fbLogo from "@/public/svgs/fbLogo.svg";
import igLogo from "@/public/svgs/igLogo.svg";
import ttLogo from "@/public/svgs/ttLogo.svg";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";

export default async function Footer() {
  const WORKING_HOURS_STR = "Godziny otwarcia:";
  const CONTACT_DATA = [
    {
      title: "Kontakt",
      tel: "660 693 405",
      email: "biuro@bizneto.pl",
      adress: "Mieszka I 38",
      postalCodeAndCity: "35-308 Rzeszów",
      workingHrs: "7:00 - 15:00",
      nip: "NIP: 8133793363",
      regon: "REGON: 381513359",
      krs: "KRS: 0000752177",
    },
  ];
  const ROUTES = [
    {
      title: "O nas",
      routesArr: [
        "Process współpracy",
        "Nasza misja",
        "Historia Bizneto",
        "Zespół",
        "Kariera",
        "Blog",
      ],
    },
    {
      title: "Klienci",
      routesArr: [
        "Załóż firmę",
        "JDG",
        "Spółki osobowe",
        "Spółki Kapitałowe",
        "Fundacje",
        "Stowarzyszenia",
      ],
    },
    {
      title: "Oferta",
      routesArr: [
        "Rachunkowość Finansowa",
        "Rozliczenia Podatkowe",
        "Kadry i Płace",
        "Audyt Finansowy",
        "Doradztwo Finansowe",
        "Obsługa prawna",
      ],
    },
    {
      title: "Produkty",
      routesArr: ["Bizneto Prime", "Polityka Rachunkowości"],
    },
  ];
  const RECRUITING = "Rekrutujemy";
  const LOGOS = [fbLogo, igLogo, ttLogo];
  const GRAY_TEXTS_ARR = [
    "Regulamin",
    "Polityka Prywatności",
    "© 2024 Bizneto Sp. z o.o. All rights reserved",
    "Design by: Arkadiusz Dykiel",
  ];
  const PAYMENTS_DATA = [
    "NIP: 8133793363",
    "REGON: 381513359",
    "KRS: 0000752177",
  ];
  const isMobile = SSRMobileDetection();

  return (
    <div className='w-full h-full bg-black text-white overflow-hidden'>
      <div className={`w-10/12 md:w-[89%] 2xl:w-[1440px] mx-auto py-16`}>
        <div className='flex flex-col gap-7 text-[12px] leading-[14.63px]'>
          <div
            className={`flex flex-col gap-4 md:flex-row md:justify-between lg:gap-0 md:gap-1`}
          >
            {CONTACT_DATA.map(
              ({
                title,
                tel,
                email,
                adress,
                workingHrs,
                postalCodeAndCity,
                nip,
                regon,
                krs,
              }) => (
                <div className={`flex flex-col  gap-4 md:gap-8`} key={title}>
                  <p className='font-medium text-[16px] leading-[22.4px]'>
                    {title}
                  </p>
                  <span className={`md:mt-6`}>
                    <p>t: {tel}</p>
                    <p>m: {email}</p>
                  </span>
                  <span>
                    <p> {adress} </p>
                    <p> {postalCodeAndCity} </p>
                    <p> {WORKING_HOURS_STR} </p>
                    <p> {workingHrs} </p>
                  </span>
                  <span className={`md:hidden`}>
                    <p> {nip} </p>
                    <p> {regon} </p>
                    <p> {krs} </p>
                  </span>
                </div>
              )
            )}
            {ROUTES.map(({ title, routesArr }, index) => (
              <div
                key={title}
                className={`flex flex-col gap-4 md:gap-6 lg:mr-6`}
              >
                <p className='font-medium text-[16px] leading-[22.4px]'>
                  {title}
                </p>
                <span className={`flex flex-col  gap-3 md:gap-5`}>
                  {routesArr.map((route, index) => {
                    return (
                      <p className='flex items-center' key={index}>
                        {route}
                        {route == "Kariera" && (
                          <button
                            disabled
                            className='border-[#17993B] text-[#17993B] border w-fit px-[10px] text-[12px] leading-[14.63px] ml-2 py-[5px] rounded-[50px] '
                          >
                            {RECRUITING}
                          </button>
                        )}
                      </p>
                    );
                  })}
                  {index === 3 && !isMobile && (
                    <div className='mt-8'>
                      {PAYMENTS_DATA.map((el, index) => (
                        <p key={index}>{el}</p>
                      ))}
                    </div>
                  )}
                </span>
              </div>
            ))}
          </div>

          <div
            className={`flex flex-col gap-6 md:flex-row md:gap-0  md:justify-between`}
          >
            <Image src={logo} alt='logo' />
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
          </div>
          <div
            className={`flex flex-col justify-between gap-2 md:flex-row md:gap-0 opacity-50 leading-[15.6px] mb-10`}
          >
            {isMobile ? (
              <>
                {GRAY_TEXTS_ARR.map((el, index) => (
                  <p key={index}>{el}</p>
                ))}
              </>
            ) : (
              <div className='justify-between flex w-full'>
                <span> {GRAY_TEXTS_ARR[2]}</span>
                <span className='lg:-mr-24'>{GRAY_TEXTS_ARR[1]}</span>
                {GRAY_TEXTS_ARR.filter(
                  (el) => el !== GRAY_TEXTS_ARR[2] && el !== GRAY_TEXTS_ARR[1]
                ).map((el, index) => (
                  <p key={index}> {el}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
