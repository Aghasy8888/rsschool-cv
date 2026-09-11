import { SectionTitle } from "@/common";
import { navItems } from "@/data";

const about = navItems.find((item) => item.href === "/about");

export default function About() {
  return <SectionTitle>{about?.label ?? "About"}</SectionTitle>;
}
