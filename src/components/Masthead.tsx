"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Masthead() {
  const [hasHeadshot, setHasHeadshot] = useState(false);

  useEffect(() => {
    // We'll attempt to load the image; if it 404s we show placeholder
    const img = new window.Image();
    img.onload = () => setHasHeadshot(true);
    img.onerror = () => setHasHeadshot(false);
    img.src = "/headshot.jpg";
  }, []);

  return (
    <div className="mast-grid border-b" style={{ borderColor: "var(--rule)" }}>
      {/* Left: preamble + actions */}
      <div>
        <div
          className="preamble-block mb-9"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            color: "var(--mute)",
          }}
        >
          <span className="pa-key pa-key--lg">name</span>
          <span className="pa-sep pa-key--lg">:</span>
          <span
            className="pa-val"
            style={{
              color: "var(--accent)",
              fontWeight: 600,
              fontSize: "1.5em",
            }}
          >
            sanjae suresh
          </span>

          <span className="pa-key">role</span>
          <span className="pa-sep">:</span>
          <span className="pa-val" style={{ color: "var(--paper)" }}>
            software engineer
          </span>

          <span className="pa-key">study</span>
          <span className="pa-sep">:</span>
          <span className="pa-val" style={{ color: "var(--paper)" }}>
            bsc computer science · wilfrid laurier &apos;26
          </span>

          <span className="pa-key">also</span>
          <span className="pa-sep">:</span>
          <span className="pa-val" style={{ color: "var(--paper)" }}>
            photographer
          </span>

          <span className="pa-key">based</span>
          <span className="pa-sep">:</span>
          <span className="pa-val" style={{ color: "var(--paper)" }}>
            new york city
          </span>

          <span className="pa-key">status</span>
          <span className="pa-sep">:</span>
          <span className="pa-val">
            <span style={{ color: "var(--accent)" }}>swe</span> @ bloomberg
            <span className="blink-cursor" aria-hidden="true" />
          </span>
        </div>

        <div
          className="mast-actions flex flex-wrap gap-[14px] text-[13px]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
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
      <div
        className="headshot-box relative overflow-hidden"
        style={{ background: "var(--ink-2)" }}
      >
        {hasHeadshot ? (
          <Image
            src="/headshot.jpg"
            alt="Sanjae Suresh"
            fill
            priority
            sizes="270px"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div
            className="headshot-placeholder flex h-full w-full items-center justify-center text-center text-[12px] leading-[1.7]"
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              color: "var(--dim)",
              outline: "1px dashed var(--accent-dim)",
              outlineOffset: "2px",
            }}
          >
            headshot
            <br />
            drop content/headshot.jpg
          </div>
        )}
      </div>
    </div>
  );
}
