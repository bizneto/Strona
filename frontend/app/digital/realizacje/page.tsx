import Header from "@/components/realizationsPage/Header";
import CaseStudies from "@/components/shared/caseStudies";
import Navbar from "@/components/digitalPage/digitalPageNavbar";

export default function Realizations() {
  return (
    <>
      <Navbar UIColor='dark' />
      <Header />
      <div className='flex flex-col gap-8 w-[91%] md:w-[89%] md:pl-[177px]  2xl:w-[1440px] mx-auto'>
        <CaseStudies />
      </div>
    </>
  );
}
