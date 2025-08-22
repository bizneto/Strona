import { Metadata } from "next";
import Header from "@/components/financePage/header";
import ServiceDetail from "@/components/financePage/serviceDetail";
import TextWithBackground from "@/components/financePage/textWithBackground";
import FAQ from "@/components/financePage/faq";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Księgowość | Usługi Księgowe | Biuro Rachunkowe - Bizneto",
  description: "Profesjonalne usługi księgowe ⭐ Pełna księgowość, ewidencja przychodów i rozchodów ⭐ Księgowość online ⭐ Konkurencyjne ceny ⭐ 20 lat doświadczenia",
  keywords: "księgowość, usługi księgowe, biuro rachunkowe, księgowy, ewidencja księgowa, obsługa księgowa, pełna księgowość, księgowość uproszczona, księgowość online, księgowy dla firm, rozliczenia podatkowe, ewidencja przychodów i rozchodów, sprawozdania finansowe",
  openGraph: {
    title: "Księgowość | Usługi Księgowe | Biuro Rachunkowe - Bizneto",
    description: "Profesjonalne usługi księgowe ⭐ Pełna księgowość, ewidencja przychodów i rozchodów ⭐ Księgowość online ⭐ Konkurencyjne ceny ⭐ 20 lat doświadczenia",
    type: "website",
    locale: "pl_PL",
    url: "https://bizneto.pl/finanse/uslugi/ksiegowosc",
    siteName: "Bizneto",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bizneto.pl/finanse/uslugi/ksiegowosc",
  },
};

const serviceData = {
  id: "01",
  name: "Księgowość",
  shortDescription: "Pełna obsługa księgowa Twojej firmy",
  description: "Zatrudniamy najlepszych specjalistów z dziedziny księgowości, którzy dbają o właściwą ewidencję księgową Twojej firmy. Oferujemy zarówno pełną księgowość, jak i księgowość uproszczoną, dostosowaną do potrzeb Twojego biznesu.",
  longDescription: `Nasza usługa księgowa to kompleksowe rozwiązanie dla firm każdej wielkości. Zapewniamy profesjonalną obsługę księgową, która pozwoli Ci skoncentrować się na rozwoju biznesu, mając pewność, że wszystkie aspekty finansowe są pod kontrolą.

Współpracujemy z doświadczonymi księgowymi, którzy na bieżąco śledzą zmiany w przepisach i zapewniają zgodność z obowiązującymi regulacjami. Nasze usługi obejmują zarówno tradycyjną księgowość, jak i nowoczesne rozwiązania cyfrowe.`,
  
  features: [
    {
      name: "Pełna księgowość",
      description: "Kompleksowa obsługa księgowa zgodna z ustawą o rachunkowości"
    },
    {
      name: "Księgowość uproszczona", 
      description: "Uproszczona forma ewidencji dla małych przedsiębiorców"
    },
    {
      name: "Ewidencja księgowa",
      description: "Prowadzenie ksiąg rachunkowych i dokumentacji finansowej"
    },
    {
      name: "Sprawozdania finansowe",
      description: "Przygotowanie rocznych sprawozdań finansowych"
    },
    {
      name: "Obsługa dokumentów",
      description: "Przetwarzanie i archiwizacja dokumentów księgowych"
    },
    {
      name: "Monitoring przepisów",
      description: "Śledzenie zmian w przepisach księgowych i podatkowych"
    }
  ],
  
  benefits: [
    "Oszczędność czasu - skoncentruj się na biznesie",
    "Zgodność z przepisami - zawsze aktualne regulacje", 
    "Profesjonalna obsługa - doświadczeni księgowi",
    "Bezpieczeństwo danych - nowoczesne systemy",
    "Stały kontakt - wsparcie w razie pytań",
    "Konkurencyjne ceny - przejrzysta wycena"
  ],
  
  process: [
    {
      step: "1",
      title: "Konsultacja",
      description: "Omawiamy potrzeby Twojej firmy i dobieramy odpowiedni pakiet usług"
    },
    {
      step: "2", 
      title: "Konfiguracja",
      description: "Przygotowujemy system księgowy i przekazujemy dokumentację"
    },
    {
      step: "3",
      title: "Obsługa bieżąca", 
      description: "Prowadzimy księgowość na bieżąco i przygotowujemy sprawozdania"
    },
    {
      step: "4",
      title: "Raportowanie",
      description: "Dostarczamy regularne raporty i analizy finansowe"
    }
  ],
  
  pricing: {
    startingPrice: "300 zł/mies.",
    description: "Cena zależy od wielkości firmy, liczby dokumentów i zakresu usług",
    factors: [
      "Forma prawna działalności",
      "Liczba dokumentów miesięcznie", 
      "Rodzaj prowadzonej działalności",
      "Dodatkowe usługi (VAT, handel zagraniczny)",
      "Liczba pracowników"
    ]
  },
  
  faq: [
    {
      question: "Jakie dokumenty potrzebuję do rozpoczęcia współpracy?",
      answer: "Do rozpoczęcia współpracy potrzebujemy: odpis z KRS/CEIDG, NIP, REGON, umowę najmu lokalu, dokumenty założycielskie oraz saldo początkowe kont bankowych."
    },
    {
      question: "Czy mogę przejść z innego biura rachunkowego?",
      answer: "Tak, pomożemy Ci w płynnym przejściu z innego biura. Przejmiemy dokumentację i zapewnimy ciągłość obsługi księgowej."
    },
    {
      question: "Jak często otrzymuję raporty finansowe?",
      answer: "Standardowo przygotowujemy miesięczne raporty finansowe. Na życzenie możemy dostarczać raporty częściej lub w innym zakresie."
    },
    {
      question: "Czy obsługujecie firmy z różnych branż?",
      answer: "Tak, mamy doświadczenie w obsłudze firm z różnych branż: handel, usługi, produkcja, IT, budownictwo, ochrona zdrowia i inne."
    }
  ]
};

export default function BookkeepingServicePage() {
  return (
    <>
      <ServiceSchema serviceData={serviceData} />
      <Header />
      <ServiceDetail serviceData={serviceData} />
      <TextWithBackground
        header='Potrzebujesz wyceny usług księgowych?'
        text='Skorzystaj z naszego kalkulatora lub umów się na bezpłatną konsultację z naszym ekspertem księgowym.'
      />
      <FAQ customFAQ={serviceData.faq} />
      <TextWithBackground
        header='Rozpocznij współpracę'
        text='Zaufaj naszemu doświadczeniu w księgowości i skoncentruj się na rozwoju swojego biznesu.'
      />
    </>
  );
}
