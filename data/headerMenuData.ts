import { StaticImageData } from "next/image";
import aboutUsImage from "@/public/images/mobileMenuImage1.png";
import offerImage from "@/public/images/mobileMenuImageOffer.png";
import clientsImage from "@/public/images/mobileMenuImageClients.png";
import productsImage from "@/public/images/mobileMenuImageProducts.png";

export interface ISubPageData {
  [key: string]: {
    title: string;
    subtext: string;
  }[];
}

export interface IRouteToArticleData {
  [key: string]: IArticleData;
}

export interface IArticleData {
  sectionTitle: string;
  articleTitle: string;
  articleText: string;
  thumbnail: StaticImageData;
}

export const routeToArticleData: IRouteToArticleData = {
  "O nas": {
    sectionTitle: "Proces współpracy",
    articleTitle: "Jak wygląda współpraca z nami?",
    articleText:
      "Współpracę z naszymi klientami opieramy na budowaniu trwałych relacji i zaufaniu.",
    thumbnail: aboutUsImage,
  },
  Oferta: {
    sectionTitle: "Spotkanie konsultacyjne",
    articleTitle: "Odpowiemy na Twoje pytania?",
    articleText:
      "Umów się na konsultację z naszym ekspertem, który odpowie na Twoje pytania.",
    thumbnail: offerImage,
  },
  Klienci: {
    sectionTitle: "Załóż firmę",
    articleTitle: "Chcesz otworzyć firmę?",
    articleText:
      "Nie przejmuj się formalnościami. Przeprowadzimy Cię przez cały proces i doradzimy na każdym etapie.",
    thumbnail: clientsImage,
  },
  Produkty: {
    sectionTitle: "Bizneto Prime™",
    articleTitle: "Jakość zrodzona z pasji",
    articleText:
      "Zostań partnerem programu zrzeszającego najlepsze biura rachunkowe w Polsce. ",
    thumbnail: productsImage,
  },
};

export const SubPageData: ISubPageData = {
  "O nas": [
    {
      title: "Zespół",
      subtext: "Kadra, gotowa do obsługi Twoich potrzeb",
    },
    {
      title: "Struktura organizacyjna",
      subtext: "Zobacz jak współpracujemy z naszymi klientami",
    },
    {
      title: "Nasza misja",
      subtext: "Dowiedz się jakie wartości kierują naszą pracą",
    },
    {
      title: "Kariera",
      subtext: "Sprawdź aktualne oferty pracy i dołącz do naszego zespołu",
    },
    {
      title: "Historia Bizneto",
      subtext: "Poznaj nasze kroki na drodze do sukcesu",
    },
    {
      title: "Blog",
      subtext: "Przeczytaj artykuły i porady z dziedziny biznesu i finansów ",
    },
  ],
  Oferta: [
    {
      title: "Konsulting Biznesowy",
      subtext: "Przeanalizujemy aktualną sytuację w Twojej firmie",
    },
    {
      title: "Księgowość",
      subtext: "Zadbamy o finanse Twojej firmy",
    },
    {
      title: "Doradztwo Podatkowe",
      subtext: "Doradzamy przedsiębiorcom jak optymalizować podatki",
    },
    {
      title: "Audyt Finansowy",
      subtext: "Przeprowadzamy audyty finansowe przedsiębiorstw",
    },
    {
      title: "Kadry i Płace",
      subtext: "Świadczymy obsługę kadrowo-płacową",
    },
    {
      title: "Obsługa Prawna",
      subtext: "Zajmujemy się obsługą prawną firm",
    },
  ],
  Klienci: [
    {
      title: "Załóż firmę",
      subtext: "Pomożemy ci otworzyć nową firmę",
    },
    {
      title: "Spółki Kapitałowe",
      subtext: "Dynamiczny rozwój i stabilność działania",
    },
    {
      title: "Stowarzyszenia",
      subtext: "Ludzie ze wspólnym celem i wartościami",
    },
    {
      title: "Fundacje",
      subtext: "Organizacja dedykująca się działalności społecznej",
    },
    {
      title: "Spółki Osobowe",
      subtext: "Biznes oparty na partnerstwie i zaufaniu",
    },
    {
      title: "JDG",
      subtext: "Przedsięwzięcie, oparte na pasji i determinacji",
    },
  ],
  Produkty: [
    {
      title: "Bizneto Prime™",
      subtext: "Autorski program certyfikacji biur rachunkowych",
    },
    {
      title: "Polityka Rachunkowości",
      subtext: "Stworzona z mylą o Twojej firmie",
    },
    {
      title: "Szkolenia i Kursy",
      subtext: "Poznaj naszą ofertę szkoleniową",
    },
  ],
};
