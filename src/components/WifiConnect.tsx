"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { buildWifiQrPayload } from "@/lib/wifi-qr";
import styles from "./WifiConnect.module.css";
import venueStyles from "@/app/venue/page.module.css";

type CopyField = "network" | "password";

type WifiConnectProps = {
  network: string;
  networkHint: string;
  password: string;
};

const COPY_RESET_MS = 2000;

export function WifiConnect({ network, networkHint, password }: WifiConnectProps) {
  const [copiedField, setCopiedField] = useState<CopyField | null>(null);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearResetTimer = useCallback(() => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  }, []);

  useEffect(() => clearResetTimer, [clearResetTimer]);

  const copyValue = useCallback(
    async (field: CopyField, value: string) => {
      try {
        await navigator.clipboard.writeText(value);
        clearResetTimer();
        setCopiedField(field);
        resetTimerRef.current = setTimeout(() => {
          setCopiedField(null);
          resetTimerRef.current = null;
        }, COPY_RESET_MS);
      } catch {
        setCopiedField(null);
      }
    },
    [clearResetTimer],
  );

  const qrPayload = buildWifiQrPayload(network, password);

  return (
    <dl className={venueStyles.dl}>
      <div>
        <dt>Wi‑Fi network</dt>
        <dd className={styles.row}>
          <p className={styles.value}>
            {network} ({networkHint})
          </p>
          <button
            type="button"
            className={`${styles.copyBtn}${copiedField === "network" ? ` ${styles.copied}` : ""}`}
            aria-label="Copy Wi‑Fi network"
            onClick={() => copyValue("network", network)}
          >
            {copiedField === "network" ? "Copied" : "Copy"}
          </button>
        </dd>
      </div>
      <div>
        <dt>Wi‑Fi password</dt>
        <dd className={styles.row}>
          <p className={styles.value}>{password}</p>
          <button
            type="button"
            className={`${styles.copyBtn}${copiedField === "password" ? ` ${styles.copied}` : ""}`}
            aria-label="Copy Wi‑Fi password"
            onClick={() => copyValue("password", password)}
          >
            {copiedField === "password" ? "Copied" : "Copy"}
          </button>
        </dd>
      </div>
      <figure className={styles.qrBlock}>
        <div className={styles.qrFrame}>
          <QRCode
            value={qrPayload}
            size={168}
            bgColor="#ffffff"
            fgColor="#142a5c"
            role="img"
            aria-label="QR code to join guest Wi‑Fi"
          />
        </div>
        <figcaption className={styles.qrCaption}>Scan to join Wi‑Fi</figcaption>
      </figure>
    </dl>
  );
}
