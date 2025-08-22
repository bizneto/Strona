"use client";

import Link from "next/link";
import { useState } from "react";
import darkArrow from "@/public/svgs/blackArrowRight.svg";
import Image from "next/image";

interface CityData {
  slug: string;
  name: string;
  nameLocative: string;
  voivodeship: string;
  voivodeshipLocative: string;
  population: number;
  description: string;
  localKeywords: string[];
  nearbyAreas: string[];
  priority: number;
  active: boolean;
}

interface CitiesGridProps {
  cities: CityData[];
}

interface CityCardProps {
  city: CityData;
  index: number;
}

function CityCard({ city, index }: CityCardProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  
  return (
    <div className="border border-[#CFCFCF] flex w-full h-full gap-8 rounded-[10px] px-6 py-5">
      <div className="flex flex-col items-start justify-between h-[320px]">
        <p className="font-medium text-[16px] leading-[22.4px] text-[#FF3C50]">
          {String(index + 1).padStart(2, '0')}
        </p>
      </div>
      <div className="h-[320px] relative flex flex-col justify-start">
        <span className="font-medium text-[#FF3C50]">
          <h5 className="text-[28px] leading-[30.8px]">{city.name}</h5>
        </span>
        <p className="font-normal text-[16px] leading-[22.4px] mb-4 mt-4">
          {city.description}
        </p>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium">Województwo:</span> {city.voivodeship} | 
            <span className="font-medium"> Populacja:</span> {city.population.toLocaleString()} mieszkańców
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Obsługujemy również:</span> {city.nearbyAreas.slice(0, 3).join(", ")}
            {city.nearbyAreas.length > 3 && "..."}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {city.localKeywords.slice(0, 2).map((keyword: string, keywordIndex: number) => (
            <span
              key={keywordIndex}
              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
            >
              {keyword}
            </span>
          ))}
        </div>
        
        <Link className="w-full h-full" href={`/finanse/${city.slug}`}>
          <div
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
            className="absolute bottom-2 left-0 flex items-center w-[150px] pr-[6.71px] gap-2"
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

export default function CitiesGrid({ cities }: CitiesGridProps) {
  return (
    <div className="flex flex-col w-full gap-6">
      {cities.map((city, index) => (
        <CityCard
          key={city.slug}
          city={city}
          index={index}
        />
      ))}
    </div>
  );
}
