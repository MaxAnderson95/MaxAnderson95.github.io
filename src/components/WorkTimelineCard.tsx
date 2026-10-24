import type { Position } from "../data/work-history";

interface Props {
  company: string;
  companyUrl?: string;
  location: string;
  positions: Position[];
}

function formatWorkDate(iso: string): string {
  const [year, month] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, 1);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

function DateRange({ start, end }: { start: string; end: string | null }) {
  return (
    <>
      <time dateTime={start}>{formatWorkDate(start)}</time> to{" "}
      {end ? <time dateTime={end}>{formatWorkDate(end)}</time> : "Present"}
    </>
  );
}

export default function WorkTimelineCard({
  company,
  companyUrl,
  location,
  positions,
}: Props) {
  const earliestStart = positions[positions.length - 1].startDate;
  const latestEnd = positions[0].endDate;
  const isCurrent = latestEnd === null;

  return (
    <article className="job" data-reveal="" aria-label={`Work history at ${company}`}>
      <div className="job__head">
        <h2 className="job__company">
          {companyUrl ? (
            <a href={companyUrl} target="_blank" rel="noopener noreferrer" aria-label={`${company} (opens in new tab)`}>
              {company}
            </a>
          ) : (
            company
          )}
        </h2>
        <div className="job__facts">
          <span>{location}</span>
          <span>
            <DateRange start={earliestStart} end={latestEnd} />
          </span>
          {isCurrent && <span className="job__current">Current role</span>}
        </div>
      </div>

      <ol role="list" className="job__roles">
        {positions.map((pos) => (
          <li key={`${pos.title}-${pos.startDate}`} className="role">
            <div className="role__head">
              <h3 className="role__title">{pos.title}</h3>
              <span className="role__dates">
                <DateRange start={pos.startDate} end={pos.endDate} />
              </span>
            </div>

            {pos.description && (
              <div className="role__desc">
                {pos.description.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </article>
  );
}
