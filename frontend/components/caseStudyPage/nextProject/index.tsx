import SectionTitle from "@/components/shared/sectionTitle";
import { fetchAllCaseStudies, fetchCaseStudyByID } from "@/utils/caseStudies";
import CaseStudyItem from "@/components/shared/caseStudies/caseStudyItem";

interface CaseStudyComponent {
  id: number;
  __component: string;
  title?: string;
  services?: string;
  image?: {
    data: { attributes: { url: string; width: number; height: number } };
  };
}

interface CaseStudyProps {
  params: { caseId: number };
}

async function serveNextCaseStudy(currentCaseId: number) {
  try {
    const allCaseStudies = await fetchAllCaseStudies();

    allCaseStudies.sort(
      (a: CaseStudyComponent, b: CaseStudyComponent) => a.id - b.id
    );

    const nextCaseStudy = allCaseStudies.find(
      (caseStudy: CaseStudyComponent) => caseStudy.id > currentCaseId
    );

    const prevCaseStudy = allCaseStudies
      .slice()
      .reverse()
      .find((caseStudy: CaseStudyComponent) => caseStudy.id < currentCaseId);

    return nextCaseStudy || prevCaseStudy;
  } catch (error) {
    console.error("Error", error);
    return undefined;
  }
}

export default async function NextProject({ params }: CaseStudyProps) {
  const SECTION_TITLE = "Case Study";
  const HEADER = "Następny projekt";
  const { caseId } = params;
  const parsedCaseId = Number(caseId);

  const { attributes = {}, id = 0 } = await serveNextCaseStudy(parsedCaseId);

  if (!attributes || !id) return;

  const pageComponents = attributes.Page || [];
  const headerComponent = pageComponents.find(
    (component: { __component: string }) =>
      component.__component == "component.header"
  );
  const thumbnailComponent = pageComponents.find(
    (component: { __component: string }) =>
      component.__component == "component.thumbnail"
  );

  const { title = "", client = "", services = "", date = "" } = headerComponent;

  return (
    <section className='w-full py-8 md:py-16 font-medium  bg-transparent'>
      <div className='flex flex-col  md:gap-0 gap-8 md:flex-row w-[91%] mx-auto md:w-[89%] 2xl:w-[1440px]'>
        <SectionTitle sectionTitle={SECTION_TITLE} color='#006EEF' />
        <div className='md:hidden w-full flex flex-col gap-8 md:gap-24'>
          <h4 className='text-[48px] leading-[48px] lg:text-[72px] xl:leading-[64.8px]'>
            {HEADER}
          </h4>
        </div>
        <div className='mx-auto w-full flex-col flex gap-16'>
          <h4 className='hidden md:block text-[48px] leading-[48px] lg:text-[72px] xl:leading-[64.8px]'>
            {HEADER}
          </h4>
          <CaseStudyItem
            id={id}
            thumbnail={thumbnailComponent}
            date={date}
            services={services}
            title={title}
            client={client}
          />
        </div>
      </div>
    </section>
  );
}
