import { Metadata } from "next";
import { cities } from "@/data/cities";
import Header from "@/components/financePage/header";
import CitiesGrid from "./CitiesGrid";

export const metadata: Metadata = {
  title: "Księgowość w Miastach Polski | Bizneto - Lokalne Usługi Księgowe",
  description: "Profesjonalne usługi księgowe w największych miastach Polski. Księgowość, doradztwo podatkowe i obsługa firm w Rzeszowie, Krakowie, Warszawie i innych miastach.",
  keywords: "księgowość miasta, biuro rachunkowe polska, księgowy lokalne usługi, doradztwo podatkowe miasta",
  openGraph: {
    title: "Księgowość w Miastach Polski | Bizneto",
    description: "Profesjonalne usługi księgowe w największych miastach Polski. Wybierz swoje miasto i poznaj naszą lokalną ofertę.",
    type: "website",
    locale: "pl_PL",
    url: "https://bizneto.pl/finanse/miasta",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bizneto.pl/finanse/miasta",
  },
};

export default function CitiesPage() {
  return (
    <>
      <Header />
      <section className="w-full h-full py-16">
        <div className="mx-auto w-10/12 md:items-start md:flex md:w-[89%] 2xl:w-[1440px] md:gap-2 lg:gap-0">
          <header className="md:w-screen md:flex md:sticky md:top-4 md:items-start md:gap-[1.7rem] lg:gap-[6rem]">
            <span className="mb-8">
              <span className="font-black text-2xl mr-2 text-[#FF3C50]">&bull;</span>
              <span className="text-[#FF3C50]">Lokalizacje</span>
            </span>
            <span className="font-medium">
              <h4 className="text-[28px] leading-8 mb-8 md:text-[40px] lg:text-[48px] lg:leading-[58.51px]">
                Księgowość w Miastach Polski
              </h4>
              <p className="text-lg text-gray-600 max-w-2xl mb-8">
                Świadczymy profesjonalne usługi księgowe w największych miastach Polski.
                Wybierz swoje miasto i poznaj naszą lokalną ofertę.
              </p>
            </span>
          </header>

          <CitiesGrid cities={cities} />
        </div>

        <div className="text-center mt-16 px-4">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nie widzisz swojego miasta?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Obsługujemy firmy z całej Polski. Skontaktuj się z nami, aby dowiedzieć się więcej
              o naszych usługach w Twojej lokalizacji.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Skontaktuj się z nami
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
