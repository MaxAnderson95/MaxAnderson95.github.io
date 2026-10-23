interface Props {
  name: string;
  issuer: string;
  /** Pre-resolved SVG path d-attribute for simple-icons (resolved at build time) */
  iconPath?: string;
  /** Raw SVG inner markup for multi-color custom icons */
  customIconMarkup?: string;
  achievedDate: string;
  validUntil: string | null;
  /** Optional URL to the certification credential (opens in new tab when clicked) */
  url?: string;
}

function formatCertDate(iso: string): string {
  const [year, month] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, 1);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export default function CertCard({
  name,
  issuer,
  iconPath,
  customIconMarkup,
  achievedDate,
  validUntil,
  url,
}: Props) {

  return (
    <tr>
      <th scope="row" className="cert-name">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {name}
            <span className="visually-hidden"> credential (opens in new tab)</span>
          </a>
        ) : (
          name
        )}
      </th>
      <td className="cert-issuer-cell">
        <span className="cert-issuer">
          {customIconMarkup ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              overflow="visible"
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: customIconMarkup }}
            />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d={iconPath ?? ""} />
            </svg>
          )}
          {issuer}
        </span>
      </td>
      <td data-label="Achieved">
        <time dateTime={achievedDate}>{formatCertDate(achievedDate)}</time>
      </td>
      <td data-label="Valid until">
        {validUntil ? (
          <time dateTime={validUntil}>{formatCertDate(validUntil)}</time>
        ) : (
          "No expiration"
        )}
      </td>
    </tr>
  );
}
