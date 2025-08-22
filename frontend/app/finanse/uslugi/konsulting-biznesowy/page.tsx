import { Metadata } from "next";
import Header from "@/components/financePage/header";
import ServiceDetail from "@/components/financePage/serviceDetail";
import TextWithBackground from "@/components/financePage/textWithBackground";
import FAQ from "@/components/financePage/faq";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Konsulting Biznesowy | Doradztwo Strategiczne | Bizneto",
  description: "Profesjonalny konsulting biznesowy: analiza finansowa, planowanie strategiczne, optymalizacja procesów, doradztwo biznesowe. Wsparcie w rozwoju firmy.",
  keywords: "konsulting biznesowy, doradztwo strategiczne, analiza finansowa, planowanie strategiczne, optymalizacja procesów, doradca biznesowy, rozwój firmy",
  openGraph: {
    title: "Konsulting Biznesowy | Doradztwo Strategiczne | Bizneto",
    description: "Profesjonalny konsulting biznesowy i doradztwo strategiczne. Pomożemy Ci rozwinąć firmę i zoptymalizować procesy biznesowe.",
    type: "website",
    locale: "pl_PL",
    url: "https://bizneto.pl/finanse/uslugi/konsulting-biznesowy",
    siteName: "Bizneto",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bizneto.pl/finanse/uslugi/konsulting-biznesowy",
  },
};

const serviceData = {
  id: "04",
  name: "Konsulting Biznesowy",
  shortDescription: "Strategiczne doradztwo dla Twojej firmy",
  description: "Skuteczne zarządzanie finansami to klucz do sukcesu każdej firmy. Zaufaj naszej eksperckiej rachunkowości finansowej i skoncentruj się na rozwoju swojego biznesu, otrzymując strategiczne wsparcie w podejmowaniu kluczowych decyzji.",
  longDescription: `Nasz konsulting biznesowy to kompleksowe wsparcie strategiczne dla firm dążących do wzrostu i optymalizacji działalności. Oferujemy głęboką analizę finansową, która pozwala zidentyfikować mocne i słabe strony organizacji oraz opracować skuteczne strategie rozwoju.

Współpracujemy z doświadczonymi konsultantami biznesowymi, którzy łączą wiedzę teoretyczną z praktycznym doświadczeniem w różnych branżach. Nasze usługi obejmują zarówno krótkoterminowe projekty optymalizacyjne, jak i długoterminowe planowanie strategiczne.`,
  
  features: [
    {
      name: "Analiza finansowa",
      description: "Szczegółowa analiza sytuacji finansowej firmy i identyfikacja obszarów do poprawy"
    },
    {
      name: "Planowanie strategiczne", 
      description: "Opracowanie długoterminowych strategii rozwoju dostosowanych do specyfiki branży"
    },
    {
      name: "Optymalizacja procesów",
      description: "Usprawnienie procesów biznesowych w celu zwiększenia efektywności i rentowności"
    },
    {
      name: "Doradztwo biznesowe",
      description: "Bieżące wsparcie w podejmowaniu strategicznych decyzji biznesowych"
    },
    {
      name: "Wsparcie w rozwoju",
      description: "Pomoc w ekspansji, wejściu na nowe rynki i rozwoju produktów/usług"
    },
    {
      name: "Analiza konkurencji",
      description: "Badanie rynku i konkurencji w celu wypracowania przewagi konkurencyjnej"
    }
  ],
  
  benefits: [
    "Strategiczne podejście - długoterminowa wizja rozwoju",
    "Doświadczeni konsultanci - eksperci z różnych branż", 
    "Indywidualne podejście - rozwiązania szyte na miarę",
    "Wzrost rentowności - optymalizacja kosztów i przychodów",
    "Przewaga konkurencyjna - unikalne strategie biznesowe",
    "Wsparcie w decyzjach - profesjonalne doradztwo na każdym etapie"
  ],
  
  process: [
    {
      step: "1",
      title: "Diagnoza",
      description: "Kompleksowa analiza obecnej sytuacji firmy, procesów i pozycji rynkowej"
    },
    {
      step: "2", 
      title: "Strategia",
      description: "Opracowanie dedykowanej strategii rozwoju i planu działań"
    },
    {
      step: "3",
      title: "Wdrożenie", 
      description: "Wsparcie w implementacji zaplanowanych rozwiązań i zmian"
    },
    {
      step: "4",
      title: "Monitoring",
      description: "Śledzenie postępów, analiza wyników i dostosowywanie strategii"
    }
  ],
  
  pricing: {
    startingPrice: "200 zł/h",
    description: "Cena zależy od zakresu projektu, złożoności analizy i czasu trwania współpracy",
    factors: [
      "Wielkość i złożoność firmy",
      "Zakres analizy i doradztwa", 
      "Czas trwania projektu",
      "Liczba obszarów do optymalizacji",
      "Częstotliwość konsultacji"
    ]
  },
  
  faq: [
    {
      question: "Jak długo trwa typowy projekt konsultingowy?",
      answer: "Czas trwania zależy od zakresu projektu. Krótkie analizy to 2-4 tygodnie, kompleksowe projekty strategiczne mogą trwać 3-6 miesięcy, a długoterminowe wsparcie nawet kilka lat."
    },
    {
      question: "Czy pracujecie z firmami z różnych branż?",
      answer: "Tak, mamy doświadczenie w różnych sektorach: handel, usługi, produkcja, IT, budownictwo, ochrona zdrowia. Dostosowujemy podejście do specyfiki każdej branży."
    },
    {
      question: "Jakie konkretne korzyści mogę oczekiwać?",
      answer: "Typowe rezultaty to: wzrost rentowności o 15-30%, optymalizacja kosztów o 10-25%, poprawa efektywności procesów, lepsze pozycjonowanie rynkowe i wzrost konkurencyjności."
    },
    {
      question: "Czy oferujecie wsparcie po zakończeniu projektu?",
      answer: "Tak, oferujemy różne formy wsparcia: okresowe przeglądy strategii, bieżące konsultacje, monitoring wskaźników oraz pomoc w implementacji nowych rozwiązań."
    }
  ]
};

export default function BusinessConsultingServicePage() {
  return (
    <>
      <ServiceSchema serviceData={serviceData} />
      <Header />
      <ServiceDetail serviceData={serviceData} />
      <TextWithBackground
        header='Potrzebujesz strategicznego doradztwa?'
        text='Skontaktuj się z naszym konsultantem biznesowym i opracuj strategię rozwoju swojej firmy.'
      />
      <FAQ customFAQ={serviceData.faq} />
      <TextWithBackground
        header='Rozpocznij transformację biznesową'
        text='Zaufaj naszemu doświadczeniu w konsultingu biznesowym i wyprowadź swoją firmę na nowy poziom.'
      />
    </>
  );
}
