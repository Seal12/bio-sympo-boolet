import Link from "next/link";
import Image from "next/image";
import { logos } from "@/content/logos";
import { site } from "@/content/site";
import styles from "./Hero.module.css";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function Hero() {
  const { hero } = site;

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <Image
          src={logos.symposiumMedallion}
          alt={logos.alt}
          width={420}
          height={420}
          priority
          className={styles.medallion}
        />

        <div className={styles.text}>
          <span className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            {hero.eyebrow}
          </span>

          <h1>
            {hero.headline}{" "}
            <span className={styles.highlight}>{hero.headlineHighlight}</span>
          </h1>

          <p className={styles.lede}>{hero.lede}</p>

          <div className={styles.meta}>
            <span className={styles.pill}>
              <CalendarIcon />
              {site.dateLabel}
            </span>
            <span className={`${styles.pill} ${styles.pillCyan}`}>
              <PinIcon />
              {site.venueShort}
            </span>
            <span className={styles.pill}>
              <GlobeIcon />
              {hero.hybridLabel}
            </span>
          </div>

          <div className={styles.cta}>
            <Link href="/programme/" className="btn btnBlue">
              View programme
            </Link>
            <Link href="/abstracts/" className="btn btnOrange">
              Browse abstracts
            </Link>
            <Link href="/welcome/" className="btn btnGhostLight">
              Read welcome
            </Link>
            <span className={styles.hashtag}>{hero.hashtag}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
