import { Metadata } from "next";
import Header from "@/components/financePage/header";
import ServiceDetail from "@/components/financePage/serviceDetail";
import TextWithBackground from "@/components/financePage/textWithBackground";
import FAQ from "@/components/financePage/faq";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Otwórz Firmę | Rejestracja Działalności Gospodarczej | Bizneto",
  description: "Pomożemy Ci otworzyć firmę! Rejestracja działalności gospodarczej, wybór formy prawnej, załatwienie formalności. Kompleksowa obsługa od A do Z.",
  keywords: "otwórz firmę, rejestracja działalności gospodarczej, założenie firmy, CEIDG, KRS, forma prawna, działalność gospodarcza, formalności",
  openGraph: {
    title: "Otwórz Firmę | Rejestracja Działalności Gospodarczej | Bizneto",
    description: "Kompleksowa pomoc w otwieraniu firmy. Rejestracja działalności, wybór formy prawnej, załatwienie formalności. Przeprowadzimy Cię przez cały proces.",
    type: "website",
    locale: "pl_PL",
    url: "https://bizneto.pl/finanse/otworz-firme",
    siteName: "Bizneto",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bizneto.pl/finanse/otworz-firme",
  },
};

const serviceData = {
  id: "07",
  name: "Otwórz Firmę",
  shortDescription: "Kompleksowa pomoc w założeniu działalności gospodarczej",
  description: "Nie wiesz jak otworzyć firmę? Nie chcesz zajmować się formalnościami? Przeprowadzimy Cię przez cały proces i doradzimy na każdym etapie. Od wyboru formy prawnej po rejestrację w odpowiednich urzędach.",
  longDescription: `Założenie firmy to ważny krok w życiu każdego przedsiębiorcy. Proces ten może wydawać się skomplikowany, ale z naszą pomocą stanie się prosty i przejrzysty. Oferujemy kompleksową obsługę przy zakładaniu działalności gospodarczej - od doradztwa w wyborze formy prawnej, przez przygotowanie dokumentów, po rejestrację w odpowiednich urzędach.

Nasz zespół doświadczonych specjalistów zadba o wszystkie formalności, dzięki czemu możesz skupić się na planowaniu swojego biznesu. Pomożemy Ci wybrać optymalną formę opodatkowania, doradzimy w kwestii ubezpieczeń społecznych i zdrowotnych, a także przygotujemy wszystkie niezbędne dokumenty.`,
  
  features: [
    {
      name: "Wybór formy prawnej",
      description: "Doradztwo w wyborze optymalnej formy prowadzenia działalności gospodarczej"
    },
    {
      name: "Rejestracja w CEIDG/KRS", 
      description: "Kompleksowa obsługa rejestracji działalności w odpowiednich rejestrach"
    },
    {
      name: "Wybór formy opodatkowania",
      description: "Analiza i wybór najkorzystniejszej formy opodatkowania dla Twojej działalności"
    },
    {
      name: "Załatwienie formalności",
      description: "Przygotowanie i złożenie wszystkich wymaganych dokumentów i wniosków"
    },
    {
      name: "Doradztwo ubezpieczeniowe",
      description: "Pomoc w wyborze odpowiednich ubezpieczeń społecznych i zdrowotnych"
    },
    {
      name: "Wsparcie po rejestracji",
      description: "Pomoc w pierwszych krokach prowadzenia działalności i obsłudze księgowej"
    }
  ],
  
  benefits: [
    "Oszczędność czasu - załatwimy wszystkie formalności za Ciebie",
    "Profesjonalne doradztwo - wybierzemy optymalną formę działalności", 
    "Bezpieczeństwo prawne - wszystko zgodnie z przepisami",
    "Kompleksowa obsługa - od pomysłu do działającej firmy",
    "Wsparcie eksperckie - doświadczeni specjaliści na każdym etapie",
    "Przejrzysty proces - będziesz wiedzieć co się dzieje na każdym etapie"
  ],
  
  process: [
    {
      step: "1",
      title: "Konsultacja",
      description: "Omówimy Twoje plany biznesowe i doradzimy optymalną formę działalności"
    },
    {
      step: "2", 
      title: "Przygotowanie dokumentów",
      description: "Przygotujemy wszystkie niezbędne dokumenty i wnioski rejestracyjne"
    },
    {
      step: "3",
      title: "Rejestracja", 
      description: "Złożymy dokumenty w odpowiednich urzędach i przeprowadzimy proces rejestracji"
    },
    {
      step: "4",
      title: "Przekazanie dokumentów",
      description: "Otrzymasz wszystkie dokumenty potwierdzające rejestrację i instrukcje dalszych kroków"
    }
  ],
  
  pricing: {
    startingPrice: "500 zł",
    description: "Cena zależy od formy prawnej działalności i zakresu usług",
    factors: [
      "Forma prawna działalności (JDG, sp. z o.o., S.A.)",
      "Rodzaj prowadzonej działalności", 
      "Liczba wspólników/udziałowców",
      "Dodatkowe usługi (logo, strona www)",
      "Pilność realizacji"
    ]
  },
  
  faq: [
    {
      question: "Jak długo trwa proces rejestracji firmy?",
      answer: "Rejestracja działalności gospodarczej w CEIDG trwa 1-3 dni robocze. Rejestracja spółki z o.o. w KRS może potrwać 7-14 dni roboczych, w zależności od kompletności dokumentów."
    },
    {
      question: "Jakie dokumenty potrzebuję do założenia firmy?",
      answer: "Podstawowe dokumenty to: dowód osobisty, PESEL, adres zamieszkania. W przypadku spółek dodatkowo potrzebny jest akt notarialny, umowa spółki i inne dokumenty - wszystko przygotujemy za Ciebie."
    },
    {
      question: "Czy pomożecie mi wybrać kod PKD?",
      answer: "Tak, pomożemy Ci wybrać odpowiednie kody PKD (Polska Klasyfikacja Działalności) dopasowane do specyfiki Twojego biznesu. To bardzo ważne dla przyszłej działalności firmy."
    },
    {
      question: "Czy mogę zmienić formę opodatkowania po założeniu firmy?",
      answer: "Tak, ale są określone terminy. Zmiana na podatek liniowy lub ryczałt musi być zgłoszona do końca stycznia roku podatkowego. Pomożemy Ci zaplanować optymalną strategię podatkową."
    }
  ]
};

export default function StartBusinessServicePage() {
  return (
    <>
      <ServiceSchema serviceData={serviceData} />
      <Header />
      <ServiceDetail serviceData={serviceData} />
      <TextWithBackground
        header='Gotowy na założenie firmy?'
        text='Skontaktuj się z nami i rozpocznij swoją przygodę przedsiębiorczą z profesjonalnym wsparciem.'
      />
      <FAQ customFAQ={serviceData.faq} />
      <TextWithBackground
        header='Rozpocznij swoją działalność'
        text='Zaufaj naszemu doświadczeniu w zakładaniu firm i skup się na planowaniu swojego biznesu.'
      />
    </>
  );
}
