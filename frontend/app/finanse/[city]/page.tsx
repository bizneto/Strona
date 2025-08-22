import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityBySlug, getAllCitySlugs, getCityWithPreposition, CityData } from "@/data/cities";
import Header from "@/components/financePage/header";
import Mission from "@/components/financePage/mission";
import OurServices from "@/components/financePage/offer/ourServices";
import WhoWeServe from "@/components/financePage/offer/whoWeServe";
import Start from "@/components/financePage/start";
import TextWithBackground from "@/components/financePage/textWithBackground";
import FAQ from "@/components/financePage/faq";
import CityFinanceSchema from "@/components/seo/CityFinanceSchema";

interface CityFinancePageProps {
  params: {
    city: string;
  };
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }: CityFinancePageProps): Promise<Metadata> {
  const cityData = getCityBySlug(params.city);
  
  if (!cityData) {
    return {
      title: "Strona nie znaleziona",
    };
  }

  const title = `Biuro Rachunkowe ${cityData.name} | Księgowość | Doradztwo Podatkowe`;
  const description = `Biuro rachunkowe ${cityData.name} ⭐ Księgowość, doradztwo podatkowe ⭐ Obsługa firm ${getCityWithPreposition(cityData)} i woj. ${cityData.voivodeshipLocative} ⭐ 20 lat doświadczenia ⭐ Bezpłatna wycena`;

  return {
    title,
    description,
    keywords: [
      `biuro rachunkowe ${cityData.name}`,
      `księgowość ${cityData.name}`,
      `księgowy ${cityData.name}`,
      `doradztwo podatkowe ${cityData.name}`,
      `usługi księgowe ${cityData.name}`,
      `kadry i płace ${cityData.name}`,
      `obsługa księgowa ${cityData.name}`,
      `biuro księgowe ${cityData.name}`,
      ...cityData.localKeywords,
      `księgowość ${cityData.voivodeship}`,
      `biuro rachunkowe ${cityData.voivodeship}`,
      ...cityData.nearbyAreas.map(area => `księgowość ${area}`),
      ...cityData.nearbyAreas.map(area => `biuro rachunkowe ${area}`)
    ].join(", "),
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pl_PL",
      url: `https://bizneto.pl/finanse/${cityData.slug}`,
      siteName: "Bizneto",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://bizneto.pl/finanse/${cityData.slug}`,
    },
  };
}

export default function CityFinancePage({ params }: CityFinancePageProps) {
  const cityData = getCityBySlug(params.city);

  if (!cityData) {
    notFound();
  }

  return (
    <>
      <CityFinanceSchema cityData={cityData} />
      <Header cityData={cityData} />
      <Mission cityData={cityData} />
      <Start cityData={cityData} />
      <WhoWeServe cityData={cityData} />
      <TextWithBackground
        header={`Potrzebujesz księgowego ${getCityWithPreposition(cityData)}?`}
        text={`Umów się na konsultację z naszym ekspertem ${getCityWithPreposition(cityData)}, który odpowie na Twoje pytania dotyczące księgowości i podatków.`}
      />
      <OurServices cityData={cityData} />
      <FAQ cityData={cityData} />
      <TextWithBackground
        header={`Rozpocznij współpracę ${getCityWithPreposition(cityData)}`}
        text={`Dołącz do grona zadowolonych klientów ${getCityWithPreposition(cityData)} i województwie ${cityData.voivodeshipLocative}. Skorzystaj z naszego 20-letniego doświadczenia w obsłudze firm.`}
      />
    </>
  );
}
