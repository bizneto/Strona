"use client";

import useGlobalContext from "@/hooks/useGlobalContext";
import OfferSegment from "../offerSegment";
import CalculatorSegment from "../calculatorSegment";
import { useRef } from "react";
import useSectionVisibility from "@/utils/intersectionObserver";
import { CityData } from "@/data/cities";
import Link from "next/link";

interface OurServicesProps {
  cityData?: CityData;
}

export default function OurServices({ cityData }: OurServicesProps) {
  const { isMobile } = useGlobalContext();
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef);

  const SEGMENT_DATA = [
    {
      id: "01",
      header: "Konsulting Biznesowy",
      text: "Skuteczne zarządzanie finansami to klucz do sukcesu każdej firmy. Zaufaj naszej eksperckiej rachunkowości finansowej i skoncentruj się na rozwoju swojego biznesu.",
      link: "/finanse/uslugi/konsulting-biznesowy",
    },
    {
      id: "02",
      header: "Księgowość",
      text: "Zatrudniamy najlepszych specjalistów z dziedziny księgowości, którzy dbają o właściwą ewidencję księgową Twojej firmy.",
      link: "/finanse/uslugi/ksiegowosc",
    },
    {
      id: "03",
      header: "Doradztwo Podatkowe",
      text: "Współpracujemy z doradcami podatkowymi z dużym doświadczeniem, dzięki czemu dbamy o optymalizację podatkową naszych klientów.",
      link: "/finanse/uslugi/doradztwo-podatkowe",
    },
    {
      id: "04",
      header: "Audyt Finansowy",
      text: "Przeprowadza dokładne i rzetelne audyty finansowe, zapewniając pełne zrozumienie sytuacji firmy i identyfikując obszary wymagające poprawy.",
      link: "/finanse/uslugi/audyt-finansowy",
    },
    {
      id: "05",
      header: "Kadry i Płace",
      text: "Sprawne zarządzanie kadrami i płacami to fundament stabilności firmy. Pozwól nam zadbać o te kluczowe obszary, zapewniając płynne funkcjonowanie Twojego przedsiębiorstwa.",
      link: "/finanse/uslugi/kadry-place",
    },
    {
      id: "06",
      header: "Obsługa prawna",
      text: "Nasi radcy prawni zapewniają profesjonalną obsługę, pomagając w rozwiązywaniu wszelkich kwestii prawnych i zapobieganiu potencjalnym problemom prawno-finansowym.",
      link: "/finanse/uslugi/obsluga-prawna",
    },
    {
      id: "07",
      header: "Blog Finansowy",
      text: "Praktyczne porady, najnowsze informacje o zmianach w prawie podatkowym i księgowości. Dowiedz się więcej o prowadzeniu firmy z naszymi ekspertami.",
      link: "/finanse/blog",
    },
  ];
  const SECTION_TITLE = "Oferta";
  const HEADER_TEXT = "Nasze usługi";

  return (
    <section className='w-full h-full py-16 '>
      <div
        className={`mx-auto w-10/12 md:items-start md:flex md:w-[89%] 2xl:w-[1440px] md:gap-2 lg:gap-0`}
      >
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
          <span ref={sectionRef} className={`font-medium`}>
            <h4 className='text-[28px] leading-8 mb-8 md:text-[40px]  lg:text-[48px] lg:leading-[58.51px]'>
              {HEADER_TEXT}
            </h4>
          </span>
        </header>
        <div className={`flex flex-col w-full gap-6`}>
          {SEGMENT_DATA.map(({ header, id, text, link }, index) => (
            <OfferSegment
              key={index}
              header={header}
              index={index}
              id={id}
              text={text}
              link={link}
              isMobile={isMobile}
              mobileHeight={26}
              desktopWidth={649}
              desktopHeight={300}
            />
          ))}

          {/* AI Calculator Segment */}
          <CalculatorSegment
            isMobile={isMobile}
            index={SEGMENT_DATA.length}
            mobileHeight={26}
          />

          {/* Link do wszystkich usług */}
          <div className="text-center mt-8">
            <Link
              href="/finanse/uslugi"
              className="inline-flex items-center gap-2 bg-[#FF3C50] text-white px-8 py-3 rounded-lg hover:bg-[#e63946] transition-colors duration-300 font-medium"
            >
              Zobacz wszystkie usługi
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
