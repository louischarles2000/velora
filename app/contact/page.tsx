import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import MaterialIcon from "@/components/MaterialIcon";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  SITE_URL,
  WHATSAPP_LINK,
} from "@/lib/site";

const description =
  "Contact Velora Premium Home Services in Kampala. Book catering, cleaning, laundry or babysitting on WhatsApp — available seven days a week.";

export const metadata: Metadata = {
  title: "Contact & Bookings in Kampala",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Velora Premium | Kampala",
    description,
    url: "/contact",
    images: ["/hero.jpg"],
  },
};

const jsonLd = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: "Contact Velora Premium",
    inLanguage: "en-UG",
    about: { "@id": `${SITE_URL}/#business` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
  },
];

const methods = [
  {
    icon: "chat",
    title: "WhatsApp",
    detail: "The fastest way to book — message us any day of the week.",
    action: { label: "Message us", href: WHATSAPP_LINK, external: true },
  },
  {
    icon: "call",
    title: "Phone",
    detail: "Prefer to talk? Give us a call to plan your service.",
    action: {
      label: CONTACT_PHONE_DISPLAY,
      href: `tel:${CONTACT_PHONE}`,
      external: false,
    },
  },
  {
    icon: "alternate_email",
    title: "Email",
    detail: "Send us the details of your event or home care needs.",
    action: {
      label: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      external: false,
    },
  },
  {
    icon: "schedule",
    title: "Availability",
    detail: "Open 7 days a week. Babysitting is provided in your home.",
    action: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Let's care for your home"
        description="Tell us what you need — catering, cleaning, laundry, or babysitting — and we'll take care of the rest. Quality care, trusted service."
      />

      <Reveal className="py-stack-lg bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid gap-gutter sm:grid-cols-2">
            {methods.map((method) => (
              <div
                key={method.title}
                className="flex items-start gap-4 p-stack-md rounded-xl bg-surface-container-low border border-outline-variant/30"
              >
                <span className="shrink-0 w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <MaterialIcon name={method.icon} className="text-2xl" />
                </span>
                <div className="space-y-1">
                  <h3 className="font-headline-md text-headline-md text-primary">
                    {method.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant">
                    {method.detail}
                  </p>
                  {method.action && (
                    <a
                      href={method.action.href}
                      {...(method.action.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-block pt-1 font-label-md text-label-md text-primary hover:text-secondary transition-colors"
                    >
                      {method.action.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-stack-lg text-center space-y-4">
            <p className="font-headline-md text-headline-md text-primary italic">
              &ldquo;We don&apos;t just provide services, we care for your home
              and the people in it.&rdquo;
            </p>
            <div className="flex justify-center">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
