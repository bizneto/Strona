import SectionTitle from "@/components/shared/sectionTitle";

export default function Header() {
  const SECTION_TITLE = "Kontakt";
  const TITLE = (
    <>
      Opowiedz nam <br /> o swojej wizji!
    </>
  );

  return (
    <header className='w-full h-fit py-8 md:py-16'>
      <div className='relative flex flex-col md:flex-row gap-6 md:gap-0  mx-auto w-[91%] md:w-[89%] 2xl:w-[1440px]'>
        <span className='md:absolute md:h-screen'>
          <SectionTitle sectionTitle={SECTION_TITLE} color='#006EEF' />
        </span>
        <h1 className='md:pl-[120px] lg:pl-[177px] h-fit text-[48px] md:text-[64px] lg:text-[96px] leading-[48px] md:leading-[74px] lg:leading-[86.4px]'>
          {TITLE}
        </h1>
      </div>
    </header>
  );
}
