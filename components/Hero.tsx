import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";
import { WHATSAPP_LINK } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className=" mx-auto grid md:grid-cols-2 items-stretch">
        {/* Text column — solid background. Stacks below the image on mobile. */}
        <div className="relative z-10 order-2 md:order-1 flex items-center px-margin-mobile md:px-margin-desktop py-stack-lg md:py-0 md:min-h-[80vh]">
          <div className="max-w-xl space-y-stack-md">
            <div className="flex items-center gap-2 text-secondary font-label-md text-label-md tracking-widest">
              <span className="w-12 h-px bg-secondary" />
              PREMIUM HOME SERVICES
            </div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg leading-tight text-primary">
              Quality Care.
              <br />
              Trusted Service.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Experience meticulous care for your home and family. From
              professional private chefs to expert deep cleaning, Velora brings
              luxury hospitality to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-surface-container-high hover:text-primary transition-all shadow-xl"
              >
                <MaterialIcon name="chat" />
                Book on WhatsApp
              </a>
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Image column — portrait photo. Sits on top on mobile, right on desktop. */}
        <div className="relative order-1 md:order-2 h-[46vh] sm:h-[56vh] md:h-auto md:min-h-[80vh]">
          <Image
            src="/hero.jpg"
            alt="A professional Velora concierge representing premium home services and quality care."
            fill
            priority
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover object-center"
          />
          {/* Desktop: solid color on the left fades out to the right, revealing the image. */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          {/* Mobile: image fades down into the text block below. */}
          <div className="md:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
