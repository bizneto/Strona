import { Metadata } from "next";
import Header from "@/components/financePage/header";
import ServicesOverview from "@/components/financePage/servicesOverview";
import TextWithBackground from "@/components/financePage/textWithBackground";
import FAQ from "@/components/financePage/faq";
import FinancePageSchema from "@/components/seo/FinancePageSchema";

export const metadata: Metadata = {
  title: "Usługi Księgowe i Finansowe | Bizneto - Pełna Oferta",
  description: "Kompleksowe usługi księgowe: księgowość, doradztwo podatkowe, kadry i płace, audyt finansowy, konsulting biznesowy. 20 lat doświadczenia w obsłudze firm.",
  keywords: "usługi księgowe, księgowość, doradztwo podatkowe, kadry i płace, audyt finansowy, konsulting biznesowy, obsługa prawna, biuro rachunkowe",
  openGraph: {
    title: "Usługi Księgowe i Finansowe | Bizneto",
    description: "Kompleksowe usługi księgowe dla firm. Księgowość, doradztwo podatkowe, kadry i płace, audyt finansowy. Profesjonalna obsługa od 20 lat.",
    type: "website",
    locale: "pl_PL",
    url: "https://bizneto.pl/finanse/uslugi",
    siteName: "Bizneto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usługi Księgowe i Finansowe | Bizneto",
    description: "Kompleksowe usługi księgowe dla firm. Księgowość, doradztwo podatkowe, kadry i płace, audyt finansowy.",
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
    canonical: "https://bizneto.pl/finanse/uslugi",
  },
};

export default function ServicesPage() {
  return (
    <>
      <FinancePageSchema />
      <Header />
      <ServicesOverview />
      <TextWithBackground
        header='Potrzebujesz więcej informacji?'
        text='Skontaktuj się z naszym ekspertem, który pomoże Ci wybrać odpowiednie usługi dla Twojej firmy.'
      />
      <FAQ />
      <TextWithBackground
        header='Rozpocznij współpracę'
        text='Wybierz usługi, które potrzebujesz i skorzystaj z naszego 20-letniego doświadczenia w obsłudze firm.'
      />
    </>
  );
}
