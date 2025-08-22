export default function FinancePageSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bizneto Sp. z o.o.",
    "url": "https://bizneto.pl",
    "logo": "https://bizneto.pl/images/biznetoLogo.png",
    "description": "Profesjonalne usługi księgowe, doradztwo podatkowe i obsługa finansowa firm",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mieszka I 38",
      "addressLocality": "Rzeszów",
      "postalCode": "35-308",
      "addressCountry": "PL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-177-852-631",
      "contactType": "customer service",
      "email": "biuro@bizneto.pl",
      "availableLanguage": "Polish"
    },
    "sameAs": [
      "https://www.facebook.com/bizneto",
      "https://www.instagram.com/bizneto"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Usługi Księgowe i Finansowe",
    "description": "Kompleksowe usługi księgowe, doradztwo podatkowe, kadry i płace dla firm",
    "provider": {
      "@type": "Organization",
      "name": "Bizneto Sp. z o.o."
    },
    "serviceType": "Księgowość",
    "areaServed": {
      "@type": "Country",
      "name": "Polska"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi Finansowe",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Księgowość",
            "description": "Profesjonalna obsługa księgowa firm"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Doradztwo Podatkowe",
            "description": "Optymalizacja podatkowa i doradztwo w zakresie podatków"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kadry i Płace",
            "description": "Kompleksowa obsługa kadr i płac"
          }
        }
      ]
    }
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
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
