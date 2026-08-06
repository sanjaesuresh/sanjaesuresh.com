export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  version: string;
  status: string;
  statusClass: "shipped" | "active";
  description: string;
  deps: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "parlance",
    name: "Parlance",
    version: "v1.0 · iOS",
    status: "shipped",
    statusClass: "shipped",
    description:
      "An AI speech-coaching app for iOS, basically Duolingo for speaking. Get a prompt, record yourself, get AI feedback. Mode-specific coaching for interviews, pitches, and keynotes, with on-device audio analysis (pitch, energy, pace) and gamified streaks.",
    deps: "swiftui · swiftdata · supabase · cloudflare · gemini · hume ai",
    links: [
      { label: "website ↗", href: "https://theparlance.app" },
      {
        label: "app store ↗",
        href: "https://apps.apple.com/ca/app/parlance-ai-speech-coach/id6767471940",
      },
      { label: "github ↗", href: "https://github.com/sanjaesuresh/parlance" },
    ],
  },
  {
    id: "cuedrop",
    name: "CueDrop",
    version: "v0.9 · AI",
    status: "active",
    statusClass: "active",
    description:
      "An AI DJ assistant that autonomously selects and transitions tracks, learning from real DJ sets via a Neo4j knowledge graph. Live audio analysis, a 5-layer priority queue, and a guest-request flow over QR.",
    deps: "fastapi · neo4j · librosa · essentia · react · websockets",
    links: [
      { label: "github ↗", href: "https://github.com/sanjaesuresh/CueDrop" },
    ],
  },
  {
    id: "s-suite",
    name: "s.suite",
    version: "dev tooling",
    status: "active",
    statusClass: "active",
    description:
      "A portable Claude Code setup that turns the assistant into a team of specialists: 42 skills and 19 subagents for planning, review, debugging, and release, plus safety hooks, guardrails, and a one-shot bootstrap install.",
    deps: "shell · markdown · git hooks · claude code",
    links: [
      {
        label: "github ↗",
        href: "https://github.com/sanjaesuresh/s.suite",
      },
    ],
  },
  {
    id: "armory",
    name: "Armory",
    version: "v1.0 · web",
    status: "shipped",
    statusClass: "shipped",
    description:
      "A directory of proven, role-based AI setups. Pick a template, customize it with plain-language forms, test-drive it against real scenarios, then export a config you paste into your own Claude or ChatGPT. A deterministic compiler turns your answers into the finished setup; curated, AI-generated, and community submissions share one schema and pass a review-before-publish gate.",
    deps: "next.js · typescript · react · supabase · anthropic api",
    links: [
      { label: "website ↗", href: "https://armoryhq.dev" },
      { label: "github ↗", href: "https://github.com/sanjaesuresh/armory-ai" },
    ],
  },
  {
    id: "flight-tracker",
    name: "flight-tracker",
    version: "v1.0 · web",
    status: "shipped",
    statusClass: "shipped",
    description:
      "A $0/month cheap-flight tracker for one route (NYC ↔ Toronto). An hourly poller queries Google Flights, stores fare snapshots in Postgres, and emails a booking deep-link the moment a round trip gets cheap; a React dashboard shows which weekends are cheapest with per-option price history. Runs entirely on free tiers.",
    deps: "python · neon postgres · react · vite · github actions · vercel",
    links: [
      {
        label: "github ↗",
        href: "https://github.com/sanjaesuresh/flight-tracker",
      },
    ],
  },
  {
    id: "bouncer",
    name: "Bouncer",
    version: "v0.1 · cli",
    status: "active",
    statusClass: "active",
    description:
      "A context compiler for AI coding agents — LLVM, but for context windows. It sits between the agent and the model, converts repository state, history, and tool output into a compact intermediate representation, and emits an optimized prompt for each target model: smaller, cheaper, sharper. First shipped piece is a recording proxy that measures where an agent's tokens actually go.",
    deps: "typescript · node · anthropic api",
    links: [
      { label: "github ↗", href: "https://github.com/sanjaesuresh/bouncer" },
    ],
  },
];
