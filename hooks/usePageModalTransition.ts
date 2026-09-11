import { useEffect, useRef, useState } from "react";

export const PAGE_MODAL_DURATION_MS = 300;

export type PageModalPhase = "closed" | "exiting" | "entering" | "open";
export type PageModalOffset = "full" | "zero";

function isHomePath(path: string) {
  return path === "/";
}

export function usePageModalTransition(pathname: string) {
  const [visiblePath, setVisiblePath] = useState(pathname);
  const [phase, setPhase] = useState<PageModalPhase>(
    isHomePath(pathname) ? "closed" : "open",
  );
  const [offset, setOffset] = useState<PageModalOffset>(
    isHomePath(pathname) ? "full" : "zero",
  );

  const visiblePathRef = useRef(visiblePath);
  const phaseRef = useRef(phase);
  const pendingPathRef = useRef(pathname);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotionRef = useRef(false);

  visiblePathRef.current = visiblePath;
  phaseRef.current = phase;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onChange = () => {
      reducedMotionRef.current = mq.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const clearTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    pendingPathRef.current = pathname;

    if (phaseRef.current === "exiting") {
      return;
    }

    if (pathname === visiblePathRef.current) {
      return;
    }

    clearTimer();

    const applyPending = () => {
      const next = pendingPathRef.current;

      if (isHomePath(next)) {
        setVisiblePath("/");
        setOffset("full");
        setPhase("closed");
        return;
      }

      setVisiblePath(next);
      setPhase("entering");
      setOffset("full");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setOffset("zero");
          timerRef.current = setTimeout(() => {
            setPhase("open");
          }, PAGE_MODAL_DURATION_MS);
        });
      });
    };

    if (reducedMotionRef.current) {
      setVisiblePath(pathname);
      if (isHomePath(pathname)) {
        setOffset("full");
        setPhase("closed");
      } else {
        setOffset("zero");
        setPhase("open");
      }
      return;
    }

    const fromHome =
      isHomePath(visiblePathRef.current) || phaseRef.current === "closed";

    if (fromHome) {
      applyPending();
      return;
    }

    setPhase("exiting");
    setOffset("zero");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOffset("full");
      });
    });

    timerRef.current = setTimeout(applyPending, PAGE_MODAL_DURATION_MS);
  }, [pathname]);

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    [],
  );

  return { visiblePath, phase, offset };
}
