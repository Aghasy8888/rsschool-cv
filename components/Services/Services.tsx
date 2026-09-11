import {
  BriefcaseMedical,
  Monitor,
  Settings,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Card, SectionTitle } from "@/common";
import { cv } from "@/data";

const serviceIcons: Record<(typeof cv.services.items)[number]["icon"], LucideIcon> = {
  web: Monitor,
  performance: Settings,
  responsive: Smartphone,
  support: BriefcaseMedical,
};

export default function Services() {
  return (
    <section>
      <SectionTitle>{cv.services.title}</SectionTitle>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {cv.services.items.map((item) => {
          const Icon = serviceIcons[item.icon];

          return (
            <li key={item.title}>
              <Card className="group h-full text-center">
                <div className="flex flex-col items-center gap-4">
                  <span className="flex size-16 items-center justify-center rounded-full border border-transparent bg-black/40 text-white transition-all duration-500 ease-in-out group-hover:border-accent">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
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
