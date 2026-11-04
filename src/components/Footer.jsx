import { site } from '../data/siteData';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="mono footer__meta">© {year} {site.name}</p>
        <div className="footer__links">
          <a href={site.social.github} target="_blank" rel="noreferrer" className="footer__link" aria-label="GitHub">
            <GithubIcon className="footer__icon" />
            <span className="mono">GitHub</span>
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="footer__link" aria-label="LinkedIn">
            <LinkedinIcon className="footer__icon" />
            <span className="mono">LinkedIn</span>
          </a>
          <a href={`mailto:${site.social.email}`} className="footer__link" aria-label="Email">
            <MailIcon className="footer__icon" />
            <span className="mono">{site.social.email}</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
