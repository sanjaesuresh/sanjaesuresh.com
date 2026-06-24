"use client";

export default function TopBar() {
  return (
    <header
      className="sticky top-0 z-40 border-b"
      style={{
        background: "rgba(12,24,34,.86)",
        backdropFilter: "blur(6px)",
        borderColor: "var(--rule)",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between gap-4 px-7"
        style={{ maxWidth: "1080px", height: "54px" }}
      >
        <span
          className="whitespace-nowrap text-[13px]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "var(--mute)" }}
        >
          <span style={{ color: "var(--accent)" }}>~</span>
          /sanjae-suresh{" "}
          <span style={{ color: "var(--dim)" }}>·</span> portfolio
        </span>

        <nav
          className="nav-links flex gap-[22px] text-[13px]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          aria-label="Primary navigation"
        >
          {[
            { href: "#about", label: "about" },
            { href: "#log", label: "log" },
            { href: "#projects", label: "projects" },
            { href: "#frames", label: "frames" },
            { href: "#contact", label: "contact" },
          ].map(({ href, label }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <span
          className="status-chip flex items-center gap-2 text-[12px]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "var(--mute)" }}
        >
          <span
            className="inline-block"
            style={{
              width: "7px",
              height: "7px",
              background: "var(--signal)",
              borderRadius: "50%",
            }}
            aria-hidden="true"
          />
          swe @ bloomberg
        </span>
      </div>
    </header>
  );
}
