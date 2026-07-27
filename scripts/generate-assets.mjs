/**
 * Rasterises the SVG sources into the PNG assets that social platforms and
 * mobile launchers require (neither accepts SVG reliably).
 *
 * Run: npm run assets
 */
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const from = (path) => new URL(path, root);

const jobs = [
  {
    source: "scripts/og-image.svg",
    output: "public/og-image.png",
    width: 1200,
    height: 630,
  },
  {
    source: "public/favicon.svg",
    output: "public/apple-touch-icon.png",
    width: 180,
    height: 180,
  },
  {
    source: "public/favicon.svg",
    output: "public/icon-192.png",
    width: 192,
    height: 192,
  },
  {
    source: "public/favicon.svg",
    output: "public/icon-512.png",
    width: 512,
    height: 512,
  },
];

for (const job of jobs) {
  const svg = await readFile(from(job.source));
  const png = await sharp(svg, { density: 300 })
    .resize(job.width, job.height, { fit: "contain", background: "#fefae0" })
    .png({ compressionLevel: 9 })
    .toBuffer();

  await writeFile(from(job.output), png);
  console.log(`${job.output}  ${job.width}x${job.height}  ${(png.length / 1024).toFixed(1)} kB`);
}
