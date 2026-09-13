"use client";

import { usePathname } from "next/navigation";
import SectionOutlet from "../SectionOutlet/SectionOutlet";
import { PAGE_MODAL_CLOSED, PAGE_MODAL_OFFSET_FULL } from "@/constants";
import { usePageModalScroll } from "@/hooks/usePageModalScroll";
import { usePageModalTransition } from "@/hooks/usePageModalTransition";

export default function PageModal() {
  const pathname = usePathname();
  const { visiblePath, phase, offset } = usePageModalTransition(pathname);
  const scrollRef = usePageModalScroll(visiblePath, phase !== PAGE_MODAL_CLOSED);

  const translateClass =
    offset === PAGE_MODAL_OFFSET_FULL ? "translate-x-full" : "translate-x-0";

  return (
    <div
      className={`absolute top-0 right-0 z-10 h-full w-full overflow-hidden text-white lg:w-[90%] ${
        phase === PAGE_MODAL_CLOSED
          ? "pointer-events-none"
          : "pointer-events-auto"
      }`}
    >
      {phase === PAGE_MODAL_CLOSED ? null : (
        <div
          ref={scrollRef}
          className={`absolute inset-0 overflow-auto bg-[#121314] transition-transform duration-300 ease-in-out motion-reduce:transition-none ${translateClass}`}
        >
          <div className="px-8 pt-12 pb-8 md:px-16 lg:pb-12">
            <SectionOutlet path={visiblePath} />
          </div>
        </div>
      )}
    </div>
  );
}
