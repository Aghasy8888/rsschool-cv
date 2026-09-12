type ProcessHubProps = {
  lines: readonly string[];
};

export default function ProcessHub({ lines }: ProcessHubProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-center lg:flex"
      aria-hidden="true"
    >
      <div className="relative flex size-52 items-center justify-center xl:size-64">
        <span className="absolute inset-0 rounded-full border border-white/90" />
        <span className="absolute inset-7 rounded-full border border-white/90 xl:inset-9" />
        <span className="absolute top-[12%] left-[22%] size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        <span className="absolute bottom-[12%] left-[22%] size-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent" />
        <span className="absolute top-[12%] right-[22%] size-2.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        <span className="absolute right-[22%] bottom-[12%] size-2.5 translate-x-1/2 translate-y-1/2 rounded-full bg-accent" />
        <p className="relative z-10 flex flex-col items-center text-center text-sm font-bold tracking-wide text-white uppercase xl:text-base">
          {lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
