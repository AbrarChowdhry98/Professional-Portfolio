export function assetUrl(path: string): string {
  if (!path || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
