import { SectionTitle } from "@/common";
import { navItems } from "@/data";

const skills = navItems.find((item) => item.href === "/skills");

export default function Skills() {
  return <SectionTitle>{skills?.label ?? "Skills"}</SectionTitle>;
}
