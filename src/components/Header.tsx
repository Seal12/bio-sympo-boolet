"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logos } from "@/content/logos";
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
            src={logos.medallionWhite}
            alt={logos.alt}
            width={48}
            height={48}
            priority
            className={styles.brandLogo}
          />
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
