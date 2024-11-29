import CaseStudyItem from "@/components/shared/caseStudies/caseStudyItem";
import SectionTitle from "@/components/shared/sectionTitle";
import { fetchCaseStudyByID } from "@/utils/caseStudies";

export default async function CaseStudy() {
  const SECTION_TITLE = "Case Study";
  const HEADER = "Realizacja bradningu";

  const data = await fetchCaseStudyByID(6);

  if (!data) return;
  const { title, client, date, services } = data[0];
  const thumbnailData = data[1];

  return (
    <section className='py-8 md:py-16 font-medium text-white bg-black'>
      <div className='flex flex-col  md:gap-0 gap-8 md:flex-row w-[91%] mx-auto md:w-[89%] 2xl:w-[1440px]'>
        <SectionTitle sectionTitle={SECTION_TITLE} color='#006EEF' />
        <div className='md:hidden w-full flex flex-col gap-8 md:gap-24'>
          <h4 className='text-[48px] leading-[48px] lg:text-[72px] xl:leading-[64.8px]'>
            {HEADER}
          </h4>
        </div>
        <div className='w-full flex-col flex gap-16'>
          <h4 className='hidden md:block text-[48px] leading-[48px] lg:text-[72px] xl:leading-[64.8px]'>
            {HEADER}
          </h4>
          <CaseStudyItem
            thumbnail={thumbnailData}
            date={date}
            id={6}
            services={services}
            client={client}
            title={title}
            colorOverride='#000'
          />
        </div>
      </div>
    </section>
  );
}
