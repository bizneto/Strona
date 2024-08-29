import SectionTitle from "@/components/shared/sectionTitle";
import { fetchCaseStudyByID } from "@/utils/caseStudies";
import CaseStudyItem from "@/components/shared/caseStudy";

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

async function findValidCaseStudy(
  initialCaseId: number,
  direction: "prev" | "next"
) {
  let nextCaseId = initialCaseId;
  let data = null;

  const MAX_ATTEMPTS = 5;
  let attempts = 0;

  while (attempts < MAX_ATTEMPTS) {
    data = await fetchCaseStudyByID(nextCaseId);
    if (data) {
      break;
    }
    attempts++;
    nextCaseId = direction === "prev" ? nextCaseId - 1 : nextCaseId + 1;
  }

  if (!data) {
    console.error(`Failed to fetch data after ${MAX_ATTEMPTS} attempts.`);
  }

  return {
    id: nextCaseId,
    data: data,
  };
}

export default async function NextProject({ params }: CaseStudyProps) {
  const SECTION_TITLE = "Case Study";
  const HEADER = "Następny projekt";
  const { caseId } = params;
  const parsedCaseId = Number(caseId);

  if (isNaN(parsedCaseId)) {
    console.error("Invalid caseId provided");
    return <div>Invalid case study ID!</div>;
  }

  let data = null;

  try {
    data = await findValidCaseStudy(parsedCaseId + 1, "next");
    if (!data.data) {
      data = await findValidCaseStudy(parsedCaseId - 1, "prev");
    }
  } catch (error) {
    console.error("Error fetching case study", error);
    return <div>Error loading case study!</div>;
  }

  if (!data.data) {
    return <div>No case studies found!</div>;
  }

  const titleComponent = data.data.find(
    (component: CaseStudyComponent) =>
      component.__component === "component.header"
  );
  const thumbnailComponent = data.data.find(
    (component: CaseStudyComponent) =>
      component.__component === "component.thumbnail"
  );

  const title = titleComponent?.title || "No Title";
  const date = titleComponent?.date || "No date";
  const services = titleComponent?.services || "No Services";
  const thumbnail = thumbnailComponent;
  const client = titleComponent?.client || "No client";

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
            thumbnail={thumbnail}
            date={date}
            id={data.id}
            services={services}
            title={title}
            client={client}
          />
        </div>
      </div>
    </section>
  );
}
