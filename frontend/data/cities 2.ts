export interface CityData {
  slug: string;
  name: string;
  nameLocative: string; // miejscownik - "w Rzeszowie"
  voivodeship: string;
  voivodeshipLocative: string; // miejscownik - "w województwie podkarpackim"
  population: number;
  description: string;
  localKeywords: string[];
  nearbyAreas: string[];
  priority: number; // kolejność wyświetlania
  active: boolean; // czy miasto jest aktywne
}

import citiesData from './cities.json';

// Ładowanie danych z JSON i sortowanie według priorytetu
export const cities: CityData[] = citiesData.cities
  .filter(city => city.active)
  .sort((a, b) => a.priority - b.priority);
  {
    slug: 'krakow',
    name: 'Kraków',
    nameLocative: 'Krakowie',
    voivodeship: 'małopolskie',
    voivodeshipLocative: 'małopolskim',
    population: 780000,
    description: 'Kraków to historyczna stolica Polski i jedno z najważniejszych centrów biznesowych w kraju.',
    localKeywords: ['księgowość Kraków', 'biuro rachunkowe Kraków', 'księgowy Kraków', 'doradztwo podatkowe Kraków'],
    nearbyAreas: ['Wieliczka', 'Skawina', 'Niepołomice', 'Zabierzów', 'Michałowice']
  },
  {
    slug: 'warszawa',
    name: 'Warszawa',
    nameLocative: 'Warszawie',
    voivodeship: 'mazowieckie',
    voivodeshipLocative: 'mazowieckim',
    population: 1800000,
    description: 'Warszawa to stolica Polski i największe centrum finansowo-biznesowe w kraju.',
    localKeywords: ['księgowość Warszawa', 'biuro rachunkowe Warszawa', 'księgowy Warszawa', 'doradztwo podatkowe Warszawa'],
    nearbyAreas: ['Piaseczno', 'Pruszków', 'Legionowo', 'Marki', 'Ożarów Mazowiecki']
  },
  {
    slug: 'gdansk',
    name: 'Gdańsk',
    nameLocative: 'Gdańsku',
    voivodeship: 'pomorskie',
    voivodeshipLocative: 'pomorskim',
    population: 470000,
    description: 'Gdańsk to największe miasto północnej Polski i ważny port nad Morzem Bałtyckim.',
    localKeywords: ['księgowość Gdańsk', 'biuro rachunkowe Gdańsk', 'księgowy Gdańsk', 'doradztwo podatkowe Gdańsk'],
    nearbyAreas: ['Sopot', 'Gdynia', 'Pruszcz Gdański', 'Rumia', 'Reda']
  },
  {
    slug: 'wroclaw',
    name: 'Wrocław',
    nameLocative: 'Wrocławiu',
    voivodeship: 'dolnośląskie',
    voivodeshipLocative: 'dolnośląskim',
    population: 640000,
    description: 'Wrocław to stolica Dolnego Śląska i jedno z najprężniej rozwijających się miast w Polsce.',
    localKeywords: ['księgowość Wrocław', 'biuro rachunkowe Wrocław', 'księgowy Wrocław', 'doradztwo podatkowe Wrocław'],
    nearbyAreas: ['Oława', 'Trzebnica', 'Kąty Wrocławskie', 'Siechnice', 'Żórawina']
  },
  {
    slug: 'poznan',
    name: 'Poznań',
    nameLocative: 'Poznaniu',
    voivodeship: 'wielkopolskie',
    voivodeshipLocative: 'wielkopolskim',
    population: 540000,
    description: 'Poznań to stolica Wielkopolski i ważny ośrodek gospodarczy zachodniej Polski.',
    localKeywords: ['księgowość Poznań', 'biuro rachunkowe Poznań', 'księgowy Poznań', 'doradztwo podatkowe Poznań'],
    nearbyAreas: ['Swarzędz', 'Luboń', 'Puszczykowo', 'Tarnowo Podgórne', 'Dopiewo']
  },
  {
    slug: 'lodz',
    name: 'Łódź',
    nameLocative: 'Łodzi',
    voivodeship: 'łódzkie',
    voivodeshipLocative: 'łódzkim',
    population: 680000,
    description: 'Łódź to trzecie co do wielkości miasto w Polsce i ważny ośrodek przemysłowy.',
    localKeywords: ['księgowość Łódź', 'biuro rachunkowe Łódź', 'księgowy Łódź', 'doradztwo podatkowe Łódź'],
    nearbyAreas: ['Pabianice', 'Zgierz', 'Konstantynów Łódzki', 'Aleksandrów Łódzki', 'Ozorków']
  },
  {
    slug: 'katowice',
    name: 'Katowice',
    nameLocative: 'Katowicach',
    voivodeship: 'śląskie',
    voivodeshipLocative: 'śląskim',
    population: 290000,
    description: 'Katowice to stolica województwa śląskiego i centrum aglomeracji górnośląskiej.',
    localKeywords: ['księgowość Katowice', 'biuro rachunkowe Katowice', 'księgowy Katowice', 'doradztwo podatkowe Katowice'],
    nearbyAreas: ['Chorzów', 'Sosnowiec', 'Gliwice', 'Zabrze', 'Bytom']
  }
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
