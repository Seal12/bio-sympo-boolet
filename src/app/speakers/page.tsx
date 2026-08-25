import type { Metadata } from "next";
import { SpeakerCard } from "@/components/SpeakerCard";
import { keynotes, panelists } from "@/content/speakers";

export const metadata: Metadata = {
  title: "Speakers",
};

export default function SpeakersPage() {
  return (
    <div className="container page">
      <header className="pageHeader">
        <p className="eyebrow">Meet the speakers</p>
        <h1>Keynotes & panel</h1>
        <p>
          Opening and closing keynotes plus the panel for “Building an inclusive
          and equitable bioinformatics ecosystem”.
        </p>
      </header>

      <section>
        <h2 style={{ marginBottom: "0.5rem" }}>Keynote speakers</h2>
        {keynotes.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Panel speakers</h2>
        {panelists.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </section>
    </div>
  );
}
