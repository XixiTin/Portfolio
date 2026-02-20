/**
 * Resolves asset URLs for GitHub Pages deployment.
 * Prepend base path (e.g. /test-port/) for relative paths so images load correctly.
 */
export function assetUrl(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = import.meta.env.BASE_URL;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
