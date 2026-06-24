import { projects } from "@/data/projects";
import SectionHead from "./SectionHead";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-b py-[56px]"
      style={{ borderColor: "var(--rule)" }}
    >
      <SectionHead index="03" title="projects" meta="3 tracked" />

      {projects.map((proj) => (
        <div
          key={proj.id}
          className="grid border-t py-[26px]"
          style={{
            gridTemplateColumns: "54px 1fr",
            borderColor: "var(--rule)",
          }}
        >
          <div
            className="pt-[6px] text-[12px]"
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              color: "var(--accent)",
            }}
          >
            {proj.num}
          </div>
          <div>
            <h3
              className="flex flex-wrap items-baseline gap-3 font-semibold"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "25px",
                color: "var(--paper)",
              }}
            >
              {proj.name}
              <span
                className="border px-[7px] py-[2px] text-[12px]"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  color: "var(--mute)",
                  borderColor: "var(--rule-2)",
                  fontWeight: 400,
                }}
              >
                {proj.version}
              </span>
              <span
                className="text-[11px] uppercase tracking-[.08em]"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  color:
                    proj.statusClass === "shipped"
                      ? "var(--accent)"
                      : "var(--signal)",
                  fontWeight: 400,
                }}
              >
                {proj.status}
              </span>
            </h3>

            <p
              className="my-3 text-[16px]"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                color: "var(--paper)",
                opacity: 0.9,
                maxWidth: "64ch",
              }}
            >
              {proj.description}
            </p>

            <div
              className="mb-[14px] text-[12.5px]"
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                color: "var(--mute)",
              }}
            >
              <span style={{ color: "var(--dim)" }}>deps:</span> {proj.deps}
            </div>

            <div
              className="flex gap-5 text-[13px]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              {proj.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="proj-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
