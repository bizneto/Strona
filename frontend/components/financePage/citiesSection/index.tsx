"use client";

import Link from "next/link";
import { getCitiesForFooter } from "@/data/cities";
import useGlobalContext from "@/hooks/useGlobalContext";
import { useState } from "react";
import darkArrow from "@/public/svgs/blackArrowRight.svg";
import Image from "next/image";

export default function CitiesSection() {
  const cities = getCitiesForFooter();
  const { isMobile } = useGlobalContext();

  return (
    <section className="w-full h-full py-16">
      <div className="mx-auto w-10/12 md:items-start md:flex md:w-[89%] 2xl:w-[1440px] md:gap-2 lg:gap-0">
        <header className="md:w-screen md:flex md:sticky md:top-4 md:items-start md:gap-[1.7rem] lg:gap-[6rem]">
          <span className="mb-8">
            <span className="font-black text-2xl mr-2 text-[#FF3C50]">&bull;</span>
            <span className="text-[#FF3C50]">Lokalizacje</span>
          </span>
          <span className="font-medium">
            <h4 className="text-[28px] leading-8 mb-8 md:text-[40px] lg:text-[48px] lg:leading-[58.51px]">
              Księgowość w Twoim mieście
            </h4>
          </span>
        </header>

        <div className="flex flex-col w-full gap-6">
          {cities.map((city, index) => (
            <CityCard
              key={city.slug}
              city={city}
              index={index}
              isMobile={isMobile}
            />
          ))}

          {/* Dodatkowy kafelek "Zobacz wszystkie miasta" */}
          <div className="border border-[#CFCFCF] flex w-full h-full gap-8 rounded-[10px] px-6 py-5">
            <div className="flex flex-col items-start justify-between h-[217px]">
              <p className="font-medium text-[16px] leading-[22.4px] text-[#FF3C50]">
                +
              </p>
            </div>
            <div className="h-[217px] relative flex flex-col justify-start">
              <span className="font-medium text-[#FF3C50]">
                <h5 className="text-[28px] leading-[30.8px]">Wszystkie miasta</h5>
              </span>
              <p className="font-normal text-[16px] leading-[22.4px] mb-10 mt-4">
                Świadczymy profesjonalne usługi księgowe w największych miastach Polski.
                Zobacz pełną listę naszych lokalizacji.
              </p>
              <Link className="w-full h-full" href="/finanse/miasta">
                <div className="absolute bottom-2 left-0 flex items-center w-[100px] pr-[6.71px] gap-2 group">
                  <p className="font-medium text-[16px] leading-[22.4px] text-center">
                    Zobacz wszystkie
                  </p>
                  <div className="w-full overflow-hidden">
                    <Image
                      src={darkArrow}
                      alt="link arrow"
                      className="w-[15.25px] h-[16.19px] group-hover:animate-[moveRightToLeft_0.6s_ease-in]"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CityCardProps {
  city: any;
  index: number;
  isMobile: boolean;
}

function CityCard({ city, index, isMobile }: CityCardProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className="border border-[#CFCFCF] flex w-full h-full gap-8 rounded-[10px] px-6 py-5">
      <div className="flex flex-col items-start justify-between h-[217px]">
        <p className="font-medium text-[16px] leading-[22.4px] text-[#FF3C50]">
          {String(index + 1).padStart(2, '0')}
        </p>
      </div>
      <div className="h-[217px] relative flex flex-col justify-start">
        <span className="font-medium text-[#FF3C50]">
          <h5 className="text-[28px] leading-[30.8px]">{city.name}</h5>
        </span>
        <p className="font-normal text-[16px] leading-[22.4px] mb-10 mt-4">
          {city.description}
        </p>
        <div className="text-sm text-gray-600 mb-4">
          <span className="font-medium">Województwo:</span> {city.voivodeship} |
          <span className="font-medium"> Populacja:</span> {city.population.toLocaleString()} mieszkańców
        </div>
        <Link className="w-full h-full" href={`/finanse/${city.slug}`}>
          <div
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            className="absolute bottom-2 left-0 flex items-center w-[100px] pr-[6.71px] gap-2"
          >
            <p className="font-medium text-[16px] leading-[22.4px] text-center">
              Zobacz ofertę
            </p>
            <div className="w-full overflow-hidden">
              <Image
                src={darkArrow}
                alt="link arrow"
                className={`${
                  isMouseOver && "animate-[moveRightToLeft_0.6s_ease-in]"
                } w-[15.25px] h-[16.19px]`}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
