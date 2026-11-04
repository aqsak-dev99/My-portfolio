import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './OrbitalShowcase.css';

export default function OrbitalShowcase({ projects, reducedMotion }) {
  const stageRef = useRef(null);
  const ringRef = useRef(null);
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  const rotation = useRef(0);
  const velocity = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const radius = useRef(320);
  const hoverTilt = useRef({ x: 0, y: 0 });
  const targetTilt = useRef({ x: 0, y: 0 });

  const count = projects.length;
  const step = 360 / count;

  useEffect(() => {
    const computeRadius = () => {
      const base = Math.min(window.innerWidth, window.innerHeight);
      radius.current = Math.max(200, Math.min(base * 0.34, 360));
      if (ringRef.current) {
        ringRef.current.style.setProperty('--radius', `${radius.current}px`);
      }
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        card.style.transform = `rotateY(${i * step}deg) translateZ(${radius.current}px)`;
      });
    };
    computeRadius();
    window.addEventListener('resize', computeRadius);
    return () => window.removeEventListener('resize', computeRadius);
  }, [step]);

  useEffect(() => {
    // Start front-and-center on a card rather than a seam between two.
    rotation.current = 0;

    const applyFacing = () => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const angle = ((i * step + rotation.current) % 360 + 360) % 360;
        const rad = (angle * Math.PI) / 180;
        const facing = Math.cos(rad); // 1 = facing viewer, -1 = facing away
        const scale = 0.72 + facing * 0.28;
        const opacity = Math.max(0.08, 0.35 + facing * 0.65);
        const blur = facing < 0.2 ? (0.2 - facing) * 3 : 0;
        card.style.opacity = opacity.toFixed(2);
        card.style.filter = blur ? `blur(${blur.toFixed(1)}px)` : 'none';
        card.style.setProperty('--card-scale', scale.toFixed(3));
        card.style.zIndex = String(Math.round(facing * 100));
        card.style.pointerEvents = facing > -0.15 ? 'auto' : 'none';
      });
    };

    const tick = () => {
      if (!dragging.current) {
        velocity.current *= 0.94;
        if (!reducedMotion && Math.abs(velocity.current) < 0.02) {
          velocity.current += 0.012; // gentle ambient idle drift
        }
      }
      rotation.current += velocity.current;

      hoverTilt.current.x += (targetTilt.current.x - hoverTilt.current.x) * 0.06;
      hoverTilt.current.y += (targetTilt.current.y - hoverTilt.current.y) * 0.06;

      if (ringRef.current) {
        ringRef.current.style.transform = `rotateY(${rotation.current}deg)`;
      }
      if (stageRef.current && !reducedMotion) {
        stageRef.current.style.transform = `rotateX(${hoverTilt.current.x}deg) rotateY(${hoverTilt.current.y}deg)`;
      }
      applyFacing();
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, count, reducedMotion]);

  const onPointerDown = (e) => {
    dragging.current = true;
    lastX.current = e.clientX;
    velocity.current = 0;
    stageRef.current?.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (window.matchMedia('(hover: hover)').matches && !dragging.current) {
      const rect = stageRef.current?.getBoundingClientRect();
      if (rect) {
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        targetTilt.current = { x: -py * 6, y: px * 6 };
      }
    }
    if (!dragging.current) return;
    const delta = e.clientX - lastX.current;
    lastX.current = e.clientX;
    const spin = delta * 0.35;
    rotation.current += spin;
    velocity.current = spin;
  };

  const endDrag = () => {
    dragging.current = false;
  };

  const focusCard = (i) => {
    // Bring the focused card to the front for keyboard users.
    const targetAngle = -i * step;
    const current = ((rotation.current % 360) + 360) % 360;
    const wanted = ((targetAngle % 360) + 360) % 360;
    let delta = wanted - current;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    velocity.current = 0;
    gsap.to(rotation, { current: rotation.current + delta, duration: 0.6, ease: 'power3.out' });
  };

  return (
    <div
      className="orbital"
      ref={stageRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      role="group"
      aria-label="Featured projects — drag to rotate"
    >
      <div className="orbital__hub" aria-hidden="true" />
      <div className="orbital__ring" ref={ringRef}>
        {projects.map((project, i) => (
          <button
            key={project.id}
            type="button"
            className="orbital__card"
            ref={(el) => { cardRefs.current[i] = el; }}
            onFocus={() => focusCard(i)}
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <span className="orbital__title">{project.title}</span>
            <span className="orbital__tags">
              {project.tech.slice(0, 3).map((t) => (
                <span key={t} className="orbital__tag mono">{t}</span>
              ))}
            </span>
          </button>
        ))}
      </div>
      <p className="orbital__hint mono">DRAG TO ROTATE</p>
    </div>
  );
}
