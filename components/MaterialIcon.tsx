type MaterialIconProps = {
  name: string;
  className?: string;
  filled?: boolean;
  ariaHidden?: boolean;
};

/**
 * Renders a Material Symbols (Outlined) icon. The icon font is loaded once in
 * the root layout. Pass `filled` for the filled variant.
 */
export default function MaterialIcon({
  name,
  className = "",
  filled = false,
  ariaHidden = true,
}: MaterialIconProps) {
  return (
    <span
      aria-hidden={ariaHidden}
      className={`material-symbols-outlined${filled ? " filled" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {name}
    </span>
  );
}
