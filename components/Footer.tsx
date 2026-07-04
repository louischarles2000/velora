import Link from "next/link";
import MaterialIcon from "@/components/MaterialIcon";
import { SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto">
        <div className="space-y-4">
          <div className="font-display-lg text-headline-md text-secondary-fixed">
            {SITE_NAME.toUpperCase()}
          </div>
          <p className="font-body-md text-primary-fixed-dim">
            Premium home services that bring peace, cleanliness, and culinary
            excellence to your doorstep.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label-md uppercase tracking-widest text-secondary-fixed">
            Quick Links
          </h4>
          <Link
            href="/contact"
            className="text-primary-fixed-dim hover:text-white transition-opacity font-body-md"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-primary-fixed-dim hover:text-white transition-opacity font-body-md"
          >
            Contact Us
          </Link>
          <Link
            href="/contact"
            className="text-primary-fixed-dim hover:text-white transition-opacity font-body-md"
          >
            Service Areas
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label-md uppercase tracking-widest text-secondary-fixed">
            Legal
          </h4>
          <span className="text-primary-fixed-dim font-body-md">
            Privacy Policy
          </span>
          <span className="text-primary-fixed-dim font-body-md">
            Terms of Service
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-label-md uppercase tracking-widest text-secondary-fixed">
            Connect
          </h4>
          <div className="flex gap-4">
            <span className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-all">
              <MaterialIcon name="public" />
            </span>
            <span className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-all">
              <MaterialIcon name="alternate_email" />
            </span>
            <span className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-all">
              <MaterialIcon name="call" />
            </span>
          </div>
          <p className="text-label-sm text-primary-fixed-dim mt-2">
            Available 7 days a week for your convenience.
          </p>
        </div>
      </div>

      <div className="border-t border-outline/20 py-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <p className="text-label-md text-center text-primary-fixed-dim opacity-70">
          © {new Date().getFullYear()} {SITE_NAME} Premium Home Services. Quality
          Care. Trusted Service.
        </p>
      </div>
    </footer>
  );
}
