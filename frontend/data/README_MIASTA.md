# 🏙️ Dynamiczne Zarządzanie Miastami - Instrukcja

## 📋 Przegląd

System dynamicznego zarządzania miastami pozwala na łatwe dodawanie nowych miast bez modyfikacji kodu. Wszystkie dane miast są przechowywane w pliku TypeScript, a strony generują się automatycznie.

## 📁 Struktura plików

```
frontend/data/
├── cities.ts           # Główny plik z danymi miast i funkcjami
└── README_MIASTA.md    # Ta instrukcja
```

## ✅ **SYSTEM DZIAŁA!**

Aktualnie system jest w pełni funkcjonalny:
- ✅ 8 miast aktywnych (Rzeszów, Kraków, Warszawa, Gdańsk, Wrocław, Poznań, Łódź, Katowice)
- ✅ Strona hub miast: `/finanse/miasta`
- ✅ Sekcja miast na głównej stronie: `/finanse`
- ✅ Linki w stopce (top 5 miast)
- ✅ Automatyczny sitemap
- ✅ Poprawne odmiany polskie

## 🆕 Jak dodać nowe miasto

### 1. Edytuj plik `cities.ts`

Dodaj nowy obiekt miasta do tablicy `citiesData` (około linii 15):

```typescript
{
  slug: "nowe-miasto",
  name: "Nowe Miasto",
  nameLocative: "Nowym Mieście",
  voivodeship: "mazowieckie",
  voivodeshipLocative: "mazowieckim",
  population: 50000,
  description: "Opis miasta - jego charakterystyka, znaczenie gospodarcze itp.",
  localKeywords: [
    "księgowość Nowe Miasto",
    "biuro rachunkowe Nowe Miasto",
    "księgowy Nowe Miasto",
    "doradztwo podatkowe Nowe Miasto"
  ],
  nearbyAreas: [
    "Miejscowość 1",
    "Miejscowość 2",
    "Miejscowość 3",
    "Miejscowość 4",
    "Miejscowość 5"
  ],
  priority: 9,
  active: true
}
```

### 2. Wyjaśnienie pól

| Pole | Opis | Przykład |
|------|------|----------|
| `slug` | URL-friendly nazwa (bez polskich znaków) | `"nowe-miasto"` |
| `name` | Pełna nazwa miasta (mianownik) | `"Nowe Miasto"` |
| `nameLocative` | Nazwa w miejscowniku (w/we + miasto) | `"Nowym Mieście"` |
| `voivodeship` | Województwo (mianownik) | `"mazowieckie"` |
| `voivodeshipLocative` | Województwo w miejscowniku | `"mazowieckim"` |
| `population` | Liczba mieszkańców | `50000` |
| `description` | Opis miasta (1-2 zdania) | `"Opis..."` |
| `localKeywords` | Słowa kluczowe SEO (4 frazy) | `["księgowość..."]` |
| `nearbyAreas` | Okoliczne miejscowości (5 sztuk) | `["Miejscowość..."]` |
| `priority` | Kolejność wyświetlania (1 = najwyższy) | `9` |
| `active` | Czy miasto jest aktywne | `true` |

### 3. Odmiany polskie

**Miejscownik - WAŻNE REGUŁY SKŁADNI:**

**Używamy "w" przed:**
- Warszawa → w Warszawie
- Kraków → w Krakowie
- Rzeszów → w Rzeszowie
- Gdańsk → w Gdańsku
- Poznań → w Poznaniu
- Łódź → w Łodzi
- Katowice → w Katowicach

**Używamy "we" przed spółgłoskami (szczególnie w-, wr-, wł-):**
- Wrocław → we Wrocławiu
- Włocławek → we Włocławku

**Reguła:** "we" używamy przed słowami zaczynającymi się od grup spółgłoskowych trudnych do wymówienia z "w".

**Województwa w miejscowniku:**
- mazowieckie → mazowieckim
- małopolskie → małopolskim
- podkarpackie → podkarpackim
- pomorskie → pomorskim
- dolnośląskie → dolnośląskim
- wielkopolskie → wielkopolskim
- łódzkie → łódzkim
- śląskie → śląskim

## 🔧 Co się dzieje automatycznie

Po dodaniu miasta do `cities.json`:

### ✅ Automatycznie generowane:
1. **Nowa strona miasta** - `/finanse/[slug]`
2. **Aktualizacja sitemap.xml** - nowy URL w mapie strony
3. **Linki w stopce** - miasto pojawi się w sekcji "Nasze miasta"
4. **Sekcja na stronie głównej** - miasto w sekcji "Księgowość w Twoim mieście"
5. **Lista na stronie miast** - `/finanse/miasta`

### 📄 Automatycznie generowane treści:
- **Tytuł strony**: "Księgowość [Miasto] | Biuro Rachunkowe | Bizneto"
- **Meta opis**: "Profesjonalne usługi księgowe w [Miejscownik]..."
- **Nagłówki**: "Dbamy o finanse firm w [Miejscownik]"
- **Schema.org**: LocalBusiness, Service, FAQ z danymi miasta
- **FAQ**: Lokalne pytania z nazwą miasta

## 🎯 Zarządzanie priorytetem

Miasta są sortowane według pola `priority`:
- `1` = najwyższy priorytet (wyświetlane pierwsze)
- `2, 3, 4...` = kolejne pozycje
- W stopce wyświetlane są pierwsze 5 miast

## 🔄 Aktywacja/Deaktywacja miast

Aby **ukryć miasto** bez usuwania danych:
```json
{
  "active": false
}
```

Aby **pokazać miasto**:
```json
{
  "active": true
}
```

## 📊 Funkcje pomocnicze

W pliku `cities.ts` dostępne są funkcje:

```typescript
// Wszystkie aktywne miasta (sortowane według priorytetu)
const cities = getActiveCities();

// Miasto po slug
const city = getCityBySlug('rzeszow');

// Top 5 miast dla stopki
const footerCities = getCitiesForFooter();

// Wszystkie miasta (włącznie z nieaktywnymi)
const allCities = getAllCities();

// Slug-i dla sitemap
const slugs = getAllCitySlugs();
```

## 🚀 Przykład dodania miasta

```json
{
  "slug": "lublin",
  "name": "Lublin", 
  "nameLocative": "Lublinie",
  "voivodeship": "lubelskie",
  "voivodeshipLocative": "lubelskim",
  "population": 340000,
  "description": "Lublin to największe miasto wschodniej Polski i ważny ośrodek akademicki oraz gospodarczy.",
  "localKeywords": [
    "księgowość Lublin",
    "biuro rachunkowe Lublin",
    "księgowy Lublin", 
    "doradztwo podatkowe Lublin"
  ],
  "nearbyAreas": [
    "Świdnik",
    "Puławy",
    "Chełm", 
    "Zamość",
    "Biała Podlaska"
  ],
  "priority": 9,
  "active": true
}
```

## ⚠️ Ważne uwagi

1. **Slug musi być unikalny** - nie może się powtarzać
2. **Używaj polskich znaków** tylko w `name`, `nameLocative`, `description`
3. **Slug bez polskich znaków** - używaj myślników zamiast spacji
4. **Priority** - sprawdź jakie numery są już zajęte
5. **Backup** - zawsze zrób kopię przed edycją

## 🔍 Testowanie

Po dodaniu miasta sprawdź:
- [ ] `/finanse/[slug]` - strona miasta
- [ ] `/finanse/miasta` - lista miast
- [ ] `/finanse` - sekcja z miastami
- [ ] `/sitemap.xml` - nowy URL
- [ ] Stopka - link do miasta

---

**💡 Tip**: Miasta można dodawać bez restartowania aplikacji - zmiany w JSON są ładowane dynamicznie!
