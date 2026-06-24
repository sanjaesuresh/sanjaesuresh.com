import SectionHead from "./SectionHead";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-b py-[56px]"
      style={{ borderColor: "var(--rule)" }}
    >
      <SectionHead index="01" title="about" meta="~/about.md" />
      <div
        className="about-grid grid gap-[48px] items-start"
        style={{ gridTemplateColumns: "1fr 280px" }}
      >
        <div>
          <p
            className="mb-4"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "20px",
              color: "var(--paper)",
            }}
          >
            Hey, I&apos;m Sanjae. I just wrapped up my CS degree at Wilfrid
            Laurier, and I build backend systems for a living. Outside of code,
            I&apos;m happiest chasing something new: a country I haven&apos;t
            been to, a skill I&apos;m bad at, anything a little past my comfort
            zone.
          </p>
          <p
            className="mb-4"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "17.5px",
              color: "#AEB9C4",
            }}
          >
            I&apos;ve been lucky with the teams I&apos;ve landed on. At{" "}
            <span style={{ color: "var(--accent)" }}>Rippling</span>, I built
            backend services for profile changes across HR and payroll for
            20,000+ companies. At{" "}
            <span style={{ color: "var(--accent)" }}>Activision</span>, I worked
            on the Call of Duty store (that one, 100M+ players). At{" "}
            <span style={{ color: "var(--accent)" }}>Nokia</span>,{" "}I built
            internal data tooling. Now I&apos;m a software engineer at{" "}
            <span style={{ color: "var(--accent)" }}>Bloomberg</span>.
          </p>
          <p
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "17.5px",
              color: "#AEB9C4",
            }}
          >
            When I&apos;m not coding, you&apos;ll usually find me behind a
            camera. It&apos;s a completely different kind of problem-solving,
            and weirdly it&apos;s made me a better engineer. Turns out half this job is just composition in
            disguise.
          </p>
        </div>

        {/* Facts sidebar */}
        <div
          className="border p-5 text-[13px] leading-[1.95]"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            borderColor: "var(--rule)",
            background: "var(--ink-2)",
          }}
        >
          {[
            { k: "langs", v: "Python · Java · TS · Go" },
            { k: "web", v: "React · Node · Flask" },
            { k: "data", v: "Postgres · Redis · Kafka" },
            { k: "cloud", v: "AWS · Docker · K8s" },
          ].map(({ k, v }, i) => (
            <div key={k}>
              {i > 0 && (
                <div
                  className="my-[10px] h-px"
                  style={{ background: "var(--rule)" }}
                />
              )}
              <div className="flex justify-between gap-3 py-[3px]">
                <span style={{ color: "var(--dim)" }}>{k}</span>
                <span style={{ color: "var(--paper)", textAlign: "right" }}>
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
