import FAQ from "@/components/financePage/faq";
import Header from "@/components/financePage/header";
import Mission from "@/components/financePage/mission";
import OurServices from "@/components/financePage/offer/ourServices";
import WhoWeServe from "@/components/financePage/offer/whoWeServe";
import Start from "@/components/financePage/start";
import TextWithBackground from "@/components/financePage/textWithBackground";

export default function Finance() {
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
    </>
  );
}
