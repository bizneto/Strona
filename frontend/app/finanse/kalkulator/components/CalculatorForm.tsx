"use client";

import { useState } from "react";
import { CalculatorData, COMPANY_TYPE_OPTIONS, ACCOUNTING_TYPE_OPTIONS, DOCUMENT_VOLUME_OPTIONS, EMPLOYEE_COUNT_OPTIONS, INDUSTRY_OPTIONS } from "../types";

interface CalculatorFormProps {
  onCalculate: (data: CalculatorData) => void;
  isLoading: boolean;
  onReset: () => void;
  hasResults: boolean;
}

export default function CalculatorForm({ onCalculate, isLoading, onReset, hasResults }: CalculatorFormProps) {
  const [formData, setFormData] = useState<Partial<CalculatorData>>({
    companyType: 'sole-proprietorship',
    accountingType: 'revenue-expense-book',
    industry: '',
    vatRegistered: false,
    foreignTrade: false,
    documentVolume: '1-10',
    employeesContract: 0,
    employeesCommission: 0,
    needsTaxAdvisory: false,
    taxAdvisoryHours: 2,
    needsBusinessConsulting: false,
    businessConsultingHours: 3,
    needsFinancialAudit: false,
    financialAuditHours: 8,
    needsLegalSupport: false,
    legalSupportHours: 2,
    preferredContactMethod: 'email',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.companyType) newErrors.companyType = 'Wybierz formę prawną';
    if (!formData.accountingType) newErrors.accountingType = 'Wybierz rodzaj księgowości';
    if (!formData.industry) newErrors.industry = 'Wybierz branżę';
    if (!formData.documentVolume) newErrors.documentVolume = 'Wybierz liczbę dokumentów';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onCalculate(formData as CalculatorData);
    }
  };

  const updateFormData = (field: keyof CalculatorData, value: any) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };

      // Auto-set accounting type based on company type
      if (field === 'companyType') {
        switch (value) {
          case 'limited-company':
          case 'joint-stock-company':
          case 'simple-joint-stock':
          case 'limited-partnership':
          case 'limited-joint-stock':
            newData.accountingType = 'accounting-books'; // Pełna księgowość
            break;
          case 'sole-proprietorship':
          case 'partnership':
          case 'general-partnership':
          case 'professional-partnership':
            newData.accountingType = 'revenue-expense-book'; // Książka przychodów i rozchodów
            break;
          case 'foundation':
            newData.accountingType = 'accounting-books'; // Fundacje też mają pełną księgowość
            break;
          default:
            newData.accountingType = 'revenue-expense-book';
        }
      }

      return newData;
    });

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Kalkulator Usług Księgowych
        </h2>
        <p className="text-gray-600">
          Wypełnij poniższe pola, aby obliczyć orientacyjną cenę usług księgowych
        </p>
        <div className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">
          <strong>Uwaga:</strong> Kalkulator uwzględnia orientacyjne ceny netto, opracowane na podstawie 
          aktualnych stawek rynkowych. Końcowa cena może różnić się o ±20% w zależności od lokalizacji i specyfiki firmy.
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Forma prawna */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Forma prawna <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.companyType || ''}
            onChange={(e) => updateFormData('companyType', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.companyType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Wybierz formę prawną</option>
            {COMPANY_TYPE_OPTIONS.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.companyType && (
            <p className="mt-1 text-sm text-red-600">{errors.companyType}</p>
          )}
        </div>

        {/* Rodzaj księgowości */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rodzaj księgowości <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.accountingType || ''}
            onChange={(e) => updateFormData('accountingType', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.accountingType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Wybierz rodzaj księgowości</option>
            {ACCOUNTING_TYPE_OPTIONS.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-sm text-blue-600">
            💡 Rodzaj księgowości jest automatycznie ustawiany na podstawie formy prawnej
          </p>
          {errors.accountingType && (
            <p className="mt-1 text-sm text-red-600">{errors.accountingType}</p>
          )}
        </div>

        {/* Branża */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Branża <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.industry || ''}
            onChange={(e) => updateFormData('industry', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.industry ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Wybierz branżę</option>
            {INDUSTRY_OPTIONS.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="mt-1 text-sm text-red-600">{errors.industry}</p>
          )}
        </div>

        {/* Płatnik VAT */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Płatnik VAT
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="vatRegistered"
                checked={formData.vatRegistered === true}
                onChange={() => updateFormData('vatRegistered', true)}
                className="mr-2"
              />
              Tak
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="vatRegistered"
                checked={formData.vatRegistered === false}
                onChange={() => updateFormData('vatRegistered', false)}
                className="mr-2"
              />
              Nie
            </label>
          </div>
        </div>

        {/* Handel zagraniczny */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kupno/sprzedaż towarów/usług za granicę
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="foreignTrade"
                checked={formData.foreignTrade === true}
                onChange={() => updateFormData('foreignTrade', true)}
                className="mr-2"
              />
              Tak
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="foreignTrade"
                checked={formData.foreignTrade === false}
                onChange={() => updateFormData('foreignTrade', false)}
                className="mr-2"
              />
              Nie
            </label>
          </div>
        </div>

        {/* Liczba dokumentów */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Liczba dokumentów w miesiącu <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.documentVolume || ''}
            onChange={(e) => updateFormData('documentVolume', e.target.value)}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              errors.documentVolume ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Wybierz liczbę dokumentów</option>
            {DOCUMENT_VOLUME_OPTIONS.map(option => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.documentVolume && (
            <p className="mt-1 text-sm text-red-600">{errors.documentVolume}</p>
          )}
        </div>

        {/* Pracownicy - umowa o pracę */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Liczba pracowników - umowa o pracę
          </label>
          <select
            value={formData.employeesContract || 0}
            onChange={(e) => updateFormData('employeesContract', parseInt(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {EMPLOYEE_COUNT_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Pracownicy - umowa zlecenie */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Liczba pracowników - umowa zlecenie
          </label>
          <select
            value={formData.employeesCommission || 0}
            onChange={(e) => updateFormData('employeesCommission', parseInt(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {EMPLOYEE_COUNT_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Dodatkowe usługi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Dodatkowe usługi (rozliczane godzinowo)
          </label>
          <div className="space-y-4">
            {/* Doradztwo podatkowe */}
            <div className="border border-gray-200 rounded-lg p-4">
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={formData.needsTaxAdvisory || false}
                  onChange={(e) => updateFormData('needsTaxAdvisory', e.target.checked)}
                  className="mr-3"
                />
                <span className="font-medium">Doradztwo podatkowe</span>
                <span className="ml-2 text-sm text-gray-500">(250 PLN/godz)</span>
              </label>
              {formData.needsTaxAdvisory && (
                <div className="ml-6">
                  <label className="block text-sm text-gray-600 mb-1">Szacowana liczba godzin miesięcznie:</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.taxAdvisoryHours || 2}
                    onChange={(e) => updateFormData('taxAdvisoryHours', parseInt(e.target.value))}
                    className="w-20 p-2 border border-gray-300 rounded"
                  />
                </div>
              )}
            </div>

            {/* Konsulting biznesowy */}
            <div className="border border-gray-200 rounded-lg p-4">
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={formData.needsBusinessConsulting || false}
                  onChange={(e) => updateFormData('needsBusinessConsulting', e.target.checked)}
                  className="mr-3"
                />
                <span className="font-medium">Konsulting biznesowy</span>
                <span className="ml-2 text-sm text-gray-500">(300 PLN/godz)</span>
              </label>
              {formData.needsBusinessConsulting && (
                <div className="ml-6">
                  <label className="block text-sm text-gray-600 mb-1">Szacowana liczba godzin miesięcznie:</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.businessConsultingHours || 3}
                    onChange={(e) => updateFormData('businessConsultingHours', parseInt(e.target.value))}
                    className="w-20 p-2 border border-gray-300 rounded"
                  />
                </div>
              )}
            </div>

            {/* Audyt finansowy */}
            <div className="border border-gray-200 rounded-lg p-4">
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={formData.needsFinancialAudit || false}
                  onChange={(e) => updateFormData('needsFinancialAudit', e.target.checked)}
                  className="mr-3"
                />
                <span className="font-medium">Audyt finansowy</span>
                <span className="ml-2 text-sm text-gray-500">(350 PLN/godz)</span>
              </label>
              {formData.needsFinancialAudit && (
                <div className="ml-6">
                  <label className="block text-sm text-gray-600 mb-1">Szacowana liczba godzin miesięcznie:</label>
                  <input
                    type="number"
                    min="1"
                    max="40"
                    value={formData.financialAuditHours || 8}
                    onChange={(e) => updateFormData('financialAuditHours', parseInt(e.target.value))}
                    className="w-20 p-2 border border-gray-300 rounded"
                  />
                </div>
              )}
            </div>

            {/* Obsługa prawna */}
            <div className="border border-gray-200 rounded-lg p-4">
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={formData.needsLegalSupport || false}
                  onChange={(e) => updateFormData('needsLegalSupport', e.target.checked)}
                  className="mr-3"
                />
                <span className="font-medium">Obsługa prawna</span>
                <span className="ml-2 text-sm text-gray-500">(400 PLN/godz)</span>
              </label>
              {formData.needsLegalSupport && (
                <div className="ml-6">
                  <label className="block text-sm text-gray-600 mb-1">Szacowana liczba godzin miesięcznie:</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={formData.legalSupportHours || 2}
                    onChange={(e) => updateFormData('legalSupportHours', parseInt(e.target.value))}
                    className="w-20 p-2 border border-gray-300 rounded"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Lokalizacja */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Miasto (opcjonalne)
          </label>
          <input
            type="text"
            value={formData.city || ''}
            onChange={(e) => updateFormData('city', e.target.value)}
            placeholder="np. Warszawa, Kraków, Gdańsk..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="mt-1 text-sm text-gray-500">
            Podanie miasta pomoże w dokładniejszej kalkulacji cen regionalnych
          </p>
        </div>

        {/* Przyciski */}
        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Obliczanie...
              </div>
            ) : (
              'Oblicz cenę usług księgowych'
            )}
          </button>
          
          {hasResults && (
            <button
              type="button"
              onClick={onReset}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              Nowa kalkulacja
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
