"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe,
  Home,
  IdCard,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";
import { cv, navItems, type NavIcon } from "@/data";

const icons: Record<NavIcon, LucideIcon> = {
  home: Home,
  about: User,
  skills: IdCard,
  projects: Globe,
  contact: Mail,
};

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed right-0 bottom-0 left-0 z-999 flex h-auto w-full flex-row bg-[rgba(14,15,16,0.85)] lg:inset-y-0 lg:left-0 lg:right-auto lg:h-full lg:w-[10%] lg:min-w-16 lg:flex-col lg:bg-[rgba(14,15,16,0.6)]">
      <div className="hidden items-center justify-center border-b border-white/10 px-2 py-6 lg:flex">
        <Link
          href="/"
          className="font-script text-2xl leading-none text-white md:text-3xl"
        >
          {cv.shortName}
        </Link>
      </div>
      <nav
        aria-label="Primary"
        className="flex flex-1 items-center justify-center lg:items-start"
      >
        <ul className="flex w-full flex-row items-center justify-center gap-1 lg:flex-col lg:justify-start">
          {navItems.map((item) => {
            const Icon = icons[item.icon];
            const active = isActive(pathname, item.href);

            return (
              <li key={item.href} className="lg:w-full">
                <Link
                  href={item.href}
                  aria-label={item.label}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex items-center justify-center rounded-lg px-3 py-4 transition-colors lg:rounded-none lg:px-0 ${
                    active
                      ? "bg-accent text-[#0e0f10] lg:bg-white/5 lg:text-accent"
                      : "text-white hover:bg-white/5 hover:text-accent"
                  }`}
                >
                  <Icon className="size-6" aria-hidden="true" />
                  <span className="pointer-events-none absolute top-1/2 left-full z-[1000] ml-3 hidden -translate-y-1/2 whitespace-nowrap rounded border border-white/20 bg-[#0e0f10] px-3 py-1.5 text-xs text-white shadow-lg lg:group-hover:block">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
