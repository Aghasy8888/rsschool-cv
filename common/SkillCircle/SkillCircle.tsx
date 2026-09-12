type SkillCircleProps = {
  name: string;
  level: number;
};

const SIZE = 140;
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function SkillCircle({ name, level }: SkillCircleProps) {
  const clamped = Math.min(100, Math.max(0, level));
  const offset = CIRCUMFERENCE - (clamped / 100) * CIRCUMFERENCE;

  return (
    <div
      className="relative flex size-32 items-center justify-center sm:size-36"
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${name} ${clamped}%`}
    >
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="absolute inset-0 size-full -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          className="text-white/15"
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          className="text-white"
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-0.5 px-3 text-center">
        <span className="text-xl font-semibold text-white sm:text-2xl">
          {clamped}%
        </span>
        <span className="text-xs text-white/90 sm:text-sm">{name}</span>
      </div>
    </div>
  );
}
