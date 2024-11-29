import CaseStudy from "@/components/offerItemPage/caseStudy";
import Cooperation from "@/components/offerItemPage/cooperation";
import FAQ from "@/components/offerItemPage/faq";
import Project from "@/components/offerItemPage/project";
import Offer from "@/components/offerItemPage/offer";
import Process from "@/components/offerItemPage/process";
import Slider from "@/components/offerItemPage/slider";
import Value from "@/components/offerItemPage/value";
import Navbar from "@/components/digitalPage/digitalPageNavbar";
import { fetchOfferItemByName } from "@/utils/offerItem";
import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import { revalidatePath } from "next/cache";

interface IOfferItemPage {
  params: {
    offerParam: string;
  };
}

export default async function OfferItemPage({ params }: IOfferItemPage) {
  const { offerParam } = params;
  revalidatePath(`/digital/${offerParam}`);
  const data = await fetchOfferItemByName(offerParam);

  // temporary
  if (!data)
    return (
      <div className='w-screen h-screen flex flex-col gap-12 items-center justify-center'>
        <h1 className='text-[512px] leading-[460.8px]'>404</h1>
        <p className='text-[32px] leading-[35.2px] text-center w-[60%] '>
          Przepraszamy, ta strona nie istnieje lub została usunięta. Proszę,
          wróć do strony głównej.
        </p>
        <p className='text-[32px] leading-[35.2px] text-center w-[60%] '></p>
        <ButtonWithArrow
          text='Wróć'
          altHref='/digital'
          arrowColor='white'
          color='#FFF'
          altHeight={50}
          fillColor='#006EEF'
        />
      </div>
    );

  return (
    <>
      <Navbar UIColor='dark' />
      <Project Projekt={data.Projekt} />
      <Slider Slider={data.Slider} />
      <Value Value={data.Value} />
      <Offer Offer={data.Offer} />
      <Process Process={data.Process} />
      <FAQ FAQ={data.FAQ} />
      <CaseStudy />
      <Cooperation />
    </>
  );
}
