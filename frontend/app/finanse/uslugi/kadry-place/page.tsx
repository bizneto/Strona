import { Metadata } from "next";
import Header from "@/components/financePage/header";
import ServiceDetail from "@/components/financePage/serviceDetail";
import TextWithBackground from "@/components/financePage/textWithBackground";
import FAQ from "@/components/financePage/faq";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Kadry i Płace | Obsługa Kadrowo-Płacowa | Bizneto",
  description: "Kompleksowa obsługa kadr i płac: naliczanie wynagrodzeń, obsługa ZUS i US, umowy o pracę, umowy zlecenie, dokumentacja kadrowa. Profesjonalna obsługa HR.",
  keywords: "kadry i płace, obsługa kadrowa, naliczanie wynagrodzeń, ZUS, US, umowy o pracę, umowy zlecenie, dokumentacja kadrowa, HR",
  openGraph: {
    title: "Kadry i Płace | Obsługa Kadrowo-Płacowa | Bizneto",
    description: "Kompleksowa obsługa kadr i płac dla firm. Naliczanie wynagrodzeń, obsługa ZUS i US, dokumentacja kadrowa. Profesjonalne usługi HR.",
    type: "website",
    locale: "pl_PL",
    url: "https://bizneto.pl/finanse/uslugi/kadry-place",
    siteName: "Bizneto",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bizneto.pl/finanse/uslugi/kadry-place",
  },
};

const serviceData = {
  id: "03",
  name: "Kadry i Płace",
  shortDescription: "Kompleksowa obsługa kadr i płac",
  description: "Sprawne zarządzanie kadrami i płacami to fundament stabilności firmy. Pozwól nam zadbać o te kluczowe obszary, zapewniając płynne funkcjonowanie Twojego przedsiębiorstwa i zgodność z przepisami prawa pracy.",
  longDescription: `Nasza obsługa kadrowo-płacowa to kompleksowe rozwiązanie dla firm każdej wielkości. Zajmujemy się wszystkimi aspektami zarządzania zasobami ludzkimi - od naliczania wynagrodzeń, przez obsługę ZUS i Urzędu Skarbowego, po prowadzenie pełnej dokumentacji kadrowej.

Zapewniamy profesjonalną obsługę wszystkich rodzajów umów - od umów o pracę, przez umowy zlecenie, po umowy o dzieło. Nasze usługi obejmują również doradztwo w zakresie prawa pracy i optymalizacji kosztów związanych z zatrudnieniem.`,
  
  features: [
    {
      name: "Naliczanie wynagrodzeń",
      description: "Precyzyjne naliczanie płac, premii, dodatków i wszystkich składników wynagrodzenia"
    },
    {
      name: "Obsługa ZUS i US", 
      description: "Kompleksowa obsługa Zakładu Ubezpieczeń Społecznych i Urzędu Skarbowego"
    },
    {
      name: "Umowy o pracę",
      description: "Przygotowanie, obsługa i rozliczanie umów o pracę zgodnie z Kodeksem Pracy"
    },
    {
      name: "Umowy zlecenie",
      description: "Obsługa umów zlecenie, umów o dzieło i innych form współpracy"
    },
    {
      name: "Dokumentacja kadrowa",
      description: "Prowadzenie akt osobowych, ewidencji czasu pracy i dokumentacji kadrowej"
    },
    {
      name: "Doradztwo HR",
      description: "Doradztwo w zakresie prawa pracy, optymalizacji zatrudnienia i procedur HR"
    }
  ],
  
  benefits: [
    "Oszczędność czasu - skoncentruj się na biznesie",
    "Zgodność z prawem - aktualna znajomość przepisów", 
    "Terminowość - płace i składki zawsze na czas",
    "Bezpieczeństwo danych - ochrona danych osobowych",
    "Profesjonalne doradztwo - wsparcie w sprawach HR",
    "Optymalizacja kosztów - efektywne zarządzanie płacami"
  ],
  
  process: [
    {
      step: "1",
      title: "Analiza potrzeb",
      description: "Omówienie specyfiki zatrudnienia i dostosowanie systemu do Twoich potrzeb"
    },
    {
      step: "2", 
      title: "Przejęcie dokumentacji",
      description: "Transfer dokumentacji kadrowej i konfiguracja systemu płacowego"
    },
    {
      step: "3",
      title: "Obsługa bieżąca", 
      description: "Miesięczne naliczanie płac, obsługa ZUS, US i prowadzenie dokumentacji"
    },
    {
      step: "4",
      title: "Raportowanie",
      description: "Regularne raporty płacowe, analizy kosztów i doradztwo optymalizacyjne"
    }
  ],
  
  pricing: {
    startingPrice: "50 zł/os./mies.",
    description: "Cena za osobę miesięcznie, zależy od liczby pracowników i zakresu usług",
    factors: [
      "Liczba zatrudnionych osób",
      "Rodzaje umów (praca, zlecenie, dzieło)", 
      "Złożoność systemu wynagrodzeń",
      "Częstotliwość wypłat",
      "Dodatkowe usługi HR"
    ]
  },
  
  faq: [
    {
      question: "Czy obsługujecie wszystkie rodzaje umów?",
      answer: "Tak, obsługujemy umowy o pracę, umowy zlecenie, umowy o dzieło, umowy B2B oraz wszystkie inne formy współpracy zgodnie z obowiązującymi przepisami."
    },
    {
      question: "Kiedy są wypłacane wynagrodzenia?",
      answer: "Wynagrodzenia wypłacamy zgodnie z ustalonym harmonogramem - zazwyczaj do 10. dnia następnego miesiąca lub w terminach określonych w umowach o pracę."
    },
    {
      question: "Czy pomożecie w optymalizacji kosztów zatrudnienia?",
      answer: "Tak, oferujemy doradztwo w zakresie optymalizacji kosztów zatrudnienia, wyboru najkorzystniejszych form współpracy i wykorzystania dostępnych ulg."
    },
    {
      question: "Jak zabezpieczacie dane osobowe pracowników?",
      answer: "Stosujemy najwyższe standardy ochrony danych osobowych zgodnie z RODO. Wszystkie dane są szyfrowane i przechowywane w bezpiecznych systemach."
    }
  ]
};

export default function PayrollServicePage() {
  return (
    <>
      <ServiceSchema serviceData={serviceData} />
      <Header />
      <ServiceDetail serviceData={serviceData} />
      <TextWithBackground
        header='Potrzebujesz obsługi kadr i płac?'
        text='Skontaktuj się z nami i przekaż obsługę kadrowo-płacową w profesjonalne ręce.'
      />
      <FAQ customFAQ={serviceData.faq} />
      <TextWithBackground
        header='Rozpocznij współpracę'
        text='Zaufaj naszemu doświadczeniu w obsłudze kadr i płac i zapewnij swojej firmie profesjonalne wsparcie HR.'
      />
    </>
  );
}
