import { SectionTitle } from "@/common";
import { CONTACT } from "@/constants";
import { navItems } from "@/data";

const contact = navItems.find((item) => item.href === CONTACT);

export default function Contact() {
  return <SectionTitle>{contact?.label ?? "Contact"}</SectionTitle>;
}
