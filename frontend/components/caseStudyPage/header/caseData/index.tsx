import CaseDataMobile from "./caseDataMobile";
import CaseDataDesktop from "./caseDataDesktop";
import { IData } from "..";

export interface IPassedData {
  data: {
    KLIENT: string;
    BRANŻA: string;
    DATA: string;
    USŁUGI: string[];
  };
}

export default function CaseData({ client, industry, date, services }: IData) {
  const servicesArr = services.split(",") ?? [];

  const DATA = {
    KLIENT: client,
    BRANŻA: industry,
    DATA: date,
    USŁUGI: servicesArr,
  };

  return (
    <>
      <CaseDataMobile data={DATA} />
      <CaseDataDesktop data={DATA} />
    </>
  );
}
