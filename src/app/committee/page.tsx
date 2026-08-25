import type { Metadata } from "next";
import { committee } from "@/content/committee";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Committee",
};

export default function CommitteePage() {
  return (
    <div className="container page">
      <header className="pageHeader">
        <p className="eyebrow">Team</p>
        <h1>Meet the organising committee</h1>
        <p>
          Student leaders from SASBi and SAGS coordinating programme, outreach,
          finance, design, and media for BIO2026.
        </p>
      </header>
      <div className={styles.grid}>
        {committee.map((member) => (
          <article key={member.name} className={styles.card}>
            <div className={styles.avatar} aria-hidden="true">
              {member.initials}
            </div>
            <div>
              <h2>{member.name}</h2>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.detail}>{member.detail}</p>
              <p className={styles.affil}>{member.affiliation}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
