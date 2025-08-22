export interface CalculatorData {
  // Company Information
  companyType: 'sole-proprietorship' | 'limited-company' | 'partnership' | 'joint-stock-company' |
              'simple-joint-stock' | 'general-partnership' | 'limited-partnership' |
              'limited-joint-stock' | 'professional-partnership' | 'foundation';
  accountingType: 'tax-card' | 'revenue-expense-book' | 'accounting-books' | 'lump-sum';
  industry: string;

  // VAT and Foreign Trade
  vatRegistered: boolean;
  foreignTrade: boolean;

  // Document Volume (based on CIK ranges)
  documentVolume: '1-10' | '11-20' | '21-40' | '41-70' | '71-100' | '101-130' |
                  '131-160' | '161-190' | '191-220' | '221-250';

  // Employees (separate for different contract types)
  employeesContract: number; // umowa o pracę
  employeesCommission: number; // umowa zlecenie

  // Additional Services (hourly-based)
  needsTaxAdvisory: boolean;
  taxAdvisoryHours?: number;
  needsBusinessConsulting: boolean;
  businessConsultingHours?: number;
  needsFinancialAudit: boolean;
  financialAuditHours?: number;
  needsLegalSupport: boolean;
  legalSupportHours?: number;

  // Location for regional pricing
  city?: string;

  // Additional Information
  currentAccountingSoftware?: string;
  specificRequirements?: string;
  preferredContactMethod: 'phone' | 'email' | 'meeting';

  // Contact Information (optional)
  companyName?: string;
  contactPerson?: string;
  email?: string;
  phone?: string;
}

export interface PricingBreakdown {
  service: string;
  price: number;
  description?: string;
}

export interface PricingResult {
  monthlyPrice: number;
  yearlyPrice: number;
  breakdown: PricingBreakdown[];
  recommendations: string[];
  aiInsights: string;
  confidence?: number;
  alternativePackages?: {
    name: string;
    monthlyPrice: number;
    yearlyPrice: number;
    description: string;
    features: string[];
  }[];
}

export interface AIAnalysis {
  industryInsights: string;
  costOptimization: string[];
  riskFactors: string[];
  recommendations: string[];
  competitiveAnalysis?: string;
}

// Form validation types
export interface FormErrors {
  [key: string]: string;
}

// Company type options (based on CIK)
export const COMPANY_TYPE_OPTIONS = [
  {
    id: 'sole-proprietorship',
    label: 'Działalność gospodarcza',
    description: 'Jednoosobowa działalność gospodarcza'
  },
  {
    id: 'limited-company',
    label: 'Spółka z o.o.',
    description: 'Spółka z ograniczoną odpowiedzialnością'
  },
  {
    id: 'partnership',
    label: 'Spółka cywilna',
    description: 'Spółka cywilna'
  },
  {
    id: 'joint-stock-company',
    label: 'Spółka akcyjna',
    description: 'Spółka akcyjna'
  },
  {
    id: 'simple-joint-stock',
    label: 'Prosta spółka akcyjna',
    description: 'Prosta spółka akcyjna'
  },
  {
    id: 'general-partnership',
    label: 'Spółka jawna',
    description: 'Spółka jawna'
  },
  {
    id: 'limited-partnership',
    label: 'Spółka komandytowa',
    description: 'Spółka komandytowa'
  },
  {
    id: 'limited-joint-stock',
    label: 'Spółka komandytowo-akcyjna',
    description: 'Spółka komandytowo-akcyjna'
  },
  {
    id: 'professional-partnership',
    label: 'Spółka partnerska',
    description: 'Spółka partnerska'
  },
  {
    id: 'foundation',
    label: 'Fundacja/stowarzyszenie',
    description: 'Fundacja lub stowarzyszenie'
  },
] as const;



// Accounting type options (based on CIK)
export const ACCOUNTING_TYPE_OPTIONS = [
  {
    id: 'tax-card',
    label: 'Karta podatkowa',
    description: 'Najprostsza forma opodatkowania'
  },
  {
    id: 'revenue-expense-book',
    label: 'Książka przychodów i rozchodów',
    description: 'Podatek liniowy lub skala podatkowa'
  },
  {
    id: 'accounting-books',
    label: 'Księgi rachunkowe',
    description: 'Pełna księgowość dla większych firm'
  },
  {
    id: 'lump-sum',
    label: 'Ryczałt ewidencjonowany',
    description: 'Ryczałt od przychodów ewidencjonowanych'
  },
] as const;

// Document volume options (based on CIK)
export const DOCUMENT_VOLUME_OPTIONS = [
  { id: '1-10', label: '1-10 dokumentów miesięcznie' },
  { id: '11-20', label: '11-20 dokumentów miesięcznie' },
  { id: '21-40', label: '21-40 dokumentów miesięcznie' },
  { id: '41-70', label: '41-70 dokumentów miesięcznie' },
  { id: '71-100', label: '71-100 dokumentów miesięcznie' },
  { id: '101-130', label: '101-130 dokumentów miesięcznie' },
  { id: '131-160', label: '131-160 dokumentów miesięcznie' },
  { id: '161-190', label: '161-190 dokumentów miesięcznie' },
  { id: '191-220', label: '191-220 dokumentów miesięcznie' },
  { id: '221-250', label: '221-250 dokumentów miesięcznie' },
] as const;

// Industry options
export const INDUSTRY_OPTIONS = [
  { id: 'retail', label: 'Handel detaliczny' },
  { id: 'wholesale', label: 'Handel hurtowy' },
  { id: 'manufacturing', label: 'Produkcja' },
  { id: 'construction', label: 'Budownictwo' },
  { id: 'services', label: 'Usługi' },
  { id: 'it', label: 'IT/Technologie' },
  { id: 'healthcare', label: 'Ochrona zdrowia' },
  { id: 'education', label: 'Edukacja' },
  { id: 'finance', label: 'Finanse' },
  { id: 'real-estate', label: 'Nieruchomości' },
  { id: 'transport', label: 'Transport i logistyka' },
  { id: 'hospitality', label: 'Hotelarstwo i gastronomia' },
  { id: 'agriculture', label: 'Rolnictwo' },
  { id: 'other', label: 'Inne' },
] as const;

// Employee count options (0-25 for each type)
export const EMPLOYEE_COUNT_OPTIONS = Array.from({ length: 26 }, (_, i) => ({
  value: i,
  label: i === 0 ? 'brak' : i.toString()
}));
