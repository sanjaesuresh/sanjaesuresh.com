"use client";

import { useState } from "react";
import { trips, toPercent, countryCount } from "@/data/travel";
import { WORLD_PATHS, WORLD_VIEWBOX, WORLD_W, WORLD_H } from "@/data/worldPaths";
import SectionHead from "./SectionHead";

// Graticule (faint lat/long grid) drawn in the same 1000×500 projection space.
const x = (lon: number) => ((lon + 180) / 360) * WORLD_W;
const y = (lat: number) => ((90 - lat) / 180) * WORLD_H;
const meridians = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150];
const parallels = [60, 30, 0, -30];

export default function AtlasSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="atlas"
      className="border-b py-[56px]"
      style={{ borderColor: "var(--rule)" }}
    >
      <SectionHead
        index="04"
        title="atlas"
        meta={`${trips.length} cities · ${countryCount} countries`}
      />

      <div
        className="relative border"
        style={{
          borderColor: "var(--rule)",
          background: "var(--ink-2)",
          padding: "18px",
        }}
        onMouseLeave={() => setActive(null)}
      >
        {/* Map layer: country outlines drawn in cyan over a faint graticule. */}
        <svg
          viewBox={WORLD_VIEWBOX}
          className="block h-auto w-full"
          role="img"
          aria-label="World map marking cities Sanjae has travelled to"
          style={{ overflow: "visible" }}
        >
          <g aria-hidden="true">
            {meridians.map((lon) => (
              <line
                key={`m${lon}`}
                x1={x(lon)}
                y1={y(85)}
                x2={x(lon)}
                y2={y(-60)}
                stroke="var(--rule)"
                strokeWidth={0.5}
                opacity={0.35}
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {parallels.map((lat) => (
              <line
                key={`p${lat}`}
                x1={x(-180)}
                y1={y(lat)}
                x2={x(180)}
                y2={y(lat)}
                stroke="var(--rule)"
                strokeWidth={0.5}
                opacity={0.35}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </g>

          <g
            fill="rgba(91,168,204,0.05)"
            stroke="var(--accent-dim)"
            strokeWidth={0.6}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          >
            {WORLD_PATHS.map((d, i) => (
              <path key={i} d={d} vectorEffect="non-scaling-stroke" />
            ))}
          </g>
        </svg>

        {/* Marker layer: one button per city, positioned by the shared projection. */}
        <div className="absolute" style={{ inset: "18px" }}>
          {trips.map((t) => {
            const { left, top } = toPercent(t.lon, t.lat);
            const isActive = active === t.id;
            // Anchor the tooltip so it never runs off the edges of the map.
            const horiz = left > 72 ? "right" : left < 28 ? "left" : "center";
            const below = top < 22;
            return (
              <div
                key={t.id}
                className="absolute"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  transform: "translate(-50%, -50%)",
                  zIndex: isActive ? 20 : 10,
                }}
              >
                <button
                  type="button"
                  className="atlas-pin"
                  data-home={t.home ? "" : undefined}
                  data-lived={t.lived ? "" : undefined}
                  data-active={isActive ? "" : undefined}
                  aria-label={[
                    t.country !== t.city ? `${t.city}, ${t.country}` : t.city,
                    t.when ? `· ${t.when}` : "",
                    t.note ? `· ${t.note}` : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onMouseEnter={() => setActive(t.id)}
                  onFocus={() => setActive(t.id)}
                  onBlur={() => setActive(null)}
                />
                {isActive && (
                  <div
                    role="status"
                    className="atlas-tip"
                    style={{
                      bottom: below ? "auto" : "calc(100% + 11px)",
                      top: below ? "calc(100% + 11px)" : "auto",
                      left: horiz === "left" ? 0 : horiz === "right" ? "auto" : "50%",
                      right: horiz === "right" ? 0 : "auto",
                      transform:
                        horiz === "center" ? "translateX(-50%)" : "none",
                    }}
                  >
                    <div className="atlas-tip-head">
                      <span style={{ color: "var(--accent)" }}>{t.city}</span>
                      {t.when && (
                        <span style={{ color: "var(--dim)" }}>{t.when}</span>
                      )}
                    </div>
                    {t.country !== t.city && (
                      <div style={{ color: "var(--mute)" }}>{t.country}</div>
                    )}
                    {t.note && (
                      <div
                        className="mt-[5px]"
                        style={{ color: "var(--paper)", opacity: 0.82 }}
                      >
                        {t.note}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <p
        className="mt-[14px] text-[12px]"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "var(--dim)" }}
      >
        {"// hover or tap a marker · "}
        <span style={{ color: "var(--signal)" }}>◎</span> home base
        {"  ·  "}
        <span style={{ color: "var(--lived)" }}>●</span> lived
        {"  ·  "}
        <span style={{ color: "var(--accent)" }}>○</span> visited
      </p>
    </section>
  );
}
