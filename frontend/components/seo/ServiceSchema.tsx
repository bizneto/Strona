interface ServiceData {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  features: Array<{
    name: string;
    description: string;
  }>;
  benefits: string[];
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  pricing: {
    startingPrice: string;
    description: string;
    factors: string[];
  };
  faq?: Array<{
    question: string;
    answer: string;
  }>;
}

interface ServiceSchemaProps {
  serviceData: ServiceData;
}

export default function ServiceSchema({ serviceData }: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceData.name,
    "description": serviceData.description,
    "provider": {
      "@type": "Organization",
      "name": "Bizneto",
      "url": "https://bizneto.pl",
      "logo": "https://bizneto.pl/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+48-177-852-631",
        "contactType": "customer service",
        "availableLanguage": "Polish"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mieszka I 38",
        "addressLocality": "Rzeszów",
        "postalCode": "35-308",
        "addressCountry": "PL"
      }
    },
    "serviceType": serviceData.name,
    "category": "Księgowość",
    "offers": {
      "@type": "Offer",
      "price": serviceData.pricing.startingPrice.replace(/[^\d]/g, ''),
      "priceCurrency": "PLN",
      "description": serviceData.pricing.description,
      "availability": "https://schema.org/InStock"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Poland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceData.name} - Szczegóły usługi`,
      "itemListElement": serviceData.features.map((feature, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "name": feature.name,
        "description": feature.description
      }))
    }
  };

  const faqSchema = serviceData.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceData.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

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
        "name": "Usługi",
        "item": "https://bizneto.pl/finanse/uslugi"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": serviceData.name,
        "item": `https://bizneto.pl/finanse/uslugi/${serviceData.name.toLowerCase().replace(/\s+/g, '-').replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e').replace(/ł/g, 'l').replace(/ń/g, 'n').replace(/ó/g, 'o').replace(/ś/g, 's').replace(/ź/g, 'z').replace(/ż/g, 'z')}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
