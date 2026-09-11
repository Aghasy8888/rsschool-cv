import { Languages as LanguagesIcon } from "lucide-react";
import { Card, SectionTitle } from "@/common";
import { cv } from "@/data";

export default function Languages() {
  return (
    <section>
      <SectionTitle>{cv.languages.title}</SectionTitle>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
        {cv.languages.items.map((item) => (
          <li key={item.name}>
            <Card className="group h-full text-center">
              <div className="flex flex-col items-center gap-4">
                <span className="flex size-16 items-center justify-center rounded-full border border-transparent bg-black/40 text-white transition-all duration-500 ease-in-out group-hover:border-accent">
                  <LanguagesIcon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-accent md:text-base">{item.level}</p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
