interface Props {
  name: string;
  issuer: string;
  issuerColor: string;
  /** Pre-resolved SVG path d-attribute for simple-icons (resolved at build time) */
  iconPath?: string;
  /** Raw SVG inner markup for multi-color custom icons */
  customIconMarkup?: string;
  achievedDate: string;
  validUntil: string | null;
  /** Optional URL to the certification credential (opens in new tab when clicked) */
  url?: string;
  index: number;
}

function formatCertDate(iso: string): string {
  const [year, month] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, 1);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

function getTodayIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function CertCard({
  name,
  issuer,
  issuerColor,
  iconPath,
  customIconMarkup,
  achievedDate,
  validUntil,
  url,
  index,
}: Props) {
  const delay = `${0.15 + index * 0.1}s`;
  const isExpired = validUntil ? validUntil < getTodayIsoDate() : false;

  const cardClassName = `reveal group relative block w-full h-full p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/10 bg-surface/40 backdrop-blur-md${url ? " cursor-pointer" : ""}`;

  const content = (
    <>
      {/* Hover Gradient Bloom */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col gap-5">
        {/* Icon + Issuer */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/5"
            style={{ backgroundColor: `${issuerColor}15` }}
          >
            {customIconMarkup ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                overflow="visible"
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: customIconMarkup }}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill={issuerColor}
                aria-hidden="true"
              >
                <path d={iconPath ?? ""} />
              </svg>
            )}
          </div>
          <span className="text-[0.8125rem] font-mono text-text-muted tracking-wide">
            {issuer}
          </span>
        </div>

        {/* Certification Name */}
        <h2 className="text-lg md:text-xl font-display font-semibold text-text leading-tight group-hover:text-white transition-colors duration-300 min-h-[4.5em]">
          {name}
        </h2>

        {/* Divider */}
        <div className="w-full h-px bg-white/5" />

        {/* Dates + Status */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5 text-[0.8125rem] font-mono text-text-muted">
            <span>
              <span className="text-accent/80">Achieved</span>{" "}
              <time dateTime={achievedDate}>{formatCertDate(achievedDate)}</time>
            </span>
            {validUntil ? (
              <span>
                <span className="text-text-muted">
                  Valid until
                </span>{" "}
                <time dateTime={validUntil}>{formatCertDate(validUntil)}</time>
              </span>
            ) : (
              <span className="text-emerald-400/80">No Expiration</span>
            )}
          </div>

          {/* Status Badge — only shown when active */}
          {!isExpired && (
            <span className="px-2.5 py-1 text-[0.6875rem] font-mono rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Active
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
        style={{ animationDelay: delay }}
        aria-label={`View ${name} credential (opens in new tab)`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cardClassName} style={{ animationDelay: delay }}>
      {content}
    </div>
  );
}
