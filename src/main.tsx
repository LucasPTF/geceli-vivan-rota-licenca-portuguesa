import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Camera, Check, ChevronDown, CircleCheckBig, ClipboardCheck,
  Clock3, Compass, Euro, Globe2, Mail, MessageCircle, ShieldCheck, Stethoscope, X,
} from "lucide-react";
import { copy, routeManifest, type HeroVariant } from "./content";
import "./styles.css";

const benefitIcons = [Euro, Clock3, Globe2, Compass];

function Cta({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a className={`cta ${className}`} href="#investimento">
      <span>{label}</span>
    </a>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Em Portugal Consultoria">
      <img src="/logo-em-portugal.webp" alt="Em Portugal Consultoria" />
    </a>
  );
}

function Paragraphs({ items, className = "" }: {
  items: readonly string[];
  className?: string;
}) {
  return <div className={className}>{items.map((item) => <p key={item}>{item}</p>)}</div>;
}

function CheckList({ items, className = "" }: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`check-list ${className}`}>
      {items.map((item) => (
        <li key={item}><CircleCheckBig aria-hidden="true" size={21} /><span>{item}</span></li>
      ))}
    </ul>
  );
}

function Hero({ hero }: { hero: HeroVariant }) {
  const presentation = hero.path === "/a2" ? "light" : hero.path === "/a3" ? "centered" : "split";
  const portrait = hero.path === "/a3" ? "/geceli-sorriso-casual.webp" : "/geceli-sorriso-blazer.webp";
  return (
    <header className={`hero hero-${presentation}`} id="top">
      <nav className="nav shell" aria-label="Navegação principal">
        <Brand />
        <a className="nav-link" href="#workshop">
          <Compass aria-hidden="true" size={17} />{copy.workshop.kicker}
        </a>
      </nav>
      <div className="hero-grid shell">
        <div className="hero-copy">
          <div className="hero-identification hero-enter hero-enter-1">
            <span className="hero-profession"><Stethoscope aria-hidden="true" size={16} />{hero.audienceLabel}</span>
            <span className="hero-angle">{hero.kicker}</span>
          </div>
          <h1 className="hero-enter hero-enter-2">
            {hero.title.map((line) => <span key={line}>{line}</span>)}
          </h1>
          <p className="hero-subtitle hero-enter hero-enter-3">{hero.subtitle}</p>
          <p className="hero-opening hero-enter hero-enter-3">{hero.intro}</p>
          <div className="hero-euro-hook hero-enter hero-enter-3">
            <Euro aria-hidden="true" size={24} />
            <div><strong>{hero.highlightTitle}</strong><span>{hero.highlightText}</span></div>
          </div>
          <div className="hero-support hero-enter hero-enter-4">
            <p>{hero.information}</p>
            <strong className="hero-price">{hero.price}</strong>
          </div>
          <div className="hero-actions hero-enter hero-enter-4"><Cta label={hero.cta} /></div>
        </div>
        <div className="hero-visual hero-enter hero-enter-3" aria-label="Geceli Vivan">
          <div className="document-frame">
            <div className="document-topline"><span>{copy.authority.name}</span><span>{copy.workshop.kicker}</span></div>
            <div className="portrait-wrap">
              <img src={portrait} alt="Geceli Vivan" width="900" height="1200" fetchPriority="high" />
              <div className="portrait-shade" aria-hidden="true" />
            </div>
            <div className="document-stamp" aria-hidden="true"><span>2</span><small>HORAS AO VIVO</small></div>
            <div className="document-footer"><span>{copy.offer.inclusions[1]}</span><span>{hero.price}</span></div>
          </div>
        </div>
      </div>
    </header>
  );
}

function CareerSection() {
  const section = copy.career;
  return (
    <section className="section section-paper" aria-labelledby="career-title">
      <div className="shell editorial-grid">
        <div className="section-number" aria-hidden="true">01</div>
        <div className="editorial-heading" data-reveal>
          <p className="eyebrow">{section.kicker}</p>
          <h2 id="career-title">{section.title}</h2>
        </div>
        <div className="long-copy" data-reveal>
          <p>{section.intro}</p>
          <Paragraphs items={section.milestones} className="career-milestones" />
          <Paragraphs items={section.closing} />
        </div>
      </div>
    </section>
  );
}

function PerspectiveSection() {
  const section = copy.perspective;
  return (
    <section className="section section-ink" aria-labelledby="perspective-title">
      <div className="shell logic-grid">
        <div data-reveal>
          <p className="eyebrow eyebrow-gold">{section.kicker}</p>
          <h2 id="perspective-title">{section.title}</h2>
          <Paragraphs items={section.paragraphs} className="logic-intro" />
        </div>
        <div className="logic-card" data-reveal>
          <Globe2 aria-hidden="true" size={28} />
          <Paragraphs items={section.items} className="possibilities-list" />
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="section section-route" aria-labelledby="benefits-title">
      <div className="shell">
        <div className="section-heading centered" data-reveal><h2 id="benefits-title">{copy.benefits.title}</h2></div>
        <div className="benefits-grid">
          {copy.benefits.cards.map((card, index) => {
            const Icon = benefitIcons[index];
            return (
              <article className="benefit-card" data-reveal key={card.title}>
                <div className="benefit-icon"><Icon aria-hidden="true" size={26} /></div>
                <h3>{card.title}</h3><p>{card.text}</p>
              </article>
            );
          })}
        </div>
        <div className="section-actions centered"><Cta label={copy.hero.cta} /></div>
      </div>
    </section>
  );
}

function ValueSection() {
  const section = copy.value;
  return (
    <section className="section section-white" aria-labelledby="value-title">
      <div className="shell hours-grid">
        <div data-reveal>
          <p className="eyebrow">{section.kicker}</p>
          <h2 id="value-title">{section.title}</h2>
          <Paragraphs items={section.paragraphs} className="value-paragraphs" />
        </div>
        <aside className="result-card" data-reveal>
          <Euro aria-hidden="true" size={34} />
          <h3>{section.highlight}</h3>
          <CheckList items={section.items} />
          <Paragraphs items={section.closing} className="value-closing" />
        </aside>
      </div>
    </section>
  );
}

function TimeSection() {
  const section = copy.time;
  return (
    <section className="section section-context" aria-labelledby="time-title">
      <div className="shell time-grid">
        <div data-reveal>
          <p className="eyebrow">{section.kicker}</p>
          <h2 id="time-title">{section.title}</h2>
          <p className="context-text">{section.intro}</p>
          <Paragraphs items={section.benefits} className="time-benefits" />
        </div>
        <div className="time-choices" data-reveal>
          <Clock3 aria-hidden="true" size={38} />
          <Paragraphs items={section.choices} />
          <p className="time-closing">{section.closing}</p>
        </div>
      </div>
    </section>
  );
}

function InternationalSection() {
  const orbitRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;
    if (!("IntersectionObserver" in window)) {
      orbit.dataset.active = "true";
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      orbit.dataset.active = entry.isIntersecting ? "true" : "false";
    }, { rootMargin: "80px", threshold: 0.15 });
    observer.observe(orbit);
    return () => observer.disconnect();
  }, []);
  const section = copy.international;
  return (
    <section className="section section-context section-international" aria-labelledby="international-title">
      <div className="shell context-grid">
        <div ref={orbitRef} className="context-orbit" aria-hidden="true" data-reveal>
          <span className="orbit orbit-one" /><span className="orbit orbit-two" />
          <span className="orbit-core"><Stethoscope size={38} /></span>
        </div>
        <div data-reveal>
          <p className="eyebrow">{section.kicker}</p>
          <h2 id="international-title">{section.title}</h2>
          <p className="context-text">{section.intro}</p>
          <Paragraphs items={section.items} className="international-items" />
          <p className="context-text">{section.closing}</p>
        </div>
      </div>
    </section>
  );
}

function BridgeSection() {
  const section = copy.bridge;
  return (
    <section className="section section-ink" aria-labelledby="bridge-title">
      <div className="shell bridge-grid">
        <div data-reveal><h2 id="bridge-title">{section.title}</h2><p className="bridge-intro">{section.intro}</p></div>
        <div className="bridge-questions" data-reveal>
          <Paragraphs items={section.questions} />
          <div className="bridge-highlight"><p>{section.highlightIntro}</p><h3>{section.highlight}</h3></div>
        </div>
      </div>
    </section>
  );
}

function WorkshopSection() {
  const section = copy.workshop;
  return (
    <section className="section section-white" id="workshop" aria-labelledby="workshop-title">
      <div className="shell hours-grid">
        <div data-reveal>
          <p className="eyebrow">{section.kicker}</p><h2 id="workshop-title">{section.title}</h2>
          <Paragraphs items={section.intro} /><CheckList items={section.items} />
          <div className="section-actions"><Cta label={copy.hero.cta} /></div>
        </div>
        <aside className="result-card" data-reveal>
          <ClipboardCheck aria-hidden="true" size={34} />
          <h3>{section.resultTitle}</h3><p>{section.resultText}</p>
        </aside>
      </div>
    </section>
  );
}

function AudienceSection() {
  const section = copy.audience;
  return (
    <section className="section section-audience" aria-label="Público do workshop">
      <div className="shell audience-grid">
        <article className="audience-card audience-card-yes" data-reveal>
          <div className="audience-icon"><Check aria-hidden="true" size={25} /></div>
          <h2>{section.forTitle}</h2><ul>{section.forItems.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article className="audience-card audience-card-no" data-reveal>
          <div className="audience-icon"><X aria-hidden="true" size={25} /></div>
          <h2>{section.notForTitle}</h2><ul>{section.notForItems.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
      </div>
    </section>
  );
}

function AuthoritySection() {
  const section = copy.authority;
  return (
    <section className="section section-authority" aria-labelledby="authority-title">
      <div className="shell authority-grid">
        <div className="authority-image" data-reveal>
          <img src="/geceli-apresentacao.webp" alt="Geceli Vivan" width="900" height="1200" loading="lazy" />
          <div className="authority-badge"><ShieldCheck aria-hidden="true" size={25} /><span>10+</span></div>
        </div>
        <div data-reveal>
          <p className="eyebrow">{section.kicker}</p><h2 id="authority-title">{section.name}</h2>
          <p className="authority-specialty">{section.specialty}</p>
          <p className="authority-text">{section.experience}</p>
          <div className="authority-stats">{section.stats.map((stat) => <p key={stat}>{stat}</p>)}</div>
          <p className="authority-text">{section.closing}</p>
          <div className="section-actions"><Cta label={copy.hero.cta} /></div>
        </div>
      </div>
    </section>
  );
}

function DiscoverSection() {
  return (
    <section className="section section-objections" aria-labelledby="discover-title">
      <div className="shell">
        <div className="section-heading centered" data-reveal><h2 id="discover-title">{copy.discover.title}</h2></div>
        <div className="objections-grid">
          {copy.discover.cards.map((card, index) => (
            <article className="objection-card" data-reveal key={card.title}>
              <span aria-hidden="true">0{index + 1}</span><h3>{card.title}</h3><p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  const section = copy.offer;
  return (
    <section className="section section-offer" id="investimento" aria-labelledby="offer-title">
      <div className="shell offer-grid">
        <div data-reveal>
          <p className="eyebrow eyebrow-gold">{section.kicker}</p>
          <h2 id="offer-title">{section.title}</h2>
          <p className="offer-subtitle">{section.subtitle}</p><p className="offer-intro">{section.intro}</p>
          <ul className="offer-list">{section.inclusions.map((item) => (
            <li key={item}><CircleCheckBig aria-hidden="true" size={20} /><span>{item}</span></li>
          ))}</ul>
        </div>
        <aside className="price-panel" data-reveal>
          <p className="price-label">{section.investmentLabel}</p>
          <p className="price-value">{section.investmentValue}</p>
          <Cta label={section.cta} className="cta-light" />
        </aside>
      </div>
      <Countdown />
      <div className="shell lots" data-reveal aria-label="Lotes do workshop">
        {copy.lots.map((lot, index) => (
          <article className={`lot-card ${index === 0 ? "lot-current" : ""}`} key={lot.name}>
            <p>{lot.state}</p><h3>{lot.name}</h3><strong>{lot.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

const countdownStorageKey = "geceli-rota-licenca-portuguesa-expiry-v1";
const countdownDuration = 4 * 24 * 60 * 60 * 1000;

function getCountdownExpiry() {
  try {
    const stored = window.localStorage.getItem(countdownStorageKey);
    const parsed = stored ? Number(stored) : Number.NaN;

    if (Number.isFinite(parsed)) return parsed;

    const expiry = Date.now() + countdownDuration;
    window.localStorage.setItem(countdownStorageKey, String(expiry));
    return expiry;
  } catch {
    return Date.now() + countdownDuration;
  }
}

function getRemainingTime(expiry: number) {
  return Math.max(0, expiry - Date.now());
}

function Countdown() {
  const [expiry] = React.useState(getCountdownExpiry);
  const [remaining, setRemaining] = React.useState(() => getRemainingTime(expiry));

  React.useEffect(() => {
    const update = () => setRemaining(getRemainingTime(expiry));
    const interval = window.setInterval(update, 1000);
    update();

    return () => window.clearInterval(interval);
  }, [expiry]);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const units = [
    { label: "dias", value: days },
    { label: "horas", value: hours },
    { label: "min", value: minutes },
    { label: "seg", value: seconds },
  ];

  return (
    <div className="countdown shell" data-reveal>
      <div className="countdown-heading">
        <p>{copy.countdownLabel}</p>
        <span>{copy.countdownNote}</span>
      </div>
      <div
        className="countdown-units"
        role="timer"
        aria-label={`${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`}
      >
        {units.map((unit) => (
          <div className="countdown-unit" key={unit.label}>
            <strong data-copy-dynamic={`timer-${unit.label}`}>{String(unit.value).padStart(2, "0")}</strong>
            <span>{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


function FaqSection() {
  return (
    <section className="section section-faq" aria-labelledby="faq-title">
      <div className="shell faq-grid">
        <div className="faq-heading" data-reveal><h2 id="faq-title">{copy.faqTitle}</h2></div>
        <div className="faq-list" data-reveal>
          {copy.faq.map((item) => (
            <details key={item.question}>
              <summary><span>{item.question}</span><ChevronDown aria-hidden="true" size={20} /></summary>
              <Paragraphs items={item.answer} className="faq-answer" />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalSection() {
  const section = copy.final;
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="shell final-inner" data-reveal>
        <Globe2 aria-hidden="true" size={38} />
        <p className="eyebrow eyebrow-gold">{section.kicker}</p>
        <h2 id="final-title">{section.title.map((line) => <span key={line}>{line}</span>)}</h2>
        <p className="final-intro">{section.intro}</p>
        <Paragraphs items={section.benefits} className="final-benefits" />
        <p className="final-promise">{section.promise.map((line) => <span key={line}>{line}</span>)}</p>
        <span>{section.information}</span>
        <strong className="final-price">{section.price}</strong>
        <Cta label={section.cta} className="cta-light" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <Brand />
        <div className="footer-contact">
          <h2>Contato</h2>
          <a href="https://wa.me/351964052921" target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={20} /><span>WhatsApp: +351 964 052 921</span>
          </a>
          <a
            href="https://www.instagram.com/emportugalconsultoria/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da Em Portugal Consultoria"
          >
            <Camera aria-hidden="true" size={20} /><span>@emportugalconsultoria</span>
          </a>
          <a
            href="mailto:contato@emportugalconsultoria.com.br"
            aria-label="E-mail da Em Portugal Consultoria"
          >
            <Mail aria-hidden="true" size={20} /><span>contato@emportugalconsultoria.com.br</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function copyTextId(text: string) {
  let hash = 2166136261;
  for (const character of text.replace(/\s+/g, " ").trim()) {
    hash = Math.imul(hash ^ character.charCodeAt(0), 16777619) >>> 0;
  }
  return `text-${hash.toString(16)}`;
}

function CopyRoot({ children }: { children: React.ReactNode }) {
  const root = React.useRef<HTMLDivElement>(null);
  React.useLayoutEffect(() => {
    const occurrences = new Map<string, number>();
    root.current?.querySelectorAll<HTMLElement>("p,h1,h2,h3,span,strong,small,a,summary,li").forEach((element) => {
      if (element.closest('[aria-hidden="true"]') || element.hasAttribute("data-copy-dynamic")) return;
      const hasOwnText = Array.from(element.childNodes).some((node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim());
      if (!hasOwnText) return;
      const key = copyTextId(element.textContent || "");
      const occurrence = (occurrences.get(key) || 0) + 1;
      occurrences.set(key, occurrence);
      element.dataset.copyId = `${key}-${occurrence}`;
    });
  }, []);
  return <div ref={root} data-copy-root>{children}</div>;
}

function SalesPage({ hero }: { hero: HeroVariant }) {
  return (
    <CopyRoot>
      <a className="skip-link" href="#main-content">Ir para o conteúdo</a>
      <Hero hero={hero} />
      <main id="main-content">
        <CareerSection />
        <PerspectiveSection />
        <BenefitsSection />
        <ValueSection />
        <TimeSection />
        <InternationalSection />
        <BridgeSection />
        <WorkshopSection />
        <AudienceSection />
        <AuthoritySection />
        <DiscoverSection />
        <OfferSection />
        <FaqSection />
        <FinalSection />
      </main>
      <Footer />
    </CopyRoot>
  );
}

function ThankYouPage() {
  return (
    <CopyRoot><main className="thanks-page">
      <div className="thanks-card">
        <Brand />
        <CircleCheckBig aria-hidden="true" size={48} />
        <p className="eyebrow">{copy.productName}</p>
        <h1>Sua inscrição foi confirmada.</h1>
        <a className="quiet-link" href="/a1">
          <ArrowRight aria-hidden="true" size={18} />
          {copy.productName}
        </a>
      </div>
    </main></CopyRoot>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/a1";

  if (path === "/obrigado") {
    return <ThankYouPage />;
  }

  const hero = routeManifest.find((item) => item.path === path) ?? routeManifest[0];
  return <SalesPage hero={hero} />;
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
