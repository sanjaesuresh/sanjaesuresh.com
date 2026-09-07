import SectionHead from "./SectionHead";

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-rule py-[56px]">
      <SectionHead title="about" />
      <div className="about-grid grid gap-[48px] items-start">
        <div>
          <p className="about-lead mb-4 text-paper">
            Hey, I&apos;m Sanjae. I&apos;m a software engineer at Bloomberg, and
            I build backend systems for a living. Outside of work, I love
            travelling, learning new skills and just pushing past my comfort
            zone.
          </p>
          <p className="about-body mb-4 text-mute-2">
            I&apos;ve been lucky with the teams I&apos;ve landed on. At{" "}
            <span className="text-paper font-medium">Rippling</span>, I built
            backend services for profile changes across HR and payroll for
            20,000+ companies. At{" "}
            <span className="text-paper font-medium">Activision</span>, I worked
            on the Call of Duty store (that one, 100M+ players). At{" "}
            <span className="text-paper font-medium">Nokia</span>,{" "}I built
            internal data tooling.
          </p>
        </div>

        {/* Facts sidebar */}
        <div className="font-mono border border-rule bg-ink-2 p-5 text-[13px] leading-[1.95]">
          {[
            { k: "langs", v: "Python · Java · TS · Go" },
            { k: "web", v: "React · Node · Flask" },
            { k: "data", v: "Postgres · Redis · Kafka" },
            { k: "cloud", v: "AWS · Docker · K8s" },
          ].map(({ k, v }, i) => (
            <div key={k}>
              {i > 0 && <div className="my-[10px] h-px bg-rule" />}
              <div className="flex justify-between gap-3 py-[3px]">
                <span className="text-dim">{k}</span>
                <span className="text-paper" style={{ textAlign: "right" }}>
                  {v}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
