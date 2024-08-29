import SectionTitle from "@/components/shared/sectionTitle";

interface IValue {
  Value: {
    Header: string;
    Text: string;
  };
}

export default function Value({ Value }: IValue) {
  if (!Value) return;
  const { Header, Text } = Value;
  const SECTION_TITLE = "Wartość";

  return (
    <article className={`py-8 md:py-16 `}>
      <div
        className={`flex mx-auto flex-col md:flex-row  md:justify-between w-[91%] gap-6 md:gap-0 md:w-[89%] 2xl:w-[1440px]`}
      >
        <span>
          <SectionTitle color='#006EEF' sectionTitle={SECTION_TITLE} />
        </span>
        <div className='w-fit font-medium flex flex-col gap-6 md:gap-8'>
          <h2 className='text-[24px] lg:text-[48px] leading-[33.6px] lg:leading-[67.2px]'>
            {Header}
          </h2>
          <p className='md:mx-auto md:w-full md:max-h-[212px] font-medium text-[18px] md:text-[24px] xl:text-[32px] leading-[25.2px] md:leading-[32px] xl:leading-[44.8px]'>
            {Text}
          </p>
        </div>
      </div>
    </article>
  );
}
