"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS, SITE_NAME, WHATSAPP_LINK } from "@/lib/site";
import MaterialIcon from "@/components/MaterialIcon";
import Image from "next/image";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-display-lg text-headline-md tracking-widest text-primary"
        >
          <Image
            src="/velora_landscape.png"
            alt={`${SITE_NAME} logo`}
            width={200}
            height={200}
            className="object-contain h-10 w-auto"
          />
        </Link>

        <nav className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-label-md text-label-md ${
                  active
                    ? "text-primary font-bold border-b-2 border-secondary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-container-low hover:text-primary transition-all duration-300 transform active:scale-95"
          >
            Book Now
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-primary hover:bg-surface-container-high transition-colors"
          >
            <MaterialIcon name={open ? "close" : "menu"} className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-outline-variant/30 bg-surface px-margin-mobile py-stack-sm flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 font-label-md text-label-md transition-colors ${
                  active
                    ? "bg-surface-container-high text-primary font-bold"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md"
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
