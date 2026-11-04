import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { site, featuredProjects, allSkills, projects } from '../data/siteData';
import SkillsOrbit from '../components/SkillsOrbit';
import ProjectCard from '../components/ProjectCard';
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/icons';
import { settleScene, scene } from '../lib/videoDirector';
import { scrubBetween } from '../lib/videoScroll';
import { scrollToTarget } from '../lib/scrollController';
import { useReveal } from '../hooks/useReveal';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

// Every scene uses explicit width/height (rather than scale) so the whole
// chain — including the fullscreen hero — interpolates cleanly. Every
// scene apart from the hero keeps its previous effective footprint
// (72vmin base * old scale) unchanged.
const HERO_SCENE = scene({ width: '100vw', height: '100vh', borderRadius: '0%', opacity: 1, filter: 'brightness(1) saturate(1) blur(0px)', vignette: 0.5 });
const HUB_SCENE = scene({ width: '40.32vmin', height: '40.32vmin', borderRadius: '50%', opacity: 1, filter: 'brightness(1.08) saturate(1.12) blur(0px)', vignette: 0.3 });
const ABOUT_PREVIEW_SCENE = scene({ width: '93.6vmin', height: '93.6vmin', borderRadius: '8%', opacity: 0.42, filter: 'brightness(0.78) saturate(0.9) blur(0px)', xOffset: 30, yOffset: 4, vignette: 0.68 });
const SERVICES_SCENE = scene({ width: '24.48vmin', height: '24.48vmin', borderRadius: '50%', opacity: 0.5, filter: 'brightness(0.7) saturate(0.85) blur(0px)', xOffset: 40, yOffset: -36, vignette: 0.74 });
const PROJECTS_PREVIEW_SCENE = scene({ width: '51.84vmin', height: '51.84vmin', borderRadius: '50%', opacity: 0.26, filter: 'brightness(0.62) saturate(0.95) blur(26px)', xOffset: -46, yOffset: -42, vignette: 0.8 });
const CTA_SCENE = scene({ width: '75.6vmin', height: '75.6vmin', borderRadius: '3%', opacity: 1, filter: 'brightness(1.06) saturate(1.05) blur(0px)', vignette: 0.4 });
const CONTACT_SCENE = scene({ width: '82.8vmin', height: '82.8vmin', borderRadius: '3%', opacity: 1, filter: 'brightness(1.08) saturate(1.1) blur(0px)', xOffset: 34, vignette: 0.42 });

// Hero heading lines, derived from the real title string (split on its own
// existing "|" separator) — not hand-invented line breaks.
const heroTitleLines = site.title.split('|').map((s) => s.trim());

const heroLede = site.bio
  .split('\n')[0]
  .replace(/^Hi, I['’]m Aqsa Khan,\s*/, '')
  .trim();

const bioParagraphs = site.bio.trim().split('\n').filter(Boolean);
const closingLine = bioParagraphs[bioParagraphs.length - 1];

// Real, derived numbers only — nothing invented. These stay accurate
// automatically as projects/skills are added to siteData.js.
const heroStats = [
  { value: String(projects.length), label: 'Projects' },
  { value: String(projects.filter((p) => p.category?.includes('AI')).length), label: 'AI-integrated' },
  { value: String(allSkills.length), label: 'Technologies' },
];

const ICONS = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M8.5 7 3.5 12l5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  robot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="4.5" y="8.5" width="15" height="11" rx="2.4" />
      <path d="M12 8.5V5M9 5h6M8.5 13.5v2M15.5 13.5v2" strokeLinecap="round" />
      <circle cx="12" cy="3.2" r="1" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6M4.5 12v6c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-6" strokeLinecap="round" />
    </svg>
  ),
};

export default function Home({ reducedMotion }) {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const orbitalRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);
  const contactRef = useRef(null);

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  // Hero entry + type reveal — plays once on mount, independent of scroll.
  useEffect(() => {
    settleScene(HERO_SCENE, { duration: 1.1 });

    const ctx = gsap.context(() => {
      const maskEls = heroRef.current.querySelectorAll('.hero-mask-inner');
      const fadeEls = heroRef.current.querySelectorAll('.hero-fade');

      if (reducedMotion) {
        maskEls.forEach((el) => el.classList.add('is-visible'));
        gsap.set(fadeEls, { opacity: 1, y: 0 });
        return;
      }

      maskEls.forEach((el, i) => {
        gsap.delayedCall(0.2 + i * 0.1, () => el.classList.add('is-visible'));
      });
      gsap.fromTo(
        fadeEls,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.06, delay: 0.5 }
      );
    }, heroRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Scroll choreography — the video's journey through the rest of the
  // page. Each section boundary gets its own scroll-scrubbed crossfade
  // (naturally bidirectional: scroll up and the video morphs back), and
  // the orbital section holds with a brief pin so there's time to see
  // the skills ring before moving on. No forced one-shot reveals, no
  // section pinning/stacking beyond the orbital's own pause.
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (reducedMotion) return;

      ScrollTrigger.create({
        trigger: orbitalRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
      });

      scrubBetween(orbitalRef.current, HERO_SCENE, HUB_SCENE, { start: 'top bottom', end: 'top 45%' });
      scrubBetween(aboutRef.current, HUB_SCENE, ABOUT_PREVIEW_SCENE, { start: 'top bottom', end: 'top 55%' });
      scrubBetween(servicesRef.current, ABOUT_PREVIEW_SCENE, SERVICES_SCENE, { start: 'top bottom', end: 'top 55%' });
      scrubBetween(projectsRef.current, SERVICES_SCENE, PROJECTS_PREVIEW_SCENE, { start: 'top bottom', end: 'top 55%' });
      scrubBetween(ctaRef.current, PROJECTS_PREVIEW_SCENE, CTA_SCENE, { start: 'top bottom', end: 'top 45%' });
      scrubBetween(contactRef.current, CTA_SCENE, CONTACT_SCENE, { start: 'top bottom', end: 'top 45%' });

      // The orbital pin above inserts a pin-spacer that shifts every
      // section below it further down the document; refresh once so the
      // scrub triggers created here measure the final, pinned layout.
      requestAnimationFrame(() => ScrollTrigger.refresh(true));
    }, rootRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  // The generic fade-up reveal for section content, deliberately called
  // AFTER the effect above: its ScrollTrigger.batch measures element
  // positions once, on creation, and the orbital pin's spacer (set up in
  // that effect) shifts everything below it further down the document.
  // Created first, this hook would measure the pre-pin layout — exactly
  // the "stale trigger position" issue already tracked down twice
  // elsewhere in this build — and elements deep in the page (the Contact
  // section's own heading among them) would simply never reveal.
  useReveal(rootRef, [], reducedMotion);

  // Deep-link / nav support: "Contact" always resolves to this section.
  // Arriving at "/#contact" (from another page, or a fresh load) scrolls
  // here once the page — and the orbital pin's layout above — has settled.
  useEffect(() => {
    if (window.location.hash !== '#contact') return;
    const t = setTimeout(() => scrollToTarget('#contact', { offset: -40, duration: reducedMotion ? 0 : 1.4 }), 250);
    return () => clearTimeout(t);
  }, [reducedMotion]);

  const onFormChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onFormSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'website'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${site.social.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div ref={rootRef} className="home">
      <section className="home-hero" ref={heroRef}>
        <div className="container home-hero__inner">
          <span className="home-hero__name hero-fade">{site.name}</span>
          <h1 className="home-hero__title">
            {heroTitleLines.map((line, i) => (
              <span className="mask" key={i}>
                <span className="mask-inner hero-mask-inner">{line}</span>
              </span>
            ))}
          </h1>
          
          <div className="home-hero__stats hero-fade">
            {heroStats.map((s) => (
              <div key={s.label} className="home-hero__stat">
                <span className="home-hero__stat-value">{s.value}+</span>
                <span className="home-hero__stat-label mono">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="home-hero__actions hero-fade">
            <Link to="/projects" className="btn">View work</Link>
            <a
              href="/#contact"
              className="btn btn-ghost"
              onClick={(e) => { e.preventDefault(); scrollToTarget('#contact', { offset: -40 }); }}
            >
              Get in touch
            </a>
            <a
              href="/cv.pdf"
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV
            </a>
          </div>
        </div>
        <span className="home-hero__scroll mono hero-fade">SCROLL</span>
      </section>

      <section className="home-orbital" ref={orbitalRef}>
        <div className="container home-orbital__head">
          <span className="eyebrow">Capabilities</span>
          <h2 className="home-orbital__title">Skills &amp; technologies</h2>
        </div>
        <SkillsOrbit skills={allSkills} reducedMotion={reducedMotion} />
      </section>

      <section className="home-about section" ref={aboutRef}>
        <div className="container home-about__inner">
          <span className="eyebrow reveal">About</span>
          <h2 className="home-about__title reveal">The Story</h2>
          <p className="home-about__subtitle mono reveal">{site.name}&apos;s Narrative</p>
          <div className="home-about__body">
            <p className="reveal home-about__lede">I'm Aqsa Khan, a full-stack developer focused on <strong>AI, automation, and modern web development</strong>. This portfolio showcases my projects, technical skills, certifications, and the ideas I'm turning into real, working applications.</p>
          </div>
          <Link to="/about" className="home-about__link mono reveal">Read my full story →</Link>
        </div>
      </section>

      <section className="home-services section" ref={servicesRef}>
        <div className="container">
          <span className="eyebrow reveal">What I do</span>
          <h2 className="home-services__title reveal">Services</h2>
          <div className="home-services__grid">
            {site.services.map((svc) => (
              <div key={svc.id} className="home-service reveal">
                <span className="home-service__icon">{ICONS[svc.icon]}</span>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-projects section" ref={projectsRef}>
        <div className="container">
          <span className="eyebrow reveal">Selected work</span>
          <h2 className="home-projects__title reveal">Featured projects</h2>
          <div className="home-projects__grid">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} reducedMotion={reducedMotion} />
            ))}
          </div>
          <Link to="/projects" className="home-projects__link mono reveal">View all projects →</Link>
        </div>
      </section>

      <section className="home-cta section" ref={ctaRef}>
        <div className="container home-cta__inner">
          <h2 className="home-cta__title reveal">{closingLine}</h2>
          <a
            href="/#contact"
            className="btn reveal"
            onClick={(e) => { e.preventDefault(); scrollToTarget('#contact', { offset: -40 }); }}
          >
            Start a conversation
          </a>
        </div>
      </section>

      <section className="home-contact section" ref={contactRef} id="contact">
        <div className="container home-contact__inner">
          <span className="eyebrow reveal">Get in touch</span>
          <p className="home-contact__lede home-contact__lede--intro reveal">
            Open to internships, junior roles, and freelance work in full-stack and AI/LLM engineering.
          </p>

          <div className="home-contact__grid">
            <form className="contact-form reveal" onSubmit={onFormSubmit}>
              <label className="contact-field">
                <span className="mono">Name</span>
                <input required name="name" value={form.name} onChange={onFormChange} type="text" placeholder="Your name" />
              </label>
              <label className="contact-field">
                <span className="mono">Email</span>
                <input required name="email" value={form.email} onChange={onFormChange} type="email" placeholder="you@email.com" />
              </label>
              <label className="contact-field">
                <span className="mono">Message</span>
                <textarea required name="message" value={form.message} onChange={onFormChange} rows={5} placeholder="What are you building?" />
              </label>
              <button type="submit" className="btn">Send message</button>
              {sent && <p className="contact-form__note mono">Opening your email client…</p>}
            </form>

            <div className="contact-links reveal">
              <a href={`mailto:${site.social.email}`} className="contact-link">
                <MailIcon className="contact-link__icon" />
                <span>
                  <span className="mono contact-link__label">Email</span>
                  <span className="contact-link__value">{site.social.email}</span>
                </span>
              </a>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <LinkedinIcon className="contact-link__icon" />
                <span>
                  <span className="mono contact-link__label">LinkedIn</span>
                  <span className="contact-link__value">Connect on LinkedIn</span>
                </span>
              </a>
              <a href={site.social.github} target="_blank" rel="noreferrer" className="contact-link">
                <GithubIcon className="contact-link__icon" />
                <span>
                  <span className="mono contact-link__label">GitHub</span>
                  <span className="contact-link__value">View my repositories</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
