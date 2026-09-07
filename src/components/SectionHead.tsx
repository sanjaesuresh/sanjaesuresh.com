interface SectionHeadProps {
  title: string;
  meta?: string;
}

export default function SectionHead({ title, meta }: SectionHeadProps) {
  return (
    <div className="mb-8 flex items-baseline gap-[14px]">
      <h2 className="font-mono text-[14px] font-medium uppercase tracking-[.22em] text-paper">
        {title}
      </h2>
      {meta && <span className="font-mono text-[12px] text-dim">{meta}</span>}
    </div>
  );
}
