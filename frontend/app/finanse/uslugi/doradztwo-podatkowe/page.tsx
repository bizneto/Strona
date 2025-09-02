import { Metadata } from "next";
import Header from "@/components/financePage/header";
import ServiceDetail from "@/components/financePage/serviceDetail";
import TextWithBackground from "@/components/financePage/textWithBackground";
import FAQ from "@/components/offerItemPage/faq";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Doradztwo Podatkowe | Optymalizacja Podatkowa | Bizneto",
  description: "Profesjonalne doradztwo podatkowe: optymalizacja podatkowa, rozliczenia VAT, deklaracje podatkowe, reprezentacja przed urzędami. Doświadczeni doradcy podatkowi.",
  keywords: "doradztwo podatkowe, optymalizacja podatkowa, rozliczenia VAT, deklaracje podatkowe, doradca podatkowy, podatki, reprezentacja przed urzędami",
  openGraph: {
    title: "Doradztwo Podatkowe | Optymalizacja Podatkowa | Bizneto",
    description: "Profesjonalne doradztwo podatkowe i optymalizacja podatkowa. Doświadczeni doradcy podatkowi pomogą Ci zaoszczędzić na podatkach.",
    type: "website",
    locale: "pl_PL",
    url: "https://bizneto.pl/finanse/uslugi/doradztwo-podatkowe",
    siteName: "Bizneto",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bizneto.pl/finanse/uslugi/doradztwo-podatkowe",
  },
};

const serviceData = {
  id: "02",
  name: "Doradztwo Podatkowe",
  shortDescription: "Optymalizacja podatkowa i doradztwo",
  description: "Współpracujemy z doradcami podatkowymi z dużym doświadczeniem, dzięki czemu dbamy o optymalizację podatkową naszych klientów. Pomagamy w minimalizacji obciążeń podatkowych przy zachowaniu pełnej zgodności z prawem.",
  longDescription: `Nasze doradztwo podatkowe to kompleksowe wsparcie w zakresie wszystkich aspektów podatkowych prowadzenia działalności gospodarczej. Współpracujemy z doświadczonymi doradcami podatkowymi, którzy na bieżąco śledzą zmiany w przepisach i potrafią skutecznie optymalizować obciążenia podatkowe.

Oferujemy nie tylko bieżące doradztwo, ale także strategiczne planowanie podatkowe, które pozwala na długoterminową optymalizację kosztów podatkowych. Nasze usługi obejmują zarówno podatki bezpośrednie, jak i pośrednie, w tym skomplikowane rozliczenia VAT.`,
  
  features: [
    {
      name: "Optymalizacja podatkowa",
      description: "Legalne metody minimalizacji obciążeń podatkowych przy zachowaniu zgodności z prawem"
    },
    {
      name: "Rozliczenia VAT", 
      description: "Kompleksowa obsługa VAT, w tym handel zagraniczny i procedury szczególne"
    },
    {
      name: "Deklaracje podatkowe",
      description: "Przygotowanie i składanie wszystkich rodzajów deklaracji podatkowych"
    },
    {
      name: "Doradztwo w zakresie podatków",
      description: "Bieżące konsultacje i planowanie strategiczne w obszarze podatkowym"
    },
    {
      name: "Reprezentacja przed urzędami",
      description: "Profesjonalna reprezentacja podczas kontroli i postępowań podatkowych"
    },
    {
      name: "Planowanie podatkowe",
      description: "Długoterminowe strategie optymalizacji podatkowej dla Twojego biznesu"
    }
  ],
  
  benefits: [
    "Znaczne oszczędności podatkowe - legalna optymalizacja",
    "Bezpieczeństwo prawne - zgodność z przepisami", 
    "Doświadczeni doradcy - specjaliści z uprawniami",
    "Bieżące wsparcie - odpowiedzi na pytania podatkowe",
    "Reprezentacja w urzędach - profesjonalna obrona",
    "Planowanie strategiczne - długoterminowa optymalizacja"
  ],
  
  process: [
    {
      step: "1",
      title: "Analiza sytuacji",
      description: "Szczegółowa analiza Twojej sytuacji podatkowej i identyfikacja możliwości optymalizacji"
    },
    {
      step: "2", 
      title: "Plan optymalizacji",
      description: "Opracowanie strategii podatkowej dostosowanej do specyfiki Twojego biznesu"
    },
    {
      step: "3",
      title: "Wdrożenie rozwiązań", 
      description: "Implementacja zaplanowanych działań optymalizacyjnych i bieżące wsparcie"
    },
    {
      step: "4",
      title: "Monitoring i aktualizacje",
      description: "Regularne przeglądy i dostosowywanie strategii do zmian w przepisach"
    }
  ],
  
  pricing: {
    startingPrice: "150 zł/mies.",
    description: "Cena zależy od złożoności sytuacji podatkowej i zakresu usług",
    factors: [
      "Rodzaj prowadzonej działalności",
      "Skala obrotów firmy", 
      "Złożoność rozliczeń VAT",
      "Liczba rodzajów podatków",
      "Częstotliwość konsultacji"
    ]
  },
  
  faq: [
    {
      question: "Czy optymalizacja podatkowa jest legalna?",
      answer: "Tak, optymalizacja podatkowa to legalne działania mające na celu minimalizację obciążeń podatkowych przy pełnym zachowaniu zgodności z prawem. Różni się od unikania podatków, które jest nielegalne."
    },
    {
      question: "Jakie oszczędności mogę osiągnąć dzięki optymalizacji podatkowej?",
      answer: "Oszczędności zależą od specyfiki działalności, ale często wynoszą od 10% do 30% obciążeń podatkowych. W niektórych przypadkach mogą być jeszcze większe."
    },
    {
      question: "Czy pomożecie mi w przypadku kontroli podatkowej?",
      answer: "Tak, oferujemy pełną reprezentację podczas kontroli podatkowych. Nasi doradcy przygotują dokumentację i będą reprezentować Cię przed organami podatkowymi."
    },
    {
      question: "Jak często powinienem korzystać z doradztwa podatkowego?",
      answer: "Zalecamy stałe wsparcie, szczególnie przy podejmowaniu ważnych decyzji biznesowych. Minimalne konsultacje to raz na kwartał, ale optymalne jest wsparcie na bieżąco."
    }
  ]
};

export default function TaxAdvisoryServicePage() {
  return (
    <>
      <ServiceSchema serviceData={serviceData} />
      <Header />
      <ServiceDetail serviceData={serviceData} />
      <TextWithBackground
        header='Potrzebujesz optymalizacji podatkowej?'
        text='Skontaktuj się z naszym doradcą podatkowym i dowiedz się, jak możesz zaoszczędzić na podatkach.'
      />
      <FAQ FAQ={serviceData.faq.map(item => ({ Question: item.question, Answer: item.answer }))} />
      <TextWithBackground
        header='Rozpocznij optymalizację podatkową'
        text='Zaufaj naszym doświadczonym doradcom podatkowym i zacznij oszczędzać na podatkach już dziś.'
      />
    </>
  );
}
