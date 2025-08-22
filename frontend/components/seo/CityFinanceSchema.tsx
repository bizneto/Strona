import { CityData, getCityWithPreposition } from "@/data/cities";

interface CityFinanceSchemaProps {
  cityData: CityData;
}

export default function CityFinanceSchema({ cityData }: CityFinanceSchemaProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://bizneto.pl/finanse/${cityData.slug}#business`,
    "name": `Bizneto - Księgowość ${cityData.name}`,
    "description": `Profesjonalne usługi księgowe ${getCityWithPreposition(cityData)}. Doradztwo podatkowe, kadry i płace, obsługa firm w województwie ${cityData.voivodeshipLocative}.`,
    "url": `https://bizneto.pl/finanse/${cityData.slug}`,
    "logo": "https://bizneto.pl/images/biznetoLogo.png",
    "image": "https://bizneto.pl/images/biznetoLogo.png",
    "telephone": "+48-177-852-631",
    "email": "biuro@bizneto.pl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mieszka I 38",
      "addressLocality": "Rzeszów",
      "addressRegion": "Podkarpackie",
      "postalCode": "35-308",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.0412",
      "longitude": "21.9991"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": cityData.name,
        "addressRegion": cityData.voivodeship,
        "addressCountry": "PL"
      },
      ...cityData.nearbyAreas.map(area => ({
        "@type": "City",
        "name": area,
        "addressRegion": cityData.voivodeship,
        "addressCountry": "PL"
      }))
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "50.0412",
        "longitude": "21.9991"
      },
      "geoRadius": "100000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Usługi Księgowe ${cityData.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Księgowość ${cityData.name}`,
            "description": `Profesjonalna obsługa księgowa firm w ${cityData.nameLocative}`,
            "areaServed": cityData.name
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Doradztwo Podatkowe ${cityData.name}`,
            "description": `Optymalizacja podatkowa i doradztwo w zakresie podatków w ${cityData.nameLocative}`,
            "areaServed": cityData.name
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Kadry i Płace ${cityData.name}`,
            "description": `Kompleksowa obsługa kadr i płac w ${cityData.nameLocative}`,
            "areaServed": cityData.name
          }
        }
      ]
    },
    "openingHours": "Mo-Fr 08:00-17:00",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "PLN"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona główna",
        "item": "https://bizneto.pl"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Finanse",
        "item": "https://bizneto.pl/finanse"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `Księgowość ${cityData.name}`,
        "item": `https://bizneto.pl/finanse/${cityData.slug}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Czy obsługujecie firmy ${getCityWithPreposition(cityData)}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Tak, świadczymy kompleksowe usługi księgowe dla firm ${getCityWithPreposition(cityData)} i całym województwie ${cityData.voivodeshipLocative}. Mamy 20-letnie doświadczenie w obsłudze lokalnych przedsiębiorców.`
        }
      },
      {
        "@type": "Question",
        "name": `Jakie usługi księgowe oferujecie ${getCityWithPreposition(cityData)}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${getCityWithPreposition(cityData).charAt(0).toUpperCase() + getCityWithPreposition(cityData).slice(1)} oferujemy pełen zakres usług: księgowość, doradztwo podatkowe, kadry i płace, rozliczenia VAT, sprawozdania finansowe oraz optymalizację podatkową.`
        }
      },
      {
        "@type": "Question",
        "name": `Ile kosztują usługi księgowe w ${cityData.nameLocative}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Koszt usług księgowych w ${cityData.nameLocative} zależy od wielkości firmy i zakresu usług. Oferujemy konkurencyjne ceny i bezpłatną wycenę. Skontaktuj się z nami po szczegóły.`
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
