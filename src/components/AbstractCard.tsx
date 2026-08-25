import Link from "next/link";
import type { Abstract } from "@/content/abstracts";
import { sessionLabels } from "@/content/abstracts";
import styles from "./AbstractCard.module.css";

export function AbstractCard({ item }: { item: Abstract }) {
  return (
    <Link href={`/abstracts/${item.slug}/`} className={styles.card}>
      <p className={styles.session}>{sessionLabels[item.session]}</p>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.authors}>{item.authors}</p>
    </Link>
  );
}
