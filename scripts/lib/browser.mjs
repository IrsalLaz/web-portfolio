// Launches a locally installed Chromium-based browser (no download needed).
// Override with BROWSER_PATH=/path/to/chrome if neither Edge nor Chrome is found.
import { chromium } from "playwright-core";

export async function launchBrowser() {
  if (process.env.BROWSER_PATH) {
    return chromium.launch({ executablePath: process.env.BROWSER_PATH });
  }
  for (const channel of ["msedge", "chrome"]) {
    try {
      return await chromium.launch({ channel });
    } catch {
      /* try the next channel */
    }
  }
  throw new Error("No Chromium-based browser found. Install Edge or Chrome, or set BROWSER_PATH.");
}
