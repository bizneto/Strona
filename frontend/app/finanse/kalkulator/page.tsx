import { Metadata } from "next";
import Header from "@/components/financePage/header";
import Footer from "@/components/shared/footer";
import PricingCalculator from "./PricingCalculator";

export const metadata: Metadata = {
  title: "Kalkulator Usług Księgowych | Bizneto - Oblicz Cenę AI",
  description: "Profesjonalny kalkulator usług księgowych z AI. Oblicz cenę księgowości, doradztwa podatkowego i obsługi firmy. Natychmiastowa kalkulacja dopasowana do Twojej branży.",
  keywords: "kalkulator księgowy, cena usług księgowych, koszty księgowości, AI kalkulator, doradztwo podatkowe ceny, biuro rachunkowe cena",
  openGraph: {
    title: "Kalkulator Usług Księgowych | Bizneto",
    description: "Inteligentny kalkulator AI do obliczania cen usług księgowych. Otrzymaj spersonalizowaną ofertę w kilka minut.",
    type: "website",
    locale: "pl_PL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <PricingCalculator />
      </main>
      <Footer />
    </>
  );
}
