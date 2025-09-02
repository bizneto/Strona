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
export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
