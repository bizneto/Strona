import FAQ from "@/components/financePage/faq";
import Header from "@/components/financePage/header";
import Mission from "@/components/financePage/mission";
import OurServices from "@/components/financePage/offer/ourServices";
import WhoWeServe from "@/components/financePage/offer/whoWeServe";
import Start from "@/components/financePage/start";
import TextWithBackground from "@/components/financePage/textWithBackground";
import CitiesSection from "@/components/financePage/citiesSection";
import CalculatorBanner from "@/components/financePage/calculatorBanner";
import FinancePageSchema from "@/components/seo/FinancePageSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biuro Rachunkowe | Księgowość | Usługi Księgowe - Bizneto",
  description: "Profesjonalne biuro rachunkowe ⭐ Księgowość, doradztwo podatkowe, kadry i płace ⭐ 20 lat doświadczenia ⭐ +300 firm ⭐ Bezpłatna konsultacja",
  keywords: "biuro rachunkowe, księgowość, usługi księgowe, doradztwo podatkowe, księgowy, kadry i płace, obsługa księgowa, biuro księgowe, rozliczenia podatkowe, ewidencja księgowa, księgowość online, księgowy dla firm",
  openGraph: {
    title: "Biuro Rachunkowe | Księgowość | Usługi Księgowe - Bizneto",
    description: "Profesjonalne biuro rachunkowe ⭐ Księgowość, doradztwo podatkowe, kadry i płace ⭐ 20 lat doświadczenia ⭐ +300 firm ⭐ Bezpłatna konsultacja",
    type: "website",
    locale: "pl_PL",
    url: "https://bizneto.pl/finanse",
    siteName: "Bizneto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biuro Rachunkowe | Księgowość | Usługi Księgowe - Bizneto",
    description: "Profesjonalne biuro rachunkowe ⭐ Księgowość, doradztwo podatkowe, kadry i płace ⭐ 20 lat doświadczenia ⭐ +300 firm",
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
    canonical: "https://bizneto.pl/finanse",
  },
};

export default function Finance() {
  return (
    <>
      <FinancePageSchema />
      <Header />
      <Mission />
      <Start />
      <CalculatorBanner />
      <WhoWeServe />
      <TextWithBackground
        header='Czego potrzebujesz?'
        text='Umów się na konsultację z naszym ekspertem, który odpowie na Twoje pytania.'
      />
      <OurServices />
      <FAQ />
      <CitiesSection />
      <TextWithBackground
        header='Rozpocznij współpracę'
        text='Rozpocznij z nami współpracę i skoncentruj się na rozwijaniu swojego biznesu, zyskając pewność, że Twoje finanse są w najlepszych rękach.'
      />
    </>
  );
}
