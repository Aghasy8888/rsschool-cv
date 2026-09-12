import { Card, SectionTitle } from "@/common";
import { cv } from "@/data";

export default function CodeExample() {
  const { title, language, description, code } = cv.codeExample;

  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <Card>
        <p className="mb-4 text-sm text-white/80 md:text-base">{description}</p>
        <pre className="overflow-x-auto rounded-lg bg-black/50 p-4 text-left text-sm leading-relaxed text-white md:p-6 md:text-base">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </Card>
    </section>
  );
}
