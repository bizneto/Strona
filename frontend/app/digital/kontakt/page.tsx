import ContactForm from "@/components/digitalContactPage/contactForm";
import Header from "@/components/digitalContactPage/header";
import Tiles from "@/components/digitalContactPage/tiles";
import Navbar from "@/components/digitalPage/digitalPageNavbar";

export default function Contact() {
  return (
    <>
      <Navbar UIColor='dark' />
      <Header />
      <ContactForm />
      <Tiles />
    </>
  );
}
