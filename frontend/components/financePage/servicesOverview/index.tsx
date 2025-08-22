"use client";

import Link from "next/link";
import { useRef } from "react";
import useGlobalContext from "@/hooks/useGlobalContext";
import useSectionVisibility from "@/utils/intersectionObserver";

const SERVICES_DATA = [
  {
    id: "01",
    slug: "ksiegowosc",
    header: "Księgowość",
    shortDescription: "Pełna obsługa księgowa Twojej firmy",
    description: "Zatrudniamy najlepszych specjalistów z dziedziny księgowości, którzy dbają o właściwą ewidencję księgową Twojej firmy. Oferujemy pełną księgowość oraz księgowość uproszczoną.",
    features: [
      "Pełna księgowość",
      "Księgowość uproszczona",
      "Ewidencja księgowa",
      "Sprawozdania finansowe",
      "Obsługa dokumentów",
      "Kontrola księgowa"
    ],
    price: "od 300 zł/mies."
  },
  {
    id: "02",
    slug: "doradztwo-podatkowe",
    header: "Doradztwo Podatkowe",
    shortDescription: "Optymalizacja podatkowa i doradztwo",
    description: "Współpracujemy z doradcami podatkowymi z dużym doświadczeniem, dzięki czemu dbamy o optymalizację podatkową naszych klientów.",
    features: [
      "Optymalizacja podatkowa",
      "Rozliczenia VAT",
      "Deklaracje podatkowe",
      "Doradztwo w zakresie podatków",
      "Reprezentacja przed urzędami",
      "Planowanie podatkowe"
    ],
    price: "od 150 zł/mies."
  },
  {
    id: "03",
    slug: "kadry-place",
    header: "Kadry i Płace",
    shortDescription: "Kompleksowa obsługa kadr i płac",
    description: "Sprawne zarządzanie kadrami i płacami to fundament stabilności firmy. Pozwól nam zadbać o te kluczowe obszary, zapewniając płynne funkcjonowanie Twojego przedsiębiorstwa.",
    features: [
      "Naliczanie wynagrodzeń",
      "Obsługa ZUS i US",
      "Umowy o pracę",
      "Umowy zlecenie",
      "Dokumentacja kadrowa",
      "Ewidencja czasu pracy"
    ],
    price: "od 50 zł/os./mies."
  },
  {
    id: "04",
    slug: "konsulting-biznesowy",
    header: "Konsulting Biznesowy",
    shortDescription: "Strategiczne doradztwo dla Twojej firmy",
    description: "Skuteczne zarządzanie finansami to klucz do sukcesu każdej firmy. Zaufaj naszej eksperckiej rachunkowości finansowej i skoncentruj się na rozwoju swojego biznesu.",
    features: [
      "Analiza finansowa",
      "Planowanie strategiczne",
      "Optymalizacja procesów",
      "Doradztwo biznesowe",
      "Wsparcie w rozwoju",
      "Analiza konkurencji"
    ],
    price: "od 200 zł/h"
  },
  {
    id: "05",
    slug: "audyt-finansowy",
    header: "Audyt Finansowy",
    shortDescription: "Profesjonalne audyty i analizy",
    description: "Przeprowadzamy dokładne i rzetelne audyty finansowe, zapewniając pełne zrozumienie sytuacji firmy i identyfikując obszary wymagające poprawy.",
    features: [
      "Audyt sprawozdań finansowych",
      "Analiza finansowa",
      "Ocena ryzyka",
      "Rekomendacje",
      "Raport z audytu",
      "Kontrola wewnętrzna"
    ],
    price: "od 2000 zł"
  },
  {
    id: "06",
    slug: "obsluga-prawna",
    header: "Obsługa Prawna",
    shortDescription: "Profesjonalne wsparcie prawne",
    description: "Nasi radcy prawni zapewniają profesjonalną obsługę, pomagając w rozwiązywaniu wszelkich kwestii prawnych i zapobieganiu potencjalnym problemom prawno-finansowym.",
    features: [
      "Doradztwo prawne",
      "Obsługa spraw sądowych",
      "Przygotowanie umów",
      "Reprezentacja prawna",
      "Wsparcie w negocjacjach",
      "Analiza prawna dokumentów"
    ],
    price: "od 250 zł/h"
  }
];

export default function ServicesOverview() {
  const { isMobile } = useGlobalContext();
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef);

  const SECTION_TITLE = "Usługi";
  const HEADER_TEXT = "Nasze usługi księgowe";

  return (
    <section className='w-full h-full py-16'>
      <div className={`mx-auto w-10/12 md:items-start md:flex md:w-[89%] 2xl:w-[1440px] md:gap-2 lg:gap-0`}>
        <header
          ref={sectionRef}
          className={`md:w-screen md:flex md:sticky md:top-4 md:items-start md:gap-[1.7rem] lg:gap-[6rem]`}
        >
          <span
            className={`${
              isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"
            } mb-8`}
          >
            <span className='font-black text-2xl mr-2'>&bull;</span>
            {SECTION_TITLE}
          </span>
          <span className={`font-medium`}>
            <h1 className='text-[28px] leading-8 mb-8 md:text-[40px] lg:text-[48px] lg:leading-[58.51px]'>
              {HEADER_TEXT}
            </h1>
          </span>
        </header>
        
        <div className={`flex flex-col w-full gap-6`}>
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: typeof SERVICES_DATA[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div className="border border-[#CFCFCF] rounded-[10px] p-6 hover:shadow-lg transition-shadow duration-300">
      {/* 1. Wiersz z nagłówkiem */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[#FF3C50] font-medium text-lg">{service.id}</span>
        <h2 className="text-[24px] md:text-[28px] font-medium text-[#FF3C50]">
          {service.header}
        </h2>
      </div>

      {/* 2. Wiersz z uzupełnieniem */}
      <div className="mb-4">
        <p className="text-gray-600 text-sm mb-2">{service.shortDescription}</p>
        <div className="text-[#FF3C50] font-semibold text-lg">
          {service.price}
        </div>
      </div>

      {/* 3. Wiersz z opisem */}
      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* 4. Wiersz z rozwinięciem */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-900 mb-3">Co obejmuje:</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#FF3C50] rounded-full flex-shrink-0"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* 5. Wiersz z przyciskiem */}
      <div>
        <Link
          href={`/finanse/uslugi/${service.slug}`}
          className="bg-[#FF3C50] text-white px-6 py-3 rounded-lg hover:bg-[#e63946] transition-colors duration-300 text-center font-medium inline-block"
        >
          Dowiedz się więcej
        </Link>
      </div>
    </div>
  );
}
