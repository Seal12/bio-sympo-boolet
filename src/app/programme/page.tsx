import type { Metadata } from "next";
import { ProgrammeTimeline } from "@/components/ProgrammeTimeline";

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
      </header>
      <ProgrammeTimeline />
    </div>
  );
}
