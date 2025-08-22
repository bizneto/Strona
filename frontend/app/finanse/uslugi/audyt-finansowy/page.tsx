import { Metadata } from "next";
import Header from "@/components/financePage/header";
import ServiceDetail from "@/components/financePage/serviceDetail";
import TextWithBackground from "@/components/financePage/textWithBackground";
import FAQ from "@/components/financePage/faq";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Audyt Finansowy | Badanie Sprawozdań Finansowych | Bizneto",
  description: "Profesjonalny audyt finansowy: badanie sprawozdań finansowych, analiza finansowa, ocena ryzyka, rekomendacje. Niezależna weryfikacja sytuacji finansowej.",
  keywords: "audyt finansowy, badanie sprawozdań finansowych, analiza finansowa, ocena ryzyka, audytor, weryfikacja finansowa, kontrola finansowa",
  openGraph: {
    title: "Audyt Finansowy | Badanie Sprawozdań Finansowych | Bizneto",
    description: "Profesjonalny audyt finansowy i badanie sprawozdań. Niezależna weryfikacja sytuacji finansowej firmy przez doświadczonych audytorów.",
    type: "website",
    locale: "pl_PL",
    url: "https://bizneto.pl/finanse/uslugi/audyt-finansowy",
    siteName: "Bizneto",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bizneto.pl/finanse/uslugi/audyt-finansowy",
  },
};

const serviceData = {
  id: "05",
  name: "Audyt Finansowy",
  shortDescription: "Profesjonalne audyty i analizy",
  description: "Przeprowadzamy dokładne i rzetelne audyty finansowe, zapewniając pełne zrozumienie sytuacji firmy i identyfikując obszary wymagające poprawy. Nasze badania pomagają w podejmowaniu świadomych decyzji biznesowych.",
  longDescription: `Nasz audyt finansowy to kompleksowe badanie sytuacji finansowej firmy przeprowadzane przez doświadczonych audytorów. Oferujemy niezależną i obiektywną ocenę sprawozdań finansowych, systemów kontroli wewnętrznej oraz zgodności z obowiązującymi przepisami.

Audyt finansowy to nie tylko obowiązek prawny dla niektórych firm, ale przede wszystkim cenne narzędzie zarządcze. Pozwala zidentyfikować słabe punkty w organizacji, ocenić skuteczność procesów finansowych oraz otrzymać rekomendacje dotyczące poprawy efektywności działania.`,
  
  features: [
    {
      name: "Audyt sprawozdań finansowych",
      description: "Badanie rocznych sprawozdań finansowych zgodnie z krajowymi i międzynarodowymi standardami"
    },
    {
      name: "Analiza finansowa", 
      description: "Szczegółowa analiza wskaźników finansowych i ocena kondycji ekonomicznej firmy"
    },
    {
      name: "Ocena ryzyka",
      description: "Identyfikacja i ocena ryzyk finansowych oraz operacyjnych w działalności firmy"
    },
    {
      name: "Rekomendacje",
      description: "Praktyczne zalecenia dotyczące poprawy procesów finansowych i kontroli wewnętrznej"
    },
    {
      name: "Raport z audytu",
      description: "Szczegółowy raport zawierający wyniki badania i zalecenia dla zarządu"
    },
    {
      name: "Kontrola wewnętrzna",
      description: "Ocena skuteczności systemów kontroli wewnętrznej i procedur finansowych"
    }
  ],
  
  benefits: [
    "Obiektywna ocena - niezależne spojrzenie na finanse firmy",
    "Zgodność z prawem - spełnienie wymogów ustawowych", 
    "Identyfikacja ryzyk - wczesne wykrycie problemów",
    "Poprawa procesów - rekomendacje optymalizacyjne",
    "Budowanie zaufania - wiarygodność wobec inwestorów i banków",
    "Wsparcie decyzyjne - rzetelne dane do podejmowania decyzji"
  ],
  
  process: [
    {
      step: "1",
      title: "Planowanie",
      description: "Analiza specyfiki firmy, określenie zakresu audytu i opracowanie planu badania"
    },
    {
      step: "2", 
      title: "Badanie",
      description: "Przeprowadzenie szczegółowego audytu zgodnie z przyjętym planem i standardami"
    },
    {
      step: "3",
      title: "Analiza", 
      description: "Ocena wyników badania, identyfikacja nieprawidłowości i obszarów do poprawy"
    },
    {
      step: "4",
      title: "Raportowanie",
      description: "Przygotowanie raportu z audytu wraz z rekomendacjami i prezentacja wyników"
    }
  ],
  
  pricing: {
    startingPrice: "2000 zł",
    description: "Cena zależy od wielkości firmy, złożoności sprawozdań i zakresu audytu",
    factors: [
      "Wielkość i złożoność firmy",
      "Zakres audytu (pełny/ograniczony)", 
      "Liczba jednostek do zbadania",
      "Specyfika branży i działalności",
      "Terminy realizacji audytu"
    ]
  },
  
  faq: [
    {
      question: "Które firmy muszą przeprowadzać obowiązkowy audyt?",
      answer: "Obowiązkowy audyt dotyczy spółek akcyjnych, dużych spółek z o.o. (przychody powyżej 2,5 mln euro lub suma bilansowa powyżej 1,25 mln euro), banków, firm ubezpieczeniowych i innych podmiotów określonych w ustawie."
    },
    {
      question: "Jak długo trwa audyt finansowy?",
      answer: "Czas trwania zależy od wielkości firmy. Małe firmy: 1-2 tygodnie, średnie: 2-4 tygodnie, duże korporacje: 1-3 miesiące. Planowanie rozpoczynamy zwykle 2-3 miesiące przed terminem."
    },
    {
      question: "Czy audyt może wykryć oszustwa finansowe?",
      answer: "Audyt może zidentyfikować nieprawidłowości i sygnały ostrzegawcze, ale jego głównym celem nie jest wykrywanie oszustw. W przypadku podejrzeń prowadzimy pogłębione badania."
    },
    {
      question: "Jakie dokumenty są potrzebne do audytu?",
      answer: "Potrzebujemy: sprawozdania finansowe, księgi rachunkowe, dokumenty księgowe, umowy, protokoły z rad nadzorczych, dokumenty prawne oraz inne materiały związane z działalnością firmy."
    }
  ]
};

export default function FinancialAuditServicePage() {
  return (
    <>
      <ServiceSchema serviceData={serviceData} />
      <Header />
      <ServiceDetail serviceData={serviceData} />
      <TextWithBackground
        header='Potrzebujesz audytu finansowego?'
        text='Skontaktuj się z naszymi audytorami i zapewnij swojej firmie profesjonalne badanie finansowe.'
      />
      <FAQ customFAQ={serviceData.faq} />
      <TextWithBackground
        header='Rozpocznij audyt finansowy'
        text='Zaufaj naszym doświadczonym audytorom i uzyskaj obiektywną ocenę sytuacji finansowej swojej firmy.'
      />
    </>
  );
}
