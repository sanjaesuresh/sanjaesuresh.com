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
    <section id="log" className="border-b border-rule py-[56px]">
      <SectionHead title="experience" meta={`${experience.length} roles`} />
      <div className="font-mono">
        {experience.map((role) => (
          <div
            key={role.id}
            className="log-entry grid gap-[28px] border-t border-rule py-[22px]"
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
              <div className="text-[13px] text-mute">
                {role.dateRange}
              </div>
            </div>

            {/* Right col: role details */}
            <div>
              <h3 className="font-sans text-[19px] font-semibold text-paper">
                {role.title} ·{" "}
                <span className="text-accent">{role.org}</span>
              </h3>
              <div className="mt-1 text-[12px] text-dim">
                {role.location}
              </div>
              <ul className="mt-[10px] list-none">
                {role.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="relative mb-1 pl-[18px] text-[14px] text-paper"
                    style={{ opacity: 0.85 }}
                  >
                    <span
                      className="absolute left-0 text-accent-dim"
                      aria-hidden="true"
                    >
                      +
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              {role.stack && (
                <div className="mt-3 text-[12px] text-dim">
                  <span className="text-mute" style={{ fontWeight: 500 }}>
                    stack:
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
