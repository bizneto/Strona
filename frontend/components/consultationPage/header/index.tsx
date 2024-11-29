import SectionTitle from "@/components/shared/sectionTitle";

const SECTION_TITLE = "Konsultacja";
const HEADER = "Zadaj nam dowolne pytanie";
const PARAGRAPH =
  "Od księgowości po finanse i podatki – jesteśmy tutaj, aby pomóc.  Konsultacja jest skierowana do działających firm lub do osób planujących w najbliższym czasie założyć działalność.";

export default function Header() {
  return (
    <header className='py-8 md:py-16 w-10/12 md:w-[89%] max-w-[1440px] mx-auto'>
      <div className='max-w-[601px] flex flex-col gap-4'>
        <SectionTitle color='#FF3C50' sectionTitle={SECTION_TITLE} />
        <h1 className='text-[32px] md:text-[64px] leading-[39.01px] md:leading-[78.02px] font-medium'>
          {HEADER}
        </h1>
        <p className='text-[16px] leading-[22.4px] font-medium'>{PARAGRAPH}</p>
      </div>
    </header>
  );
}
