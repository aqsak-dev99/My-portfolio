import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="section container" style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
      <span className="eyebrow">404</span>
      <h1 style={{ fontSize: 'clamp(32px, 6vw, 64px)' }}>Signal lost.</h1>
      <p style={{ color: 'var(--bone-dim)', maxWidth: 480 }}>
        The page you're looking for doesn't exist, or the project you requested could not be found.
      </p>
      <Link to="/" className="btn" style={{ width: 'fit-content' }}>Back to home</Link>
    </div>
  );
}
