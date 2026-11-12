// @polsia:user-owned — ShelfSignal public landing page.
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteDescription, siteName } from '@/lib/brand';

const contactEmail = 'shelfsignal-hvc6le@polsia.app';

export const metadata: Metadata = {
  title: { absolute: `${siteName} — Fewer stock surprises for independent shops in Mongolia` },
  description: siteDescription,
  alternates: { canonical: '/' },
};

function ShelfMark() {
  return (
    <svg aria-hidden="true" className="shelf-mark" viewBox="0 0 32 32" fill="none">
      <path d="M5 23.5h22M7 17h18M9 10.5h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
      <circle cx="24.5" cy="8" r="3.5" fill="currentColor" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="shelf-page" id="top">
      <header className="shelf-header">
        <a className="shelf-brand" href="#top" aria-label="ShelfSignal home">
          <ShelfMark />
          <span>ShelfSignal</span>
        </a>
        <nav className="shelf-nav" aria-label="Page navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#what-it-watches">What it watches</a>
          <a href="#in-development">Development status</a>
        </nav>
        <Button asChild className="shelf-button shelf-button-small">
          <Link href={`mailto:${contactEmail}?subject=ShelfSignal%20enquiry`}>Get in touch</Link>
        </Button>
      </header>

      <main>
        <section className="shelf-hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-rule" />Inventory operations for Mongolia’s independent shops</p>
            <h1 id="hero-title">Fewer stock surprises for independent shops in Mongolia.</h1>
            <p className="hero-description">
              ShelfSignal is an AI operations service in development, designed to watch stock and sales,
              prepare routine supplier reorders around each shop’s rules, and bring shortages or unusual
              changes to the owner’s attention.
            </p>
            <div className="hero-actions">
              <Button asChild className="shelf-button">
                <Link href={`mailto:${contactEmail}?subject=Ask%20about%20ShelfSignal`}>Ask about ShelfSignal</Link>
              </Button>
              <a className="text-link" href="#how-it-works">See the planned workflow <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-note">First version planned around CSV imports. Live POS sync is not available.</p>
          </div>

          <figure className="hero-visual">
            <img
              src="https://cdn.polsia.com/generated-media/company_1036168/bd32055e-50e6-4158-826d-c4ced3c25a2b.png"
              alt="Illustrative view of an independent shop with shelves of everyday groceries."
              fetchPriority="high"
            />
            <figcaption className="photo-caption">
              <span>Illustrative shop scene</span>
              <span>Built for Mongolia</span>
            </figcaption>
            <div className="signal-preview" aria-label="Illustrative example, not live ShelfSignal data">
              <div className="preview-heading">
                <span className="preview-label">Illustrative signals</span>
                <span className="preview-state">Concept only</span>
              </div>
              <div className="signal-row">
                <span className="signal-dot" aria-hidden="true" />
                <span><strong>Item below reorder point</strong><small>Example shop rule</small></span>
              </div>
              <div className="signal-row">
                <span className="signal-dot signal-dot-hollow" aria-hidden="true" />
                <span><strong>Sales pattern changed</strong><small>Example owner alert</small></span>
              </div>
            </div>
          </figure>
        </section>

        <section className="workflow-section" id="how-it-works" aria-labelledby="workflow-title">
          <div className="section-intro">
            <p className="eyebrow"><span className="eyebrow-rule" />A practical starting point</p>
            <h2 id="workflow-title">A clearer routine for stock follow-up.</h2>
            <p className="serif-copy">The first version is planned to start with the records a shop can export today, then make the next action easier to see.</p>
          </div>
          <div className="workflow-list">
            <article className="workflow-step">
              <span className="step-number">01</span>
              <div>
                <h3>Bring stock and sales together</h3>
                <p>Import a CSV, map its columns, and preview the records before they enter the shop workspace.</p>
              </div>
              <span className="step-side">CSV import</span>
            </article>
            <article className="workflow-step">
              <span className="step-number">02</span>
              <div>
                <h3>Set the shop’s reorder rules</h3>
                <p>Choose a stock threshold, a reorder quantity, and the supplier email for each product.</p>
              </div>
              <span className="step-side">Owner-defined</span>
            </article>
            <article className="workflow-step">
              <span className="step-number">03</span>
              <div>
                <h3>Review the signals that need attention</h3>
                <p>See shortages and unusual changes against recent history in one focused stock dashboard.</p>
              </div>
              <span className="step-side">Shortages · changes</span>
            </article>
          </div>
        </section>

        <section className="watch-section" id="what-it-watches" aria-labelledby="watch-title">
          <div className="watch-heading">
            <p className="eyebrow"><span className="eyebrow-rule" />What ShelfSignal is being built to notice</p>
            <h2 id="watch-title">A quiet watch over the details that keep shelves moving.</h2>
          </div>
          <div className="watch-grid">
            <article className="watch-item">
              <span className="watch-index">01 / STOCK</span>
              <h3>Items below your threshold</h3>
              <p>Set the level that matters for each product and see which items have fallen beneath it.</p>
            </article>
            <article className="watch-item">
              <span className="watch-index">02 / SALES</span>
              <h3>Changes from recent patterns</h3>
              <p>Bring unusual movement to the surface so an owner can take a closer look.</p>
            </article>
            <article className="watch-item">
              <span className="watch-index">03 / REORDERS</span>
              <h3>Routine supplier follow-up</h3>
              <p>Keep reorder quantities and supplier details with each shop’s own product rules.</p>
            </article>
          </div>
        </section>

        <section className="status-section" id="in-development" aria-labelledby="status-title">
          <div className="status-title-block">
            <p className="eyebrow"><span className="eyebrow-rule" />Where the work stands</p>
            <h2 id="status-title">Designed for shop routines. Still in development.</h2>
          </div>
          <div className="status-copy">
            <p>ShelfSignal is being built for independent shops in Mongolia. The proposed first release focuses on owner access, CSV stock-and-sales imports, per-product reorder rules, and a dashboard for shortages and unusual changes.</p>
            <p>Live POS connections are not available. Automatic supplier emails and owner email alerts are planned for a later phase, after the first shop workflow is in place.</p>
            <a className="text-link" href={`mailto:${contactEmail}?subject=ShelfSignal%20shop%20workflow`}>Tell us how your shop handles reorders <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow"><span className="eyebrow-rule" />Start with the way you work</p>
            <h2 id="contact-title">What does a stock surprise look like in your shop?</h2>
            <p>Share how you track stock and follow up with suppliers. It will help shape a service around real shop routines.</p>
          </div>
          <Button asChild className="shelf-button shelf-button-light">
            <Link href={`mailto:${contactEmail}?subject=Stock%20and%20supplier%20routines`}>Email ShelfSignal</Link>
          </Button>
        </section>
      </main>

      <footer className="shelf-footer">
        <a className="shelf-brand footer-brand" href="#top"><ShelfMark /><span>ShelfSignal</span></a>
        <span>Fewer stock surprises for independent shops in Mongolia.</span>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </footer>
    </div>
  );
}
