"use client";

import { MutableRefObject, useState } from "react";
import minusSign from "@/public/images/minus.png";
import plusSign from "@/public/images/plus.png";
import Image from "next/image";

const DATA = [
  {
    question: "Jakie są koszty korzystania z usług biura rachunkowego Bizneto?",
    answer:
      "Ceny usług biura rachunkowego Bizneto zależą od indywidualnych potrzeb i specyfiki działalności klienta. Nasze ceny są konkurencyjne i transparentne, dostosowane do zakresu usług oraz częstotliwości korzystania z naszych usług. Aby uzyskać dokładną wycenę i poznać szczegóły naszych pakietów usług, zachęcamy do kontaktu poprzez formularz na stronie internetowej lub bezpośrednio przez telefon lub e-mail.",
  },

  {
    question: "Czy Bizneto pomaga w procesie rejestracji firmy?",
    answer:
      "Tak, Bizneto oferuje kompleksową pomoc w procesie rejestracji firmy, zapewniając wsparcie i doradztwo na każdym etapie. Dzięki naszemu doświadczeniu i ekspertyzie możemy sprawić, że proces rejestracji będzie szybki, łatwy i bezstresowy dla Ciebie.",
  },
  {
    question: "Jakie rodzaje usług rachunkowych oferuje Bizneto?",
    answer:
      "Księgowość KPiR, ryczałt od przychodów ewidencjonowanych, księgi handlowe (pełna księgowość) oraz pełna obsługa kadrowo-płacowa.",
  },
  {
    question: "Jak wygląda proces współpracy z Bizneto?",
    answer:
      "Po podpisaniu umowy, każdy klient otrzymuje dedykowanego opiekuna ds. Księgowości oraz opiekuna ds. Kadrowo-Płacowych. Nasi specjaliści znający specyfikę danej branży dokładają  wszelkich starań, aby zapewnić obsługę dopasowaną do indywidualnych potrzeb i wymagań klienta.",
  },
  {
    question: "Jak przenieść księgowość do Bizneto?",
    answer:
      "Możesz dokonać zmiany prowadzenia księgowości w trakcie trwania roku obrotowego, zarówno w przypadku uproszczonej, jak i pełnej księgowości. Nasz zespół przeprowadzi cię przez cały proces, gwarantując płynny przebieg i ciągłość usług bez żadnych zakłóceń.",
  },
  {
    question: "Czy Bizneto obsługuje klientów z zagranicy?",
    answer:
      "Tak, Bizneto obsługuje zagranicznych klientów, jeśli prowadzą działalność gospodarczą w Polsce",
  },
  {
    question: "Czy Bizneto oferuje konsultacje online?",
    answer:
      "Tak, Bizneto oferuje konsultacje online dla wygody naszych klientów. Konsultacje są przeprowadzane za pomocą platformy Microsoft Teams. Dzięki temu nasi klienci mogą uzyskać profesjonalną pomoc i doradztwo bez konieczności wychodzenia z domu lub biura.",
  },
];

export default function QuestionsMap() {
  const [answerVisible, setAnswerVisible] = useState(0);

  return (
    <>
      {DATA.map(({ question, answer }, index) => (
        <div key={index} onClick={() => setAnswerVisible(index)}>
          <div
            className={`py-4 md:py-6 flex justify-between bg-white items-start`}
          >
            <div className='w-[90%] font-medium'>
              <p
                className={`text-[16px leading-[22.4px] md:text-[20px] md:leading-[22px]`}
              >
                {question}
              </p>
            </div>
            <div>
              <Image
                src={answerVisible == index ? minusSign : plusSign}
                alt='show more content or less content'
              />
            </div>
          </div>
          <p
            className={`${
              answerVisible === index
                ? "max-h-[260px] duration-1000 pb-2"
                : "max-h-0 duration-0"
            }  text-[14px] leading-[19.6px] md:text-[16px] md:leading-[22.4px] overflow-hidden border-b  transition-all  ease-in-out `}
          >
            {answer}
          </p>
        </div>
      ))}
    </>
  );
}
