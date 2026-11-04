import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { projects } from '../data/siteData';
import { settleScene, scene } from '../lib/videoDirector';
import { useReveal } from '../hooks/useReveal';
import NotFound from './NotFound';
import './ProjectDetail.css';

const DETAIL_SCENE = scene({
  width: '59.04vmin',
  height: '59.04vmin',
  borderRadius: '4%',
  opacity: 0.26,
  filter: 'brightness(0.8) saturate(0.95) blur(0px)',
  xOffset: -34,
  yOffset: -8,
  vignette: 0.7,
});

function Bullets({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="pd-bullets">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Shot({ src, alt }) {
  const [err, setErr] = useState(false);
  if (err || !src) return null;
  return <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} />;
}

export default function ProjectDetail({ reducedMotion }) {
  const { id } = useParams();
  const rootRef = useRef(null);
  const project = useMemo(() => projects.find((p) => p.id === id), [id]);

  useReveal(rootRef, [id], reducedMotion);

  useEffect(() => {
    if (project) document.title = `${project.title} — Aqsa Khan`;
  }, [project]);

  useEffect(() => {
    if (!project) return;
    settleScene(DETAIL_SCENE, { duration: 1.1 });
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  const cs = project.caseStudy || {};
  const isDesignOnly = cs.isDesignOnly;

  const problem = cs.problem || cs.problemStatement;
  const solution = cs.solution || cs.whatIBuilt || cs.goalSolution;
  const learnedText = cs.whatILearned || (typeof cs.learnings === 'string' ? cs.learnings : null);

  const challenges = cs.challengesLearnings?.challenges || cs.challenges;
  const learningsList = cs.challengesLearnings?.learnings;
  const futureImprovements = cs.challengesLearnings?.futureImprovements;

  const techStack = cs.techStack || project.tech;
  const screenshots = cs.screenshots || [];

  const keyFeatures = cs.keyFeatures;
  const keyFeaturesIsGrouped = keyFeatures && !Array.isArray(keyFeatures);

  return (
    <div ref={rootRef} className="pd">
      <section className="section pd-head">
        <div className="container">
          <Link to="/projects" className="pd-back mono reveal">← All projects</Link>
          <h1 className="pd-head__title reveal">{cs.hero?.title || project.title}</h1>
          <p className="pd-head__desc reveal">{cs.hero?.subtitle || project.description}</p>

          <div className="pd-head__meta reveal">
            {(cs.hero?.metadata || (project.meta ? [
              { label: 'Role', value: project.meta.role },
              { label: 'Type', value: project.meta.type },
            ] : [])).map((m) => (
              <div key={m.label} className="pd-meta-chip">
                <span className="mono pd-meta-chip__label">{m.label}</span>
                <span className="pd-meta-chip__value">{m.value}</span>
              </div>
            ))}
          </div>

          <div className="pd-head__actions reveal">
            {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="btn">Live site</a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>}
            {project.figma && <a href={project.figma} target="_blank" rel="noreferrer" className="btn btn-ghost">Figma</a>}
          </div>

          <div className="pd-head__tags reveal">
            {techStack.map((t) => (
              <span key={t} className="mono">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section pd-body">
        <div className="container pd-body__grid">
          <div className="pd-body__main">
            {cs.overview && (
              <div className="pd-block reveal">
                <h2>Overview</h2>
                <p>{cs.overview}</p>
              </div>
            )}

            {problem && (
              <div className="pd-block reveal">
                <h2>The problem</h2>
                <p>{problem}</p>
              </div>
            )}

            {solution && (
              <div className="pd-block reveal">
                <h2>{cs.whatIBuilt ? 'What I built' : 'The solution'}</h2>
                <p>{solution}</p>
              </div>
            )}

            {isDesignOnly && cs.userPersona && (
              <div className="pd-block reveal">
                <h2>User persona</h2>
                <div className="pd-persona">
                  <div>
                    <p className="pd-persona__name">{cs.userPersona.name}, {cs.userPersona.age}</p>
                    <p className="pd-persona__role mono">{cs.userPersona.role}</p>
                  </div>
                  <div className="pd-persona__cols">
                    <div>
                      <span className="mono pd-persona__label">Pain points</span>
                      <Bullets items={cs.userPersona.painPoints} />
                    </div>
                    <div>
                      <span className="mono pd-persona__label">Goals</span>
                      <Bullets items={cs.userPersona.goals} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {cs.researchInsights?.length > 0 && (
              <div className="pd-block reveal">
                <h2>Research insights</h2>
                <Bullets items={cs.researchInsights} />
              </div>
            )}

            {keyFeatures && (
              <div className="pd-block reveal">
                <h2>Key features</h2>
                {keyFeaturesIsGrouped ? (
                  <div className="pd-feature-groups">
                    {Object.entries(keyFeatures).map(([group, items]) => (
                      <div key={group}>
                        <span className="mono pd-persona__label">{group}</span>
                        <Bullets items={items} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Bullets items={keyFeatures} />
                )}
              </div>
            )}

            {cs.howAiWorks && (
              <div className="pd-block reveal">
                <h2>How the AI works</h2>
                <div className="pd-ai-flow">
                  {cs.howAiWorks.promptFlow && <p><span className="mono">Prompt flow — </span>{cs.howAiWorks.promptFlow}</p>}
                  {cs.howAiWorks.apiIntegration && <p><span className="mono">API integration — </span>{cs.howAiWorks.apiIntegration}</p>}
                  {cs.howAiWorks.demoMode && <p><span className="mono">Demo mode — </span>{cs.howAiWorks.demoMode}</p>}
                </div>
              </div>
            )}

            {cs.uxUiDecisions?.length > 0 && (
              <div className="pd-block reveal">
                <h2>UX/UI decisions</h2>
                <div className="pd-decisions">
                  {cs.uxUiDecisions.map((d) => (
                    <div key={d.decision} className="pd-decision">
                      <p className="pd-decision__title">{d.decision}</p>
                      <p className="pd-decision__reason">{d.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {isDesignOnly && cs.taskFlows && (
              <div className="pd-block reveal">
                <h2>Task flows</h2>
                {Object.entries(cs.taskFlows).map(([flow, steps]) => (
                  <div key={flow} className="pd-flow">
                    <span className="mono pd-persona__label">{flow.replace(/([A-Z])/g, ' $1')}</span>
                    <div className="pd-flow__steps">
                      {steps.map((s, i) => (
                        <span key={s} className="mono">{i > 0 && '→ '}{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {isDesignOnly && cs.designDecisions?.length > 0 && (
              <div className="pd-block reveal">
                <h2>Design decisions</h2>
                <Bullets items={cs.designDecisions} />
              </div>
            )}

            {(challenges?.length > 0) && (
              <div className="pd-block reveal">
                <h2>Challenges</h2>
                <Bullets items={challenges} />
              </div>
            )}

            {(learningsList?.length > 0 || learnedText) && (
              <div className="pd-block reveal">
                <h2>What I learned</h2>
                {learningsList?.length > 0 ? <Bullets items={learningsList} /> : <p>{learnedText}</p>}
              </div>
            )}

            {futureImprovements?.length > 0 && (
              <div className="pd-block reveal">
                <h2>Future improvements</h2>
                <Bullets items={futureImprovements} />
              </div>
            )}

            {cs.reflection && (
              <div className="pd-block reveal">
                <h2>Reflection</h2>
                <p>{cs.reflection}</p>
              </div>
            )}

            {screenshots.length > 0 && (
              <div className="pd-block reveal">
                <h2>Screens</h2>
                <div className="pd-shots">
                  {screenshots.map((src) => (
                    <Shot key={src} src={src} alt={`${project.title} screenshot`} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="pd-body__aside">
            <div className="pd-aside-card reveal">
              <span className="mono pd-persona__label">Stack</span>
              <div className="pd-head__tags" style={{ marginTop: 12 }}>
                {techStack.map((t) => <span key={t} className="mono">{t}</span>)}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section pd-next">
        <div className="container pd-next__inner">
          <Link to="/projects" className="btn btn-ghost">← Back to all projects</Link>
          <Link to="/#contact" className="btn">Let's talk</Link>
        </div>
      </section>
    </div>
  );
}
