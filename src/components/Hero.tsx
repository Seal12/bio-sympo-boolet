import Link from "next/link";
import Image from "next/image";
import { logos } from "@/content/logos";
import { site } from "@/content/site";
import { asset } from "@/lib/asset";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src={asset("/assets/hero/architecture.png")}
        alt=""
        fill
        priority
        className={styles.bg}
        sizes="100vw"
      />
      <div className={styles.veil} />
      <div className={`container ${styles.content}`}>
        <Image
          src={logos.wordmarkWhite}
          alt={logos.alt}
          width={520}
          height={520}
          priority
          className={styles.wordmark}
        />
        <p className={styles.tagline}>{site.tagline}</p>
        <p className={styles.meta}>
          {site.dateLabel}
          <span aria-hidden="true"> · </span>
          {site.venueShort}
        </p>
        <div className={styles.cta}>
          <Link href="/programme/" className="btn btnPrimary">
            View programme
          </Link>
          <Link href="/welcome/" className={`btn btnGhost`}>
            Read welcome
          </Link>
        </div>
      </div>
    </section>
  );
}
