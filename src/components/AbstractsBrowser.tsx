"use client";

import { useMemo, useState } from "react";
import { AbstractCard } from "@/components/AbstractCard";
import {
  abstracts,
  sessionLabels,
  type AbstractSession,
} from "@/content/abstracts";
import styles from "./AbstractsBrowser.module.css";

const filters: Array<"all" | AbstractSession> = [
  "all",
  "1A",
  "1B",
  "2A",
  "2B",
  "flash",
];

export function AbstractsBrowser() {
  const [query, setQuery] = useState("");
  const [session, setSession] = useState<"all" | AbstractSession>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return abstracts.filter((a) => {
      if (session !== "all" && a.session !== session) return false;
      if (!q) return true;
      const hay = `${a.title} ${a.authors} ${a.keywords.join(" ")}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query, session]);

  return (
    <div>
      <div className={styles.controls}>
        <label className={styles.search}>
          <span className="srOnly">Search abstracts</span>
          <input
            type="search"
            placeholder="Search title, author, keyword…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <div className={styles.filters} role="group" aria-label="Filter by session">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={styles.chip}
              data-active={session === f}
              onClick={() => setSession(f)}
            >
              {f === "all" ? "All" : sessionLabels[f].split("—")[0].trim()}
            </button>
          ))}
        </div>
      </div>
      <p className={styles.count}>
        Showing {filtered.length} of {abstracts.length} abstracts
      </p>
      <div className={styles.list}>
        {filtered.map((item) => (
          <AbstractCard key={item.slug} item={item} />
        ))}
        {filtered.length === 0 ? (
          <p className={styles.empty}>No abstracts match your filters.</p>
        ) : null}
      </div>
    </div>
  );
}
