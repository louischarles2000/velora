import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import MaterialIcon from "@/components/MaterialIcon";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
  {
    title: "Catering Excellence",
    description:
      "Private chefs, family staycations, birthday parties, and meal prepping — professional culinary experiences tailored to your lifestyle.",
    href: "/catering",
    image: "/catering-private-chef.jpg",
    alt: "A private chef plating an elegant continental dish.",
    cta: "Explore Catering",
  },
  {
    title: "Immaculate Spaces",
    description:
      "Deep cleaning, laundry, ironing, organization, and babysitting — meticulous care that keeps your home a sanctuary of health and peace.",
    href: "/cleaning",
    image: "/cleaning-dusting.jpg",
    alt: "A professional house cleaner dusting an elegant wooden table.",
    cta: "Explore Cleaning",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal className="py-stack-lg bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-stack-lg space-y-2">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Our Services
            </h2>
            <p className="text-on-surface-variant font-body-md">
              Two dedicated service lines, one standard of quality care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-stack-lg">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative overflow-hidden rounded-xl shadow-md min-h-[420px] flex"
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/40 to-transparent" />
                <div className="relative z-10 mt-auto p-stack-md text-white space-y-2">
                  <h3 className="font-headline-md text-headline-md">
                    {service.title}
                  </h3>
                  <p className="font-body-md opacity-90 max-w-md">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-label-md text-label-md pt-2">
                    {service.cta}
                    <MaterialIcon
                      name="arrow_forward"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="py-stack-lg bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-stack-md">
          <h2 className="font-display-lg text-headline-lg text-primary">
            Ready when you are
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Tell us what you need and we&apos;ll take care of the rest — quality
            care, trusted service, seven days a week.
          </p>
          <div className="flex justify-center pt-2">
            <WhatsAppButton label="Book on WhatsApp" />
          </div>
        </div>
      </Reveal>
    </>
  );
}
