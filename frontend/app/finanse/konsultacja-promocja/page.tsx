import ContactInfo from "@/components/consultationPage/contactInfo";
import Form from "@/components/consultationPage/form";
import Header from "@/components/consultationPage/header";
import Navbar from "@/components/consultationPage/navbar";
import EmbededMap from "@/components/contactPage/embededMap";

export default function ConsultationPage() {
  return (
    <>
      <Navbar />
      <Header />
      <section className='max-w-[1440px] flex flex-col md:flex-row-reverse md:justify-between gap-12 w-10/12 py-8 md:py-16 mx-auto md:w-[89%]'>
        <Form discountInitiallyApplied />
        <ContactInfo />
      </section>
      <EmbededMap />
    </>
  );
}
