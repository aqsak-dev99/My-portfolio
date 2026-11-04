import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTilt } from '../hooks/useTilt';
import './ProjectCard.css';

export default function ProjectCard({ project, index, reducedMotion }) {
  const ref = useRef(null);
  const [imgError, setImgError] = useState(false);
  useTilt(ref, reducedMotion);

  const hasImage = project.image && !imgError && !project.image.startsWith('http');
  // External placeholder-generator URLs and missing local assets both fall
  // back to a styled monogram tile rather than a broken image icon.

  return (
    <Link to={`/project/${project.id}`} className="pcard reveal" ref={ref}>
      <div className="pcard__media">
        {hasImage ? (
          <img src={project.image} alt="" onError={() => setImgError(true)} loading="lazy" />
        ) : (
          <div className="pcard__fallback" />
        )}
        <div className="pcard__glow" />
      </div>
      <div className="pcard__body">
        <span className="pcard__index mono">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="pcard__title">{project.title}</h3>
        <p className="pcard__desc">{project.description}</p>
        <div className="pcard__tech">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="mono">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
