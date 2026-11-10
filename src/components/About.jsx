import { about } from "../data.js";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";

export default function About() {
  return (
    <section id="about" className="alt">
      <div className="container">
        <SectionHead eyebrow="About me" title="Who am I?" subtitle="A little about my journey, passions and personality." />
        <div className="about-grid">
          <Reveal className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <h3 className="mini-title">Beyond the code</h3>
            <div className="chips">
              {about.hobbies.map((h) => (
                <span key={h} className="chip">
                  {h}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="about-stats" delay={120}>
            {about.stats.map((s) => (
              <div key={s.label} className="stat">
                <strong className="grad-text">{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
