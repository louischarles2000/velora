type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

/**
 * Lightweight page intro used at the top of the service and contact pages.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="bg-surface-container-lowest border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="max-w-3xl space-y-stack-sm">
          {eyebrow && (
            <div className="flex items-center gap-2 text-secondary font-label-md text-label-md tracking-widest">
              <span className="w-12 h-px bg-secondary" />
              {eyebrow}
            </div>
          )}
          <h1 className="font-display-lg text-headline-lg text-primary">
            {title}
          </h1>
          {description && (
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
