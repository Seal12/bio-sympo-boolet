import type { Metadata } from "next";
import Image from "next/image";
import { cityGuide } from "@/content/cityGuide";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "City Guide",
};

export default function CityGuidePage() {
  return (
    <div className="page">
      <section className={styles.hero}>
        <Image
          src={cityGuide.heroImage}
          alt="Donkin Reserve lighthouse, Gqeberha"
          fill
          className={styles.heroImg}
          sizes="100vw"
          priority
        />
        <div className={styles.heroVeil} />
        <div className={`container ${styles.heroText}`}>
          <p className="eyebrow" style={{ color: "#5cc8d6" }}>
            Travel
          </p>
          <h1>{cityGuide.title}</h1>
          <p>{cityGuide.subtitle}</p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: "2.5rem", paddingBottom: "4rem" }}>
        <p className={styles.intro}>{cityGuide.intro}</p>

        <div className={styles.split}>
          <section>
            <h2>Local highlights & attractions</h2>
            <div className={styles.list}>
              {cityGuide.highlights.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>
          <Image
            src={cityGuide.secondaryImage}
            alt="Gqeberha beachfront"
            width={800}
            height={520}
            className={styles.sideImage}
          />
        </div>

        <section className={styles.culinary}>
          <h2>Culinary recommendations</h2>
          <div className={styles.culinaryGrid}>
            {cityGuide.culinary.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
