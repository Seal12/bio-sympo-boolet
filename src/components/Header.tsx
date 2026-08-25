"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/content/site";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Image
            src="/assets/logos/bio26-mark.svg"
            alt="BIO 2026"
            width={140}
            height={32}
            priority
          />
          <span className={styles.brandText}>
            <strong>SASBi | SAGS</strong>
            <span>Student Symposium</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.srOnly}>Menu</span>
          <span className={styles.burger} data-open={open} />
        </button>

        <nav id="site-nav" className={styles.nav} data-open={open}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.link}
              data-active={isActive(item.href)}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className={styles.meta}>
        {site.dateLabel} · {site.venueShort}
      </p>
    </header>
  );
}
