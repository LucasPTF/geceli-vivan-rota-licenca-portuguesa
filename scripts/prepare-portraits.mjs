import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require(process.env.PORTRAIT_SHARP_MODULE || "sharp");
const source = process.argv[2];
if (!source) throw new Error("Informe a pasta das fotos aprovadas.");
const destination = path.resolve(import.meta.dirname, "../public");
const portraits = [
  ["WhatsApp Image 2026-10-01 at 19.23.41 (1).jpeg", "geceli-sorriso-blazer.webp"],
  ["WhatsApp Image 2026-10-01 at 19.23.42 (3).jpeg", "geceli-apresentacao.webp"],
  ["WhatsApp Image 2026-10-01 at 19.23.40 (1).jpeg", "geceli-sorriso-casual.webp"],
];
for (const [file, output] of portraits) {
  const info = await sharp(path.join(source, file)).rotate()
    .resize({ width: 900, withoutEnlargement: true }).webp({ quality: 84 })
    .toFile(path.join(destination, output));
  console.log(`${output}: ${info.width}x${info.height}, ${info.size} bytes`);
}
