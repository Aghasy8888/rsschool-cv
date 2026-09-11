import nextConfig from "../next.config";

const basePath = nextConfig.basePath ?? "";

/** Prefix a root-relative public path with Next.js `basePath` (needed for unoptimized images on GitHub Pages). */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith(`${basePath}/`) || path === basePath) {
    return path;
  }
  return `${basePath}${path}`;
}
