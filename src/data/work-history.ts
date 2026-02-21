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
        description:
          "Lead a team of systems engineers responsible for enterprise IT infrastructure supporting critical financial services, emphasizing high availability and security.\n\nSpearhead the organization's cloud-native transformation, implementing a Kubernetes-based platform and DevOps methodologies to enhance scalability and operational resilience of critical member-facing applications.",
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
    location: "Fort Myers, FL",
    positions: [
      {
        title: "Network Engineer",
        startDate: "2016-08",
        endDate: "2018-07",
        description:
          "Worked as a Network Engineer for an IT managed services provider, responsible for designing, implementing, and maintaining network infrastructure for a diverse client base. Managed network configurations, performed troubleshooting, and ensured optimal performance and security of client networks.",
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
        description:
          "Provided desktop support for the corporate campus of a large retail company, assisting employees with hardware and software issues, troubleshooting network connectivity problems, and ensuring smooth operation of IT systems.",
      },
      {
        title: "Intern - Core Infrastructure",
        startDate: "2012-10",
        endDate: "2013-02",
        description:
          "Assisted the core infrastructure team with various IT projects, gaining hands-on experience in server maintenance, network administration, and IT support within a corporate environment.",
      },
    ],
  },
];
