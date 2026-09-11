import { SectionTitle } from "@/common";
import { navItems } from "@/data";

const projects = navItems.find((item) => item.href === "/projects");

export default function Projects() {
  return <SectionTitle>{projects?.label ?? "Projects"}</SectionTitle>;
}
