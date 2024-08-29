import SectionTitle from "@/components/shared/sectionTitle";
import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import CaseStudies from "@/components/shared/caseStudies";

export default async function Realizations() {
  const SECTION_TITLE = "Case Study";
  const HEADER = "Nasze realizacje";
  const SEE_MORE = "Zobacz wszystkie realizacje";

  return (
    <section className='py-8 md:py-16'>
      <div className='flex flex-col md:flex-row md:gap-0 w-[91%] mx-auto md:w-[89%] 2xl:w-[1440px] gap-8'>
        <span className='items-start flex flex-col md:block gap-4'>
          <SectionTitle color='#006EEF' sectionTitle={SECTION_TITLE} />
          <h3 className='md:hidden font-medium text-[48px] leading-[43.2px]'>
            {HEADER}
          </h3>
        </span>
        <div className='mx-auto flex flex-col gap-12 md:gap-16 md:w-full'>
          <h3 className='hidden md:block font-medium text-[96px] leading-[86.4px]'>
            {HEADER}
          </h3>
          <div className='flex flex-col gap-12 md:gap-16'>
            <CaseStudies />
          </div>
          <span className='mx-auto md:pt-16'>
            <ButtonWithArrow
              text={SEE_MORE}
              arrowColor='black'
              altHeight={50}
              color='#000'
              altHref='/digital/realizacje'
            />
          </span>
        </div>
      </div>
    </section>
  );
}
