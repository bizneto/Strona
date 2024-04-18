import Blog from "@/components/blog";
import FAQ from "@/components/faq";
import Header from "@/components/header";
import Mission from "@/components/mission";
import OurServices from "@/components/offer/ourServices";
import WhoWeServe from "@/components/offer/whoWeServe";
import Start from "@/components/start";
import TextWithBackground from "@/components/textWithBackground";

export default function Home() {
  return (
    <>
      <Header />
      <Mission />
      <Start />
      <WhoWeServe />
      <TextWithBackground
        header='Czego potrzebujesz?'
        text='Umów się na konsultację z naszym ekspertem, który odpowie na Twoje pytania.'
      />
      <OurServices />
      <FAQ />
      <TextWithBackground
        header='Rozpocznij współpracę'
        text='Rozpocznij z nami współpracę i skoncentruj się na rozwijaniu swojego biznesu, zyskując pewność, że Twoje finanse są w najlepszych rękach.'
      />
      {/* <Blog /> */}
    </>
  );
}
