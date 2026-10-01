import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = fs.readFileSync(path.join(root, "src/content.ts"), "utf8");
const copy = JSON.parse(source.slice(source.indexOf("{") , source.indexOf("} as const;") + 1));
const sourceManifest = JSON.parse(fs.readFileSync(process.argv[2], "utf8").replace(/^\uFEFF/, ""));
const required = new Set(sourceManifest.requiredText);
const h = copy.hero;
const blocks = ["Ir para o conteúdo", copy.workshop.kicker, h.audienceLabel, h.kicker,
  ...h.title, h.subtitle, h.intro, h.highlightTitle, h.highlightText,
  h.information, h.price, h.cta, copy.authority.name, copy.workshop.kicker,
  copy.offer.inclusions[1], h.price];
const add = (...items) => blocks.push(...items.flat());
const c = copy.career;
add(c.kicker, c.title, c.intro, c.milestones, c.closing);
const p = copy.perspective;
add(p.kicker, p.title, p.paragraphs, p.items);
add(copy.benefits.title);
copy.benefits.cards.forEach(card => add(card.title, card.text));
add(h.cta);
const v = copy.value;
add(v.kicker, v.title, v.paragraphs, v.highlight, v.items, v.closing);
const t = copy.time;
add(t.kicker, t.title, t.intro, t.benefits, t.choices, t.closing);
const i = copy.international;
add(i.kicker, i.title, i.intro, i.items, i.closing);
const b = copy.bridge;
add(b.title, b.intro, b.questions, b.highlightIntro, b.highlight);
const w = copy.workshop;
add(w.kicker, w.title, w.intro, w.items, h.cta, w.resultTitle, w.resultText);
const a = copy.audience;
add(a.forTitle, a.forItems, a.notForTitle, a.notForItems);
const authority = copy.authority;
add("10+", authority.kicker, authority.name, authority.specialty, authority.experience, authority.stats, authority.closing, h.cta);
add(copy.discover.title);
copy.discover.cards.forEach(card => add(card.title, card.text));
const o = copy.offer;
add(o.kicker, o.title, o.subtitle, o.intro, o.inclusions, o.investmentLabel, o.investmentValue, o.cta);
add(copy.countdownLabel, copy.countdownNote, "dias", "horas", "min", "seg");
copy.lots.forEach(lot => add(lot.state, lot.name, lot.value));
add(copy.faqTitle);
copy.faq.forEach(item => add(item.question, item.answer));
const f = copy.final;
add(f.kicker, f.title, f.intro, f.benefits, f.promise, f.information, f.price, f.cta);
add("Contato", "WhatsApp: +351 964 052 921", "@emportugalconsultoria", "contato@emportugalconsultoria.com.br");
const authorizedInterface = new Set(["Ir para o conteúdo", "10+", "dias", "horas", "min", "seg", "Contato", "WhatsApp: +351 964 052 921", "@emportugalconsultoria", "contato@emportugalconsultoria.com.br"]);
for (const text of blocks) {
  if (!required.has(text) && !authorizedInterface.has(text)) throw new Error(`Texto sem fonte aprovada: ${text}`);
}
function orderedIds(texts) {
  const occurrences = new Map();
  return texts.map(text => {
    let hash = 2166136261;
    for (const character of text.replace(/\s+/g, " ").trim()) hash = Math.imul(hash ^ character.charCodeAt(0), 16777619) >>> 0;
    const key = `text-${hash.toString(16)}`;
    const count = (occurrences.get(key) || 0) + 1;
    occurrences.set(key, count);
    return { id: `${key}-${count}`, text };
  });
}
const manifest = {
  ...sourceManifest,
  sourceVersion: "geceli-copy-2026-09-29-footer-email-2026-10-01",
  renderedRoutes: ["/a1", "/a2", "/a3"].map(route => ({ route, blocks: orderedIds(blocks), dynamicIds: ["timer-dias", "timer-horas", "timer-min", "timer-seg"] })),
};
manifest.renderedRoutes.push({ route: "/obrigado", blocks: orderedIds([copy.productName, "Sua inscrição foi confirmada.", copy.productName]), dynamicIds: [] });
fs.writeFileSync(process.argv[3], JSON.stringify(manifest, null, 2));
console.log(`Contrato da fonte: ${blocks.length} blocos por página, 4 rotas.`);
