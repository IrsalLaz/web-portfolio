// Renders /cv from dist/ to an A4 PDF. Run after `astro build`.
import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { serveDist } from "./lib/serve-dist.mjs";
import { launchBrowser } from "./lib/browser.mjs";

const NAME = "irsal-lazuard-izzatillah-cv.pdf";
const publicOut = fileURLToPath(new URL(`../public/cv/${NAME}`, import.meta.url));
const distOut = fileURLToPath(new URL(`../dist/cv/${NAME}`, import.meta.url));

const server = await serveDist();
const browser = await launchBrowser();
try {
  const page = await browser.newPage();
  await page.goto(`${server.origin}/cv/`, { waitUntil: "networkidle" });
  await page.emulateMedia({ media: "print" });
  await page.evaluate(() => document.fonts.ready);
  await mkdir(fileURLToPath(new URL("../public/cv/", import.meta.url)), { recursive: true });
  await page.pdf({
    path: publicOut,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true,
  });
  await mkdir(fileURLToPath(new URL("../dist/cv/", import.meta.url)), { recursive: true });
  await copyFile(publicOut, distOut);
  console.log(`CV PDF written to public/cv/${NAME}`);
} finally {
  await browser.close();
  server.close();
}
