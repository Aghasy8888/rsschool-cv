import { SectionTitle } from "@/common";
import { SKILLS } from "@/constants";
import { navItems } from "@/data";

const skills = navItems.find((item) => item.href === SKILLS);

export default function Skills() {
  return <SectionTitle>{skills?.label ?? "Skills"}</SectionTitle>;
}
