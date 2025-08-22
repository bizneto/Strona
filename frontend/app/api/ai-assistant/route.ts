import { NextRequest, NextResponse } from 'next/server';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface RequestBody {
  message: string;
  calculatorData: any;
  pricingResult: any;
  conversationHistory: Message[];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    if (!body) {
      return NextResponse.json(
        { error: 'Brak danych w żądaniu' },
        { status: 400 }
      );
    }

    const { message, calculatorData, pricingResult, conversationHistory }: RequestBody = JSON.parse(body);
    
    // Build context for AI
    const context = buildContext(calculatorData, pricingResult);
    const conversationContext = buildConversationContext(conversationHistory);
    
    const systemPrompt = `
Jesteś ekspertem AI ds. księgowości i doradztwa podatkowego dla firmy Bizneto.
Pomagasz klientom zrozumieć wyceny usług księgowych i udzielasz profesjonalnych porad.
Twoja rola to pokazanie WARTOŚCI usług księgowych i zachęcenie do współpracy z Bizneto.

KONTEKST KLIENTA:
${context}

ZASADY:
1. Odpowiadaj po polsku, ciepło i profesjonalnie
2. Zawsze podkreślaj KORZYŚCI i OSZCZĘDNOŚCI dla klienta
3. Pokazuj jak usługi Bizneto ROZWIĄŻĄ PROBLEMY klienta
4. Używaj konkretnych przykładów i liczb
5. Zachęcaj do skorzystania z usług Bizneto
6. Odpowiedzi powinny być wartościowe (max 400 słów)
7. Używaj formatowania markdown i emoji dla lepszej czytelności
8. Zawsze kończ zachętą do działania

SPECJALIZACJE:
💰 Optymalizacja podatkowa i oszczędności
🏢 Wybór najlepszej formy prawnej dla biznesu
📊 Analiza kosztów i ROI usług księgowych
🎯 Doradztwo branżowe dostosowane do specyfiki
📈 Strategiczne planowanie finansowe
⚡ Automatyzacja i digitalizacja procesów

MOTTO: "Każda złotówka zaoszczędzona na podatkach to złotówka więcej na rozwój Twojego biznesu!"

${conversationContext}
`;

    const { text } = await generateText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      prompt: message,
      temperature: 0.8,      // Bardziej kreatywne odpowiedzi
      maxTokens: 800,        // Dłuższe, bardziej wartościowe odpowiedzi
    });

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('Error in AI assistant:', error);
    return NextResponse.json(
      { error: 'Błąd podczas komunikacji z asystentem AI' },
      { status: 500 }
    );
  }
}

function buildContext(calculatorData: any, pricingResult: any): string {
  const companyTypeLabels: { [key: string]: string } = {
    'sole-proprietorship': 'Działalność gospodarcza',
    'limited-company': 'Spółka z o.o.',
    'partnership': 'Spółka cywilna',
    'corporation': 'Spółka akcyjna',
  };

  const industryLabels: { [key: string]: string } = {
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

  const serviceLabels: { [key: string]: string } = {
    'bookkeeping': 'Prowadzenie księgowości',
    'tax-advisory': 'Doradztwo podatkowe',
    'payroll': 'Obsługa kadrowo-płacowa',
    'vat-returns': 'Deklaracje VAT',
    'annual-reports': 'Sprawozdania roczne',
    'audit-support': 'Wsparcie przy kontrolach',
    'financial-analysis': 'Analizy finansowe',
    'business-consulting': 'Doradztwo biznesowe',
  };

  const services = calculatorData.services?.map((s: string) => serviceLabels[s] || s).join(', ') || 'Brak wybranych usług';

  return `
FIRMA KLIENTA:
- Typ: ${companyTypeLabels[calculatorData.companyType] || calculatorData.companyType}
- Branża: ${industryLabels[calculatorData.industry] || calculatorData.industry}
- Miesięczne przychody: ${calculatorData.monthlyRevenue?.toLocaleString('pl-PL')} PLN
- Liczba pracowników: ${calculatorData.employeeCount || 0}
- Płatnik VAT: ${calculatorData.vatRegistered ? 'Tak' : 'Nie'}
- Faktury miesięcznie: ${calculatorData.monthlyInvoices || 0}
- Dokumenty kosztowe miesięcznie: ${calculatorData.monthlyExpenses || 0}

WYBRANE USŁUGI:
${services}

WYCENA:
- Miesięcznie: ${pricingResult.monthlyPrice?.toLocaleString('pl-PL')} PLN
- Rocznie: ${pricingResult.yearlyPrice?.toLocaleString('pl-PL')} PLN
- Oszczędność roczna: ${((pricingResult.monthlyPrice * 12 - pricingResult.yearlyPrice) || 0).toLocaleString('pl-PL')} PLN

SZCZEGÓŁY WYCENY:
${pricingResult.breakdown?.map((item: any) => `- ${item.service}: ${item.price?.toLocaleString('pl-PL')} PLN`).join('\n') || ''}

ANALIZA AI:
${pricingResult.aiInsights || 'Brak dodatkowych analiz'}
`;
}

function buildConversationContext(history: Message[]): string {
  if (!history || history.length <= 1) {
    return '';
  }

  const recentMessages = history.slice(-4); // Last 4 messages for context
  const context = recentMessages
    .map(msg => `${msg.role.toUpperCase()}: ${msg.content}`)
    .join('\n');

  return `
KONTEKST ROZMOWY:
${context}
`;
}

// Helper function to format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
