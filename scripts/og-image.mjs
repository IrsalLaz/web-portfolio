// Captures /og (1200x630) from dist/ into public/og.png. Run after `astro build`.
import { copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { serveDist } from "./lib/serve-dist.mjs";
import { launchBrowser } from "./lib/browser.mjs";

const publicOut = fileURLToPath(new URL("../public/og.png", import.meta.url));
const distOut = fileURLToPath(new URL("../dist/og.png", import.meta.url));

const server = await serveDist();
const browser = await launchBrowser();
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto(`${server.origin}/og/`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: publicOut, type: "png" });
  await copyFile(publicOut, distOut);
  console.log("OG image written to public/og.png");
} finally {
  await browser.close();
  server.close();
}
