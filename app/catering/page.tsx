import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CateringShowcase from "@/components/CateringShowcase";
import PricingSection from "@/components/PricingSection";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { cateringPricing, cateringNotes } from "@/lib/pricing";

const description =
  "Private chefs, event catering, family staycations, birthday parties and meal prep in Kampala. Continental & local cuisine with transparent UGX pricing.";

export const metadata: Metadata = {
  title: "Catering Services in Kampala",
  description,
  alternates: { canonical: "/catering" },
  openGraph: {
    title: "Catering Services in Kampala | Velora Premium",
    description,
    url: "/catering",
    images: ["/catering-private-chef.jpg"],
  },
};

const jsonLd = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Catering Services", path: "/catering" },
  ]),
  serviceSchema({
    name: "Catering Services",
    serviceType: "Catering",
    description,
    path: "/catering",
    rows: cateringPricing,
  }),
];

export default function CateringPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="CATERING SERVICES"
        title="Catering Excellence"
        description="Savor professional culinary experiences tailored to your lifestyle — from private chefs to bespoke event catering."
      />

      <Reveal className="py-stack-lg bg-surface-container-lowest">
        <CateringShowcase />
      </Reveal>

      <Reveal className="py-stack-lg bg-surface-container-low">
        <PricingSection
          title="Catering Price List"
          subtitle="Transparent pricing for exceptional culinary service."
          rows={cateringPricing}
          notes={cateringNotes}
        />
      </Reveal>
    </>
  );
}
