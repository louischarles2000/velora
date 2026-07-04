import type { MetadataRoute } from "next";
import { LEGAL_NAME, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: LEGAL_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#fcf9f5",
    theme_color: "#fcf9f5",
    lang: "en-UG",
    categories: ["business", "lifestyle"],
    // TODO(owner): add 192x192 and 512x512 PNG icons for full PWA/install support.
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
