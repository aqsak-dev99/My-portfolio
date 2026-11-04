import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { projects, projectCategories } from '../data/siteData';
import ProjectCard from '../components/ProjectCard';
import { settleScene, scene, getFrameEl } from '../lib/videoDirector';
import { useReveal } from '../hooks/useReveal';
import './Projects.css';

const PROJECTS_SCENE = scene({
  width: '51.84vmin',
  height: '51.84vmin',
  borderRadius: '50%',
  opacity: 0.26,
  filter: 'brightness(0.62) saturate(0.95) blur(26px)',
  xOffset: -46,
  yOffset: -42,
  vignette: 0.8,
});

export default function Projects({ reducedMotion }) {
  const rootRef = useRef(null);
  const gridRef = useRef(null);
  const [active, setActive] = useState('All');

  useEffect(() => {
    settleScene(PROJECTS_SCENE, { duration: 1.2 });
  }, []);

  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.category?.includes(active));
  }, [active]);

  useReveal(rootRef, [active], reducedMotion);

  const handleFilter = (cat) => {
    if (cat === active) return;

    const frame = getFrameEl();
    if (frame && !reducedMotion) {
      gsap.to(frame, { filter: 'brightness(0.9) saturate(1) blur(40px)', duration: 0.18, yoyo: true, repeat: 1 });
    }

    if (reducedMotion || !gridRef.current) {
      setActive(cat);
      return;
    }

    gsap.to(gridRef.current, {
      clipPath: 'inset(0 0 100% 0)',
      opacity: 0.3,
      duration: 0.35,
      ease: 'power3.in',
      onComplete: () => {
        setActive(cat);
        gsap.set(gridRef.current, { clipPath: 'inset(0 0 0% 0)', opacity: 1 });
      },
    });
  };

  return (
    <div ref={rootRef} className="projects-page">
      <section className="section projects-head" style={{ paddingBottom: 40 }}>
        <div className="container">
          <span className="eyebrow reveal">Work</span>
          <h1 className="projects-head__title reveal">Projects</h1>
          <p className="projects-head__desc reveal">
            Full-stack builds, AI-integrated apps, and UI/UX design work — {projects.length} in total.
          </p>
          <div className="projects-filters reveal">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`projects-filter mono ${active === cat ? 'is-active' : ''}`}
                onClick={() => handleFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid" ref={gridRef}>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} reducedMotion={reducedMotion} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
