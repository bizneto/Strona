import ContactUs from "@/components/contactPage/contactUs";
import EmbededMap from "@/components/contactPage/embededMap";
import Header from "@/components/contactPage/header";
import FooterAlt from "@/components/shared/footerAlt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Potrzebujesz profesjonalnego wsparcia księgowego? Skontaktuj się z zespołem Bizneto, specjalistami w dziedzinie księgowości, podatków i doradztwa biznesowego.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactUs />
      <EmbededMap />
      <FooterAlt />
    </>
  );
}
