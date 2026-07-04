// Pricing data split by service line. Prices are in UGX and taken directly
// from the Stitch design (design/design_reference.html).

export type PriceRow = {
  icon: string; // Material Symbols icon name
  label: string;
  price: string;
};

export type PricingNote = {
  icon: string;
  text: string;
};

export const cateringPricing: PriceRow[] = [
  { icon: "restaurant", label: "Breakfast (up to 5 people)", price: "80,000" },
  { icon: "dinner_dining", label: "Lunch or Dinner (up to 5 people)", price: "100,000" },
  { icon: "groups", label: "Cooking (6–10 people)", price: "100,000 – 250,000" },
  { icon: "diversity_3", label: "Cooking (11–20 people)", price: "300,000 – 500,000" },
];

export const cleaningPricing: PriceRow[] = [
  { icon: "home_repair_service", label: "House Cleaning (1–3 bedroom)", price: "80,000 – 150,000" },
  { icon: "cleaning_services", label: "Deep Cleaning", price: "150,000 – 300,000" },
  { icon: "iron", label: "Ironing Clothes", price: "20,000 – 60,000" },
  { icon: "local_laundry_service", label: "Laundry (Wash & Fold)", price: "30,000 – 100,000" },
  { icon: "child_care", label: "Babysitting (Daytime / Overnight)", price: "30,000 – 250,000" },
];

export const cateringNotes: PricingNote[] = [
  { icon: "info", text: "Prices may vary depending on location, complexity, and number of people." },
  { icon: "shopping_bag", text: "Grocery shopping can be charged separately or include a small transport fee." },
];

export const cleaningNotes: PricingNote[] = [
  { icon: "info", text: "Prices may vary depending on location, complexity, and number of people." },
  { icon: "home", text: "Babysitting services are provided in the comfort of the client's home." },
];
