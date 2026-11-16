"use client";

import { useState } from "react";
import styles from "./ChiefStoneHero.module.css";

/** Drop-in hero for Next.js. Replace logo markup with your existing logo component if desired. */
export default function ChiefStoneHero({ onConsultationClick, onMenuClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((open) => !open);
    onMenuClick?.();
  };
  return (
    <section className={styles.hero} aria-label="Chief Stone Construction introduction">
      <video className={styles.video} autoPlay muted loop playsInline preload="metadata" poster="/videos/chief-stone-poster.jpg" aria-hidden="true">
        <source src="/videos/chief-stone-hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.shade} aria-hidden="true" />
      <header className={styles.header}>
        <a href="/" className={styles.brand} aria-label="Chief Stone Construction home">
          <span className={styles.mark}>S</span><span className={styles.brandRule} />
          <span className={styles.brandText}><strong>CHIEF STONE</strong><small>— CONSTRUCTION —</small></span>
        </a>
        <button type="button" className={styles.menu} aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={toggleMenu}>
          <span /><span /><span />
        </button>
      </header>
      <div className={styles.content}>
        <span className={styles.accent} />
        <h1 className={styles.heading}>BUILD<br /><span>&amp; SERVE</span></h1>
        <p className={styles.tagline}>Built with purpose. Driven by service.</p>
        <a href="/contact" className={styles.cta} onClick={onConsultationClick}>LET’S BUILD TOGETHER</a>
      </div>
      {menuOpen && !onMenuClick && (
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="/">Home</a><a href="/services">Services</a><a href="/projects">Projects</a><a href="/about">About</a><a href="/contact">Contact</a>
        </nav>
      )}
    </section>
  );
}
