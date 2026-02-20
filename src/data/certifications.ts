export interface Certification {
  /** Display name of the certification */
  name: string;
  /** Issuing organization name */
  issuer: string;
  /** Brand color for the issuer icon (hex string) */
  issuerColor: string;
  /** simple-icons slug (e.g. "kubernetes", "terraform") — mutually exclusive with customIconSvg */
  simpleIconSlug?: string;
  /** Raw SVG inner markup for issuers not in simple-icons — mutually exclusive with simpleIconSlug. Rendered inside a 0 0 24 24 viewBox. */
  customIconSvg?: string;
  /** Date the certification was achieved (ISO 8601 date string, e.g. "2024-01-15") */
  achievedDate: string;
  /** Date the certification expires (ISO 8601 date string), or null if it never expires */
  validUntil: string | null;
  /** Optional URL to the certification credential (opens in new tab when clicked) */
  url?: string;
}

// Microsoft four-square logo (24x24 viewBox, official brand colors)
const microsoftLogo = [
  '<rect x="1" y="1" width="10.5" height="10.5" fill="#F25022"/>',
  '<rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00"/>',
  '<rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>',
  '<rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>',
].join("");

// VMware "vmw" monogram (24x24 viewBox) — matches the official VMware favicon
const vmwareLogo =
  '<text x="12" y="18" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-weight="bold" font-size="14" fill="#0091DA">vmw</text>';

export const certifications: Certification[] = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    issuerColor: "#326CE5",
    simpleIconSlug: "kubernetes",
    achievedDate: "2023-02-11",
    validUntil: "2026-02-11",
    url: "https://www.credly.com/badges/223dc691-1730-4d83-8039-0f379787dad7",
  },
  {
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    issuerColor: "#00A4EF",
    customIconSvg: microsoftLogo,
    achievedDate: "2024-03-29",
    validUntil: "2027-03-29",
    url: "https://learn.microsoft.com/en-us/users/maxanderson95/credentials/48b6135b9b83257f",
  },
  {
    name: "Microsoft Certified: Azure Network Engineer Associate",
    issuer: "Microsoft",
    issuerColor: "#00A4EF",
    customIconSvg: microsoftLogo,
    achievedDate: "2024-03-01",
    validUntil: "2027-03-01",
    url: "https://learn.microsoft.com/en-us/users/maxanderson95/credentials/bb8bda72a8269cfa",
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    issuerColor: "#00A4EF",
    customIconSvg: microsoftLogo,
    achievedDate: "2024-02-23",
    validUntil: "2027-02-23",
    url: "https://learn.microsoft.com/en-us/users/maxanderson95/credentials/a193178662d178ff",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    issuerColor: "#00A4EF",
    customIconSvg: microsoftLogo,
    achievedDate: "2019-01-26",
    validUntil: null,
    url: "https://www.credly.com/badges/3587303b-1d58-4096-9350-fb0df6c18cda",
  },
  {
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    issuerColor: "#844FBA",
    simpleIconSlug: "terraform",
    achievedDate: "2023-01-04",
    validUntil: "2025-01-04",
    url: "https://www.credly.com/badges/e395e88c-1b6f-4c09-b00f-68a92f051443",
  },
  {
    name: "VMware Certified Implementation Expert (VCIX) - Network Virtualization 2023",
    issuer: "VMware",
    issuerColor: "#0091DA",
    customIconSvg: vmwareLogo,
    achievedDate: "2023-09-14",
    validUntil: null,
    url: "https://www.credly.com/badges/0dd39c0e-2dd9-4978-b7cb-eef6f2b9e59d",
  },
  {
    name: "VMware Certified Advanced Professional (VCAP) - Network Virtualization Deploy 2023",
    issuer: "VMware",
    issuerColor: "#0091DA",
    customIconSvg: vmwareLogo,
    achievedDate: "2023-09-14",
    validUntil: null,
    url: "https://www.credly.com/badges/51a30a94-3ade-49c9-911c-18ec56caa24a",
  },
  {
    name: "VMware Certified Advanced Professional (VCAP) - Network Virtualization Design 2023",
    issuer: "VMware",
    issuerColor: "#0091DA",
    customIconSvg: vmwareLogo,
    achievedDate: "2023-08-24",
    validUntil: null,
    url: "https://www.credly.com/badges/7daa784a-c847-4f25-bc91-f8dfec05e138",
  },
  {
    name: "VMware Certified Professional (VCP) - Network Virtualization 2023",
    issuer: "VMware",
    issuerColor: "#0091DA",
    customIconSvg: vmwareLogo,
    achievedDate: "2023-08-19",
    validUntil: null,
    url: "https://www.credly.com/badges/535a9295-1871-4d76-99a3-763bddae09ee",
  },
  {
    name: "VMware Certified Professional (VCP) - Data Center Virtualization 2023",
    issuer: "VMware",
    issuerColor: "#0091DA",
    customIconSvg: vmwareLogo,
    achievedDate: "2023-07-31",
    validUntil: null,
    url: "https://www.credly.com/badges/5f7f5435-c357-4ce8-90b4-32ee9373d455",
  },
  {
    name: "VMware NSX Advanced Load Balancer (Avi) for Operators Skills 2022",
    issuer: "VMware",
    issuerColor: "#0091DA",
    customIconSvg: vmwareLogo,
    achievedDate: "2022-05-20",
    validUntil: null,
    url: "https://www.credly.com/badges/588dc02e-ea4e-4ffd-87d3-580fc34249e4",
  },
];
