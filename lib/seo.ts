// schema.org structured data (JSON-LD) builders.
//
// These power rich results and, crucially, local SEO: the LocalBusiness node
// tells Google who Velora is, where it operates (Kampala), and how to contact
// it. Everything links by @id so Google treats it as one entity graph.

import {
  BUSINESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LEGAL_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import type { PriceRow } from "@/lib/pricing";

const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const DAY_NAMES = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/** Lowest number in a price string like "100,000 – 250,000" -> 100000. */
function minPrice(price: string): number {
  const first = price.split(/[–-]/)[0] ?? "";
  const digits = first.replace(/[^\d]/g, "");
  return digits ? Number(digits) : 0;
}

/** Highest number in a price string like "100,000 – 250,000" -> 250000. */
function maxPrice(price: string): number {
  const parts = price.split(/[–-]/);
  const last = parts[parts.length - 1] ?? "";
  const digits = last.replace(/[^\d]/g, "");
  return digits ? Number(digits) : minPrice(price);
}

function cities(names: string[]) {
  return names.map((name) => ({ "@type": "City", name }));
}

/** The core LocalBusiness entity — the anchor for all local SEO. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}/hero.jpg`,
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: BUSINESS.currency,
    foundingDate: String(BUSINESS.foundingYear),
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: cities(BUSINESS.areaServed),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAY_NAMES,
        opens: BUSINESS.openingHours.opens,
        closes: BUSINESS.openingHours.closes,
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE,
      contactType: "customer service",
      areaServed: "UG",
      availableLanguage: ["en"],
    },
    ...(BUSINESS.sameAs.length > 0 ? { sameAs: BUSINESS.sameAs } : {}),
  };
}

/** WebSite node linked to the business as publisher. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: LEGAL_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en-UG",
    publisher: { "@id": BUSINESS_ID },
  };
}

type ServiceSchemaInput = {
  name: string;
  serviceType: string;
  description: string;
  path: string;
  rows: PriceRow[];
};

/** A Service node (catering / cleaning) with its priced offer catalog. */
export function serviceSchema({
  name,
  serviceType,
  description,
  path,
  rows,
}: ServiceSchemaInput) {
  const lows = rows.map((r) => minPrice(r.price)).filter((n) => n > 0);
  const highs = rows.map((r) => maxPrice(r.price)).filter((n) => n > 0);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: cities(BUSINESS.areaServed),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: BUSINESS.currency,
      lowPrice: lows.length ? Math.min(...lows) : undefined,
      highPrice: highs.length ? Math.max(...highs) : undefined,
      offerCount: rows.length,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} price list`,
      itemListElement: rows.map((row) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: row.label },
        priceCurrency: BUSINESS.currency,
        price: minPrice(row.price),
      })),
    },
  };
}

/** Breadcrumb trail for a subpage. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
