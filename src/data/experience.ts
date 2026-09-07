export interface Role {
  id: string;
  logo: string;
  logoAlt: string;
  logoClass: "default" | "wide" | "nokia" | "activision";
  dateRange: string;
  title: string;
  org: string;
  location: string;
  bullets: string[];
  stack?: string;
}

export const experience: Role[] = [
  {
    id: "bloomberg",
    logo: "/logos/bloomberg.png",
    logoAlt: "Bloomberg logo",
    logoClass: "default",
    dateRange: "2026-09 → now",
    title: "Software Engineer",
    org: "Bloomberg",
    location: "New York City, NY",
    bullets: ["building backend systems on the engineering team"],
    stack: undefined,
  },
  {
    id: "rippling",
    logo: "/logos/rippling.png",
    logoAlt: "Rippling logo",
    logoClass: "default",
    dateRange: "2026-02 → 2026-05",
    title: "Software Engineer Intern",
    org: "Rippling",
    location: "San Francisco, CA",
    bullets: [
      "built Fast Transitions, the engine that applies effective-dated profile changes across HR, payroll, and IT for 20,000+ companies",
      "made concurrent edits safe to stack: versioned, transaction-safe update logic that ended a whole class of state bugs",
    ],
    stack: "Python · REST · distributed systems",
  },
  {
    id: "activision",
    logo: "/logos/activision.png",
    logoAlt: "Activision Blizzard logo",
    logoClass: "activision",
    dateRange: "2025-09 → 2025-12",
    title: "Software Engineer Intern",
    org: "Activision Blizzard",
    location: "Vancouver, BC",
    bullets: [
      "worked on the Call of Duty commerce platform: purchases, bundles, and trade-ins for 100M+ players",
      "sped up the order path with smarter caching and load distribution across PostgreSQL, Redis, and Kafka",
    ],
    stack: "Python · PostgreSQL · Redis · Kafka",
  },
  {
    id: "nokia",
    logo: "/logos/nokia.png",
    logoAlt: "Nokia logo",
    logoClass: "nokia",
    dateRange: "2025-01 → 2025-07",
    title: "Data Engineer Intern",
    org: "Nokia",
    location: "Ottawa, ON · remote",
    bullets: [
      "built the DLM, a Flask + PostgreSQL tool that lets non-technical staff manage SQL Server records safely; support tickets dropped by about 80%",
      "wrote the Python pipelines that move telemetry between systems for the analytics teams",
    ],
    stack: "Flask · PostgreSQL · Python · SQL",
  },
  {
    id: "civiconnect",
    logo: "/logos/civiconnect.png",
    logoAlt: "Civiconnect logo",
    logoClass: "wide",
    dateRange: "2023-09 → 2023-12",
    title: "Software Engineer Intern",
    org: "Civiconnect",
    location: "Toronto, ON",
    bullets: [
      "built full-stack features for a real estate marketplace: live listing updates and secure buyer and agent auth",
      "made property search faster with async I/O and caching",
    ],
    stack: "React · Node · Supabase",
  },
];
