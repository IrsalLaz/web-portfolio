import { defaultLang, languages, type Lang } from "./ui";

/** Language of a URL: "/id/..." is Indonesian, everything else is English. */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return first in languages ? (first as Lang) : defaultLang;
}

/** Path without the language prefix, always starting with "/". */
export function stripLang(pathname: string): string {
  const stripped = pathname.replace(/^\/id(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

/** Localize an internal path ("/projects" → "/id/projects" for Indonesian). */
export function localizePath(path: string, lang: Lang): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const base = stripLang(path);
  if (lang === defaultLang) return base;
  return base === "/" ? "/id/" : `/id${base}`;
}

/** The same page in the other language. Pages that exist in one language only (the CV) map to themselves. */
export function alternatePath(url: URL, target: Lang): string {
  const base = stripLang(url.pathname);
  if (base.startsWith("/cv")) return base;
  if (base.startsWith("/404")) return localizePath("/", target);
  return localizePath(base, target);
}

export const otherLang = (lang: Lang): Lang => (lang === "en" ? "id" : "en");
