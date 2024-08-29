import SectionTitle from "@/components/shared/sectionTitle";

export default function Mission() {
  const SECTION_TITLE = "Misja";
  const PARAGRAPH =
    "Witaj w miejscu, gdzie kreatywność spotyka się z technologią! Jesteśmy zespołem pasjonatów, którzy z pełnym zaangażowaniem dostarczają kompleksowe rozwiązania graficzne, indywidualne strony internetowe oraz innowacyjne automatyzacje AI. Naszym celem jest pomaganie firmom wyróżniać się na rynku i osiągać sukcesy w dynamicznym, cyfrowym świecie.";

  return (
    <section className={`h-full w-full py-8 md:py-24 `}>
      <div
        className={`flex mx-auto flex-col md:flex-row md:justify-between w-[91%] gap-6 md:w-[89%] 2xl:w-[1440px]`}
      >
        <SectionTitle color='#006EEF' sectionTitle={SECTION_TITLE} />
        <article className='md:mx-auto md:w-fit md:max-h-[212px] font-medium text-[18px] md:text-[24px] xl:text-[32px] leading-[25.2px] md:leading-[32px] xl:leading-[44.8px] '>
          {PARAGRAPH}
        </article>
      </div>
    </section>
  );
}
