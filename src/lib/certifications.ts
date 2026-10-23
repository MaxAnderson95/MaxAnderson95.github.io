// Resolve simple-icons SVG paths at build time so the library is never shipped to the client
import * as simpleIcons from "simple-icons";
import { certifications } from "../data/certifications";

export interface ResolvedCert {
  name: string;
  issuer: string;
  iconPath?: string;
  customIconMarkup?: string;
  achievedDate: string;
  validUntil: string | null;
  url?: string;
}

const allIcons = Object.values(simpleIcons) as Array<{ slug: string; path: string }>;

export const resolvedCerts: ResolvedCert[] = certifications.map((cert) => ({
  name: cert.name,
  issuer: cert.issuer,
  iconPath: cert.simpleIconSlug
    ? (allIcons.find((i) => i.slug === cert.simpleIconSlug)?.path ?? "")
    : undefined,
  customIconMarkup: cert.simpleIconSlug ? undefined : cert.customIconSvg,
  achievedDate: cert.achievedDate,
  validUntil: cert.validUntil,
  url: cert.url,
}));

export const issuerLanes = [...new Set(resolvedCerts.map((cert) => cert.issuer))]
  .map((issuer) => ({ label: issuer, count: resolvedCerts.filter((cert) => cert.issuer === issuer).length }))
  .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
