import { useEffect, useRef } from "react";

export function usePageModalScroll(visiblePath: string, enabled: boolean) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const positionsRef = useRef<Record<string, number>>({});
  const prevPathRef = useRef(visiblePath);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const el = scrollRef.current;
    if (!el) {
      return;
    }

    const prevPath = prevPathRef.current;
    if (prevPath !== visiblePath) {
      positionsRef.current[prevPath] = el.scrollTop;
      prevPathRef.current = visiblePath;
      el.scrollTop = positionsRef.current[visiblePath] ?? 0;
    }

    const onScroll = () => {
      positionsRef.current[prevPathRef.current] = el.scrollTop;
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [visiblePath, enabled]);

  return scrollRef;
}
