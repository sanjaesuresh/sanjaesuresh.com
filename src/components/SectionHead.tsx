interface SectionHeadProps {
  title: string;
}

export default function SectionHead({ title }: SectionHeadProps) {
  return (
    <div className="mb-8">
      <h2
        className="text-[14px] font-medium uppercase tracking-[.22em]"
        style={{ color: "var(--paper)" }}
      >
        {title}
      </h2>
    </div>
  );
}
