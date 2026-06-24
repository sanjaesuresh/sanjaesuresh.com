import Image from "next/image";
import { experience, type Role } from "@/data/experience";
import SectionHead from "./SectionHead";

const logoWidths: Record<Role["logoClass"], number> = {
  default: 44,
  wide: 96,
  activision: 115,
  nokia: 52,
};

const logoHeights: Record<Role["logoClass"], number> = {
  default: 44,
  wide: 52,
  activision: 62,
  nokia: 22,
};

export default function ExperienceSection() {
  return (
    <section
      id="log"
      className="border-b py-[56px]"
      style={{ borderColor: "var(--rule)" }}
    >
      <SectionHead index="02" title="log" meta="git log --experience" />
      <div style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
        {experience.map((role) => (
          <div
            key={role.id}
            className="log-entry grid gap-[28px] border-t py-[22px]"
            style={{
              gridTemplateColumns: "150px 1fr",
              borderColor: "var(--rule)",
            }}
          >
            {/* Left col: logo + date */}
            <div className="flex flex-col gap-3">
              <div
                style={{
                  width: logoWidths[role.logoClass],
                  height: logoHeights[role.logoClass],
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Image
                  src={role.logo}
                  alt={role.logoAlt}
                  width={logoWidths[role.logoClass]}
                  height={logoHeights[role.logoClass]}
                  style={{
                    objectFit: "contain",
                    objectPosition: "left center",
                    width: "100%",
                    height: "100%",
                  }}
                  unoptimized
                />
              </div>
              <div className="text-[12.5px]" style={{ color: "var(--mute)" }}>
                {role.dateRange}
              </div>
            </div>

            {/* Right col: role details */}
            <div>
              <h3
                className="text-[19px] font-semibold"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  color: "var(--paper)",
                }}
              >
                {role.title} ·{" "}
                <span style={{ color: "var(--accent)" }}>{role.org}</span>
              </h3>
              <div
                className="mt-1 text-[12px]"
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  color: "var(--dim)",
                }}
              >
                {role.location}
              </div>
              <ul className="mt-[10px] list-none">
                {role.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="relative mb-1 pl-[18px] text-[13.5px]"
                    style={{ color: "var(--paper)", opacity: 0.85 }}
                  >
                    <span
                      className="absolute left-0"
                      style={{ color: "var(--accent-dim)" }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              {role.stack && (
                <div className="mt-3 text-[12px]" style={{ color: "var(--dim)" }}>
                  <span style={{ color: "var(--mute)", fontWeight: 500 }}>
                    stack
                  </span>
                  {"  "}
                  {role.stack}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
