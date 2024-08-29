import CaseStudyItem from "@/components/shared/caseStudy";
import SectionTitle from "@/components/shared/sectionTitle";

export default async function CaseStudy() {
  const SECTION_TITLE = "Case Study";
  const HEADER = "Realizacja bradningu";

  const mockThumbnailData = {
    image: {
      data: {
        attributes: {
          url: "/uploads/contact_Desktop_Background_8c71bdf7ba.webp",
          width: 1200,
          height: 1200,
        },
      },
    },
  };

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
            thumbnail={mockThumbnailData}
            date='2024'
            id={5}
            services='Branding, Web Design'
            client='Lorem ipsum'
            title='Crimson Coffe'
            colorOverride='#000'
          />
        </div>
      </div>
    </section>
  );
}
