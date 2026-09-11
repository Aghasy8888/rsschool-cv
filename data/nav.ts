export const navItems = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/about", label: "About", icon: "about" },
  { href: "/skills", label: "Skills", icon: "skills" },
  { href: "/projects", label: "Projects", icon: "projects" },
  { href: "/contact", label: "Contact", icon: "contact" },
] as const;

export type NavItem = (typeof navItems)[number];
export type NavIcon = NavItem["icon"];
