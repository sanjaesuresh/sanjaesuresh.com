interface SectionHeadProps {
  index: string;
  title: string;
  meta: string;
}

export default function SectionHead({ index, title, meta }: SectionHeadProps) {
  return (
    <div
      className="mb-8 flex items-baseline gap-[14px]"
      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
    >
      <span className="text-[13px]" style={{ color: "var(--accent)" }}>
        {index}
      </span>
      <h2
        className="text-[14px] font-medium uppercase tracking-[.22em]"
        style={{ color: "var(--paper)" }}
      >
        {title}
      </h2>
      <span
        className="h-px flex-1"
        style={{ background: "var(--rule)" }}
        aria-hidden="true"
      />
      <span className="text-[12px]" style={{ color: "var(--dim)" }}>
        {meta}
      </span>
    </div>
  );
}
