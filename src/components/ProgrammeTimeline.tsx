import { programme, programmeMeta, type ProgrammeBlock } from "@/content/programme";
import styles from "./ProgrammeTimeline.module.css";

function SingleBlock({ block }: { block: Extract<ProgrammeBlock, { kind: "single" }> }) {
  return (
    <article className={styles.item}>
      <time className={styles.time}>{block.time}</time>
      <div>
        <h3 className={styles.title}>{block.title}</h3>
        {block.detail ? <p className={styles.detail}>{block.detail}</p> : null}
        {block.venue ? <p className={styles.meta}>Venue: {block.venue}</p> : null}
        {block.link ? <p className={styles.meta}>{block.link}</p> : null}
      </div>
    </article>
  );
}

function ParallelBlock({ block }: { block: Extract<ProgrammeBlock, { kind: "parallel" }> }) {
  return (
    <article className={styles.item}>
      <time className={styles.time}>{block.time}</time>
      <div>
        <h3 className={styles.title}>{block.title}</h3>
        <div className={styles.tracks}>
          {block.tracks.map((track) => (
            <div key={track.id} className={styles.track}>
              <h4>{track.label}</h4>
              <p className={styles.focus}>{track.focus}</p>
              <p className={styles.meta}>
                Facilitator: {track.facilitator}
                {track.coFacilitator !== "—" ? ` · Co-facilitator: ${track.coFacilitator}` : ""}
              </p>
              <p className={styles.meta}>Venue: {track.venue}</p>
              {track.talks.length > 0 ? (
                <ul className={styles.talks}>
                  {track.talks.map((talk) => (
                    <li key={`${track.id}-${talk.time}-${talk.title}`}>
                      <span className={styles.slot}>{talk.time}</span>
                      <span>
                        {talk.title}
                        {talk.presenter ? ` — ${talk.presenter}` : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function FlashBlock({ block }: { block: Extract<ProgrammeBlock, { kind: "flash" }> }) {
  return (
    <article className={styles.item}>
      <time className={styles.time}>{block.time}</time>
      <div>
        <h3 className={styles.title}>{block.title}</h3>
        <p className={styles.detail}>{block.chairs}</p>
        <ul className={styles.talks}>
          {block.talks.map((talk) => (
            <li key={`${talk.time}-${talk.title}`}>
              <span className={styles.slot}>{talk.time}</span>
              <span>
                {talk.title}
                {talk.presenter ? ` — ${talk.presenter}` : ""}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ProgrammeTimeline() {
  return (
    <div className={styles.wrap}>
      <p className={styles.day}>
        {programmeMeta.dayLabel}
        <br />
        <span>{programmeMeta.theme}</span>
      </p>
      <div className={styles.timeline}>
        {programme.map((block, i) => {
          if (block.kind === "single") return <SingleBlock key={i} block={block} />;
          if (block.kind === "parallel") return <ParallelBlock key={i} block={block} />;
          return <FlashBlock key={i} block={block} />;
        })}
      </div>
    </div>
  );
}
