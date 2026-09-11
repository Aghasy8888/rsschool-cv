type SectionTitleProps = {
  children: string;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className="text-3xl text-center font-semibold md:text-4xl">{children}</h2>;
}
