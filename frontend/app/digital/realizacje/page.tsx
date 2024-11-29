import Header from "@/components/realizationsPage/Header";
import Navbar from "@/components/digitalPage/digitalPageNavbar";
import SortableCaseStudies from "@/components/realizationsPage/sortableCaseStudies";
import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";
import { getAllCaseStudiesData } from "@/utils/caseStudies";

export default async function Realizations() {
  const isMobile = await SSRMobileDetection();
  const caseStudiesList = await getAllCaseStudiesData();

  return (
    <>
      <Navbar UIColor='dark' />
      <Header />
      <div className='flex flex-col gap-8 w-[91%] md:w-[89%] md:pl-[177px]  2xl:w-[1440px] mx-auto'>
        <SortableCaseStudies
          caseStudiesList={caseStudiesList}
          isMobile={isMobile}
        />
      </div>
    </>
  );
}
