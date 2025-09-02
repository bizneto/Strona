"use client";

import { useState } from "react";
import CalculatorForm from "./components/CalculatorForm";
import CalculatorResults from "./components/CalculatorResults";
import AIAssistant from "./components/AIAssistant";
import { CalculatorData, PricingResult } from "./types";

export default function PricingCalculator() {
  const [calculatorData, setCalculatorData] = useState<CalculatorData | null>(null);
  const [pricingResult, setPricingResult] = useState<PricingResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  const handleCalculate = async (data: CalculatorData) => {
    setIsLoading(true);
    setCalculatorData(data);
    
    try {
      const response = await fetch('/api/pricing-calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Błąd podczas obliczania wyceny');
      }

      const result: PricingResult = await response.json();
      setPricingResult(result);
      setShowAIAssistant(true);
    } catch (error) {
      console.error('Error calculating pricing:', error);
      // Fallback - basic calculation without AI
      const basicResult = calculateBasicPricing(data);
      setPricingResult(basicResult);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateBasicPricing = (data: CalculatorData): PricingResult => {
    // Basic fallback calculation logic
    let basePrice = 0;
    
    // Company type multiplier
    const typeMultipliers: Record<string, number> = {
      'sole-proprietorship': 1.0,
      'limited-company': 1.5,
      'partnership': 1.3,
      'corporation': 2.0,
      'joint-stock-company': 2.0,
      'simple-joint-stock': 1.8,
      'general-partnership': 1.3,
      'limited-partnership': 1.5,
      'limited-joint-stock': 1.8,
      'professional-partnership': 1.4,
      'foundation': 1.6,
    };

    basePrice = 300 * (typeMultipliers[data.companyType] || 1.0);
    
    // Add services based on boolean flags
    if (data.needsTaxAdvisory) basePrice += 150;
    if (data.needsBusinessConsulting) basePrice += 200;
    if (data.needsFinancialAudit) basePrice += 300;
    if (data.needsLegalSupport) basePrice += 250;

    // Add employee-related costs
    basePrice += 100 * (data.employeesContract || 0);
    basePrice += 80 * (data.employeesCommission || 0);
    
    // Industry adjustment
    if (data.industry === 'construction' || data.industry === 'healthcare') {
      basePrice *= 1.2;
    }
    
    const monthlyPrice = Math.round(basePrice);
    const yearlyPrice = Math.round(monthlyPrice * 12 * 0.9); // 10% discount for yearly
    
    return {
      monthlyPrice,
      yearlyPrice,
      breakdown: [
        { service: 'Podstawowa obsługa księgowa', price: Math.round(basePrice * 0.6) },
        { service: 'Doradztwo podatkowe', price: Math.round(basePrice * 0.3) },
        { service: 'Dodatkowe usługi', price: Math.round(basePrice * 0.1) },
      ],
      recommendations: [
        'Rozważ pakiet roczny dla oszczędności 10%',
        'Skontaktuj się z nami dla spersonalizowanej oferty',
      ],
      aiInsights: 'Wycena została obliczona na podstawie standardowych stawek rynkowych.',
    };
  };

  const resetCalculator = () => {
    setCalculatorData(null);
    setPricingResult(null);
    setShowAIAssistant(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Kalkulator Usług Księgowych
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Oblicz cenę usług księgowych dopasowaną do Twojej firmy.
          Nasz inteligentny kalkulator AI analizuje Twoje potrzeby i proponuje optymalne rozwiązania cenowe.
        </p>
        <div className="mt-4 text-sm text-gray-500 max-w-2xl mx-auto">
          <p><strong>Uwaga:</strong> Kalkulator uwzględnia orientacyjne ceny netto, opracowane na podstawie aktualnych stawek rynkowych.
          Końcowa cena może różnić się o ±20% w zależności od lokalizacji i specyfiki firmy.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <div>
          <CalculatorForm
            onCalculate={handleCalculate}
            isLoading={isLoading}
            onReset={resetCalculator}
            hasResults={!!pricingResult}
          />
        </div>

        {/* Results */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {pricingResult ? (
            <CalculatorResults 
              result={pricingResult}
              calculatorData={calculatorData}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-lg font-medium">Wypełnij formularz</p>
                <p className="text-sm">aby obliczyć cenę usług księgowych</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AI Assistant */}
      {showAIAssistant && calculatorData && pricingResult && (
        <div className="mt-8">
          <AIAssistant 
            calculatorData={calculatorData}
            pricingResult={pricingResult}
          />
        </div>
      )}

      {/* Features */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Natychmiastowa Kalkulacja</h3>
          <p className="text-gray-600">Otrzymaj dokładną cenę w kilka sekund dzięki zaawansowanemu AI</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Spersonalizowane Podejście</h3>
          <p className="text-gray-600">Cena dostosowana do specyfiki Twojej branży i potrzeb</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Profesjonalne Doradztwo</h3>
          <p className="text-gray-600">Otrzymaj rekomendacje od AI trenowanego na danych ekspertów księgowych</p>
        </div>
      </div>
    </div>
  );
}
