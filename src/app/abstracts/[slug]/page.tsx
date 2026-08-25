import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { abstracts, getAbstract, sessionLabels } from "@/content/abstracts";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return abstracts.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getAbstract(slug);
  return { title: item?.title ?? "Abstract" };
}

export default async function AbstractDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getAbstract(slug);
  if (!item) notFound();

  return (
    <div className="container page">
      <p className={styles.back}>
        <Link href="/abstracts/">← All abstracts</Link>
      </p>
      <header className="pageHeader">
        <p className="eyebrow">{sessionLabels[item.session]}</p>
        <h1>{item.title}</h1>
        <p>{item.authors}</p>
      </header>
      {item.affiliations ? (
        <p className={styles.affil}>{item.affiliations}</p>
      ) : null}
      {item.email ? <p className={styles.email}>{item.email}</p> : null}
      <article className={styles.body}>
        {item.body.split("\n\n").map((para) => (
          <p key={para.slice(0, 40)}>{para}</p>
        ))}
      </article>
      {item.keywords.length > 0 ? (
        <p className={styles.keywords}>
          <strong>Keywords:</strong> {item.keywords.join("; ")}
        </p>
      ) : null}
    </div>
  );
}
