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

// Dane miast - można łatwo dodawać nowe miasta
const citiesData: CityData[] = [
  {
    slug: 'rzeszow',
    name: 'Rzeszów',
    nameLocative: 'Rzeszowie',
    voivodeship: 'podkarpackie',
    voivodeshipLocative: 'podkarpackim',
    population: 196000,
    description: 'Rzeszów to dynamicznie rozwijające się miasto w południowo-wschodniej Polsce, centrum województwa podkarpackiego.',
    localKeywords: [
      'księgowość Rzeszów',
      'biuro rachunkowe Rzeszów',
      'księgowy Rzeszów',
      'doradztwo podatkowe Rzeszów'
    ],
    nearbyAreas: [
      'Jasionka',
      'Boguchwała',
      'Tyczyn',
      'Głogów Małopolski',
      'Kolbuszowa'
    ],
    priority: 1,
    active: true
  },
  {
    slug: 'krakow',
    name: 'Kraków',
    nameLocative: 'Krakowie',
    voivodeship: 'małopolskie',
    voivodeshipLocative: 'małopolskim',
    population: 780000,
    description: 'Kraków to historyczna stolica Polski i jedno z najważniejszych centrów biznesowych w kraju.',
    localKeywords: [
      'księgowość Kraków',
      'biuro rachunkowe Kraków',
      'księgowy Kraków',
      'doradztwo podatkowe Kraków'
    ],
    nearbyAreas: [
      'Wieliczka',
      'Skawina',
      'Niepołomice',
      'Zabierzów',
      'Michałowice'
    ],
    priority: 2,
    active: true
  },
  {
    slug: 'warszawa',
    name: 'Warszawa',
    nameLocative: 'Warszawie',
    voivodeship: 'mazowieckie',
    voivodeshipLocative: 'mazowieckim',
    population: 1800000,
    description: 'Warszawa to stolica Polski i największe centrum finansowo-biznesowe w kraju.',
    localKeywords: [
      'księgowość Warszawa',
      'biuro rachunkowe Warszawa',
      'księgowy Warszawa',
      'doradztwo podatkowe Warszawa'
    ],
    nearbyAreas: [
      'Piaseczno',
      'Pruszków',
      'Legionowo',
      'Marki',
      'Ożarów Mazowiecki'
    ],
    priority: 3,
    active: true
  },
  {
    slug: 'gdansk',
    name: 'Gdańsk',
    nameLocative: 'Gdańsku',
    voivodeship: 'pomorskie',
    voivodeshipLocative: 'pomorskim',
    population: 470000,
    description: 'Gdańsk to największe miasto północnej Polski i ważny port nad Morzem Bałtyckim.',
    localKeywords: [
      'księgowość Gdańsk',
      'biuro rachunkowe Gdańsk',
      'księgowy Gdańsk',
      'doradztwo podatkowe Gdańsk'
    ],
    nearbyAreas: [
      'Sopot',
      'Gdynia',
      'Pruszcz Gdański',
      'Rumia',
      'Reda'
    ],
    priority: 4,
    active: true
  },
  {
    slug: 'wroclaw',
    name: 'Wrocław',
    nameLocative: 'Wrocławiu',
    voivodeship: 'dolnośląskie',
    voivodeshipLocative: 'dolnośląskim',
    population: 640000,
    description: 'Wrocław to stolica Dolnego Śląska i jedno z najprężniej rozwijających się miast w Polsce.',
    localKeywords: [
      'księgowość Wrocław',
      'biuro rachunkowe Wrocław',
      'księgowy Wrocław',
      'doradztwo podatkowe Wrocław'
    ],
    nearbyAreas: [
      'Oława',
      'Trzebnica',
      'Kąty Wrocławskie',
      'Siechnice',
      'Żórawina'
    ],
    priority: 5,
    active: true
  },
  {
    slug: 'poznan',
    name: 'Poznań',
    nameLocative: 'Poznaniu',
    voivodeship: 'wielkopolskie',
    voivodeshipLocative: 'wielkopolskim',
    population: 540000,
    description: 'Poznań to stolica Wielkopolski i ważny ośrodek gospodarczy zachodniej Polski.',
    localKeywords: [
      'księgowość Poznań',
      'biuro rachunkowe Poznań',
      'księgowy Poznań',
      'doradztwo podatkowe Poznań'
    ],
    nearbyAreas: [
      'Swarzędz',
      'Luboń',
      'Puszczykowo',
      'Tarnowo Podgórne',
      'Dopiewo'
    ],
    priority: 6,
    active: true
  },
  {
    slug: 'lodz',
    name: 'Łódź',
    nameLocative: 'Łodzi',
    voivodeship: 'łódzkie',
    voivodeshipLocative: 'łódzkim',
    population: 680000,
    description: 'Łódź to trzecie co do wielkości miasto w Polsce i ważny ośrodek przemysłowy.',
    localKeywords: [
      'księgowość Łódź',
      'biuro rachunkowe Łódź',
      'księgowy Łódź',
      'doradztwo podatkowe Łódź'
    ],
    nearbyAreas: [
      'Pabianice',
      'Zgierz',
      'Konstantynów Łódzki',
      'Aleksandrów Łódzki',
      'Ozorków'
    ],
    priority: 7,
    active: true
  },
  {
    slug: 'katowice',
    name: 'Katowice',
    nameLocative: 'Katowicach',
    voivodeship: 'śląskie',
    voivodeshipLocative: 'śląskim',
    population: 290000,
    description: 'Katowice to stolica województwa śląskiego i centrum aglomeracji górnośląskiej.',
    localKeywords: [
      'księgowość Katowice',
      'biuro rachunkowe Katowice',
      'księgowy Katowice',
      'doradztwo podatkowe Katowice'
    ],
    nearbyAreas: [
      'Chorzów',
      'Sosnowiec',
      'Gliwice',
      'Zabrze',
      'Bytom'
    ],
    priority: 8,
    active: true
  },
  {
    slug: 'lublin',
    name: 'Lublin',
    nameLocative: 'Lublinie',
    voivodeship: 'lubelskie',
    voivodeshipLocative: 'lubelskim',
    population: 340000,
    description: 'Lublin to stolica województwa lubelskiego, ważny ośrodek akademicki i kulturalny wschodniej Polski.',
    localKeywords: [
      'księgowość Lublin',
      'biuro rachunkowe Lublin',
      'księgowy Lublin',
      'doradztwo podatkowe Lublin'
    ],
    nearbyAreas: [
      'Świdnik',
      'Puławy',
      'Chełm',
      'Zamość',
      'Biała Podlaska'
    ],
    priority: 9,
    active: true
  },
  {
    slug: 'szczecin',
    name: 'Szczecin',
    nameLocative: 'Szczecinie',
    voivodeship: 'zachodniopomorskie',
    voivodeshipLocative: 'zachodniopomorskim',
    population: 400000,
    description: 'Szczecin to stolica województwa zachodniopomorskiego, ważny port morski i ośrodek przemysłowy.',
    localKeywords: [
      'księgowość Szczecin',
      'biuro rachunkowe Szczecin',
      'księgowy Szczecin',
      'doradztwo podatkowe Szczecin'
    ],
    nearbyAreas: [
      'Police',
      'Goleniów',
      'Stargard',
      'Gryfino',
      'Świnoujście'
    ],
    priority: 10,
    active: true
  },
  {
    slug: 'bydgoszcz',
    name: 'Bydgoszcz',
    nameLocative: 'Bydgoszczy',
    voivodeship: 'kujawsko-pomorskie',
    voivodeshipLocative: 'kujawsko-pomorskim',
    population: 350000,
    description: 'Bydgoszcz to stolica województwa kujawsko-pomorskiego, ważny ośrodek przemysłowy i kulturalny.',
    localKeywords: [
      'księgowość Bydgoszcz',
      'biuro rachunkowe Bydgoszcz',
      'księgowy Bydgoszcz',
      'doradztwo podatkowe Bydgoszcz'
    ],
    nearbyAreas: [
      'Toruń',
      'Inowrocław',
      'Nakło nad Notecią',
      'Solec Kujawski',
      'Koronowo'
    ],
    priority: 11,
    active: true
  },
  {
    slug: 'torun',
    name: 'Toruń',
    nameLocative: 'Toruniu',
    voivodeship: 'kujawsko-pomorskie',
    voivodeshipLocative: 'kujawsko-pomorskim',
    population: 200000,
    description: 'Toruń to historyczne miasto w województwie kujawsko-pomorskim, wpisane na Listę Światowego Dziedzictwa UNESCO.',
    localKeywords: [
      'księgowość Toruń',
      'biuro rachunkowe Toruń',
      'księgowy Toruń',
      'doradztwo podatkowe Toruń'
    ],
    nearbyAreas: [
      'Chełmno',
      'Ciechocinek',
      'Aleksandrów Kujawski',
      'Grudziądz',
      'Brodnica'
    ],
    priority: 12,
    active: true
  },
  {
    slug: 'olsztyn',
    name: 'Olsztyn',
    nameLocative: 'Olsztynie',
    voivodeship: 'warmińsko-mazurskie',
    voivodeshipLocative: 'warmińsko-mazurskim',
    population: 170000,
    description: 'Olsztyn to stolica województwa warmińsko-mazurskiego, położony w krainie Tysiąca Jezior.',
    localKeywords: [
      'księgowość Olsztyn',
      'biuro rachunkowe Olsztyn',
      'księgowy Olsztyn',
      'doradztwo podatkowe Olsztyn'
    ],
    nearbyAreas: [
      'Elbląg',
      'Ostróda',
      'Mrągowo',
      'Iława',
      'Dobre Miasto'
    ],
    priority: 13,
    active: true
  },
  {
    slug: 'bialystok',
    name: 'Białystok',
    nameLocative: 'Białymstoku',
    voivodeship: 'podlaskie',
    voivodeshipLocative: 'podlaskim',
    population: 300000,
    description: 'Białystok to stolica województwa podlaskiego, ważny ośrodek akademicki i kulturalny północno-wschodniej Polski.',
    localKeywords: [
      'księgowość Białystok',
      'biuro rachunkowe Białystok',
      'księgowy Białystok',
      'doradztwo podatkowe Białystok'
    ],
    nearbyAreas: [
      'Suwałki',
      'Łomża',
      'Augustów',
      'Sokółka',
      'Choroszcz'
    ],
    priority: 14,
    active: true
  },
  {
    slug: 'zielona-gora',
    name: 'Zielona Góra',
    nameLocative: 'Zielonej Górze',
    voivodeship: 'lubuskie',
    voivodeshipLocative: 'lubuskim',
    population: 140000,
    description: 'Zielona Góra to stolica województwa lubuskiego, znana z tradycji winiarskich i festiwalu winobrania.',
    localKeywords: [
      'księgowość Zielona Góra',
      'biuro rachunkowe Zielona Góra',
      'księgowy Zielona Góra',
      'doradztwo podatkowe Zielona Góra'
    ],
    nearbyAreas: [
      'Gorzów Wielkopolski',
      'Żagań',
      'Żary',
      'Nowa Sól',
      'Sulechów'
    ],
    priority: 15,
    active: true
  },
  {
    slug: 'gorzow-wielkopolski',
    name: 'Gorzów Wielkopolski',
    nameLocative: 'Gorzowie Wielkopolskim',
    voivodeship: 'lubuskie',
    voivodeshipLocative: 'lubuskim',
    population: 120000,
    description: 'Gorzów Wielkopolski to drugie co do wielkości miasto województwa lubuskiego, ważny ośrodek administracyjny.',
    localKeywords: [
      'księgowość Gorzów Wielkopolski',
      'biuro rachunkowe Gorzów',
      'księgowy Gorzów Wielkopolski',
      'doradztwo podatkowe Gorzów'
    ],
    nearbyAreas: [
      'Kostrzyn nad Odrą',
      'Strzelce Krajeńskie',
      'Skwierzyna',
      'Witnica',
      'Deszczno'
    ],
    priority: 16,
    active: true
  },
  {
    slug: 'opole',
    name: 'Opole',
    nameLocative: 'Opolu',
    voivodeship: 'opolskie',
    voivodeshipLocative: 'opolskim',
    population: 130000,
    description: 'Opole to stolica województwa opolskiego, znane z festiwalu piosenki polskiej i wielokulturowości.',
    localKeywords: [
      'księgowość Opole',
      'biuro rachunkowe Opole',
      'księgowy Opole',
      'doradztwo podatkowe Opole'
    ],
    nearbyAreas: [
      'Kędzierzyn-Koźle',
      'Nysa',
      'Kluczbork',
      'Brzeg',
      'Strzelce Opolskie'
    ],
    priority: 17,
    active: true
  },
  {
    slug: 'kielce',
    name: 'Kielce',
    nameLocative: 'Kielcach',
    voivodeship: 'świętokrzyskie',
    voivodeshipLocative: 'świętokrzyskim',
    population: 200000,
    description: 'Kielce to stolica województwa świętokrzyskiego, położone w Górach Świętokrzyskich.',
    localKeywords: [
      'księgowość Kielce',
      'biuro rachunkowe Kielce',
      'księgowy Kielce',
      'doradztwo podatkowe Kielce'
    ],
    nearbyAreas: [
      'Ostrowiec Świętokrzyski',
      'Starachowice',
      'Skarżysko-Kamienna',
      'Końskie',
      'Jędrzejów'
    ],
    priority: 18,
    active: true
  },
  {
    slug: 'radom',
    name: 'Radom',
    nameLocative: 'Radomiu',
    voivodeship: 'mazowieckie',
    voivodeshipLocative: 'mazowieckim',
    population: 210000,
    description: 'Radom to jedno z największych miast województwa mazowieckiego, ważny ośrodek przemysłowy.',
    localKeywords: [
      'księgowość Radom',
      'biuro rachunkowe Radom',
      'księgowy Radom',
      'doradztwo podatkowe Radom'
    ],
    nearbyAreas: [
      'Kozienice',
      'Pionki',
      'Szydłowiec',
      'Iłża',
      'Skaryszew'
    ],
    priority: 19,
    active: true
  },
  {
    slug: 'plock',
    name: 'Płock',
    nameLocative: 'Płocku',
    voivodeship: 'mazowieckie',
    voivodeshipLocative: 'mazowieckim',
    population: 120000,
    description: 'Płock to historyczne miasto nad Wisłą, ważny ośrodek petrochemiczny w województwie mazowieckim.',
    localKeywords: [
      'księgowość Płock',
      'biuro rachunkowe Płock',
      'księgowy Płock',
      'doradztwo podatkowe Płock'
    ],
    nearbyAreas: [
      'Gostynin',
      'Żuromin',
      'Sierpc',
      'Drobin',
      'Radzanowo'
    ],
    priority: 20,
    active: true
  },
  {
    slug: 'siedlce',
    name: 'Siedlce',
    nameLocative: 'Siedlcach',
    voivodeship: 'mazowieckie',
    voivodeshipLocative: 'mazowieckim',
    population: 77000,
    description: 'Siedlce to ważny ośrodek akademicki i kulturalny we wschodniej części województwa mazowieckiego.',
    localKeywords: [
      'księgowość Siedlce',
      'biuro rachunkowe Siedlce',
      'księgowy Siedlce',
      'doradztwo podatkowe Siedlce'
    ],
    nearbyAreas: [
      'Łuków',
      'Sokołów Podlaski',
      'Węgrów',
      'Garwolin',
      'Mordy'
    ],
    priority: 21,
    active: true
  },
  {
    slug: 'tarnow',
    name: 'Tarnów',
    nameLocative: 'Tarnowie',
    voivodeship: 'małopolskie',
    voivodeshipLocative: 'małopolskim',
    population: 110000,
    description: 'Tarnów to historyczne miasto w województwie małopolskim, znane z zabytków i tradycji kulturowych.',
    localKeywords: [
      'księgowość Tarnów',
      'biuro rachunkowe Tarnów',
      'księgowy Tarnów',
      'doradztwo podatkowe Tarnów'
    ],
    nearbyAreas: [
      'Dąbrowa Tarnowska',
      'Brzesko',
      'Wojnicz',
      'Radgoszcz',
      'Żabno'
    ],
    priority: 22,
    active: true
  },
  {
    slug: 'nowy-sacz',
    name: 'Nowy Sącz',
    nameLocative: 'Nowym Sączu',
    voivodeship: 'małopolskie',
    voivodeshipLocative: 'małopolskim',
    population: 84000,
    description: 'Nowy Sącz to miasto w województwie małopolskim, położone u podnóża Beskidów.',
    localKeywords: [
      'księgowość Nowy Sącz',
      'biuro rachunkowe Nowy Sącz',
      'księgowy Nowy Sącz',
      'doradztwo podatkowe Nowy Sącz'
    ],
    nearbyAreas: [
      'Gorlice',
      'Krynica-Zdrój',
      'Stary Sącz',
      'Grybów',
      'Muszyna'
    ],
    priority: 23,
    active: true
  },
  {
    slug: 'tarnobrzeg',
    name: 'Tarnobrzeg',
    nameLocative: 'Tarnobrzegu',
    voivodeship: 'podkarpackie',
    voivodeshipLocative: 'podkarpackim',
    population: 47000,
    description: 'Tarnobrzeg to miasto w województwie podkarpackim, ważny ośrodek przemysłowy nad Wisłą.',
    localKeywords: [
      'księgowość Tarnobrzeg',
      'biuro rachunkowe Tarnobrzeg',
      'księgowy Tarnobrzeg',
      'doradztwo podatkowe Tarnobrzeg'
    ],
    nearbyAreas: [
      'Stalowa Wola',
      'Sandomierz',
      'Nisko',
      'Baranów Sandomierski',
      'Gorzyce'
    ],
    priority: 24,
    active: true
  },
  {
    slug: 'krosno',
    name: 'Krosno',
    nameLocative: 'Krośnie',
    voivodeship: 'podkarpackie',
    voivodeshipLocative: 'podkarpackim',
    population: 47000,
    description: 'Krosno to historyczne miasto w województwie podkarpackim, znane z tradycji szklarskich.',
    localKeywords: [
      'księgowość Krosno',
      'biuro rachunkowe Krosno',
      'księgowy Krosno',
      'doradztwo podatkowe Krosno'
    ],
    nearbyAreas: [
      'Sanok',
      'Jasło',
      'Dukla',
      'Rymanów',
      'Jedlicze'
    ],
    priority: 25,
    active: true
  },
  {
    slug: 'przemysl',
    name: 'Przemyśl',
    nameLocative: 'Przemyślu',
    voivodeship: 'podkarpackie',
    voivodeshipLocative: 'podkarpackim',
    population: 60000,
    description: 'Przemyśl to historyczne miasto w województwie podkarpackim, położone nad Sanem przy granicy z Ukrainą.',
    localKeywords: [
      'księgowość Przemyśl',
      'biuro rachunkowe Przemyśl',
      'księgowy Przemyśl',
      'doradztwo podatkowe Przemyśl'
    ],
    nearbyAreas: [
      'Jarosław',
      'Medyka',
      'Żurawica',
      'Krasiczyn',
      'Dubiecko'
    ],
    priority: 26,
    active: true
  },
  {
    slug: 'chelm',
    name: 'Chełm',
    nameLocative: 'Chełmie',
    voivodeship: 'lubelskie',
    voivodeshipLocative: 'lubelskim',
    population: 63000,
    description: 'Chełm to miasto w województwie lubelskim, znane z podziemnych tras kredowych.',
    localKeywords: [
      'księgowość Chełm',
      'biuro rachunkowe Chełm',
      'księgowy Chełm',
      'doradztwo podatkowe Chełm'
    ],
    nearbyAreas: [
      'Zamość',
      'Hrubieszów',
      'Rejowiec Fabryczny',
      'Sawin',
      'Dorohusk'
    ],
    priority: 27,
    active: true
  },
  {
    slug: 'zamosc',
    name: 'Zamość',
    nameLocative: 'Zamościu',
    voivodeship: 'lubelskie',
    voivodeshipLocative: 'lubelskim',
    population: 65000,
    description: 'Zamość to renesansowe miasto w województwie lubelskim, wpisane na Listę Światowego Dziedzictwa UNESCO.',
    localKeywords: [
      'księgowość Zamość',
      'biuro rachunkowe Zamość',
      'księgowy Zamość',
      'doradztwo podatkowe Zamość'
    ],
    nearbyAreas: [
      'Biłgoraj',
      'Tomaszów Lubelski',
      'Szczebrzeszyn',
      'Krasnystaw',
      'Zwierzyniec'
    ],
    priority: 28,
    active: true
  },
  {
    slug: 'biala-podlaska',
    name: 'Biała Podlaska',
    nameLocative: 'Białej Podlaskiej',
    voivodeship: 'lubelskie',
    voivodeshipLocative: 'lubelskim',
    population: 57000,
    description: 'Biała Podlaska to miasto w województwie lubelskim, ważny ośrodek akademicki i kulturalny.',
    localKeywords: [
      'księgowość Biała Podlaska',
      'biuro rachunkowe Biała Podlaska',
      'księgowy Biała Podlaska',
      'doradztwo podatkowe Biała Podlaska'
    ],
    nearbyAreas: [
      'Międzyrzec Podlaski',
      'Radzyń Podlaski',
      'Parczew',
      'Łuków',
      'Terespol'
    ],
    priority: 29,
    active: true
  },
  {
    slug: 'suwalki',
    name: 'Suwałki',
    nameLocative: 'Suwałkach',
    voivodeship: 'podlaskie',
    voivodeshipLocative: 'podlaskim',
    population: 69000,
    description: 'Suwałki to miasto w województwie podlaskim, położone w krainie Suwalszczyzny przy granicy z Litwą.',
    localKeywords: [
      'księgowość Suwałki',
      'biuro rachunkowe Suwałki',
      'księgowy Suwałki',
      'doradztwo podatkowe Suwałki'
    ],
    nearbyAreas: [
      'Augustów',
      'Sejny',
      'Bakałarzewo',
      'Filipów',
      'Raczki'
    ],
    priority: 30,
    active: true
  },
  {
    slug: 'lomza',
    name: 'Łomża',
    nameLocative: 'Łomży',
    voivodeship: 'podlaskie',
    voivodeshipLocative: 'podlaskim',
    population: 63000,
    description: 'Łomża to miasto w województwie podlaskim, ważny ośrodek akademicki i kulturalny nad Narwią.',
    localKeywords: [
      'księgowość Łomża',
      'biuro rachunkowe Łomża',
      'księgowy Łomża',
      'doradztwo podatkowe Łomża'
    ],
    nearbyAreas: [
      'Grajewo',
      'Kolno',
      'Zambrów',
      'Wysokie Mazowieckie',
      'Jedwabne'
    ],
    priority: 31,
    active: true
  },
  {
    slug: 'elblag',
    name: 'Elbląg',
    nameLocative: 'Elblągu',
    voivodeship: 'warmińsko-mazurskie',
    voivodeshipLocative: 'warmińsko-mazurskim',
    population: 120000,
    description: 'Elbląg to historyczne miasto w województwie warmińsko-mazurskim, ważny port nad Zalewem Wiślanym.',
    localKeywords: [
      'księgowość Elbląg',
      'biuro rachunkowe Elbląg',
      'księgowy Elbląg',
      'doradztwo podatkowe Elbląg'
    ],
    nearbyAreas: [
      'Malbork',
      'Braniewo',
      'Pasłęk',
      'Tolkmicko',
      'Frombork'
    ],
    priority: 32,
    active: true
  },
  {
    slug: 'ciechanow',
    name: 'Ciechanów',
    nameLocative: 'Ciechanowie',
    voivodeship: 'mazowieckie',
    voivodeshipLocative: 'mazowieckim',
    population: 45000,
    description: 'Ciechanów to miasto w województwie mazowieckim, znane z zamku książąt mazowieckich.',
    localKeywords: [
      'księgowość Ciechanów',
      'biuro rachunkowe Ciechanów',
      'księgowy Ciechanów',
      'doradztwo podatkowe Ciechanów'
    ],
    nearbyAreas: [
      'Mława',
      'Żuromin',
      'Pułtusk',
      'Maków',
      'Opinogóra Górna'
    ],
    priority: 33,
    active: true
  },
  {
    slug: 'ostrołeka',
    name: 'Ostrołęka',
    nameLocative: 'Ostrołęce',
    voivodeship: 'mazowieckie',
    voivodeshipLocative: 'mazowieckim',
    population: 52000,
    description: 'Ostrołęka to miasto w województwie mazowieckim, ważny ośrodek przemysłowy nad Narwią.',
    localKeywords: [
      'księgowość Ostrołęka',
      'biuro rachunkowe Ostrołęka',
      'księgowy Ostrołęka',
      'doradztwo podatkowe Ostrołęka'
    ],
    nearbyAreas: [
      'Myszyniec',
      'Baranowo',
      'Lelis',
      'Czarnia',
      'Kadzidło'
    ],
    priority: 34,
    active: true
  },
  {
    slug: 'piotrkow-trybunalski',
    name: 'Piotrków Trybunalski',
    nameLocative: 'Piotrkowie Trybunalskim',
    voivodeship: 'łódzkie',
    voivodeshipLocative: 'łódzkim',
    population: 75000,
    description: 'Piotrków Trybunalski to historyczne miasto w województwie łódzkim, dawna stolica Trybunału Koronnego.',
    localKeywords: [
      'księgowość Piotrków Trybunalski',
      'biuro rachunkowe Piotrków',
      'księgowy Piotrków Trybunalski',
      'doradztwo podatkowe Piotrków'
    ],
    nearbyAreas: [
      'Tomaszów Mazowiecki',
      'Radomsko',
      'Opoczno',
      'Sulejów',
      'Wolbórz'
    ],
    priority: 35,
    active: true
  },
  {
    slug: 'sieradz',
    name: 'Sieradz',
    nameLocative: 'Sieradzu',
    voivodeship: 'łódzkie',
    voivodeshipLocative: 'łódzkim',
    population: 43000,
    description: 'Sieradz to jedno z najstarszych miast w Polsce, położone w województwie łódzkim nad Wartą.',
    localKeywords: [
      'księgowość Sieradz',
      'biuro rachunkowe Sieradz',
      'księgowy Sieradz',
      'doradztwo podatkowe Sieradz'
    ],
    nearbyAreas: [
      'Zduńska Wola',
      'Poddębice',
      'Warta',
      'Złoczew',
      'Burzenin'
    ],
    priority: 36,
    active: true
  },
  {
    slug: 'skierniewice',
    name: 'Skierniewice',
    nameLocative: 'Skierniewicach',
    voivodeship: 'łódzkie',
    voivodeshipLocative: 'łódzkim',
    population: 48000,
    description: 'Skierniewice to miasto w województwie łódzkim, ważny węzeł kolejowy i ośrodek ogrodniczy.',
    localKeywords: [
      'księgowość Skierniewice',
      'biuro rachunkowe Skierniewice',
      'księgowy Skierniewice',
      'doradztwo podatkowe Skierniewice'
    ],
    nearbyAreas: [
      'Łowicz',
      'Żyrardów',
      'Rawa Mazowiecka',
      'Bolimów',
      'Nieborów'
    ],
    priority: 37,
    active: true
  },
  {
    slug: 'kalisz',
    name: 'Kalisz',
    nameLocative: 'Kaliszu',
    voivodeship: 'wielkopolskie',
    voivodeshipLocative: 'wielkopolskim',
    population: 100000,
    description: 'Kalisz to jedno z najstarszych miast w Polsce, położone w województwie wielkopolskim nad Prosną.',
    localKeywords: [
      'księgowość Kalisz',
      'biuro rachunkowe Kalisz',
      'księgowy Kalisz',
      'doradztwo podatkowe Kalisz'
    ],
    nearbyAreas: [
      'Ostrów Wielkopolski',
      'Jarocin',
      'Turek',
      'Koło',
      'Pleszew'
    ],
    priority: 38,
    active: true
  },
  {
    slug: 'konin',
    name: 'Konin',
    nameLocative: 'Koninie',
    voivodeship: 'wielkopolskie',
    voivodeshipLocative: 'wielkopolskim',
    population: 75000,
    description: 'Konin to miasto w województwie wielkopolskim, ważny ośrodek przemysłu energetycznego.',
    localKeywords: [
      'księgowość Konin',
      'biuro rachunkowe Konin',
      'księgowy Konin',
      'doradztwo podatkowe Konin'
    ],
    nearbyAreas: [
      'Turek',
      'Koło',
      'Słupca',
      'Kleczew',
      'Sompolno'
    ],
    priority: 39,
    active: true
  },
  {
    slug: 'pila',
    name: 'Piła',
    nameLocative: 'Pile',
    voivodeship: 'wielkopolskie',
    voivodeshipLocative: 'wielkopolskim',
    population: 74000,
    description: 'Piła to miasto w województwie wielkopolskim, ważny ośrodek przemysłowy i komunikacyjny.',
    localKeywords: [
      'księgowość Piła',
      'biuro rachunkowe Piła',
      'księgowy Piła',
      'doradztwo podatkowe Piła'
    ],
    nearbyAreas: [
      'Wałcz',
      'Chodzież',
      'Ujście',
      'Łobżenica',
      'Wyrzysk'
    ],
    priority: 40,
    active: true
  },
  {
    slug: 'leszno',
    name: 'Leszno',
    nameLocative: 'Lesznie',
    voivodeship: 'wielkopolskie',
    voivodeshipLocative: 'wielkopolskim',
    population: 64000,
    description: 'Leszno to miasto w województwie wielkopolskim, znane z tradycji lotniczych i szybownictwa.',
    localKeywords: [
      'księgowość Leszno',
      'biuro rachunkowe Leszno',
      'księgowy Leszno',
      'doradztwo podatkowe Leszno'
    ],
    nearbyAreas: [
      'Góra',
      'Rawicz',
      'Bojanowo',
      'Rydzyna',
      'Włoszakowice'
    ],
    priority: 41,
    active: true
  },
  {
    slug: 'slupsk',
    name: 'Słupsk',
    nameLocative: 'Słupsku',
    voivodeship: 'pomorskie',
    voivodeshipLocative: 'pomorskim',
    population: 92000,
    description: 'Słupsk to miasto w województwie pomorskim, ważny ośrodek akademicki i kulturalny Pomorza Środkowego.',
    localKeywords: [
      'księgowość Słupsk',
      'biuro rachunkowe Słupsk',
      'księgowy Słupsk',
      'doradztwo podatkowe Słupsk'
    ],
    nearbyAreas: [
      'Ustka',
      'Łeba',
      'Miastko',
      'Bytów',
      'Człuchów'
    ],
    priority: 42,
    active: true
  },
  {
    slug: 'koszalin',
    name: 'Koszalin',
    nameLocative: 'Koszalinie',
    voivodeship: 'zachodniopomorskie',
    voivodeshipLocative: 'zachodniopomorskim',
    population: 107000,
    description: 'Koszalin to miasto w województwie zachodniopomorskim, ważny ośrodek akademicki i turystyczny.',
    localKeywords: [
      'księgowość Koszalin',
      'biuro rachunkowe Koszalin',
      'księgowy Koszalin',
      'doradztwo podatkowe Koszalin'
    ],
    nearbyAreas: [
      'Kołobrzeg',
      'Białogard',
      'Sianów',
      'Bobolice',
      'Manowo'
    ],
    priority: 43,
    active: true
  },
  {
    slug: 'stargard',
    name: 'Stargard',
    nameLocative: 'Stargardzie',
    voivodeship: 'zachodniopomorskie',
    voivodeshipLocative: 'zachodniopomorskim',
    population: 67000,
    description: 'Stargard to miasto w województwie zachodniopomorskim, ważny ośrodek przemysłowy i komunikacyjny.',
    localKeywords: [
      'księgowość Stargard',
      'biuro rachunkowe Stargard',
      'księgowy Stargard',
      'doradztwo podatkowe Stargard'
    ],
    nearbyAreas: [
      'Pyrzyce',
      'Chociwel',
      'Dolice',
      'Suchań',
      'Kobylanka'
    ],
    priority: 44,
    active: true
  },
  {
    slug: 'walbrzych',
    name: 'Wałbrzych',
    nameLocative: 'Wałbrzychu',
    voivodeship: 'dolnośląskie',
    voivodeshipLocative: 'dolnośląskim',
    population: 110000,
    description: 'Wałbrzych to miasto w województwie dolnośląskim, dawny ośrodek górnictwa węglowego.',
    localKeywords: [
      'księgowość Wałbrzych',
      'biuro rachunkowe Wałbrzych',
      'księgowy Wałbrzych',
      'doradztwo podatkowe Wałbrzych'
    ],
    nearbyAreas: [
      'Kłodzko',
      'Świdnica',
      'Dzierżoniów',
      'Boguszów-Gorce',
      'Szczawno-Zdrój'
    ],
    priority: 45,
    active: true
  },
  {
    slug: 'legnica',
    name: 'Legnica',
    nameLocative: 'Legnicy',
    voivodeship: 'dolnośląskie',
    voivodeshipLocative: 'dolnośląskim',
    population: 99000,
    description: 'Legnica to miasto w województwie dolnośląskim, ważny ośrodek przemysłowy i kulturalny.',
    localKeywords: [
      'księgowość Legnica',
      'biuro rachunkowe Legnica',
      'księgowy Legnica',
      'doradztwo podatkowe Legnica'
    ],
    nearbyAreas: [
      'Lubin',
      'Głogów',
      'Jawor',
      'Złotoryja',
      'Chojnów'
    ],
    priority: 46,
    active: true
  },
  {
    slug: 'jelenia-gora',
    name: 'Jelenia Góra',
    nameLocative: 'Jeleniej Górze',
    voivodeship: 'dolnośląskie',
    voivodeshipLocative: 'dolnośląskim',
    population: 79000,
    description: 'Jelenia Góra to miasto w województwie dolnośląskim, położone u podnóża Karkonoszy.',
    localKeywords: [
      'księgowość Jelenia Góra',
      'biuro rachunkowe Jelenia Góra',
      'księgowy Jelenia Góra',
      'doradztwo podatkowe Jelenia Góra'
    ],
    nearbyAreas: [
      'Karpacz',
      'Szklarska Poręba',
      'Cieplice Śląskie-Zdrój',
      'Piechowice',
      'Janowice Wielkie'
    ],
    priority: 47,
    active: true
  },
  {
    slug: 'czestochowa',
    name: 'Częstochowa',
    nameLocative: 'Częstochowie',
    voivodeship: 'śląskie',
    voivodeshipLocative: 'śląskim',
    population: 220000,
    description: 'Częstochowa to miasto w województwie śląskim, znane z Jasnej Góry i kultu Matki Boskiej Częstochowskiej.',
    localKeywords: [
      'księgowość Częstochowa',
      'biuro rachunkowe Częstochowa',
      'księgowy Częstochowa',
      'doradztwo podatkowe Częstochowa'
    ],
    nearbyAreas: [
      'Myszków',
      'Lubliniec',
      'Kłobuck',
      'Blachownia',
      'Koniecpol'
    ],
    priority: 48,
    active: true
  },
  {
    slug: 'bielsko-biala',
    name: 'Bielsko-Biała',
    nameLocative: 'Bielsku-Białej',
    voivodeship: 'śląskie',
    voivodeshipLocative: 'śląskim',
    population: 170000,
    description: 'Bielsko-Biała to miasto w województwie śląskim, ważny ośrodek przemysłowy u podnóża Beskidów.',
    localKeywords: [
      'księgowość Bielsko-Biała',
      'biuro rachunkowe Bielsko-Biała',
      'księgowy Bielsko-Biała',
      'doradztwo podatkowe Bielsko-Biała'
    ],
    nearbyAreas: [
      'Żywiec',
      'Cieszyn',
      'Skoczów',
      'Czechowice-Dziedzice',
      'Wilamowice'
    ],
    priority: 49,
    active: true
  }
];

// Eksportowane miasta - filtrowane i posortowane
export const cities: CityData[] = citiesData
  .filter(city => city.active)
  .sort((a, b) => a.priority - b.priority);

// Funkcja do pobierania miasta po slug
export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(city => city.slug === slug);
}

// Funkcja do pobierania aktywnych miast
export function getActiveCities(): CityData[] {
  return cities;
}

// Funkcja do pobierania miast do wyświetlenia w stopce (top 5)
export function getCitiesForFooter(): CityData[] {
  return cities.slice(0, 5);
}

// Funkcja do pobierania wszystkich miast (włącznie z nieaktywnymi)
export function getAllCities(): CityData[] {
  return citiesData.sort((a, b) => a.priority - b.priority);
}

// Funkcja do pobierania slug-ów aktywnych miast (dla sitemap)
export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}

// Funkcja do generowania poprawnej składni z przyimkiem
export function getCityWithPreposition(cityData: CityData): string {
  // Miasta wymagające "we" zamiast "w"
  const citiesWithWe = ['Wrocław', 'Włocławek'];

  if (citiesWithWe.includes(cityData.name)) {
    return `we ${cityData.nameLocative}`;
  }

  return `w ${cityData.nameLocative}`;
}