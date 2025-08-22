"use client";

import { useRef } from "react";
import useGlobalContext from "@/hooks/useGlobalContext";
import useSectionVisibility from "@/utils/intersectionObserver";
import Link from "next/link";

interface ServiceData {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  features: Array<{
    name: string;
    description: string;
  }>;
  benefits: string[];
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  pricing: {
    startingPrice: string;
    description: string;
    factors: string[];
  };
}

interface ServiceDetailProps {
  serviceData: ServiceData;
}

export default function ServiceDetail({ serviceData }: ServiceDetailProps) {
  const { isMobile } = useGlobalContext();
  const sectionRef = useRef(null);
  const isSectionVisible = useSectionVisibility(sectionRef);

  return (
    <section className='w-full h-full py-16'>
      <div className={`mx-auto w-10/12 md:w-[89%] 2xl:w-[1440px]`}>
        
        {/* Header sekcji */}
        <header ref={sectionRef} className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className={`${isSectionVisible ? "text-[#FF3C50]" : "text-[#000]"} font-black text-2xl`}>
              {serviceData.id}
            </span>
            <h1 className="text-[32px] md:text-[48px] font-medium text-[#FF3C50]">
              {serviceData.name}
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">{serviceData.shortDescription}</p>
          <p className="text-gray-700 leading-relaxed">{serviceData.description}</p>
        </header>

        {/* Długi opis */}
        <div className="mb-16">
          <div className="prose prose-lg max-w-none">
            {serviceData.longDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Funkcje i korzyści */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Funkcje */}
          <div>
            <h2 className="text-[28px] font-medium mb-8 text-gray-900">Co obejmuje usługa</h2>
            <div className="space-y-6">
              {serviceData.features.map((feature, index) => (
                <div key={index} className="border-l-4 border-[#FF3C50] pl-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Korzyści */}
          <div>
            <h2 className="text-[28px] font-medium mb-8 text-gray-900">Korzyści współpracy</h2>
            <div className="space-y-4">
              {serviceData.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#FF3C50] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proces współpracy */}
        <div className="mb-16">
          <h2 className="text-[28px] font-medium mb-8 text-gray-900 text-center">Jak przebiega współpraca</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FF3C50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cennik */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-[28px] font-medium mb-6 text-gray-900">Cennik</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <div className="text-3xl font-bold text-[#FF3C50] mb-2">
                {serviceData.pricing.startingPrice}
              </div>
              <p className="text-gray-600">{serviceData.pricing.description}</p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link 
                href="/finanse/kalkulator"
                className="bg-[#FF3C50] text-white px-8 py-3 rounded-lg hover:bg-[#e63946] transition-colors duration-300 inline-block"
              >
                Oblicz dokładny koszt
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Cena zależy od:</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {serviceData.pricing.factors.map((factor, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#FF3C50] rounded-full"></div>
                  <span className="text-gray-600 text-sm">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-[28px] font-medium mb-4 text-gray-900">Gotowy na współpracę?</h2>
          <p className="text-gray-600 mb-8">Skontaktuj się z nami i omówmy Twoje potrzeby</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/finanse/konsultacja"
              className="bg-[#FF3C50] text-white px-8 py-3 rounded-lg hover:bg-[#e63946] transition-colors duration-300"
            >
              Umów konsultację
            </Link>
            <Link 
              href="/finanse/kalkulator"
              className="border border-[#FF3C50] text-[#FF3C50] px-8 py-3 rounded-lg hover:bg-[#FF3C50] hover:text-white transition-colors duration-300"
            >
              Sprawdź cenę
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
