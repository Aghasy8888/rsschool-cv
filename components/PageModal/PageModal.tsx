"use client";

import { usePathname } from "next/navigation";
import SectionOutlet from "../SectionOutlet/SectionOutlet";
import { usePageModalTransition } from "@/hooks/usePageModalTransition";

export default function PageModal() {
  const pathname = usePathname();
  const { visiblePath, phase, offset } = usePageModalTransition(pathname);

  const translateClass =
    offset === "full" ? "translate-x-full" : "translate-x-0";

  return (
    <div
      className={`absolute top-0 right-0 z-10 h-full w-[90%] overflow-hidden text-white ${
        phase === "closed" ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {phase === "closed" ? null : (
        <div
          className={`absolute inset-0 overflow-auto bg-[#121314] transition-transform duration-300 ease-in-out motion-reduce:transition-none ${translateClass}`}
        >
          <div className="px-8 py-12 md:px-16">
            <SectionOutlet path={visiblePath} />
          </div>
        </div>
      )}
    </div>
  );
}
