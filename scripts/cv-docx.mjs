// Generates an editable, ATS-friendly DOCX from src/data/cv.ts.
// Run with: node --experimental-strip-types scripts/cv-docx.mjs
import { mkdir, writeFile, copyFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  LevelFormat,
  Packer,
  Paragraph,
  TabStopType,
  TextRun,
} from "docx";
import { cv } from "../src/data/cv.ts";

const NAME = "irsal-lazuard-izzatillah-cv.docx";
const FONT = "Calibri";
const SIZE = 20; // half-points → 10 pt
const INK = "15181C";
const MUTED = "4F5761";
// A4 with 13 mm side margins: usable width in twips for the right tab stop.
const PAGE_W = 11906;
const MARGIN_X = 737;
const MARGIN_Y = 680;
const RIGHT_TAB = PAGE_W - MARGIN_X * 2;

const run = (text, opts = {}) => new TextRun({ text, font: FONT, size: SIZE, color: INK, ...opts });

const heading = (text) =>
  new Paragraph({
    spacing: { before: 200, after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "C9CDD2", space: 2 } },
    children: [run(text.toUpperCase(), { bold: true, size: 21, characterSpacing: 20 })],
  });

const bullet = (text) =>
  new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 40 },
    children: [run(text)],
  });

const roleLine = (left, right) =>
  new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
    spacing: { before: 100, after: 40 },
    keepNext: true,
    children: [...left, run("\t"), run(right, { color: MUTED })],
  });

const link = (text, href) =>
  new ExternalHyperlink({
    link: href,
    children: [new TextRun({ text, font: FONT, size: 18, color: "0B5A54", underline: {} })],
  });

const contactChildren = [];
cv.contacts.forEach((c, i) => {
  if (i > 0) contactChildren.push(run("  ·  ", { size: 18, color: MUTED }));
  contactChildren.push(run(`${c.label}: `, { size: 18, color: MUTED }));
  contactChildren.push(c.href ? link(c.value, c.href) : run(c.value, { size: 18 }));
});

const children = [
  new Paragraph({ spacing: { after: 20 }, children: [run(cv.name, { bold: true, size: 38 })] }),
  new Paragraph({ spacing: { after: 60 }, children: [run(cv.headline, { size: 22, color: MUTED })] }),
  new Paragraph({ spacing: { after: 60 }, children: contactChildren }),

  heading("Summary"),
  new Paragraph({ spacing: { after: 40 }, children: [run(cv.summary)] }),

  heading("Skills"),
  ...cv.skills.map(
    (s) => new Paragraph({ spacing: { after: 30 }, children: [run(`${s.label}: `, { bold: true }), run(s.value)] }),
  ),

  heading("Experience"),
  ...cv.experience.flatMap((r) => [
    roleLine([run(r.title, { bold: true }), run(` — ${r.company}, ${r.location}`)], r.period),
    ...r.bullets.map(bullet),
  ]),

  heading("Selected Projects"),
  ...cv.projects.map(
    (p) =>
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 40 },
        children: [run(p.name, { bold: true }), run(` — ${p.description} `), link(p.url.replace("https://", ""), p.url)],
      }),
  ),

  heading("Education"),
  roleLine([run(cv.education.degree, { bold: true }), run(` — ${cv.education.school}`)], cv.education.period),

  heading("Certifications"),
  new Paragraph({ children: [run(cv.certifications)] }),
];

const doc = new Document({
  creator: cv.name,
  title: `${cv.name} — CV`,
  description: cv.headline,
  styles: { default: { document: { run: { font: FONT, size: SIZE } } } },
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: "•",
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 300, hanging: 220 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: PAGE_W, height: 16838 },
          margin: { top: MARGIN_Y, bottom: MARGIN_Y, left: MARGIN_X, right: MARGIN_X },
        },
      },
      children,
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
const publicDir = fileURLToPath(new URL("../public/cv/", import.meta.url));
await mkdir(publicDir, { recursive: true });
const publicOut = `${publicDir}${NAME}`;
await writeFile(publicOut, buffer);
const distDir = fileURLToPath(new URL("../dist/cv/", import.meta.url));
if (existsSync(distDir)) await copyFile(publicOut, `${distDir}${NAME}`);
console.log(`CV DOCX written to public/cv/${NAME}`);
