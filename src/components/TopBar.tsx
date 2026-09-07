"use client";

export default function TopBar() {
  return (
    <header className="topbar sticky top-0 z-40">
      <div className="topbar-inner container-page flex items-center justify-between gap-4 font-mono">
        <span className="whitespace-nowrap text-[13px] text-mute">
          <span className="text-accent">sanjae suresh</span>{" "}
          {/* wrapped so only this suffix (not the name) can be hidden on very
              narrow screens without touching row-1's flex layout */}
          <span className="topbar-suffix">
            <span className="text-dim">·</span> portfolio
          </span>
        </span>

        <nav
          className="nav-links flex gap-[22px] text-[13px]"
          aria-label="Primary navigation"
        >
          {[
            { href: "#about", label: "about" },
            { href: "#log", label: "experience" },
            { href: "#projects", label: "projects" },
            { href: "#atlas", label: "atlas" },
            { href: "#frames", label: "frames" },
            { href: "#contact", label: "contact" },
          ].map(({ href, label }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <span className="flex items-center gap-2 text-[12px] text-mute">
          <span
            className="inline-block size-[7px] rounded-full bg-signal"
            aria-hidden="true"
          />
          swe @ bloomberg
        </span>
      </div>
    </header>
  );
}
