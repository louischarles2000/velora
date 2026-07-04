import Image from "next/image";
import MaterialIcon from "@/components/MaterialIcon";

const extras = [
  { icon: "celebration", label: "Baby Showers" },
  { icon: "park", label: "Picnics" },
  { icon: "restaurant_menu", label: "Custom Menus" },
  { icon: "shopping_cart", label: "Grocery Shopping" },
];

export default function CateringShowcase() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="bento-grid">
        {/* Private Chef — large tile */}
        <div className="md:col-span-2 md:row-span-2 relative min-h-[300px] group overflow-hidden rounded-xl bg-surface-container shadow-md">
          <Image
            src="/catering-private-chef.jpg"
            alt="A private chef plating an elegant continental dish."
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-stack-md text-white">
            <h3 className="font-headline-md text-headline-md">Private Chef</h3>
            <p className="font-body-md opacity-90">
              Continental &amp; local cuisines curated for your palate.
            </p>
          </div>
        </div>

        {/* Family Staycations — wide tile */}
        <div className="md:col-span-2 relative min-h-[300px] group overflow-hidden rounded-xl bg-surface-container shadow-md">
          <Image
            src="/catering-family-staycations.jpg"
            alt="A family enjoying a catered staycation meal at home."
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-stack-md text-white">
            <span className="font-headline-md text-headline-md">
              Family Staycations
            </span>
          </div>
        </div>

        {/* Birthday Parties */}
        <div className="relative min-h-[300px] group overflow-hidden rounded-xl bg-surface-container shadow-md">
          <Image
            src="/catering-birthday-parties.jpg"
            alt="A beautifully catered birthday party table setting."
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <span className="text-white font-label-md text-label-md tracking-widest text-center px-4">
              BIRTHDAY PARTIES
            </span>
          </div>
        </div>

        {/* Meal Prepping */}
        <div className="relative min-h-[300px] group overflow-hidden rounded-xl bg-surface-container shadow-md">
          <Image
            src="/catering-meal-prepping.jpg"
            alt="Neatly prepared meal-prep containers ready for the week."
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <span className="text-white font-label-md text-label-md tracking-widest text-center px-4">
              MEAL PREPPING
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-gutter">
        {extras.map((extra) => (
          <div
            key={extra.label}
            className="p-stack-md bg-surface-container-low rounded-xl border border-outline-variant/30 text-center"
          >
            <MaterialIcon
              name={extra.icon}
              className="text-secondary mb-2 text-3xl block"
            />
            <p className="font-label-md text-label-md">{extra.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
