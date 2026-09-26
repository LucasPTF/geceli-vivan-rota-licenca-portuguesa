import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = fs.readFileSync(path.join(root, "src", "content.ts"), "utf8");
const app = fs.readFileSync(path.join(root, "src", "main.tsx"), "utf8");
const css = fs.readFileSync(path.join(root, "src", "styles.css"), "utf8");
const vercel = JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf8"));

const failures = [];
const requireText = (label, haystack, needle) => {
  if (!haystack.includes(needle)) failures.push(`${label}: ${needle}`);
};

for (const route of ["/a1", "/a2", "/a3", "/obrigado"]) {
  if (!vercel.rewrites.some((entry) => entry.source === route)) {
    failures.push(`Rota ausente: ${route}`);
  }
}

for (const fragment of [
  "Abra uma segunda rota profissional",
  "Reconhecer não é fazer as malas",
  "Amplie a carreira, não a escala",
  "A Rota da Licença Portuguesa em 4 marcos",
  "R$ 97 para o workshop ao vivo Rota da Licença Portuguesa, com replay por 72 horas.",
  "Regras acadêmicas, profissionais, fiscais e de telemedicina podem mudar.",
]) {
  requireText("Copy ausente", source, fragment);
}

if (/transition\s*:\s*all/i.test(css)) {
  failures.push("CSS usa transition: all");
}

if (!css.includes("prefers-reduced-motion")) {
  failures.push("Variante de movimento reduzido ausente");
}

if (!app.includes('href="#investimento"')) {
  failures.push("Destino interno seguro dos CTAs ausente");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Validação estrutural concluída para /a1, /a2, /a3 e /obrigado.");
