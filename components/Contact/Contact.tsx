import { SectionTitle } from "@/common";
import { navItems } from "@/data";

const contact = navItems.find((item) => item.href === "/contact");

export default function Contact() {
  return <SectionTitle>{contact?.label ?? "Contact"}</SectionTitle>;
}
