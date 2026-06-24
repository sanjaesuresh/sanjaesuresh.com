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
      "built Python backend services for complex profile mutations & effective-dated state across HR / payroll / IT systems serving 20,000+ companies",
      "designed transaction-safe, versioned update logic that cut state-inconsistency bugs 35%; refactored REST APIs for -22% mutation latency",
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
      "built on the Call of Duty commerce platform (purchases, bundles, trade-ins): 100M+ players, billions in annual revenue",
      "optimized DB access, caching & load distribution (SQLAlchemy · Redis · Kafka): +25% throughput, -15% latency, -20% failed orders",
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
      "built the DLM, a Flask + PostgreSQL tool letting non-technical staff manage SQL Server records securely, cutting support tickets 80%",
      "built Python / SQL pipelines moving telemetry across systems: +30% reporting speed for analytics teams",
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
      "built full-stack features for a hospital health app (React · Node · Supabase) with real-time patient sync + secure staff auth",
      "optimized REST APIs with async I/O & caching for +15% concurrency and faster clinical data access",
    ],
    stack: "React · Node · Supabase",
  },
];
