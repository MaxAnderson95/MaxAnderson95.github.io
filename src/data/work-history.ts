export interface Position {
  /** Job title for this role */
  title: string;
  /** Start date in "YYYY-MM" format, e.g. "2023-03" */
  startDate: string;
  /** End date in "YYYY-MM" format, or null if currently held */
  endDate: string | null;
  /** Short description of responsibilities and accomplishments */
  description?: string;
}

export interface WorkEntry {
  /** Company or organization name */
  company: string;
  /** Optional URL to the company website */
  companyUrl?: string;
  /** City, State or "Remote" */
  location: string;
  /** Positions held at this company, most recent first */
  positions: Position[];
}

export const workHistory: WorkEntry[] = [
  {
    company: "Georgia United Credit Union",
    companyUrl: "https://gucu.org",
    location: "Duluth, GA",
    positions: [
      {
        title: "Sr. System Engineer Team Lead",
        startDate: "2025-03",
        endDate: null,
      },
      {
        title: "System Engineer II",
        startDate: "2023-03",
        endDate: "2025-03",
      },
      {
        title: "System Engineer",
        startDate: "2021-03",
        endDate: "2023-03",
      },
      {
        title: "Sr. Network Administrator",
        startDate: "2020-03",
        endDate: "2021-03",
      },
      {
        title: "Network Administrator",
        startDate: "2018-03",
        endDate: "2020-03",
      },
    ],
  },
  {
    company: "vTECH io",
    location: "Southwest Florida",
    positions: [
      {
        title: "Network Engineer",
        startDate: "2016-08",
        endDate: "2018-07",
      },
    ],
  },
  {
    company: "Chico's FAS, Inc.",
    location: "Fort Myers, FL",
    positions: [
      {
        title: "Desktop Support Technician - Client Services Support",
        startDate: "2013-03",
        endDate: "2016-07",
      },
      {
        title: "Intern - Core Infrastructure",
        startDate: "2012-10",
        endDate: "2013-02",
      },
    ],
  },
];
