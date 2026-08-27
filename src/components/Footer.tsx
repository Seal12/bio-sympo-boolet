import Image from "next/image";
import Link from "next/link";
import { logos } from "@/content/logos";
import { site } from "@/content/site";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <Image
            src={logos.wordmarkWhite}
            alt={logos.alt}
            width={200}
            height={200}
            className={styles.footerLogo}
          />
          <p className={styles.copy}>
            {site.name}
            <br />
            {site.dateLabel} · {site.venueShort}
          </p>
        </div>
        <div>
          <p className={styles.label}>Connect</p>
          <ul className={styles.list}>
            <li>LinkedIn: {site.socials.linkedin}</li>
            <li>Instagram: {site.socials.instagram}</li>
            <li>BlueSky: {site.socials.bluesky}</li>
          </ul>
        </div>
        <div>
          <p className={styles.label}>Hashtags</p>
          <p className={styles.tags}>{site.hashtags.join(" ")}</p>
          <p className={styles.links}>
            <Link href="/programme/">Programme</Link>
            {" · "}
            <Link href="/abstracts/">Abstracts</Link>
            {" · "}
            <Link href="/city-guide/">City guide</Link>
          </p>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>Organised by {site.organisers.join(" & ")}.</p>
      </div>
    </footer>
  );
}
