import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = fs.readFileSync(path.join(root, "src", "content.ts"), "utf8");
const app = fs.readFileSync(path.join(root, "src", "main.tsx"), "utf8");
const css = fs.readFileSync(path.join(root, "src", "styles.css"), "utf8");
const vercel = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf8"));
const manifest = JSON.parse(fs.readFileSync(path.join(root, "copy-audit.json"), "utf8"));
const failures = [];

for (const route of manifest.routes) {
  if (!vercel.rewrites.some((entry) => entry.source === route)) failures.push(`Rota ausente: ${route}`);
}
for (const fragment of manifest.requiredText) {
  if (!source.includes(fragment)) failures.push(`Copy ausente: ${fragment}`);
}
if (/reconhecimento|inscrição profissional|telemedicina|Ordem dos Médicos|\bNIF\b/i.test(source)) {
  failures.push("Conteúdo de etapas técnicas na copy");
}
if (/transition\s*:\s*all/i.test(css)) failures.push("CSS usa transition: all");
if (!css.includes("prefers-reduced-motion")) failures.push("Movimento reduzido ausente");
if (!app.includes('href="#investimento"')) failures.push("Destino interno dos CTAs ausente");
if (!app.includes("countdownStorageKey") || !app.includes("window.localStorage")) failures.push("Persistência do cronômetro ausente");
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Copy completa validada: ${manifest.requiredText.length} trechos e ${manifest.routes.length} rotas.`);
