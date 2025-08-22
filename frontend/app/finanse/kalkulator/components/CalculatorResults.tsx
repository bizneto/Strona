"use client";

import { useState } from "react";
import { PricingResult, CalculatorData } from "../types";

interface CalculatorResultsProps {
  result: PricingResult;
  calculatorData: CalculatorData | null;
}

export default function CalculatorResults({ result, calculatorData }: CalculatorResultsProps) {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
  const [showBreakdown, setShowBreakdown] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const yearlyDiscount = Math.round(((result.monthlyPrice * 12 - result.yearlyPrice) / (result.monthlyPrice * 12)) * 100);

  const handleContactClick = () => {
    // Scroll to contact form or open contact modal
    window.open('/kontakt', '_blank');
  };

  const handleDownloadPDF = () => {
    // Generate and download PDF with pricing details
    console.log('Generating PDF...');
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Twoja wycena</h3>
        <p className="text-gray-600">Spersonalizowana oferta dla Twojej firmy</p>
      </div>

      {/* Pricing Toggle */}
      <div className="flex justify-center">
        <div className="bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setSelectedPlan('monthly')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selectedPlan === 'monthly'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Miesięcznie
          </button>
          <button
            onClick={() => setSelectedPlan('yearly')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              selectedPlan === 'yearly'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Rocznie
          </button>
        </div>
      </div>

      {/* Main Price Display */}
      <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {selectedPlan === 'monthly' ? formatPrice(result.monthlyPrice) : formatPrice(result.yearlyPrice)}
        </div>
        <div className="text-gray-600">
          {selectedPlan === 'monthly' ? 'miesięcznie' : 'rocznie'}
        </div>
        {selectedPlan === 'yearly' && yearlyDiscount > 0 && (
          <div className="mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Oszczędzasz {yearlyDiscount}% ({formatPrice(result.monthlyPrice * 12 - result.yearlyPrice)})
            </span>
          </div>
        )}
      </div>

      {/* Price Breakdown */}
      <div className="border rounded-lg">
        <button
          onClick={() => setShowBreakdown(!showBreakdown)}
          className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50"
        >
          <span className="font-medium text-gray-900">Szczegóły wyceny</span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${showBreakdown ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {showBreakdown && (
          <div className="px-4 pb-4 border-t">
            <div className="space-y-3 mt-3">
              {result.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{item.service}</div>
                    {item.description && (
                      <div className="text-xs text-gray-500">{item.description}</div>
                    )}
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {formatPrice(item.price)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* AI Insights */}
      {result.aiInsights && (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-purple-900 mb-1">Analiza AI</h4>
              <p className="text-sm text-purple-700">{result.aiInsights}</p>
            </div>
          </div>
        </div>
      )}

      {/* Recommendations */}
      {result.recommendations && result.recommendations.length > 0 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-green-900 mb-2">Rekomendacje</h4>
          <ul className="space-y-1">
            {result.recommendations.map((recommendation, index) => (
              <li key={index} className="text-sm text-green-700 flex items-start space-x-2">
                <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Alternative Packages */}
      {result.alternativePackages && result.alternativePackages.length > 0 && (
        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Alternatywne pakiety</h4>
          <div className="space-y-3">
            {result.alternativePackages.map((pkg, index) => (
              <div key={index} className="border rounded-lg p-3 hover:bg-gray-50">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <h5 className="text-sm font-medium text-gray-900">{pkg.name}</h5>
                    <p className="text-xs text-gray-600 mt-1">{pkg.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {formatPrice(selectedPlan === 'monthly' ? pkg.monthlyPrice : pkg.yearlyPrice)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {selectedPlan === 'monthly' ? 'miesięcznie' : 'rocznie'}
                    </div>
                  </div>
                </div>
                <ul className="text-xs text-gray-600 space-y-1">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleContactClick}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Skontaktuj się z nami
        </button>
        
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Pobierz PDF</span>
          </button>
          
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Wycena usług księgowych - Bizneto',
                  text: `Otrzymałem wycenę usług księgowych: ${formatPrice(result.monthlyPrice)} miesięcznie`,
                  url: window.location.href,
                });
              }
            }}
            className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <span>Udostępnij</span>
          </button>
        </div>
      </div>

      {/* Confidence Score */}
      {result.confidence && (
        <div className="text-center text-xs text-gray-500">
          Dokładność wyceny: {Math.round(result.confidence * 100)}%
        </div>
      )}
    </div>
  );
}
