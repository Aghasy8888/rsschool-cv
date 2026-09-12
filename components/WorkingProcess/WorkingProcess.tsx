import { Card, ProcessHub, SectionTitle } from "@/common";
import { cv } from "@/data";

const stepClasses = [
  "border-r border-accent pr-4 text-right md:col-start-1 md:row-start-1 md:border-b md:pb-8 md:pr-8 lg:border-0 lg:pr-28 xl:pr-36",
  "border-l border-accent pl-4 text-left md:col-start-1 md:row-start-2 md:border-l-0 md:border-r md:py-8 md:pr-8 md:pl-0 md:text-right lg:border-0 lg:pr-28 xl:pr-36",
  "border-r border-accent pr-4 text-right md:col-start-2 md:row-start-1 md:border-r-0 md:border-b md:pb-8 md:pl-8 md:pr-0 md:text-left lg:border-0 lg:pl-28 xl:pl-36",
  "border-l border-accent pl-4 text-left md:col-start-2 md:row-start-2 md:border-l-0 md:py-8 md:pl-8 lg:border-0 lg:pl-28 xl:pl-36",
] as const;

export default function WorkingProcess() {
  const { title, hubLabel, steps } = cv.workingProcess;

  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <Card>
        <div className="relative">
          <ProcessHub lines={hubLabel} />
          <ol className="relative z-0 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
            {steps.map((step, index) => (
              <li key={step.number} className={stepClasses[index]}>
                <p className="text-sm font-medium text-accent md:text-base">
                  {step.number}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85 md:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Card>
    </section>
  );
}
