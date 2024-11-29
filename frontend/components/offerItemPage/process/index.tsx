"use client";

import ButtonWithArrow from "@/components/shared/buttonWithArrow";
import ProcessMobile from "./processMobile";
import { OPINION_QUESTION, START_PROJECT } from "./data";
import ProcessDesktop from "./processDesktop";

export function SectionFooter() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <h5 className='text-white text-[24px] lg:text-[48px] leading-[33.6px] lg:leading-[67.2px]'>
        {OPINION_QUESTION}
      </h5>
      <ButtonWithArrow
        arrowColor='white'
        color='#FFF'
        borderColor='#006EEF'
        fillColor='#006EEF'
        altHeight={50}
        text={START_PROJECT}
        altHref='/digital/kontakt'
      />
    </div>
  );
}

export interface IProcess {
  Process: {
    id: number;
    Title: string;
    Text: string;
    Image: {
      data: {
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  }[];
}

export default function Process({ Process }: IProcess) {
  if (!Process) return null;

  return (
    <>
      <ProcessMobile Process={Process} />
      <ProcessDesktop Process={Process} />
    </>
  );
}
