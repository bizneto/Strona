import SectionTitle from "@/components/shared/sectionTitle";

interface IOpinion {
  opinionAuthor: string;
  opinionAuthorPostion: string;
  opinion: string;
}

export default function Opinion({
  opinionAuthor,
  opinionAuthorPostion,
  opinion,
}: IOpinion) {
  const SECTION_TITLE = "Opinia";

  return (
    <section className='bg-white py-8 md:py-16 rounded-lg w-[97%] 2xl:w-[1440px] mx-auto  '>
      <div className=' flex flex-col gap-4 md:gap-0 md:flex-row w-[91%] md:w-[96%] mx-auto md:justify-between pl-7 2xl:w-[1440px]'>
        <SectionTitle sectionTitle={SECTION_TITLE} color='#006EEF' />
        <div className='w-full h-fit flex flex-col gap-4 md:gap-8 font-medium'>
          <div className='flex flex-col gap-[2px] md:gap-1'>
            <h4 className='text-[16px] md:text-[18px] md:pt-1 leading-[22.4px] md:leading-[25.2px]'>
              {opinionAuthor}
            </h4>
            <p className='text-[12px] leading-[16.8px] md:text-[14px] md:leading-[19.6px]  '>
              {opinionAuthorPostion}
            </p>
          </div>
          <article className='md:max-w-[1129px] md:max-h-[212px] font-medium text-[18px] md:text-[24px] xl:text-[32px] leading-[25.2px] md:leading-[32px] xl:leading-[44.8px]'>
            {opinion}
          </article>
        </div>
      </div>
    </section>
  );
}
