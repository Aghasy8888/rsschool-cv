import { useEffect, useRef, useState } from "react";
import {
  HOME,
  PAGE_MODAL_CLOSED,
  PAGE_MODAL_ENTERING,
  PAGE_MODAL_EXITING,
  PAGE_MODAL_OFFSET_FULL,
  PAGE_MODAL_OFFSET_ZERO,
  PAGE_MODAL_OPEN,
  type PageModalOffset,
  type PageModalPhase,
} from "@/constants";

export const PAGE_MODAL_DURATION_MS = 300;

export type { PageModalOffset, PageModalPhase };

function isHomePath(path: string) {
  return path === HOME;
}

export function usePageModalTransition(pathname: string) {
  const [visiblePath, setVisiblePath] = useState(pathname);
  const [phase, setPhase] = useState<PageModalPhase>(
    isHomePath(pathname) ? PAGE_MODAL_CLOSED : PAGE_MODAL_OPEN,
  );
  const [offset, setOffset] = useState<PageModalOffset>(
    isHomePath(pathname) ? PAGE_MODAL_OFFSET_FULL : PAGE_MODAL_OFFSET_ZERO,
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

    if (phaseRef.current === PAGE_MODAL_EXITING) {
      return;
    }

    if (pathname === visiblePathRef.current) {
      return;
    }

    clearTimer();

    const applyPending = () => {
      const next = pendingPathRef.current;

      if (isHomePath(next)) {
        setVisiblePath(HOME);
        setOffset(PAGE_MODAL_OFFSET_FULL);
        setPhase(PAGE_MODAL_CLOSED);
        return;
      }

      setVisiblePath(next);
      setPhase(PAGE_MODAL_ENTERING);
      setOffset(PAGE_MODAL_OFFSET_FULL);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setOffset(PAGE_MODAL_OFFSET_ZERO);
          timerRef.current = setTimeout(() => {
            setPhase(PAGE_MODAL_OPEN);
          }, PAGE_MODAL_DURATION_MS);
        });
      });
    };

    if (reducedMotionRef.current) {
      setVisiblePath(pathname);
      if (isHomePath(pathname)) {
        setOffset(PAGE_MODAL_OFFSET_FULL);
        setPhase(PAGE_MODAL_CLOSED);
      } else {
        setOffset(PAGE_MODAL_OFFSET_ZERO);
        setPhase(PAGE_MODAL_OPEN);
      }
      return;
    }

    const fromHome =
      isHomePath(visiblePathRef.current) ||
      phaseRef.current === PAGE_MODAL_CLOSED;

    if (fromHome) {
      applyPending();
      return;
    }

    setPhase(PAGE_MODAL_EXITING);
    setOffset(PAGE_MODAL_OFFSET_ZERO);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setOffset(PAGE_MODAL_OFFSET_FULL);
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
