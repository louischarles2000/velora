import MaterialIcon from "@/components/MaterialIcon";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { PriceRow, PricingNote } from "@/lib/pricing";

type PricingSectionProps = {
  title?: string;
  subtitle?: string;
  rows: PriceRow[];
  notes?: PricingNote[];
  quote?: string;
};

export default function PricingSection({
  title = "Service Price List",
  subtitle = "Transparent pricing for exceptional service.",
  rows,
  notes = [],
  quote = "We don't just provide services, we care for your home and the people in it.",
}: PricingSectionProps) {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="text-center mb-stack-lg">
        <h2 className="font-display-lg text-headline-lg text-primary">{title}</h2>
        <p className="text-on-surface-variant font-body-md mt-2">{subtitle}</p>
      </div>

      <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-primary text-on-primary">
              <th className="px-gutter py-6 font-label-md text-label-md tracking-wider">
                SERVICE CATEGORY
              </th>
              <th className="px-gutter py-6 font-label-md text-label-md tracking-wider text-right">
                PRICE (UGX)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {rows.map((row) => (
              <tr
                key={row.label}
                className="hover:bg-surface-container transition-colors group"
              >
                <td className="px-gutter py-4 font-body-md text-primary">
                  <span className="flex items-center gap-3">
                    <MaterialIcon
                      name={row.icon}
                      className="text-secondary opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                    {row.label}
                  </span>
                </td>
                <td className="px-gutter py-4 font-body-md text-primary text-right font-bold whitespace-nowrap">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {notes.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {notes.map((note) => (
            <div
              key={note.text}
              className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-high/50 border border-outline-variant/30"
            >
              <MaterialIcon name={note.icon} className="text-secondary" />
              <p className="text-label-sm leading-relaxed text-on-surface-variant">
                {note.text}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-stack-lg text-center">
        <p className="font-headline-md text-headline-md text-primary mb-4 italic">
          &ldquo;{quote}&rdquo;
        </p>
        <WhatsAppButton />
      </div>
    </div>
  );
}
