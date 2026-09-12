import { Card, SectionTitle, SkillBar, SkillCircle } from "@/common";
import { cv } from "@/data";

export default function Skills() {
  return (
    <section>
      <SectionTitle>{cv.skills.title}</SectionTitle>
      <Card>
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-12">
          <ul className="order-2 flex flex-col gap-5 lg:order-1">
            {cv.skills.bars.map((item) => (
              <li key={item.name}>
                <SkillBar name={item.name} level={item.level} />
              </li>
            ))}
          </ul>
          <ul className="order-1 grid grid-cols-1 justify-items-center gap-6 min-[360px]:grid-cols-2 lg:order-2">
            {cv.skills.circles.map((item) => (
              <li key={item.name}>
                <SkillCircle name={item.name} level={item.level} />
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </section>
  );
}
