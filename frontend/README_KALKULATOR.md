# 🧮 Kalkulator Wyceny Usług Księgowych z AI

## 📋 Opis

Profesjonalny inteligentny kalkulator wyceny usług księgowych zintegrowany z AI. Pozwala klientom otrzymać spersonalizowaną wycenę usług księgowych w kilka minut, dostosowaną do specyfiki ich firmy i branży.

## 🎯 Funkcjonalności

### ✅ **Główne funkcje:**
- **4-etapowy formularz** - intuicyjny proces zbierania danych
- **Inteligentna wycena AI** - analiza potrzeb i generowanie spersonalizowanej oferty
- **Asystent AI** - interaktywny chat do odpowiadania na pytania
- **Szczegółowe wyniki** - breakdown kosztów i rekomendacje
- **Responsywny design** - działa na wszystkich urządzeniach
- **Fallback bez AI** - podstawowa wycena gdy AI nie działa

### 📊 **Etapy formularza:**

#### **Krok 1: Informacje o firmie**
- Typ firmy (działalność, sp. z o.o., spółka cywilna, SA)
- Branża (handel, produkcja, usługi, IT, etc.)
- Miesięczne przychody
- Liczba pracowników

#### **Krok 2: Wybór usług**
- Prowadzenie księgowości
- Doradztwo podatkowe
- Obsługa kadrowo-płacowa
- Deklaracje VAT
- Sprawozdania roczne
- Wsparcie przy kontrolach
- Analizy finansowe
- Doradztwo biznesowe

#### **Krok 3: Wolumen transakcji**
- Liczba faktur miesięcznie
- Liczba dokumentów kosztowych
- Status płatnika VAT

#### **Krok 4: Dodatkowe usługi godzinowe**
- Doradztwo podatkowe (250 PLN/godz)
- Konsulting biznesowy (300 PLN/godz)
- Audyt finansowy (350 PLN/godz)
- Obsługa prawna (400 PLN/godz)
- Możliwość określenia liczby godzin miesięcznie

#### **Krok 5: Dodatkowe informacje**
- Lokalizacja (korekta regionalna)
- Obecny system księgowy
- Szczególne wymagania
- Preferowany sposób kontaktu

## 🤖 Integracja z AI

### **OpenAI GPT-4o-mini**
- Analiza danych firmy i generowanie insights
- Rekomendacje dostosowane do branży
- Alternatywne pakiety usług
- Optymalizacja kosztów

### **AI Asystent**
- Interaktywny chat po otrzymaniu wyceny
- Odpowiedzi na pytania o wycenę
- Doradztwo branżowe
- Wyjaśnienia szczegółów

## 🏗️ Struktura techniczna

### **Pliki i komponenty:**

```
frontend/app/finanse/kalkulator/
├── page.tsx                     # Główna strona kalkulatora
├── PricingCalculator.tsx        # Główny komponent kalkulatora
├── types.ts                     # Typy TypeScript
└── components/
    ├── CalculatorForm.tsx       # 4-etapowy formularz
    ├── CalculatorResults.tsx    # Wyświetlanie wyników
    └── AIAssistant.tsx          # Chat z AI

frontend/app/api/
├── pricing-calculator/
│   └── route.ts                 # API endpoint dla wyceny
└── ai-assistant/
    └── route.ts                 # API endpoint dla AI chatu

frontend/components/financePage/offer/
└── calculatorSegment/
    └── index.tsx                # Kafelek kalkulatora na stronie finanse
```

### **API Endpoints:**

#### **POST /api/pricing-calculator**
- Przyjmuje dane z formularza
- Oblicza podstawową wycenę
- Generuje analizę AI
- Zwraca szczegółowe wyniki

#### **POST /api/ai-assistant**
- Przyjmuje wiadomość użytkownika
- Kontekst wyceny i danych firmy
- Generuje odpowiedź AI
- Zwraca odpowiedź asystenta

## 🎨 Design i UX

### **Styl kafelka na stronie finanse:**
- Gradient niebiesko-indygo
- Ikona kalkulatora
- Animowana strzałka
- Spójny z sekcją "Nasze usługi"

### **Interfejs kalkulatora:**
- Dwukolumnowy layout (formularz + wyniki)
- Progress bar dla kroków
- Walidacja w czasie rzeczywistym
- Loading states
- Error handling

### **Wyniki wyceny:**
- Toggle miesięczne/roczne
- Szczegółowy breakdown kosztów
- AI insights w kolorowych boxach
- Rekomendacje z checkmarkami
- Przyciski akcji (kontakt, PDF, udostępnij)

## 🔧 Konfiguracja

### **Wymagane zmienne środowiskowe:**
```env
OPENAI_API_KEY=sk-proj-...
```

### **Zależności:**
- `@ai-sdk/openai` - integracja z OpenAI
- `ai` - AI SDK
- `next` - framework
- `react` - UI library
- `tailwindcss` - stylowanie

## 📈 Algorytm wyceny

### **Podstawowa kalkulacja:**
1. **Cena bazowa** według typu firmy:
   - Działalność: 1.0x
   - Sp. z o.o.: 1.5x
   - Spółka cywilna: 1.3x
   - SA: 2.0x

2. **Dodatkowe usługi:**
   - VAT: 120 PLN/miesiąc (jeśli płatnik)
   - Handel zagraniczny: 200 PLN/miesiąc
   - Doradztwo podatkowe: 250 PLN/godz × liczba godzin
   - Konsulting biznesowy: 300 PLN/godz × liczba godzin
   - Audyt finansowy: 350 PLN/godz × liczba godzin
   - Obsługa prawna: 400 PLN/godz × liczba godzin

3. **Korekty branżowe:**
   - Budownictwo: +20%
   - Ochrona zdrowia: +15%
   - Finanse: +10%
   - Produkcja: +10%
   - IT: -5%

4. **Rabat roczny:** -10%

### **AI Enhancement:**
- Analiza specyfiki branży
- Rekomendacje optymalizacji
- Alternatywne pakiety
- Ocena ryzyka i złożoności

## 🚀 Deployment

### **Automatyczne dodanie do systemu:**
- ✅ Strona `/finanse/kalkulator`
- ✅ Kafelek na stronie `/finanse`
- ✅ Wpis w sitemap.xml
- ✅ API endpoints
- ✅ Responsywny design

### **SEO i metadata:**
- Tytuł: "Kalkulator Wyceny Usług Księgowych | Bizneto - Inteligentna Wycena AI"
- Opis: "Profesjonalny kalkulator wyceny usług księgowych z AI..."
- Keywords: "kalkulator księgowy, wycena usług księgowych, AI kalkulator..."
- OpenGraph tags

## 📊 Metryki i analityka

### **Śledzenie konwersji:**
- Rozpoczęcie kalkulacji
- Ukończenie każdego kroku
- Wygenerowanie wyceny
- Kliknięcie "Skontaktuj się"
- Użycie AI asystenta

### **A/B Testing możliwości:**
- Różne wersje formularza
- Alternatywne algorytmy wyceny
- Różne style prezentacji wyników

## 🔮 Przyszłe rozszerzenia

### **Planowane funkcje:**
- **Generowanie PDF** z wyceną
- **Integracja z CRM** - automatyczne lead'y
- **Porównanie z konkurencją**
- **Kalkulator ROI** oszczędności
- **Personalizowane pakiety** na podstawie AI
- **Integracja z kalendarzem** - umówienie spotkania
- **Multi-język** - angielski, niemiecki
- **Zaawansowane analizy** branżowe

### **Optymalizacje techniczne:**
- **Caching** wyników AI
- **Rate limiting** API
- **Monitoring** wydajności
- **Error tracking** z Sentry
- **Analytics** z Google Analytics 4

## 🎯 Cele biznesowe

### **KPI:**
- **Zwiększenie konwersji** o 25%
- **Redukcja czasu** pierwszego kontaktu o 50%
- **Poprawa jakości** lead'ów o 30%
- **Zwiększenie engagement** na stronie o 40%

### **Wartość dla klienta:**
- Natychmiastowa wycena 24/7
- Transparentność kosztów
- Spersonalizowane doradztwo
- Oszczędność czasu

### **Wartość dla firmy:**
- Automatyzacja procesu wyceny
- Kwalifikacja lead'ów
- Pozycjonowanie jako innowacyjna firma
- Przewaga konkurencyjna

---

**Kalkulator wyceny usług księgowych z AI to zaawansowane narzędzie, które łączy nowoczesną technologię z praktycznymi potrzebami biznesowymi, oferując klientom wyjątkowe doświadczenie i firmie przewagę konkurencyjną.**
