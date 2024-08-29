import SectionTitle from "@/components/shared/sectionTitle";

interface IGoal {
  longText: string;
}

export default function Objective({ longText }: IGoal) {
  const SECTION_TITLE = "Cel";

  return (
    <section className={`py-8 md:py-32 `}>
      <div
        className={`flex mx-auto flex-col md:flex-row md:justify-between w-[91%] gap-6 md:gap-0 md:w-[89%] 2xl:w-[1440px]`}
      >
        <SectionTitle color='#006EEF' sectionTitle={SECTION_TITLE} />
        <article className='md:mx-auto md:w-full md:max-h-[212px] font-medium text-[18px] md:text-[24px] xl:text-[32px] leading-[25.2px] md:leading-[32px] xl:leading-[44.8px]'>
          {longText}
        </article>
      </div>
    </section>
  );
}
