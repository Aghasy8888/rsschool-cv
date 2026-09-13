export const PAGE_MODAL_CLOSED = "closed" as const;
export const PAGE_MODAL_EXITING = "exiting" as const;
export const PAGE_MODAL_ENTERING = "entering" as const;
export const PAGE_MODAL_OPEN = "open" as const;

export const PAGE_MODAL_OFFSET_FULL = "full" as const;
export const PAGE_MODAL_OFFSET_ZERO = "zero" as const;

export type PageModalPhase =
  | typeof PAGE_MODAL_CLOSED
  | typeof PAGE_MODAL_EXITING
  | typeof PAGE_MODAL_ENTERING
  | typeof PAGE_MODAL_OPEN;

export type PageModalOffset =
  | typeof PAGE_MODAL_OFFSET_FULL
  | typeof PAGE_MODAL_OFFSET_ZERO;
