import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CleaningShowcase from "@/components/CleaningShowcase";
import PricingSection from "@/components/PricingSection";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { cleaningPricing, cleaningNotes } from "@/lib/pricing";

const description =
  "Deep cleaning, house cleaning, laundry, ironing, home organization and babysitting in Kampala. Meticulous, trusted professionals with transparent UGX pricing.";

export const metadata: Metadata = {
  title: "Cleaning Services in Kampala",
  description,
  alternates: { canonical: "/cleaning" },
  openGraph: {
    title: "Cleaning Services in Kampala | Velora Premium",
    description,
    url: "/cleaning",
    images: ["/cleaning-dusting.jpg"],
  },
};

const jsonLd = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Cleaning Services", path: "/cleaning" },
  ]),
  serviceSchema({
    name: "Cleaning Services",
    serviceType: "Home cleaning",
    description,
    path: "/cleaning",
    rows: cleaningPricing,
  }),
];

export default function CleaningPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="CLEANING SERVICES"
        title="Immaculate Spaces"
        description="Our meticulous cleaning professionals handle everything from delicate curtains to deep tile scrubbing, ensuring your home is a sanctuary of health and peace."
      />

      <Reveal className="py-stack-lg bg-surface">
        <CleaningShowcase />
      </Reveal>

      <Reveal className="py-stack-lg bg-surface-container-low">
        <PricingSection
          title="Cleaning Price List"
          subtitle="Transparent pricing for a spotless, well-kept home."
          rows={cleaningPricing}
          notes={cleaningNotes}
        />
      </Reveal>
    </>
  );
}
