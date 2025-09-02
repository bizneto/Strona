import { Metadata } from "next";
import Header from "@/components/financePage/header";
import ServiceDetail from "@/components/financePage/serviceDetail";
import TextWithBackground from "@/components/financePage/textWithBackground";
import FAQ from "@/components/offerItemPage/faq";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Obsługa Prawna | Doradztwo Prawne dla Firm | Bizneto",
  description: "Profesjonalna obsługa prawna firm: doradztwo prawne, obsługa spraw sądowych, przygotowanie umów, reprezentacja prawna. Radcowie prawni z doświadczeniem.",
  keywords: "obsługa prawna, doradztwo prawne, radca prawny, sprawy sądowe, umowy, reprezentacja prawna, prawo gospodarcze, prawo pracy",
  openGraph: {
    title: "Obsługa Prawna | Doradztwo Prawne dla Firm | Bizneto",
    description: "Kompleksowa obsługa prawna firm. Doradztwo prawne, reprezentacja w sądach, przygotowanie umów. Doświadczeni radcowie prawni.",
    type: "website",
    locale: "pl_PL",
    url: "https://bizneto.pl/finanse/uslugi/obsluga-prawna",
    siteName: "Bizneto",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bizneto.pl/finanse/uslugi/obsluga-prawna",
  },
};

const serviceData = {
  id: "06",
  name: "Obsługa Prawna",
  shortDescription: "Profesjonalne wsparcie prawne",
  description: "Nasi radcowie prawni zapewniają profesjonalną obsługę, pomagając w rozwiązywaniu wszelkich kwestii prawnych i zapobieganiu potencjalnym problemom prawno-finansowym. Oferujemy kompleksowe wsparcie prawne dostosowane do potrzeb Twojej firmy.",
  longDescription: `Nasza obsługa prawna to kompleksowe wsparcie prawne dla firm każdej wielkości. Współpracujemy z doświadczonymi radcami prawnymi specjalizującymi się w prawie gospodarczym, prawie pracy, prawie cywilnym oraz innych dziedzinach istotnych dla prowadzenia działalności gospodarczej.

Oferujemy zarówno bieżące doradztwo prawne, jak i reprezentację w sprawach sądowych. Nasze usługi obejmują przygotowanie dokumentów prawnych, analizę umów, wsparcie w negocjacjach oraz pomoc w rozwiązywaniu sporów. Dbamy o to, aby nasze wsparcie było nie tylko profesjonalne, ale także praktyczne i dostosowane do realiów biznesowych.`,
  
  features: [
    {
      name: "Doradztwo prawne",
      description: "Bieżące konsultacje prawne w zakresie prowadzenia działalności gospodarczej"
    },
    {
      name: "Obsługa spraw sądowych", 
      description: "Reprezentacja przed sądami powszechnymi, administracyjnymi i gospodarczymi"
    },
    {
      name: "Przygotowanie umów",
      description: "Sporządzanie i analiza umów handlowych, umów o pracę i innych dokumentów prawnych"
    },
    {
      name: "Reprezentacja prawna",
      description: "Profesjonalna reprezentacja w negocjacjach, postępowaniach i sporach"
    },
    {
      name: "Wsparcie w negocjacjach",
      description: "Pomoc prawna podczas negocjacji kontraktów i umów biznesowych"
    },
    {
      name: "Compliance prawny",
      description: "Zapewnienie zgodności działalności firmy z obowiązującymi przepisami prawa"
    }
  ],
  
  benefits: [
    "Bezpieczeństwo prawne - minimalizacja ryzyka prawnego",
    "Doświadczeni prawnicy - specjaliści z różnych dziedzin", 
    "Kompleksowa obsługa - wszystkie aspekty prawne w jednym miejscu",
    "Szybka reakcja - natychmiastowe wsparcie w pilnych sprawach",
    "Optymalizacja kosztów - efektywne zarządzanie sprawami prawnymi",
    "Strategiczne podejście - długoterminowe planowanie prawne"
  ],
  
  process: [
    {
      step: "1",
      title: "Analiza potrzeb",
      description: "Identyfikacja potrzeb prawnych firmy i obszarów wymagających wsparcia"
    },
    {
      step: "2", 
      title: "Plan działania",
      description: "Opracowanie strategii prawnej i harmonogramu działań"
    },
    {
      step: "3",
      title: "Realizacja", 
      description: "Wdrożenie zaplanowanych działań prawnych i bieżące wsparcie"
    },
    {
      step: "4",
      title: "Monitoring",
      description: "Śledzenie zmian prawnych i dostosowywanie strategii do nowych przepisów"
    }
  ],
  
  pricing: {
    startingPrice: "250 zł/h",
    description: "Cena zależy od złożoności sprawy, rodzaju usługi prawnej i czasu poświęconego na sprawę",
    factors: [
      "Rodzaj i złożoność sprawy prawnej",
      "Czas poświęcony na sprawę", 
      "Specjalizacja prawna wymagana",
      "Pilność sprawy",
      "Zakres reprezentacji prawnej"
    ]
  },
  
  faq: [
    {
      question: "W jakich sprawach prawnych możecie pomóc?",
      answer: "Obsługujemy sprawy z zakresu prawa gospodarczego, prawa pracy, prawa cywilnego, prawa administracyjnego, windykacji należności, sporów handlowych oraz compliance prawnego."
    },
    {
      question: "Czy oferujecie stałą obsługę prawną firmy?",
      answer: "Tak, oferujemy abonamentową obsługę prawną, która obejmuje bieżące konsultacje, przeglądy umów, monitoring zmian prawnych oraz wsparcie w codziennych sprawach prawnych."
    },
    {
      question: "Jak szybko możecie zareagować w pilnych sprawach?",
      answer: "W pilnych sprawach prawnych reagujemy w ciągu 24 godzin. Dla stałych klientów oferujemy całodobową linię wsparcia prawnego w sytuacjach kryzysowych."
    },
    {
      question: "Czy reprezentujecie firmy w sądach?",
      answer: "Tak, nasze kancelarie partnerskie reprezentują firmy przed wszystkimi rodzajami sądów: powszechnymi, gospodarczymi, administracyjnymi oraz w postępowaniach egzekucyjnych."
    }
  ]
};

export default function LegalServicePage() {
  return (
    <>
      <ServiceSchema serviceData={serviceData} />
      <Header />
      <ServiceDetail serviceData={serviceData} />
      <TextWithBackground
        header='Potrzebujesz wsparcia prawnego?'
        text='Skontaktuj się z naszymi radcami prawnymi i zabezpiecz swoją firmę przed ryzykiem prawnym.'
      />
      <FAQ FAQ={serviceData.faq.map(item => ({ Question: item.question, Answer: item.answer }))} />
      <TextWithBackground
        header='Rozpocznij współpracę prawną'
        text='Zaufaj naszym doświadczonym prawnikom i zapewnij swojej firmie kompleksową obsługę prawną.'
      />
    </>
  );
}
