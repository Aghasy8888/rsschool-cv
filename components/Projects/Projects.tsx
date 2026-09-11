import { SectionTitle } from "@/common";
import { PROJECTS } from "@/constants";
import { navItems } from "@/data";

const projects = navItems.find((item) => item.href === PROJECTS);

export default function Projects() {
  return <SectionTitle>{projects?.label ?? "Projects"}</SectionTitle>;
}
