import type { Position } from "../data/work-history";

interface Props {
  company: string;
  companyUrl?: string;
  location: string;
  positions: Position[];
  index: number;
}

function formatWorkDate(iso: string): string {
  const [year, month] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, 1);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export default function WorkTimelineCard({
  company,
  companyUrl,
  location,
  positions,
  index,
}: Props) {
  const isMultiPosition = positions.length > 1;

  // Overall date range for the company
  const earliestStart = positions[positions.length - 1].startDate;
  const latestEnd = positions[0].endDate;
  const isCurrent = latestEnd === null;

  return (
    <article
      className="group relative w-full p-7 md:p-8 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/10 bg-surface/40 backdrop-blur-md"
      aria-label={`Work history at ${company}`}
    >
      {/* Hover Gradient Bloom */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />

      <div className="relative z-10">
        {/* Company Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
          <div>
            <h3 className="text-xl md:text-2xl font-display font-semibold text-text leading-tight group-hover:text-white transition-colors duration-300">
              {companyUrl ? (
                <a
                  href={companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                  {company}
                </a>
              ) : (
                company
              )}
            </h3>
            <p className="text-[13px] font-mono text-text-muted mt-1.5 tracking-wide">
              {location}
            </p>
          </div>

          {/* Overall date range pill */}
          <span className="shrink-0 px-2.5 py-1 text-[11px] font-mono rounded-md bg-accent/10 text-accent border border-accent/20 whitespace-nowrap">
            {formatWorkDate(earliestStart)} &mdash;{" "}
            {latestEnd ? formatWorkDate(latestEnd) : "Present"}
          </span>
        </div>

        {/* Positions */}
        <div className={isMultiPosition ? "mt-6 space-y-0" : "mt-6"}>
          {positions.map((pos, posIndex) => (
            <div
              key={posIndex}
              className={
                isMultiPosition && posIndex > 0
                  ? "pt-5 mt-5 border-t border-white/5"
                  : ""
              }
            >
              {/* Position title + dates */}
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2.5">
                <h4 className="text-[15px] font-display font-medium text-text">
                  {pos.title}
                </h4>
                <span className="text-[12px] font-mono text-text-muted whitespace-nowrap">
                  {formatWorkDate(pos.startDate)} &mdash;{" "}
                  {pos.endDate ? formatWorkDate(pos.endDate) : "Present"}
                </span>
              </div>

              {/* Description */}
              {pos.description && (
                <p className="text-[14px] text-text-secondary font-light leading-relaxed">
                  {pos.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Current role indicator */}
        {isCurrent && (
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[12px] font-mono text-emerald-400">
              Current Role
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
