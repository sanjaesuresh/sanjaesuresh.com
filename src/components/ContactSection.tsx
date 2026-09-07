import SectionHead from "./SectionHead";

export default function ContactSection() {
  return (
    <section id="contact" className="border-b border-rule py-[56px]">
      <SectionHead title="contact" />

      <div className="font-mono border border-rule bg-ink-2 p-[28px] text-[15px] leading-[2.1] max-w-[540px]">
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
            <span className="text-dim min-w-[96px]">{k}</span>
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
