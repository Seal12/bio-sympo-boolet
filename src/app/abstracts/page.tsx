import type { Metadata } from "next";
import { AbstractsBrowser } from "@/components/AbstractsBrowser";

export const metadata: Metadata = {
  title: "Abstracts",
};

export default function AbstractsPage() {
  return (
    <div className="container page">
      <header className="pageHeader">
        <p className="eyebrow">Presentations</p>
        <h1>Abstracts</h1>
        <p>Browse oral and flash-talk abstracts by session track.</p>
      </header>
      <AbstractsBrowser />
    </div>
  );
}
