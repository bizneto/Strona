import SectionTitle from "@/components/shared/sectionTitle";
import CaseData from "./caseData";

export interface IData {
  client: string;
  industry: string;
  date: string;
  services: string;
}

export interface IHeaderProps {
  title: string;
  data: any;
}

export default function Header({ title, ...data }: IHeaderProps) {
  const SECTION_TITLE = "Projekt";

  return (
    <header>
      <div className='flex flex-col md:flex-row md:justify-between py-8 md:py-16 w-[91%] mx-auto md:w-[89%] 2xl:w-[1440px]'>
        <SectionTitle color='#006EEF' sectionTitle={SECTION_TITLE} />
        <div className='md:w-full flex flex-col gap-6 md:gap-12'>
          <h1 className='md:text-[72px] md:leading-[79.2px] font-medium text-[32px] leading-[35.2px]'>
            {title}
          </h1>
          <CaseData
            client={""}
            industry={""}
            date={""}
            services={""}
            {...data}
          />
        </div>
      </div>
    </header>
  );
}
