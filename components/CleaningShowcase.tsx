import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";
import { WHATSAPP_LINK } from "@/lib/site";

const features = [
  {
    title: "Deep Cleaning & Sanitization",
    text: "Tile scrubbing, mopping, and comprehensive surface care.",
  },
  {
    title: "Laundry & Dry Cleaning",
    text: "Professional care for carpets, curtains, sofas, and delicate linens.",
  },
  {
    title: "Organization & Decluttering",
    text: "Intelligent storage solutions for a more breathable living environment.",
  },
];

export default function CleaningShowcase() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="grid md:grid-cols-2 gap-stack-lg items-center">
        <div className="space-y-stack-md order-2 md:order-1">
          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-4">
                <MaterialIcon
                  name="check_circle"
                  filled
                  className="text-secondary mt-1"
                />
                <div>
                  <h4 className="font-label-md text-label-md text-primary">
                    {feature.title}
                  </h4>
                  <p className="font-body-md text-on-surface-variant">
                    {feature.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-surface-container-high hover:text-primary transition-all shadow-md"
          >
            Schedule a Cleaning
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
          <div className="relative rounded-xl overflow-hidden shadow-soft h-full min-h-[320px] aspect-[4/5]">
            <Image
              src="/cleaning-dusting.jpg"
              alt="A professional house cleaner dusting an elegant wooden table in a bright, airy room."
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-4 relative">
            <div className="relative rounded-xl overflow-hidden shadow-soft aspect-square min-h-[150px]">
              <Image
                src="/cleaning-laundry.jpg"
                alt="Fresh, colorful laundry hanging on a clothesline on a sunlit balcony."
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-soft aspect-square bg-secondary-container p-6 flex flex-col justify-center text-on-secondary-container">
              <MaterialIcon name="sanitizer" className="text-4xl mb-2 block" />
              <p className="font-headline-md text-headline-md sm:text-headline-sm leading-tight">
                We treat your home like our own, with Respect, Care & Quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
