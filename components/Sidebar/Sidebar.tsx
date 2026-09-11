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
    <aside className="fixed inset-y-0 left-0 z-[999] flex w-[10%] min-w-16 flex-col bg-[rgba(14,15,16,0.6)]">
      <div className="flex items-center justify-center border-b border-white/10 px-2 py-6">
        <Link
          href="/"
          className="font-script text-2xl leading-none text-white md:text-3xl"
        >
          {cv.shortName}
        </Link>
      </div>
      <nav aria-label="Primary" className="flex flex-1 items-start justify-center">
        <ul className="flex w-full flex-col items-center gap-1">
          {navItems.map((item) => {
            const Icon = icons[item.icon];
            const active = isActive(pathname, item.href);

            return (
              <li key={item.href} className="w-full">
                <Link
                  href={item.href}
                  aria-label={item.label}
                  aria-current={active ? "page" : undefined}
                  className={`group relative flex items-center justify-center py-4 transition-colors ${
                    active ? "bg-white/5 text-accent" : "text-white hover:bg-white/5 hover:text-accent"
                  }`}
                >
                  <Icon className="size-5 md:size-6" aria-hidden="true" />
                  <span className="pointer-events-none absolute left-full z-[1000] ml-3 hidden whitespace-nowrap rounded border border-white/20 bg-[#0e0f10] px-3 py-1.5 text-xs text-white shadow-lg group-hover:block">
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
