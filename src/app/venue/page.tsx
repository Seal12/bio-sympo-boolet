import type { Metadata } from "next";
import Image from "next/image";
import { venue } from "@/content/venue";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Venue",
};

export default function VenuePage() {
  return (
    <div className="container page">
      <header className="pageHeader">
        <p className="eyebrow">Getting there</p>
        <h1>{venue.title}</h1>
        <p>{venue.description}</p>
      </header>

      <div className={styles.grid}>
        <section className={styles.panel}>
          <h2>Campus</h2>
          <p>{site.venueFull}</p>
          <p className={styles.note}>{venue.parking}</p>
          <Image
            src={venue.mapImage}
            alt="Venue campus map"
            width={800}
            height={560}
            className={styles.map}
          />
        </section>

        <section className={styles.panel}>
          <h2>Connectivity & digital engagement</h2>
          <dl className={styles.dl}>
            <div>
              <dt>Wi‑Fi network</dt>
              <dd>{venue.wifi.network}</dd>
            </div>
            <div>
              <dt>Wi‑Fi password</dt>
              <dd>{venue.wifi.password}</dd>
            </div>
          </dl>
          <h3>Social</h3>
          <ul className={styles.list}>
            {venue.socials.map((s) => (
              <li key={s.label}>
                <strong>{s.label}:</strong> {s.value}
              </li>
            ))}
          </ul>
          <p className={styles.tags}>{venue.hashtags.join(" ")}</p>
        </section>

        <section className={styles.panel}>
          <h2>Emergency & health contacts</h2>
          <ul className={styles.list}>
            <li>
              <strong>On-site first aid:</strong> {venue.emergency.firstAid}
            </li>
            <li>
              <strong>Closest hospital:</strong> {venue.emergency.hospital}
            </li>
            <li>
              <strong>Police:</strong> {venue.emergency.police}
            </li>
            <li>
              <strong>Ambulance:</strong> {venue.emergency.ambulance}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
