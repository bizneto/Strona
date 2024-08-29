import SectionTitle from "@/components/shared/sectionTitle";

interface IProject {
  Projekt: {
    Title: string;
    Subtitle: string;
  };
}

export default function Project({ Projekt }: IProject) {
  const SECTION_TITLE = "Projekt";

  const { Title, Subtitle } = Projekt;

  return (
    <header className='w-full h-full py-8 md:py-16'>
      <div className='flex flex-col md:flex-row gap-6 md:gap-0  mx-auto w-[91%] md:w-[89%] 2xl:w-[1440px]'>
        <SectionTitle sectionTitle={SECTION_TITLE} color='#006EEF' />
        <div className='flex flex-col font-medium gap-1 md:gap-8'>
          <h1 className='text-[32px] md:text-[64px] lg:text-[96px] leading-[35.2px] md:leading-[74px] lg:leading-[86.4px]'>
            {Title}
          </h1>
          <p className='text-[18px] md:text-[32px] lg:text-[48px] leading-[19.8px] md:leading-[26.8px] lg:leading-[43.2px]'>
            {Subtitle}
          </p>
        </div>
      </div>
    </header>
  );
}
