"use client";

import Image from "next/image";
import { useRef } from "react";

export default function Masthead() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  // ripple: letters near the cursor swell from 500 up to 700 weight,
  // falling off over ~90px. skipped entirely under reduced motion.
  const handleNameMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    nameRef.current
      ?.querySelectorAll<HTMLElement>("[data-ch]")
      .forEach((s) => {
        const r = s.getBoundingClientRect();
        const d = Math.abs(e.clientX - (r.left + r.width / 2));
        s.style.fontWeight = String(
          Math.round(500 + Math.max(0, 1 - d / 90) * 200)
        );
      });
  };

  const handleNameLeave = () => {
    nameRef.current
      ?.querySelectorAll<HTMLElement>("[data-ch]")
      .forEach((s) => {
        s.style.fontWeight = "";
      });
  };

  return (
    <div className="mast-grid border-b border-rule">
      {/* Left: preamble + actions */}
      <div>
        <h1
          ref={nameRef}
          className="mb-2 text-[52px] font-medium leading-tight text-accent"
          aria-label="sanjae suresh"
          onMouseMove={handleNameMove}
          onMouseLeave={handleNameLeave}
        >
          {/* per-letter spans so each glyph's weight can follow the cursor */}
          <span aria-hidden="true">
            {"sanjae suresh".split("").map((ch, i) => (
              <span key={i} className="name-letter" data-ch>
                {ch === " " ? " " : ch}
              </span>
            ))}
          </span>
        </h1>

        <div className="preamble-block mb-9">
          <span className="pa-key">role</span>
          <span className="pa-sep">:</span>
          <span className="pa-val text-paper">
            software engineer
          </span>

          <span className="pa-key">study</span>
          <span className="pa-sep">:</span>
          <span className="pa-val text-paper">
            bsc computer science · wilfrid laurier &apos;26
          </span>

          <span className="pa-key">also</span>
          <span className="pa-sep">:</span>
          <span className="pa-val text-paper">
            photographer
          </span>

          <span className="pa-key">based</span>
          <span className="pa-sep">:</span>
          <span className="pa-val text-paper">
            new york city
          </span>

          <span className="pa-key">status</span>
          <span className="pa-sep">:</span>
          <span className="pa-val">
            <span className="text-accent">swe</span> @ bloomberg
            <span className="blink-cursor" aria-hidden="true" />
          </span>
        </div>

        <div className="mast-actions flex flex-wrap gap-[14px]">
          <a
            href="/resume-sanjae-suresh.pdf"
            download
            className="file-btn-solid inline-flex items-center gap-[10px] border px-[14px] py-[9px] font-semibold"
          >
            resume.pdf ↓
          </a>
          <a
            href="https://linkedin.com/in/sanjae-suresh"
            target="_blank"
            rel="noopener noreferrer"
            className="file-btn inline-flex items-center gap-[10px] border px-[14px] py-[9px]"
          >
            linkedin ↗
          </a>
          <a
            href="#projects"
            className="file-btn inline-flex items-center gap-[10px] border px-[14px] py-[9px]"
          >
            view projects →
          </a>
        </div>
      </div>

      {/* Right: headshot */}
      <div className="headshot-box relative overflow-hidden bg-ink-2">
        <Image
          src="/headshot.jpg"
          alt="Sanjae Suresh, portrait"
          fill
          priority
          sizes="270px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
