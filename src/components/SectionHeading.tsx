import styles from "./SectionHeading.module.css";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <header className={styles.wrap}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.desc}>{description}</p> : null}
    </header>
  );
}
