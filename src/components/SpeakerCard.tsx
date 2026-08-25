import Image from "next/image";
import type { Speaker } from "@/content/speakers";
import styles from "./SpeakerCard.module.css";

const roleLabel: Record<Speaker["role"], string> = {
  "keynote-opening": "Opening keynote",
  "keynote-closing": "Closing keynote",
  panelist: "Panel speaker",
};

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <article className={styles.card}>
      <div className={styles.photoWrap}>
        <Image
          src={speaker.image}
          alt={speaker.name}
          width={480}
          height={560}
          className={styles.photo}
        />
      </div>
      <div className={styles.body}>
        <p className={styles.role}>{roleLabel[speaker.role]}</p>
        <h3 className={styles.name}>{speaker.name}</h3>
        <p className={styles.title}>{speaker.title}</p>
        {speaker.talkTitle ? (
          <p className={styles.talk}>
            <strong>Talk:</strong> {speaker.talkTitle}
          </p>
        ) : null}
        <p className={styles.bio}>{speaker.bio}</p>
      </div>
    </article>
  );
}
