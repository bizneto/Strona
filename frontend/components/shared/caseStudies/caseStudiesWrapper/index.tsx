import { SSRMobileDetection } from "@/utils/ssrDeviceDetection";
import { getAllCaseStudiesData } from "@/utils/caseStudies";
import CaseStudiesViewComponent from "../caseStudyView";

export default async function CaseStudies() {
  const isMobile = await SSRMobileDetection();
  const caseStudiesList = await getAllCaseStudiesData();

  return (
    <>
      <CaseStudiesViewComponent
        caseStudiesList={caseStudiesList}
        isMobile={isMobile}
      />
    </>
  );
}
