export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  num: string;
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
    num: "[00]",
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
    num: "[01]",
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
    id: "claude-code-toolkit",
    num: "[02]",
    name: "Claude Code Toolkit",
    version: "dev tooling",
    status: "active",
    statusClass: "active",
    description:
      "A portable Claude Code setup that turns the assistant into a team of specialists: 25 skills and 18 subagents for planning, review, debugging, and release, plus safety hooks, guardrails, and a one-shot bootstrap install.",
    deps: "shell · markdown · git hooks · claude code",
    links: [
      {
        label: "github ↗",
        href: "https://github.com/sanjaesuresh/claude-code-toolkit",
      },
    ],
  },
];
