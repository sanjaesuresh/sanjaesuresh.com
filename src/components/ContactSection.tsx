import SectionHead from "./SectionHead";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-b py-[56px]"
      style={{ borderColor: "var(--rule)" }}
    >
      <SectionHead index="05" title="contact" meta="~/.config/reach-me" />
      <p
        className="mb-[26px] font-semibold"
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "clamp(22px, 3.5vw, 32px)",
          color: "var(--paper)",
          maxWidth: "18ch",
          letterSpacing: "-0.01em",
        }}
      >
        Building something, or just want to talk shop? Ping me.
      </p>

      <div
        className="border p-[28px] text-[15px] leading-[2.1]"
        style={{
          fontFamily: "var(--font-ibm-plex-mono)",
          borderColor: "var(--rule)",
          background: "var(--ink-2)",
          maxWidth: "540px",
        }}
      >
        {[
          {
            k: "email",
            label: "sanjaesuresh@gmail.com",
            href: "mailto:sanjaesuresh@gmail.com",
            download: false,
          },
          {
            k: "github",
            label: "github.com/sanjaesuresh",
            href: "https://github.com/sanjaesuresh",
            download: false,
          },
          {
            k: "linkedin",
            label: "in/sanjae-suresh",
            href: "https://linkedin.com/in/sanjae-suresh",
            download: false,
          },
          {
            k: "resume",
            label: "resume.pdf ↓",
            href: "/resume-sanjae-suresh.pdf",
            download: true,
          },
        ].map(({ k, label, href, download }) => (
          <div key={k} className="flex gap-4">
            <span style={{ color: "var(--dim)", minWidth: "96px" }}>{k}</span>
            <a
              href={href}
              download={download || undefined}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="cfg-link"
            >
              {label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
