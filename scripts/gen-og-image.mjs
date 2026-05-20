/**
 * Generate og-image.png dari og-image.svg
 *
 * Jalankan SEKALI saja sebelum deploy:
 *   node scripts/gen-og-image.mjs
 *
 * Butuh: npm install --save-dev sharp (1x install)
 * Atau pakai https://cloudconvert.com/svg-to-png untuk konversi online.
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.error(
    "\n❌  Module 'sharp' tidak ditemukan.\n" +
    "   Jalankan: npm install --save-dev sharp\n" +
    "   Lalu coba lagi: node scripts/gen-og-image.mjs\n\n" +
    "   Alternatif online: https://cloudconvert.com/svg-to-png\n" +
    "   Upload public/og-image.svg → download sebagai og-image.png (1200×630)\n" +
    "   Letakkan hasilnya di public/og-image.png"
  );
  process.exit(1);
}

const svgPath  = join(root, "public", "og-image.svg");
const pngPath  = join(root, "public", "og-image.png");

if (!existsSync(svgPath)) {
  console.error("❌  File tidak ditemukan: public/og-image.svg");
  process.exit(1);
}

const svgBuffer = readFileSync(svgPath);

await sharp(svgBuffer)
  .resize(1200, 630)
  .png({ quality: 90, compressionLevel: 9 })
  .toFile(pngPath);

console.log(`✅  og-image.png berhasil dibuat: public/og-image.png (1200×630)`);
