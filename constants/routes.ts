export const HOME = "/" as const;
export const ABOUT = "/about" as const;
export const SKILLS = "/skills" as const;
export const PROJECTS = "/projects" as const;
export const CONTACT = "/contact" as const;

export type RoutePath =
  | typeof HOME
  | typeof ABOUT
  | typeof SKILLS
  | typeof PROJECTS
  | typeof CONTACT;
