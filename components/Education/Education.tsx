import { Code, GraduationCap, type LucideIcon } from "lucide-react";
import { Card, SectionTitle } from "@/common";
import { cv } from "@/data";

const educationIcons: Record<
  (typeof cv.education.items)[number]["icon"],
  LucideIcon
> = {
  degree: GraduationCap,
  course: Code,
};

export default function Education() {
  return (
    <section>
      <SectionTitle>{cv.education.title}</SectionTitle>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {cv.education.items.map((item) => {
          const Icon = educationIcons[item.icon];

          return (
            <li key={item.institution}>
              <Card className="group h-full text-center">
                <div className="flex flex-col items-center gap-4">
                  <span className="flex size-16 items-center justify-center rounded-full border border-transparent bg-black/40 text-white transition-all duration-500 ease-in-out group-hover:border-accent">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {item.institution}
                  </h3>
                  <p className="text-sm font-medium text-accent md:text-base">
                    {item.program}
                  </p>
                  <p className="text-sm text-white/60">{item.period}</p>
                  <p className="text-sm leading-relaxed text-white/80 md:text-base">
                    {item.description}
                  </p>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
