import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { site } from "../data/site";

export const GET: APIRoute = async () => {
  const projects = await getCollection("projects", (e) => e.id.startsWith("en/"));
  const base = ["/", "/experience/", "/projects/", "/skills/", "/about/", "/contact/", ...projects.map((p) => `/projects/${p.id.split("/")[1]}/`)];
  const paths = [...base, ...base.map((p) => (p === "/" ? "/id/" : `/id${p}`)), "/cv/"];
  const urls = paths.map((p) => `  <url><loc>${new URL(p, site.url).toString()}</loc></url>`).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
