import type { Metadata } from "next";
import { ProgrammeTimeline } from "@/components/ProgrammeTimeline";
import { site } from "@/content/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Programme",
};

export default function ProgrammePage() {
  return (
    <div className="container page">
      <header className="pageHeader">
        <p className="eyebrow">Monday schedule</p>
        <h1>Programme</h1>
        <p>
          Parallel oral sessions, a panel on inclusive bioinformatics, flash talks,
          keynotes, prize giving, and society AGMs.
        </p>
        <p>
          <a href={asset(site.pdfPath)} className="btn btnPrimary" download>
            Download programme booklet (PDF)
          </a>
        </p>
      </header>
      <ProgrammeTimeline />
    </div>
  );
}
