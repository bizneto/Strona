import Image, { StaticImageData } from "next/image";
import arrowLeft from "@/public/svgs/blackArrowLeft.svg";
import HamburgerMenu from "../../headerHamburgerMenu";
import aboutUsImage from "@/public/images/mobileMenuImage1.png";
import offerImage from "@/public/images/mobileMenuImageOffer.png";
import clientsImage from "@/public/images/mobileMenuImageClients.png";
import productsImage from "@/public/images/mobileMenuImageProducts.png";
import { Dispatch, SetStateAction } from "react";

interface IMobileMenuSubPage {
  subPageData: {
    isVisible: boolean;
    routeOption: string;
  };
  setSubPageData: Dispatch<
    SetStateAction<{
      isVisible: boolean;
      routeOption: string;
    }>
  >;
}

interface IData {
  [key: string]: {
    title: string;
    subtext: string;
  }[];
}

interface IRouteToArticleData {
  [key: string]: {
    sectionTitle: string;
    articleTitle: string;
    articleText: string;
    thumbnail: StaticImageData;
  };
}

const routeToArticleData: IRouteToArticleData = {
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

const DATA: IData = {
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

export default function MobileMenuSubPage({
  subPageData,
  setSubPageData,
}: IMobileMenuSubPage) {
  const RETURN_TXT = "Cofnij";
  const optionsArray = DATA[subPageData.routeOption];
  const { sectionTitle, articleText, articleTitle, thumbnail } =
    routeToArticleData[subPageData.routeOption];

  function specialLabel(text: string, colors: string) {
    return (
      <p
        style={{ border: `1px solid ${colors}` }}
        className={`rounded-[50px] px-[10px] py-[5px] text-[12px] leading-[16.8px] font-medium text-center text-[${colors}]`}
      >
        {text}
      </p>
    );
  }

  function closeMenu() {
    setSubPageData({
      isVisible: false,
      routeOption: "",
    });
  }

  return (
    <div className='w-screen h-screen overflow-scroll bg-white z-20 flex flex-col'>
      <header>
        <span className='w-10/12 mx-auto flex justify-between items-center'>
          <span
            onClick={() => closeMenu()}
            className='h-[69px] flex gap-2 items-center  text-center'
          >
            <Image src={arrowLeft} className='size-[15px]' alt='return arrow' />
            <p className='text-[16px] leading-[22.4px] font-medium'>
              {RETURN_TXT}
            </p>
          </span>
          <span onClick={() => closeMenu()}>
            <HamburgerMenu />
          </span>
        </span>
      </header>
      <main className='w-full border-y-[1px] border-y-[#CFCFCF] '>
        <span className='flex flex-col gap-4 w-10/12 mx-auto items-start pt-2 pb-8'>
          {optionsArray.map(({ title, subtext }) => (
            <div key={title} className='px-6 py-3 flex flex-col gap-2'>
              <p className='font-medium flex gap-4 items-center text-[16px] leading-[22.4px]'>
                {title}
                {title === "Kariera" && specialLabel("Rekrutujemy", "#17993B")}
                {title === "Bizneto Prime™" &&
                  specialLabel("Wkrótce", "#FF3C50")}
              </p>
              <p className='text-[#505050] text-[14px] leading-[19.6px] font-normal'>
                {subtext}
              </p>
            </div>
          ))}
        </span>
      </main>
      <article className='w-10/12 mx-auto px-6 py-4 flex flex-col gap-[18px]'>
        <span>
          <span className='font-black text-2xl mr-2'>&bull;</span>
          {sectionTitle}
        </span>
        <Image src={thumbnail} alt='article thumbnail' className='rounded-lg' />
        <span className='w-[90%] pb-8'>
          <p className='font-medium text-[16px] leading-[22.4px] pb-2'>
            {articleTitle}
          </p>
          <p className='font-normal text-[14px] leading-[19.6px]'>
            {articleText}
          </p>
        </span>
      </article>
    </div>
  );
}
