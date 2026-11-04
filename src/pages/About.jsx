import { useEffect, useRef } from 'react';
import { site } from '../data/siteData';
import { settleScene, scene } from '../lib/videoDirector';
import { scrubBetween } from '../lib/videoScroll';
import { useReveal } from '../hooks/useReveal';
import gsap from 'gsap';
import './About.css';

// width/height explicit (rather than scale) so this interpolates cleanly
// against every other scene — same footprint as before (72vmin base scaled).
const ABOUT_SCENE = scene({ width: '93.6vmin', height: '93.6vmin', borderRadius: '8%', opacity: 0.42, filter: 'brightness(0.78) saturate(0.9) blur(0px)', xOffset: 30, yOffset: 4, vignette: 0.68 });
const ABOUT_BRIGHT = scene({ width: '83.52vmin', height: '83.52vmin', borderRadius: '6%', opacity: 0.58, filter: 'brightness(0.94) saturate(1) blur(0px)', xOffset: 26, yOffset: 0, vignette: 0.56 });

const CATEGORY_LABELS = {
  frontend: 'Frontend',
  backend: 'Backend',
  aiAutomation: 'AI & Automation',
  uiux: 'UI/UX',
  tools: 'Tools',
};

export default function About({ reducedMotion }) {
  const rootRef = useRef(null);
  const certsRef = useRef(null);

  useReveal(rootRef, [], reducedMotion);

  useEffect(() => {
    settleScene(ABOUT_SCENE, { duration: 1.2 });

    const ctx = gsap.context(() => {
      if (reducedMotion) return;
      scrubBetween(certsRef.current, ABOUT_SCENE, ABOUT_BRIGHT, { start: 'top bottom', end: 'top 55%' });
    }, rootRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  const bioParagraphs = site.bio.trim().split('\n').filter(Boolean);

  return (
    <div ref={rootRef} className="about">
      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__head">
            <span className="eyebrow reveal">About</span>
            <h1 className="about-story__title reveal">The Story</h1>
            <p className="about-story__subtitle mono reveal">{site.name}&apos;s Narrative</p>
          </div>
          <div className="about-story__body">
            <p className="about-story__lede reveal">I’m driven by curiosity and the process of turning ideas into something real. I enjoy exploring how technology works beneath the surface, solving problems, and constantly pushing myself to build something better than the last.</p>
            <div className="about-story__columns">
              <p className="reveal">My journey has taken me from designing interfaces and developing full-stack applications to exploring AI, automation, and intelligent systems. I learn primarily by building, experimenting, breaking things, and understanding how to make them work better.</p>
              <p className="reveal">For me, development isn't just about writing code — it's about <strong>learning, creating, and continuously improving.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-skills">
        <div className="container">
          <span className="eyebrow reveal">Skill set</span>
          <h2 className="about-skills__title reveal">What I work with</h2>
          <div className="about-skills__grid">
            {Object.entries(site.categorizedSkills).map(([key, items]) => (
              <div key={key} className="about-skills__group reveal">
                <h3 className="mono">{CATEGORY_LABELS[key] || key}</h3>
                <ul>
                  {items.map((s) => (
                    <li key={s.name}>
                      <span>{s.name}</span>
                      <span className="mono about-skills__level">{s.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-certs" ref={certsRef}>
        <div className="container">
          <span className="eyebrow reveal">Certifications</span>
          <h2 className="about-certs__title reveal">Verified learning</h2>
          <div className="about-certs__grid">
            {site.certificates.map((c) => (
              <a key={c.id} href={c.verifyLink} target="_blank" rel="noreferrer" className="about-cert reveal">
                <div className="about-cert__body">
                  <span className="mono about-cert__issuer">{c.issuer}</span>
                  <h3>{c.title}</h3>
                  <div className="about-cert__meta mono">
                    <span>{c.date}</span>
                    <span>{c.hours}</span>
                  </div>
                </div>
                <span className="about-cert__verify mono">Verify →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
