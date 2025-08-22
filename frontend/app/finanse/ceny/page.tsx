import { Metadata } from "next";
import Header from "@/components/financePage/header";
import TextWithBackground from "@/components/financePage/textWithBackground";
import FAQ from "@/components/financePage/faq";

export const metadata: Metadata = {
  title: "Cennik Usług Księgowych | Ceny Księgowości | Biuro Rachunkowe - Bizneto",
  description: "Cennik usług księgowych ⭐ Przejrzyste ceny księgowości ⭐ Ile kosztuje księgowy? ⭐ Tanie usługi księgowe ⭐ Bezpłatna wycena ⭐ Kalkulator online",
  keywords: "cennik usług księgowych, ceny księgowości, ile kosztuje księgowy, tanie usługi księgowe, cennik biura rachunkowego, koszt księgowości, ceny doradztwa podatkowego, cennik kadry i płace",
  openGraph: {
    title: "Cennik Usług Księgowych | Ceny Księgowości | Biuro Rachunkowe - Bizneto",
    description: "Cennik usług księgowych ⭐ Przejrzyste ceny księgowości ⭐ Ile kosztuje księgowy? ⭐ Tanie usługi księgowe ⭐ Bezpłatna wycena",
    type: "website",
    locale: "pl_PL",
    url: "https://bizneto.pl/finanse/ceny",
    siteName: "Bizneto",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bizneto.pl/finanse/ceny",
  },
};

const pricingFAQ = [
  {
    question: "Ile kosztuje księgowy dla małej firmy?",
    answer: "Koszt księgowego dla małej firmy zależy od formy opodatkowania i liczby dokumentów. Dla firm na ryczałcie ceny zaczynają się od 150 zł miesięcznie, dla księgi przychodów i rozchodów od 250 zł, a dla pełnej księgowości od 400 zł miesięcznie."
  },
  {
    question: "Czy oferujecie tanie usługi księgowe?",
    answer: "Oferujemy konkurencyjne ceny przy zachowaniu najwyższej jakości usług. Nasze ceny są dostosowane do wielkości firmy i zakresu usług. Dodatkowo oferujemy rabaty dla długoterminowej współpracy i pakiety usług."
  },
  {
    question: "Co wpływa na cenę usług księgowych?",
    answer: "Cena usług księgowych zależy od: formy opodatkowania, liczby dokumentów miesięcznie, rodzaju działalności, liczby pracowników, dodatkowych usług (kadry, doradztwo), częstotliwości raportowania i złożoności operacji księgowych."
  },
  {
    question: "Czy można negocjować ceny usług księgowych?",
    answer: "Tak, ceny mogą być negocjowane w zależności od zakresu współpracy, długości umowy i liczby usług. Oferujemy rabaty dla firm rozpoczynających działalność, pakiety usług oraz specjalne ceny dla długoterminowej współpracy."
  },
  {
    question: "Jakie są dodatkowe koszty poza podstawową księgowością?",
    answer: "Podstawowa księgowość obejmuje prowadzenie ewidencji i deklaracje. Dodatkowe koszty mogą dotyczyć: sprawozdań finansowych, audytu, doradztwa podatkowego, obsługi kadrowej, reprezentacji w urzędach czy pilnych zleceń."
  }
];

export default function PricingPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="mx-auto w-10/12 md:w-[89%] 2xl:w-[1440px]">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cennik Usług Księgowych
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Przejrzyste ceny księgowości dostosowane do potrzeb Twojej firmy. 
              Sprawdź ile kosztuje profesjonalna obsługa księgowa.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="w-full py-16">
        <div className="mx-auto w-10/12 md:w-[89%] 2xl:w-[1440px]">
          <h2 className="text-3xl font-bold text-center mb-12">Ile Kosztuje Księgowy?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Ryczałt */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ryczałt</h3>
                <p className="text-gray-600">Dla małych firm</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">150 zł</span>
                  <span className="text-gray-600">/miesiąc</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Ewidencja przychodów
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Deklaracje VAT
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Deklaracje ryczałtowe
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Konsultacje telefoniczne
                </li>
              </ul>
            </div>

            {/* Księga Przychodów i Rozchodów */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Najpopularniejsze
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">KPiR</h3>
                <p className="text-gray-600">Dla średnich firm</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">250 zł</span>
                  <span className="text-gray-600">/miesiąc</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Księga przychodów i rozchodów
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Deklaracje VAT
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Rozliczenie roczne
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Doradztwo podatkowe
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Ewidencja środków trwałych
                </li>
              </ul>
            </div>

            {/* Pełna Księgowość */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pełna Księgowość</h3>
                <p className="text-gray-600">Dla dużych firm</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-600">400 zł</span>
                  <span className="text-gray-600">/miesiąc</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Pełna księgowość
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Sprawozdania finansowe
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Deklaracje VAT i CIT
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Analiza finansowa
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedykowany księgowy
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Dodatkowe Usługi - Cennik</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Kadry i Płace</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Do 5 pracowników</span>
                    <span className="font-semibold">100 zł/miesiąc</span>
                  </li>
                  <li className="flex justify-between">
                    <span>6-15 pracowników</span>
                    <span className="font-semibold">200 zł/miesiąc</span>
                  </li>
                  <li className="flex justify-between">
                    <span>16-30 pracowników</span>
                    <span className="font-semibold">350 zł/miesiąc</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Doradztwo i Inne</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Konsultacja podatkowa</span>
                    <span className="font-semibold">150 zł/godz</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Założenie firmy</span>
                    <span className="font-semibold">500 zł</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Przeniesienie księgowości</span>
                    <span className="font-semibold">Bezpłatnie</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Factors affecting price */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Co Wpływa na Ceny Księgowości?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-3xl mb-4">📊</div>
                <h4 className="font-semibold mb-2">Forma Opodatkowania</h4>
                <p className="text-sm text-gray-600">Ryczałt, KPiR, pełna księgowość</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-3xl mb-4">📄</div>
                <h4 className="font-semibold mb-2">Liczba Dokumentów</h4>
                <p className="text-sm text-gray-600">Faktury, paragony, umowy</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-3xl mb-4">👥</div>
                <h4 className="font-semibold mb-2">Liczba Pracowników</h4>
                <p className="text-sm text-gray-600">Obsługa kadrowo-płacowa</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow">
                <div className="text-3xl mb-4">🏢</div>
                <h4 className="font-semibold mb-2">Rodzaj Działalności</h4>
                <p className="text-sm text-gray-600">Handel, usługi, produkcja</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TextWithBackground
        header='Potrzebujesz wyceny?'
        text='Skorzystaj z naszego kalkulatora online lub skontaktuj się z nami po bezpłatną konsultację cenową.'
      />

      <FAQ customFAQ={pricingFAQ} />

      <TextWithBackground
        header='Tanie usługi księgowe wysokiej jakości'
        text='Konkurencyjne ceny, przejrzyste rozliczenia, brak ukrytych kosztów. Sprawdź nasze ceny już dziś!'
      />
    </>
  );
}
