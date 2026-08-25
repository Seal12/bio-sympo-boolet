import type { Metadata } from "next";
import Image from "next/image";
import { sponsors } from "@/content/sponsors";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sponsors",
};

export default function SponsorsPage() {
  return (
    <div className="container page">
      <header className="pageHeader">
        <p className="eyebrow">Partnership</p>
        <h1>Thank you to our sponsors</h1>
        <p>
          We gratefully acknowledge the organisations supporting BIO2026 and
          student research capacity in bioinformatics and genetics.
        </p>
      </header>
      <div className={styles.grid}>
        {sponsors.map((sponsor) => (
          <figure key={sponsor.name} className={styles.card}>
            <div className={styles.logoWrap}>
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={420}
                height={160}
                className={styles.logo}
              />
            </div>
            <figcaption>{sponsor.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
