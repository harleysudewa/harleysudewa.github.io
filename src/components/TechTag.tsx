interface TechTagProps {
  label: string;
}

export function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block px-2.5 py-1 text-[11px] font-medium tracking-wide bg-[var(--color-tag-bg)] text-[var(--color-tag-text)] border border-[var(--color-border)]/60 rounded-md">
      {label}
    </span>
  );
}

interface TechTagListProps {
  tags: string[];
  className?: string;
}

export default function TechTagList({ tags, className = "" }: TechTagListProps) {
  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {tags.map((tag) => (
        <TechTag key={tag} label={tag} />
      ))}
    </div>
  );
}

