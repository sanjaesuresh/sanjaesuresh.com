import { projects } from "@/data/projects";
import SectionHead from "./SectionHead";

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-rule py-[56px]">
      <SectionHead title="projects" meta={`${projects.length} entries`} />

      {/* newest first: source list is chronological, so reverse for display */}
      {[...projects].reverse().map((proj, i) => (
        <div
          key={proj.id}
          className="grid grid-cols-[54px_1fr] border-t border-rule py-[26px]"
        >
          <div className="font-mono pt-[6px] text-[12px] text-accent">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div>
            <h3 className="flex flex-wrap items-center gap-3 font-semibold text-[25px] text-paper">
              {proj.name}
              <span
                className="font-mono border border-rule-2 px-[7px] py-[2px] text-[12px] text-mute"
                style={{ fontWeight: 400 }}
              >
                {proj.version}
              </span>
              <span
                className={`font-mono text-[11px] uppercase tracking-[.08em] ${
                  proj.statusClass === "shipped" ? "text-accent" : "text-signal"
                }`}
                style={{ fontWeight: 400 }}
              >
                {proj.status}
              </span>
            </h3>

            <p
              className="my-3 text-[16px] text-paper max-w-[64ch]"
              style={{ opacity: 0.9 }}
            >
              {proj.description}
            </p>

            <div className="font-mono mb-[14px] text-[13px] text-mute">
              <span className="text-dim">built with</span> {proj.deps}
            </div>

            <div className="font-mono flex gap-5 text-[13px]">
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
