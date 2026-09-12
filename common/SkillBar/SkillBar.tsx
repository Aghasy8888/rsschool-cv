type SkillBarProps = {
  name: string;
  level: number;
};

export default function SkillBar({ name, level }: SkillBarProps) {
  const clamped = Math.min(100, Math.max(0, level));

  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${name} ${clamped}%`}
    >
      <p className="mb-2 text-sm text-white md:text-base">{name}</p>
      <div className="relative pt-5">
        <span
          className="absolute top-0 -translate-x-1/2 text-xs text-white"
          style={{ left: `${clamped}%` }}
        >
          {clamped}%
        </span>
        <div className="relative h-0.5 w-full rounded-full bg-white/15">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-accent"
            style={{ width: `${clamped}%` }}
          />
          <span
            className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-card"
            style={{ left: `${clamped}%` }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
