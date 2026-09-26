import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Camera,
  Check,
  ChevronDown,
  CircleCheckBig,
  ClipboardCheck,
  Compass,
  ExternalLink,
  FileCheck2,
  Globe2,
  Landmark,
  MapPinned,
  ShieldCheck,
  Stethoscope,
  X,
} from "lucide-react";
import { copy, routeManifest, type HeroVariant } from "./content";
import "./styles.css";

const routeIcons = [FileCheck2, BadgeCheck, Landmark, MapPinned];

function Cta({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a className={`cta ${className}`} href="#investimento">
      <span>{label}</span>
      <ArrowRight aria-hidden="true" size={19} strokeWidth={2.2} />
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

function Hero({ hero }: { hero: HeroVariant }) {
  return (
    <header className="hero" id="top">
      <nav className="nav shell" aria-label="Navegação principal">
        <Brand />
        <a className="nav-link" href="#rota">
          <Compass aria-hidden="true" size={17} />
          {copy.productName}
        </a>
      </nav>

      <div className="hero-grid shell">
        <div className="hero-copy">
          <p className="eyebrow hero-enter hero-enter-1">{hero.kicker}</p>
          <h1 className="hero-enter hero-enter-2">{hero.title}</h1>
          <p className="hero-subtitle hero-enter hero-enter-3">{hero.subtitle}</p>

          {hero.opening && (
            <p className="hero-opening hero-enter hero-enter-3">{hero.opening}</p>
          )}

          <div className="hero-support hero-enter hero-enter-4">
            {hero.bridge && <p>{hero.bridge}</p>}
            {hero.proof && <p>{hero.proof}</p>}
            {hero.offer && <p>{hero.offer}</p>}
          </div>

          <div className="hero-actions hero-enter hero-enter-4">
            <Cta label={hero.cta} />
            <a className="quiet-link" href="#rota">
              <ArrowDown aria-hidden="true" size={17} />
              {copy.descriptor}
            </a>
          </div>
        </div>

        <div className="hero-visual hero-enter hero-enter-3" aria-label="Geceli Vivan">
          <div className="document-frame">
            <div className="document-topline">
              <span>{copy.productName}</span>
              <span>PT</span>
            </div>
            <div className="portrait-wrap">
              <img
                src="/geceli-vivan.webp"
                alt="Geceli Vivan"
                width="900"
                height="1200"
                fetchPriority="high"
              />
              <div className="portrait-shade" aria-hidden="true" />
            </div>
            <div className="document-stamp" aria-hidden="true">
              <span>4</span>
              <small>MARCOS</small>
            </div>
            <div className="document-footer">
              <span>2 horas ao vivo</span>
              <span>R$ 97</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function QuestionSection() {
  return (
    <section className="section section-paper" aria-labelledby="question-title">
      <div className="shell editorial-grid">
        <div className="section-number" aria-hidden="true">
          01
        </div>
        <div className="editorial-heading" data-reveal>
          <p className="eyebrow">{copy.productName}</p>
          <h2 id="question-title">{copy.questionTitle}</h2>
        </div>
        <div className="long-copy" data-reveal>
          {copy.questionParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogicSection() {
  return (
    <section className="section section-ink" aria-labelledby="logic-title">
      <div className="shell logic-grid">
        <div data-reveal>
          <p className="eyebrow eyebrow-gold">{copy.logicKicker}</p>
          <h2 id="logic-title">{copy.logicTitle}</h2>
          <p className="logic-intro">{copy.logicIntro}</p>
        </div>
        <div className="logic-card" data-reveal>
          <Globe2 aria-hidden="true" size={28} />
          <p>{copy.logicStatement}</p>
        </div>
        <p className="logic-caveat" data-reveal>
          {copy.logicCaveat}
        </p>
      </div>
    </section>
  );
}

function RouteSection() {
  return (
    <section className="section section-route" id="rota" aria-labelledby="route-title">
      <div className="shell">
        <div className="section-heading centered" data-reveal>
          <p className="eyebrow">{copy.productName}</p>
          <h2 id="route-title">{copy.routeTitle}</h2>
        </div>
        <ol className="route-list" data-reveal>
          {copy.routeSteps.map((step, index) => {
            const Icon = routeIcons[index];
            return (
              <li key={step} className="route-step">
                <div className="route-marker">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <span className="route-index">0{index + 1}</span>
                <p>{step}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function HoursAndResult() {
  return (
    <section className="section section-white" aria-labelledby="hours-title">
      <div className="shell hours-grid">
        <div>
          <div className="section-heading" data-reveal>
            <p className="eyebrow">{copy.productName}</p>
            <h2 id="hours-title">{copy.twoHoursTitle}</h2>
          </div>
          <ul className="check-list" data-reveal>
            {copy.twoHoursItems.map((item) => (
              <li key={item}>
                <CircleCheckBig aria-hidden="true" size={21} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="result-card" data-reveal>
          <ClipboardCheck aria-hidden="true" size={34} />
          <h3>{copy.resultTitle}</h3>
          <p>{copy.resultText}</p>
        </aside>
      </div>
    </section>
  );
}

function ContextSection() {
  return (
    <section className="section section-context" aria-labelledby="now-title">
      <div className="shell context-grid">
        <div className="context-orbit" aria-hidden="true" data-reveal>
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="orbit-core">
            <Stethoscope size={38} />
          </span>
        </div>
        <div data-reveal>
          <p className="eyebrow">{copy.productName}</p>
          <h2 id="now-title">{copy.nowTitle}</h2>
          <p className="context-text">{copy.nowText}</p>
          <p className="source">{copy.nowSource}</p>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="section section-audience" aria-label="Público do workshop">
      <div className="shell audience-grid">
        <article className="audience-card audience-card-yes" data-reveal>
          <div className="audience-icon">
            <Check aria-hidden="true" size={25} />
          </div>
          <h2>{copy.forTitle}</h2>
          <ul>
            {copy.forItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="audience-card audience-card-no" data-reveal>
          <div className="audience-icon">
            <X aria-hidden="true" size={25} />
          </div>
          <h2>{copy.notForTitle}</h2>
          <ul>
            {copy.notForItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

function AuthoritySection() {
  return (
    <section className="section section-authority" aria-labelledby="authority-title">
      <div className="shell authority-grid">
        <div className="authority-image" data-reveal>
          <img
            src="/geceli-vivan.webp"
            alt="Geceli Vivan"
            width="900"
            height="1200"
            loading="lazy"
          />
          <div className="authority-badge">
            <ShieldCheck aria-hidden="true" size={25} />
            <span>10+</span>
          </div>
        </div>
        <div data-reveal>
          <p className="eyebrow">EM PORTUGAL CONSULTORIA</p>
          <h2 id="authority-title">{copy.authorityTitle}</h2>
          <p className="authority-text">{copy.authorityText}</p>
          <p className="source">{copy.authoritySource}</p>
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="section section-offer" id="investimento" aria-labelledby="receive-title">
      <div className="shell offer-grid">
        <div data-reveal>
          <p className="eyebrow eyebrow-gold">{copy.productName}</p>
          <h2 id="receive-title">{copy.receiveTitle}</h2>
          <ul className="offer-list">
            {copy.receiveItems.map((item) => (
              <li key={item}>
                <BookOpenCheck aria-hidden="true" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="price-panel" data-reveal>
          <p className="price-label">{copy.investmentLabel}</p>
          <p className="price-value">{copy.investmentValue}</p>
          <Cta label={copy.midCta} className="cta-light" />
        </aside>
      </div>

      <div className="shell lots" data-reveal aria-label="Lotes do workshop">
        {copy.lots.map((lot, index) => (
          <article className={`lot-card ${index === 1 ? "lot-current" : ""}`} key={lot.name}>
            <p>{lot.state}</p>
            <h3>{lot.name}</h3>
            <strong>{lot.value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function ObjectionsSection() {
  return (
    <section className="section section-objections" aria-labelledby="objections-title">
      <div className="shell">
        <div className="section-heading centered" data-reveal>
          <p className="eyebrow">{copy.productName}</p>
          <h2 id="objections-title">{copy.objectionsTitle}</h2>
        </div>
        <div className="objections-grid">
          {copy.objections.map((item, index) => (
            <article className="objection-card" data-reveal key={item.question}>
              <span>0{index + 1}</span>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="section section-faq" aria-labelledby="faq-title">
      <div className="shell faq-grid">
        <div className="faq-heading" data-reveal>
          <p className="eyebrow">{copy.productName}</p>
          <h2 id="faq-title">{copy.faqTitle}</h2>
        </div>
        <div className="faq-list" data-reveal>
          {copy.faq.map((item) => (
            <details key={item.question}>
              <summary>
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" size={20} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalSection() {
  return (
    <>
      <section className="important shell" data-reveal aria-label={copy.importantLabel}>
        <ShieldCheck aria-hidden="true" size={26} />
        <div>
          <p>{copy.importantLabel}</p>
          <span>{copy.importantText}</span>
        </div>
      </section>

      <section className="final" aria-label={copy.productName}>
        <div className="shell final-inner" data-reveal>
          <Compass aria-hidden="true" size={38} />
          <p>{copy.finalText}</p>
          <span>{copy.finalOffer}</span>
          <Cta label={copy.finalCta} className="cta-light" />
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <Brand />
        <div className="footer-links">
          <a
            href="https://www.instagram.com/emportugalconsultoria/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da Em Portugal Consultoria"
          >
            <Camera aria-hidden="true" size={20} />
          </a>
          <a
            href="https://emportugalconsultoria.com.br/"
            target="_blank"
            rel="noreferrer"
            aria-label="Site da Em Portugal Consultoria"
          >
            <ExternalLink aria-hidden="true" size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function SalesPage({ hero }: { hero: HeroVariant }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Ir para o conteúdo
      </a>
      <Hero hero={hero} />
      <main id="main-content">
        <QuestionSection />
        <LogicSection />
        <RouteSection />
        <HoursAndResult />
        <ContextSection />
        <AudienceSection />
        <AuthoritySection />
        <OfferSection />
        <ObjectionsSection />
        <FaqSection />
        <FinalSection />
      </main>
      <Footer />
    </>
  );
}

function ThankYouPage() {
  return (
    <main className="thanks-page">
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
    </main>
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
