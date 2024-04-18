import ContactUs from "@/components/contact/contactUs";
import EmbededMap from "@/components/contact/embededMap";
import Header from "@/components/contact/header";
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
    </>
  );
}
