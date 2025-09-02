import { Metadata } from "next";
import Header from "@/components/financePage/header";
import ServiceDetail from "@/components/financePage/serviceDetail";
import TextWithBackground from "@/components/financePage/textWithBackground";
import FAQ from "@/components/offerItemPage/faq";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Przenieś Księgowość | Zmiana Biura Rachunkowego | Bizneto",
  description: "Potrzebujesz zmienić biuro rachunkowe? Pomożemy Ci płynnie przenieść księgowość. Bezpieczny transfer dokumentów, ciągłość obsługi, profesjonalne wsparcie.",
  keywords: "przenieś księgowość, zmiana biura rachunkowego, transfer księgowości, zmiana księgowego, przejęcie księgowości, płynne przeniesienie",
  openGraph: {
    title: "Przenieś Księgowość | Zmiana Biura Rachunkowego | Bizneto",
    description: "Bezpieczne i płynne przeniesienie księgowości z innego biura rachunkowego. Profesjonalne wsparcie, ciągłość obsługi, transfer dokumentów.",
    type: "website",
    locale: "pl_PL",
    url: "https://bizneto.pl/finanse/przenies-ksiegowosc",
    siteName: "Bizneto",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bizneto.pl/finanse/przenies-ksiegowosc",
  },
};

const serviceData = {
  id: "08",
  name: "Przenieś Księgowość",
  shortDescription: "Bezpieczne przeniesienie księgowości z innego biura",
  description: "Potrzebujesz zmienić biuro rachunkowe? Czekamy na Ciebie i jesteśmy gotowi do współpracy. Zapewniamy płynne przeniesienie księgowości bez zakłóceń w prowadzeniu dokumentacji finansowej Twojej firmy.",
  longDescription: `Zmiana biura rachunkowego to ważna decyzja, która nie musi być stresująca. Nasz doświadczony zespół specjalizuje się w płynnym przejmowaniu księgowości od innych biur rachunkowych. Zapewniamy pełną ciągłość obsługi księgowej, bezpieczny transfer dokumentów oraz profesjonalne wsparcie na każdym etapie procesu.

Rozumiemy, że każda firma ma swoje specyficzne potrzeby i wymagania. Dlatego nasz proces przeniesienia księgowości jest dostosowany indywidualnie do każdego klienta. Gwarantujemy, że transfer odbędzie się bez zakłóceń w bieżącej działalności Twojej firmy, a wszystkie obowiązki sprawozdawcze będą realizowane terminowo.`,
  
  features: [
    {
      name: "Bezpieczny transfer dokumentów",
      description: "Profesjonalne przejęcie i weryfikacja całej dokumentacji księgowej z poprzedniego biura"
    },
    {
      name: "Ciągłość obsługi księgowej", 
      description: "Zapewnienie nieprzerwanych usług księgowych podczas procesu przeniesienia"
    },
    {
      name: "Weryfikacja dokumentacji",
      description: "Szczegółowa analiza i weryfikacja poprawności prowadzonej dotychczas księgowości"
    },
    {
      name: "Płynne przejęcie obowiązków",
      description: "Przejęcie wszystkich terminów i obowiązków sprawozdawczych bez opóźnień"
    },
    {
      name: "Wsparcie w formalności",
      description: "Pomoc w załatwieniu wszystkich formalności związanych ze zmianą biura rachunkowego"
    },
    {
      name: "Optymalizacja procesów",
      description: "Analiza i usprawnienie procesów księgowych po przeniesieniu"
    }
  ],
  
  benefits: [
    "Brak przerw w obsłudze - ciągłość prowadzenia księgowości",
    "Bezpieczny transfer - profesjonalne przejęcie dokumentów", 
    "Terminowość - wszystkie obowiązki realizowane na czas",
    "Weryfikacja jakości - sprawdzimy poprawność dotychczasowej księgowości",
    "Optymalizacja kosztów - konkurencyjne ceny usług księgowych",
    "Profesjonalne wsparcie - doświadczony zespół księgowych"
  ],
  
  process: [
    {
      step: "1",
      title: "Konsultacja i wycena",
      description: "Omówimy Twoje potrzeby, przeanalizujemy zakres prac i przedstawimy ofertę"
    },
    {
      step: "2", 
      title: "Przejęcie dokumentacji",
      description: "Profesjonalnie przejmiemy całą dokumentację księgową z poprzedniego biura"
    },
    {
      step: "3",
      title: "Weryfikacja i analiza", 
      description: "Zweryfikujemy poprawność dokumentacji i przygotujemy plan dalszych działań"
    },
    {
      step: "4",
      title: "Rozpoczęcie obsługi",
      description: "Rozpoczniemy pełną obsługę księgową z zachowaniem wszystkich terminów"
    }
  ],
  
  pricing: {
    startingPrice: "Bezpłatnie",
    description: "Przeniesienie księgowości jest bezpłatne - płacisz tylko za bieżącą obsługę księgową",
    factors: [
      "Wielkość i złożoność firmy",
      "Stan dokumentacji księgowej", 
      "Zakres wymaganych prac weryfikacyjnych",
      "Pilność przeniesienia",
      "Dodatkowe usługi (optymalizacja, doradztwo)"
    ]
  },
  
  faq: [
    {
      question: "Czy przeniesienie księgowości jest płatne?",
      answer: "Nie, przeniesienie księgowości z innego biura rachunkowego jest bezpłatne. Płacisz tylko za bieżącą obsługę księgową według naszego cennika."
    },
    {
      question: "Jak długo trwa proces przeniesienia księgowości?",
      answer: "Standardowo proces przeniesienia trwa 7-14 dni roboczych, w zależności od złożoności dokumentacji. W pilnych przypadkach możemy przyspieszyć proces."
    },
    {
      question: "Czy mogę przenieść księgowość w trakcie roku obrotowego?",
      answer: "Tak, możesz dokonać zmiany prowadzenia księgowości w dowolnym momencie roku obrotowego. Zapewniamy ciągłość obsługi i terminowe wypełnienie wszystkich obowiązków."
    },
    {
      question: "Co jeśli poprzednie biuro nie chce wydać dokumentów?",
      answer: "Pomożemy Ci w odzyskaniu dokumentacji. Biuro rachunkowe ma obowiązek wydać dokumenty należące do klienta. W razie problemów udzielimy wsparcia prawnego."
    },
    {
      question: "Czy sprawdzicie poprawność dotychczasowej księgowości?",
      answer: "Tak, zawsze weryfikujemy poprawność przejmowanej dokumentacji księgowej. W przypadku wykrycia błędów pomożemy je skorygować i unikniemy problemów z urzędami."
    }
  ]
};

export default function TransferBookkeepingServicePage() {
  return (
    <>
      <ServiceSchema serviceData={serviceData} />
      <Header />
      <ServiceDetail serviceData={serviceData} />
      <TextWithBackground
        header='Gotowy na zmianę biura rachunkowego?'
        text='Skontaktuj się z nami i bezpiecznie przenieś swoją księgowość do profesjonalnych rąk.'
      />
      <FAQ FAQ={serviceData.faq.map(item => ({ Question: item.question, Answer: item.answer }))} />
      <TextWithBackground
        header='Rozpocznij współpracę z nami'
        text='Zaufaj naszemu doświadczeniu w przenoszeniu księgowości i ciesz się lepszą obsługą księgową.'
      />
    </>
  );
}
