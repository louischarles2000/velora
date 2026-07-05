// Central site configuration and business "NAP" (Name, Address, Phone).
// Keeping this in one place keeps the visible contact details and the SEO
// structured data perfectly consistent — which matters for local ranking.

// TODO(owner): set NEXT_PUBLIC_SITE_URL to your real, canonical domain (used for
// canonical URLs, the sitemap, robots.txt and social/preview cards).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.velora.co.ug"
).replace(/\/$/, "");

export const SITE_NAME = "Velora";
export const LEGAL_NAME = "Velora Premium Home Services";

export const SITE_DESCRIPTION =
  "Velora Premium is a Kampala-based home services company offering private chefs, event catering, deep cleaning, laundry, home organization and babysitting — quality care, trusted service, seven days a week.";

// TODO(owner): replace WHATSAPP_LINK with your real WhatsApp click-to-chat URL,
// e.g. "https://wa.me/2567XXXXXXXX" (country code + number, no "+" or spaces).
export const WHATSAPP_LINK = "https://wa.me/256780489607";

// Contact details — kept here so the Contact page and the SEO schema match.
export const CONTACT_PHONE = "+256709671172"; // E.164 format for schema/tel:
export const CONTACT_PHONE_DISPLAY = "+256 709 671 172";
export const CONTACT_EMAIL = "info@velorakitchenandcleaning.com";

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Catering Services", href: "/catering" },
  { label: "Cleaning Services", href: "/cleaning" },
  { label: "Contact", href: "/contact" },
];

// Local business details for structured data (schema.org LocalBusiness).
// TODO(owner): fill in the exact street address, opening hours and social
// profile URLs — accurate, consistent details help you rank locally.
export const BUSINESS = {
  address: {
    // streetAddress intentionally omitted until confirmed.
    locality: "Kampala",
    region: "Central Region",
    country: "UG",
  },
  // Approximate Kampala coordinates — update to your actual location.
  geo: { latitude: 0.3476, longitude: 32.5825 },
  priceRange: "UGX 20,000 – 500,000",
  currency: "UGX",
  // Days/hours you operate. "7 days a week" -> Mon–Sun.
  openingHours: { days: "Mo,Tu,We,Th,Fr,Sa,Su", opens: "08:00", closes: "20:00" },
  // Neighbourhoods and towns you serve around Kampala.
  areaServed: [
    "Kampala",
    "Nakasero",
    "Kololo",
    "Naguru",
    "Bugolobi",
    "Bukoto",
    "Ntinda",
    "Naalya",
    "Kira",
    "Muyenga",
    "Munyonyo",
    "Kansanga",
    "Najjera",
    "Entebbe",
    "Wakiso",
  ],
  // TODO(owner): add real social profile URLs (Facebook, Instagram, etc.).
  sameAs: [] as string[],
  foundingYear: 2024,
};

// Broad keyword themes for the site (Kampala + Uganda intent).
export const SITE_KEYWORDS = [
  "home services Kampala",
  "cleaning services Kampala",
  "deep cleaning Kampala",
  "house cleaning Kampala",
  "laundry services Kampala",
  "private chef Kampala",
  "catering services Kampala",
  "event catering Kampala",
  "meal prep Kampala",
  "babysitting Kampala",
  "home organization Kampala",
  "professional cleaners Uganda",
  "Velora Premium",
];
