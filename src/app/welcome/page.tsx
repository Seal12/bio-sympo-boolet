import type { Metadata } from "next";
import { welcome } from "@/content/welcome";

export const metadata: Metadata = {
  title: "Welcome",
};

export default function WelcomePage() {
  return (
    <div className="container page">
      <header className="pageHeader">
        <p className="eyebrow">Organising committee</p>
        <h1>{welcome.title}</h1>
      </header>
      <article style={{ maxWidth: "42rem" }}>
        <p>
          <em>{welcome.greeting}</em>
        </p>
        {welcome.paragraphs.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
        <p>{welcome.signOff}</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "1.5rem 0 0" }}>
          {welcome.chairs.map((c) => (
            <li key={c.name} style={{ marginBottom: "1rem" }}>
              <strong>{c.name}</strong>
              <br />
              <span style={{ color: "var(--muted)" }}>{c.role}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
