type SectionTitleProps = {
  children: string;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="mb-8 flex flex-col items-center gap-4">
      <h2 className="text-center text-3xl font-semibold md:text-4xl">
        {children}
      </h2>
      <div className="flex w-40 max-w-full items-center gap-2" aria-hidden="true">
        <span className="h-px flex-1 bg-accent" />
        <span className="text-4xl leading-none text-accent">∞</span>
        <span className="h-px flex-1 bg-accent" />
      </div>
    </div>
  );
}
