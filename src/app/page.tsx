import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";
import { keynotes } from "@/content/speakers";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className={`container ${styles.section}`}>
        <SectionHeading
          eyebrow="About the symposium"
          title={site.theme}
          description="A one-day student symposium bringing together emerging bioinformatics and genetics researchers across South Africa and the continent."
        />
        <div className={styles.highlights}>
          <article>
            <h3>When</h3>
            <p>{site.dateLabel}</p>
          </article>
          <article>
            <h3>Where</h3>
            <p>{site.venueFull}</p>
          </article>
          <article>
            <h3>Focus</h3>
            <p>{site.tagline}</p>
          </article>
        </div>
        <div className={styles.actions}>
          <Link href="/programme/" className="btn btnPrimary">
            Full programme
          </Link>
          <Link href="/abstracts/" className="btn btnOnLight">
            Browse abstracts
          </Link>
          <Link href="/venue/" className="btn btnOnLight">
            Venue & Wi‑Fi
          </Link>
        </div>
      </section>

      <section className={styles.keynoteBand}>
        <div className="container">
          <SectionHeading
            eyebrow="Keynotes"
            title="Voices shaping African bioinformatics"
            description="Opening and closing addresses from leaders advancing genomics capacity across the continent."
          />
          <div className={styles.keynoteGrid}>
            {keynotes.map((speaker) => (
              <article key={speaker.id} className={styles.keynoteCard}>
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={360}
                  height={420}
                  className={styles.keynotePhoto}
                />
                <div>
                  <h3>{speaker.name}</h3>
                  <p>{speaker.talkTitle}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/speakers/" className="btn btnOnLight">
            Meet all speakers
          </Link>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.split}>
          <div>
            <SectionHeading
              eyebrow="In Gqeberha"
              title="Ocean Sciences Campus"
              description="Join us at the Digital Dome for a full day of orals, flash talks, panels, and society AGMs."
            />
            <Link href="/city-guide/" className="btn btnPrimary">
              City guide
            </Link>
          </div>
          <Image
            src="/assets/city/donkin-lighthouse.png"
            alt="Donkin Reserve lighthouse in Gqeberha"
            width={800}
            height={520}
            className={styles.placeImage}
          />
        </div>
      </section>
    </>
  );
}
