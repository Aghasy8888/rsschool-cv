import { ABOUT, CONTACT, HOME, PROJECTS, SKILLS } from "@/constants";

export const navItems = [
  { href: HOME, label: "Home", icon: "home" },
  { href: ABOUT, label: "About", icon: "about" },
  { href: SKILLS, label: "Skills", icon: "skills" },
  { href: PROJECTS, label: "Projects", icon: "projects" },
  { href: CONTACT, label: "Contact", icon: "contact" },
] as const;

export type NavItem = (typeof navItems)[number];
export type NavIcon = NavItem["icon"];
