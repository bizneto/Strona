import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { CalculatorData, PricingResult } from '@/app/finanse/kalkulator/types';
import pricingConfig from '../../../data/pricing-config.json';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    if (!body) {
      return NextResponse.json(
        { error: 'Brak danych w żądaniu' },
        { status: 400 }
      );
    }

    const calculatorData: CalculatorData = JSON.parse(body);
    
    // Basic pricing calculation
    const basicPricing = calculateBasicPricing(calculatorData);
    
    // AI-enhanced analysis
    const aiAnalysis = await generateAIAnalysis(calculatorData, basicPricing);
    
    // Generate alternative packages
    const alternativePackages = generateAlternativePackages(calculatorData, basicPricing.monthlyPrice);

    // Combine basic pricing with AI insights
    const result: PricingResult = {
      ...basicPricing,
      aiInsights: aiAnalysis.insights,
      recommendations: [...basicPricing.recommendations, ...aiAnalysis.recommendations],
      confidence: aiAnalysis.confidence,
      alternativePackages: alternativePackages,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in pricing calculator:', error);
    return NextResponse.json(
      { error: 'Błąd podczas obliczania wyceny' },
      { status: 500 }
    );
  }
}

function calculateBasicPricing(data: CalculatorData): Omit<PricingResult, 'aiInsights' | 'confidence' | 'alternativePackages'> {
  let monthlyPrice = 0;
  const breakdown: { service: string; price: number; description?: string }[] = [];

  // 1. Main accounting service package
  const companyTypeConfig = pricingConfig.basePrices.companyTypes[data.companyType];
  const accountingTypeConfig = pricingConfig.basePrices.accountingTypes[data.accountingType];
  const documentVolumeConfig = pricingConfig.basePrices.documentVolume[data.documentVolume];

  let mainServicePrice = 0;
  let mainServiceDescription = '';

  if (companyTypeConfig && accountingTypeConfig && documentVolumeConfig) {
    // Calculate base accounting service price
    const basePrice = companyTypeConfig.basePrice * companyTypeConfig.multiplier;
    const accountingPrice = accountingTypeConfig.basePrice;
    const documentPrice = documentVolumeConfig.basePrice;

    mainServicePrice = basePrice + accountingPrice + documentPrice;

    // Create descriptive service name
    const companyTypeLabel = companyTypeConfig.name;
    const accountingTypeLabel = accountingTypeConfig.name;
    const documentVolumeLabel = documentVolumeConfig.name;

    mainServiceDescription = `${companyTypeLabel} - ${accountingTypeLabel} w zakresie ${documentVolumeLabel.toLowerCase()}`;

    // Add VAT to main service if applicable
    if (data.vatRegistered) {
      const vatPrice = pricingConfig.basePrices.additionalServices['vat-payer'].monthlyPrice;
      mainServicePrice += vatPrice;
      mainServiceDescription += ' + obsługa VAT';
    }

    // Add foreign trade to main service if applicable
    if (data.foreignTrade) {
      const foreignTradePrice = pricingConfig.basePrices.additionalServices['foreign-trade'].monthlyPrice;
      mainServicePrice += foreignTradePrice;
      mainServiceDescription += ' + handel zagraniczny';
    }

    breakdown.push({
      service: 'Usługa księgowa',
      price: Math.round(mainServicePrice),
      description: mainServiceDescription,
    });
    monthlyPrice += mainServicePrice;
  }

  // 2. Payroll service package (if employees exist)
  const totalEmployees = (data.employeesContract || 0) + (data.employeesCommission || 0);
  if (totalEmployees > 0) {
    let payrollPrice = 0;
    let payrollDescription = 'Obsługa kadrowo-płacowa ';

    if (data.employeesContract > 0) {
      const contractPrice = data.employeesContract * pricingConfig.basePrices.employeesPricing['employment-contract'].pricePerEmployee;
      payrollPrice += contractPrice;
      payrollDescription += `${data.employeesContract} umów o pracę`;
    }

    if (data.employeesCommission > 0) {
      const commissionPrice = data.employeesCommission * pricingConfig.basePrices.employeesPricing['commission-contract'].pricePerEmployee;
      payrollPrice += commissionPrice;
      if (data.employeesContract > 0) {
        payrollDescription += `, ${data.employeesCommission} umów zlecenie`;
      } else {
        payrollDescription += `${data.employeesCommission} umów zlecenie`;
      }
    }

    breakdown.push({
      service: 'Obsługa kadrowo-płacowa',
      price: payrollPrice,
      description: payrollDescription,
    });
    monthlyPrice += payrollPrice;
  }

  // 3. Hourly service packages
  if (data.needsTaxAdvisory) {
    const hours = data.taxAdvisoryHours || 2;
    const hourlyRate = pricingConfig.basePrices.additionalServices['tax-advisory'].hourlyRate;
    const taxAdvisoryPrice = hours * hourlyRate;
    breakdown.push({
      service: 'Pakiet doradztwa podatkowego',
      price: taxAdvisoryPrice,
      description: `${hours} godzin miesięcznie × ${hourlyRate} PLN/godz`,
    });
    monthlyPrice += taxAdvisoryPrice;
  }

  if (data.needsBusinessConsulting) {
    const hours = data.businessConsultingHours || 3;
    const hourlyRate = pricingConfig.basePrices.additionalServices['business-consulting'].hourlyRate;
    const consultingPrice = hours * hourlyRate;
    breakdown.push({
      service: 'Pakiet konsultingu biznesowego',
      price: consultingPrice,
      description: `${hours} godzin miesięcznie × ${hourlyRate} PLN/godz`,
    });
    monthlyPrice += consultingPrice;
  }

  if (data.needsFinancialAudit) {
    const hours = data.financialAuditHours || 8;
    const hourlyRate = pricingConfig.basePrices.additionalServices['financial-audit'].hourlyRate;
    const auditPrice = hours * hourlyRate;
    breakdown.push({
      service: 'Pakiet audytu finansowego',
      price: auditPrice,
      description: `${hours} godzin miesięcznie × ${hourlyRate} PLN/godz`,
    });
    monthlyPrice += auditPrice;
  }

  if (data.needsLegalSupport) {
    const hours = data.legalSupportHours || 2;
    const hourlyRate = pricingConfig.basePrices.additionalServices['legal-support'].hourlyRate;
    const legalPrice = hours * hourlyRate;
    breakdown.push({
      service: 'Pakiet obsługi prawnej',
      price: legalPrice,
      description: `${hours} godzin miesięcznie × ${hourlyRate} PLN/godz`,
    });
    monthlyPrice += legalPrice;
  }

  // 8. Industry adjustments
  const industryMultiplier = (pricingConfig.industryMultipliers as any)[data.industry] || 1.0;
  if (industryMultiplier !== 1.0) {
    const industryAdjustment = monthlyPrice * (industryMultiplier - 1);
    breakdown.push({
      service: 'Korekta branżowa',
      price: Math.round(industryAdjustment),
      description: `Specyfika branży: ${getIndustryLabel(data.industry)}`,
    });
    monthlyPrice += industryAdjustment;
  }

  // 9. Regional adjustments (if city provided)
  if (data.city) {
    const cityLower = data.city.toLowerCase();
    let regionalMultiplier = pricingConfig.regionalMultipliers.default;
    let matchedCityKey = '';

    // Check for major cities
    for (const [city, multiplier] of Object.entries(pricingConfig.regionalMultipliers)) {
      if (cityLower.includes(city) && city !== 'default') {
        regionalMultiplier = multiplier;
        matchedCityKey = city;
        break;
      }
    }

    if (regionalMultiplier !== 1.0) {
      const regionalAdjustment = monthlyPrice * (regionalMultiplier - 1);

      // Map city keys to proper Polish locative case
      const cityLocativeMap: { [key: string]: string } = {
        'warsaw': 'w Warszawie',
        'krakow': 'w Krakowie',
        'gdansk': 'w Gdańsku',
        'wroclaw': 'we Wrocławiu',
        'poznan': 'w Poznaniu',
        'katowice': 'w Katowicach',
        'lodz': 'w Łodzi',
        'szczecin': 'w Szczecinie',
        'bydgoszcz': 'w Bydgoszczy',
        'lublin': 'w Lublinie'
      };

      const cityDescription = matchedCityKey && cityLocativeMap[matchedCityKey]
        ? cityLocativeMap[matchedCityKey]
        : `w ${data.city}`;

      breakdown.push({
        service: 'Korekta regionalna',
        price: Math.round(regionalAdjustment),
        description: `Lokalizacja: ${cityDescription}`,
      });
      monthlyPrice += regionalAdjustment;
    }
  }

  // Calculate yearly price with discount
  const yearlyPrice = monthlyPrice * 12 * (1 - pricingConfig.discounts['annual-payment'].discount);

  // Generate recommendations based on data
  const recommendations = [];
  if (!data.vatRegistered && monthlyPrice > 800) {
    recommendations.push('Rozważ rejestrację VAT dla większej firmy');
  }
  if (data.employeesContract + data.employeesCommission > 5) {
    recommendations.push('Dedykowany opiekun dla firm z większą liczbą pracowników');
  }
  if (data.documentVolume === '221-250') {
    recommendations.push('Możliwy rabat wolumenowy dla dużej liczby dokumentów');
  }
  if (!data.needsTaxAdvisory && (data.companyType === 'limited-company' || data.companyType === 'joint-stock-company')) {
    recommendations.push('Doradztwo podatkowe może przynieść znaczne oszczędności dla spółek');
  }
  if (data.foreignTrade && !data.needsLegalSupport) {
    recommendations.push('Obsługa prawna może być przydatna przy handlu zagranicznym');
  }
  recommendations.push(`Płatność roczna: ${Math.round(pricingConfig.discounts['annual-payment'].discount * 100)}% rabatu`);
  recommendations.push('Usługi dodatkowe rozliczane są według rzeczywistego zużycia godzin');
  recommendations.push('Skontaktuj się z nami dla spersonalizowanej oferty');

  return {
    monthlyPrice: Math.round(monthlyPrice),
    yearlyPrice: Math.round(yearlyPrice),
    breakdown,
    recommendations,
  };
}

// Generate alternative packages based on company data
function generateAlternativePackages(data: CalculatorData, basePrice: number): Array<{
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
}> {
  const alternatives = [];

  // Basic package (minimal services)
  if (data.needsTaxAdvisory || data.needsBusinessConsulting || data.needsFinancialAudit || data.needsLegalSupport) {
    const basicData = { ...data };
    basicData.needsTaxAdvisory = false;
    basicData.needsBusinessConsulting = false;
    basicData.needsFinancialAudit = false;
    basicData.needsLegalSupport = false;

    const basicResult = calculateBasicPricing(basicData);
    alternatives.push({
      name: 'Pakiet Podstawowy',
      monthlyPrice: basicResult.monthlyPrice,
      yearlyPrice: basicResult.yearlyPrice,
      description: 'Podstawowa obsługa księgowa bez usług dodatkowych',
      features: [
        'Pełna obsługa księgowa',
        data.employeesContract + data.employeesCommission > 0 ? 'Obsługa kadrowo-płacowa' : '',
        data.vatRegistered ? 'Obsługa VAT' : '',
        data.foreignTrade ? 'Handel zagraniczny' : '',
        'Wsparcie telefoniczne',
        'Podstawowe sprawozdania'
      ].filter(Boolean)
    });
  }

  // Premium package (with additional services)
  if (!data.needsTaxAdvisory || !data.needsBusinessConsulting) {
    const premiumData = { ...data };
    premiumData.needsTaxAdvisory = true;
    premiumData.taxAdvisoryHours = 4;
    premiumData.needsBusinessConsulting = true;
    premiumData.businessConsultingHours = 2;

    const premiumResult = calculateBasicPricing(premiumData);
    alternatives.push({
      name: 'Pakiet Premium',
      monthlyPrice: premiumResult.monthlyPrice,
      yearlyPrice: premiumResult.yearlyPrice,
      description: 'Rozszerzona obsługa z doradztwem podatkowym i biznesowym',
      features: [
        'Wszystko z pakietu podstawowego',
        'Doradztwo podatkowe (4h/miesiąc)',
        'Konsulting biznesowy (2h/miesiąc)',
        'Priorytetowe wsparcie',
        'Miesięczne analizy finansowe',
        'Optymalizacja podatkowa'
      ]
    });
  }

  // Enterprise package (full service)
  const enterpriseData = { ...data };
  enterpriseData.needsTaxAdvisory = true;
  enterpriseData.taxAdvisoryHours = 6;
  enterpriseData.needsBusinessConsulting = true;
  enterpriseData.businessConsultingHours = 4;
  enterpriseData.needsFinancialAudit = true;
  enterpriseData.financialAuditHours = 4;
  enterpriseData.needsLegalSupport = true;
  enterpriseData.legalSupportHours = 3;

  const enterpriseResult = calculateBasicPricing(enterpriseData);
  if (enterpriseResult.monthlyPrice > basePrice) {
    alternatives.push({
      name: 'Pakiet Enterprise',
      monthlyPrice: enterpriseResult.monthlyPrice,
      yearlyPrice: enterpriseResult.yearlyPrice,
      description: 'Kompleksowa obsługa dla wymagających firm',
      features: [
        'Wszystko z pakietu premium',
        'Rozszerzone doradztwo podatkowe (6h/miesiąc)',
        'Intensywny konsulting biznesowy (4h/miesiąc)',
        'Audyt finansowy (4h/miesiąc)',
        'Obsługa prawna (3h/miesiąc)',
        'Dedykowany opiekun',
        'Strategiczne planowanie finansowe',
        '24/7 wsparcie w pilnych sprawach'
      ]
    });
  }

  return alternatives;
}

async function generateAIAnalysis(data: CalculatorData, basicPricing: any) {
  try {
    const prompt = `
Jesteś ekspertem księgowym i doradcą biznesowym. Twoim zadaniem jest przygotowanie pozytywnej, zachęcającej analizy która pokazuje WARTOŚĆ usług księgowych.

WYTYCZNE:
- Zawsze podkreślaj KORZYŚCI i WARTOŚĆ z usług
- Pokazuj jak usługi OSZCZĘDZAJĄ CZAS i PIENIĄDZE klienta
- Wskazuj na PROFESJONALIZM i BEZPIECZEŃSTWO
- Nigdy nie sugeruj, że cena jest za wysoka
- Przedstawiaj cenę jako INWESTYCJĘ w rozwój firmy
- Podkreślaj KONKURENCYJNOŚĆ i JAKOŚĆ usług

Przeanalizuj następujące dane firmy:

DANE FIRMY:
- Typ: ${getCompanyTypeLabel(data.companyType)}
- Rodzaj księgowości: ${data.accountingType}
- Branża: ${getIndustryLabel(data.industry)}
- Dokumenty miesięcznie: ${data.documentVolume}
- Pracownicy (umowa o pracę): ${data.employeesContract}
- Pracownicy (umowa zlecenie): ${data.employeesCommission}
- Płatnik VAT: ${data.vatRegistered ? 'Tak' : 'Nie'}
- Handel zagraniczny: ${data.foreignTrade ? 'Tak' : 'Nie'}
- Doradztwo podatkowe: ${data.needsTaxAdvisory ? `Tak (${data.taxAdvisoryHours || 2} godz/miesiąc)` : 'Nie'}
- Konsulting biznesowy: ${data.needsBusinessConsulting ? `Tak (${data.businessConsultingHours || 3} godz/miesiąc)` : 'Nie'}
- Audyt finansowy: ${data.needsFinancialAudit ? `Tak (${data.financialAuditHours || 8} godz/miesiąc)` : 'Nie'}
- Obsługa prawna: ${data.needsLegalSupport ? `Tak (${data.legalSupportHours || 2} godz/miesiąc)` : 'Nie'}

PODSTAWOWA WYCENA: ${basicPricing.monthlyPrice} PLN miesięcznie

Przygotuj pozytywną analizę w formacie JSON:
{
  "insights": "Pozytywna analiza podkreślająca wartość usług i korzyści dla firmy (max 200 znaków). Zawsze zachęcaj do skorzystania z usług.",
  "recommendations": ["pozytywna rekomendacja 1", "korzyść dla firmy 2", "wartość dodana 3"],
  "confidence": 0.9,
  "alternativePackages": [
    {
      "name": "Pakiet Basic",
      "monthlyPrice": 400,
      "yearlyPrice": 4320,
      "features": ["feature1", "feature2"]
    }
  ]
}

PRZYKŁADY POZYTYWNYCH INSIGHTS:
- "Kompleksowy pakiet usług zapewni Twojej firmie profesjonalną obsługę i spokój w prowadzeniu biznesu."
- "Inwestycja w profesjonalne usługi księgowe zwróci się poprzez optymalizację podatkową i uniknięcie błędów."
- "Dedykowana obsługa pozwoli Ci skupić się na rozwoju firmy, podczas gdy my zadbamy o księgowość."

PRZYKŁADY POZYTYWNYCH REKOMENDACJI:
- "Profesjonalna obsługa księgowa zapewni zgodność z przepisami i optymalizację podatkową"
- "Regularne doradztwo pomoże w podejmowaniu strategicznych decyzji biznesowych"
- "Kompleksowa obsługa zaoszczędzi Twój czas i pozwoli skupić się na rozwoju firmy"

Uwzględnij specyfikę branży, wielkość firmy i złożoność operacji. Zawsze podkreślaj wartość i korzyści.
`;

    const { text } = await generateText({
      model: openai('gpt-4o-mini'),
      prompt,
      temperature: 0.7,
    });

    // Parse AI response - handle markdown code blocks
    try {
      let jsonText = text.trim();

      // Remove markdown code blocks if present
      if (jsonText.startsWith('```json')) {
        jsonText = jsonText.replace(/^```json\s*/, '').replace(/\s*```$/, '');
      } else if (jsonText.startsWith('```')) {
        jsonText = jsonText.replace(/^```\s*/, '').replace(/\s*```$/, '');
      }

      const aiResponse = JSON.parse(jsonText);
      return {
        insights: aiResponse.insights || 'Profesjonalny pakiet usług księgowych dostosowany do specyfiki Twojej firmy zapewni spokój i bezpieczeństwo w prowadzeniu biznesu.',
        recommendations: aiResponse.recommendations || [
          'Profesjonalna obsługa księgowa zapewni zgodność z przepisami',
          'Kompleksowa obsługa zaoszczędzi Twój czas na rozwój firmy',
          'Regularne doradztwo pomoże w optymalizacji podatkowej'
        ],
        confidence: aiResponse.confidence || 0.9,
        alternativePackages: aiResponse.alternativePackages || [],
      };
    } catch (parseError) {
      console.error('Error parsing AI response:', parseError);
      console.error('Raw AI response:', text);
      return {
        insights: 'Profesjonalny pakiet usług księgowych dostosowany do specyfiki Twojej firmy zapewni spokój i bezpieczeństwo w prowadzeniu biznesu.',
        recommendations: [
          'Profesjonalna obsługa księgowa zapewni zgodność z przepisami',
          'Kompleksowa obsługa zaoszczędzi Twój czas na rozwój firmy',
          'Regularne doradztwo pomoże w optymalizacji podatkowej'
        ],
        confidence: 0.9,
        alternativePackages: [],
      };
    }
  } catch (error) {
    console.error('Error generating AI analysis:', error);
    return {
      insights: 'Profesjonalny pakiet usług księgowych dostosowany do specyfiki Twojej firmy zapewni spokój i bezpieczeństwo w prowadzeniu biznesu.',
      recommendations: [
        'Profesjonalna obsługa księgowa zapewni zgodność z przepisami',
        'Kompleksowa obsługa zaoszczędzi Twój czas na rozwój firmy',
        'Skontaktuj się z nami dla spersonalizowanej oferty'
      ],
      confidence: 0.9,
      alternativePackages: [],
    };
  }
}

function getCompanyTypeLabel(type: string): string {
  const labels: { [key: string]: string } = {
    'sole-proprietorship': 'Działalność gospodarcza',
    'limited-company': 'Spółka z o.o.',
    'partnership': 'Spółka cywilna',
    'joint-stock-company': 'Spółka akcyjna',
    'simple-joint-stock': 'Prosta spółka akcyjna',
    'general-partnership': 'Spółka jawna',
    'limited-partnership': 'Spółka komandytowa',
    'limited-joint-stock': 'Spółka komandytowo-akcyjna',
    'professional-partnership': 'Spółka partnerska',
    'foundation': 'Fundacja/stowarzyszenie',
  };
  return labels[type] || type;
}

function getIndustryLabel(industry: string): string {
  const labels: { [key: string]: string } = {
    'retail': 'Handel detaliczny',
    'wholesale': 'Handel hurtowy',
    'manufacturing': 'Produkcja',
    'construction': 'Budownictwo',
    'services': 'Usługi',
    'it': 'IT/Technologie',
    'healthcare': 'Ochrona zdrowia',
    'education': 'Edukacja',
    'finance': 'Finanse',
    'real-estate': 'Nieruchomości',
    'transport': 'Transport i logistyka',
    'hospitality': 'Hotelarstwo i gastronomia',
    'agriculture': 'Rolnictwo',
    'other': 'Inne',
  };
  return labels[industry] || industry;
}

function getServiceLabel(service: string): string {
  const labels: { [key: string]: string } = {
    'bookkeeping': 'Prowadzenie księgowości',
    'tax-advisory': 'Doradztwo podatkowe',
    'payroll': 'Obsługa kadrowo-płacowa',
    'vat-returns': 'Deklaracje VAT',
    'annual-reports': 'Sprawozdania roczne',
    'audit-support': 'Wsparcie przy kontrolach',
    'financial-analysis': 'Analizy finansowe',
    'business-consulting': 'Doradztwo biznesowe',
  };
  return labels[service] || service;
}
