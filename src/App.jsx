import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import VideoStage from './components/VideoStage';
import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import { useSmoothScroll } from './hooks/useSmoothScroll';

// Resets scroll to the top on a route change, instantly (no easing, no
// delay) — plain SPA housekeeping, not a transition effect. Skipped when
// the new URL carries a hash (e.g. "/#contact"): that case is handled by
// the target page's own scroll-to-section logic, so forcing a jump to 0
// first would just add a redundant, visible snap before it scrolls back
// down.
function ScrollResetOnNavigate() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) return;
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  return null;
}

export default function App() {
  const reducedMotion = usePrefersReducedMotion();
  useSmoothScroll(reducedMotion);

  return (
    <>
      <VideoStage reducedMotion={reducedMotion} />
      <Nav />
      <ScrollResetOnNavigate />
      <main>
        <Routes>
          <Route path="/" element={<Home reducedMotion={reducedMotion} />} />
          <Route path="/about" element={<About reducedMotion={reducedMotion} />} />
          <Route path="/projects" element={<Projects reducedMotion={reducedMotion} />} />
          <Route path="/project/:id" element={<ProjectDetail reducedMotion={reducedMotion} />} />
          {/* Contact is one destination — the section at the end of Home —
              so a direct/old link to /contact lands there too. */}
          <Route path="/contact" element={<Navigate to="/#contact" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
