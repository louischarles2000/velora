import { WHATSAPP_LINK } from "@/lib/site";

type WhatsAppButtonProps = {
  label?: string;
  href?: string;
  className?: string;
};

/**
 * The signature green WhatsApp call-to-action pill from the design.
 */
export default function WhatsAppButton({
  label = "Message us on WhatsApp",
  href = WHATSAPP_LINK,
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-lg transform hover:-translate-y-1 ${className}`}
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.582 2.166 2.234-.58c1.012.55 2.039.888 3.104.889h.001c3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.759-5.776-5.759zm3.515 8.126c-.144.405-.838.741-1.155.787-.29.043-.659.074-1.848-.396-1.522-.601-2.493-2.153-2.568-2.254-.076-.101-.617-.82-.617-1.564 0-.745.391-1.112.53-.144.144-.139.314-.173.418-.173l.298.007c.095.004.223-.036.35.267.127.303.435 1.06.474 1.137.039.077.065.167.013.272-.052.105-.078.172-.156.264-.078.093-.164.208-.234.28-.078.08-.159.167-.069.324.09.157.4.662.859 1.069.59.524 1.088.687 1.248.753.16.066.253.056.347-.051.094-.108.403-.468.511-.627.108-.16.216-.135.364-.081.148.054.939.443 1.1.524s.267.121.306.188c.039.067.039.388-.105.793z" />
      </svg>
      {label}
    </a>
  );
}
