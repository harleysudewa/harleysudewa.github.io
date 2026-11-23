interface SectionHeaderProps {
  number: string;
  label: string;
  heading: string;
}

export default function SectionHeader({
  number,
  label,
  heading,
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono text-[var(--color-accent)] tracking-widest">
          {number}
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {label}
        </span>
        <div className="flex-1 h-px bg-[var(--color-border)]" />
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-foreground)]">
        {heading}
      </h2>
    </div>
  );
}

