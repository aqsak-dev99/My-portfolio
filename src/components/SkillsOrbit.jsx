import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './OrbitalShowcase.css';

const AUTO_SPEED = 0.065; // deg/frame — one slow, continuous drift, always on

export default function SkillsOrbit({ skills, reducedMotion }) {
  const stageRef = useRef(null);
  const ringRef = useRef(null);
  const cardRefs = useRef([]);

  const rotation = useRef(0);
  const speedMul = useRef(1);
  const hovering = useRef(false);
  const radius = useRef(340);
  const hoverTilt = useRef({ x: 0, y: 0 });
  const targetTilt = useRef({ x: 0, y: 0 });

  const count = skills.length;
  const step = 360 / count;

  useEffect(() => {
    const computeRadius = () => {
      const base = Math.min(window.innerWidth, window.innerHeight);
      // Radius is chosen so adjacent cards clear each other with real
      // breathing room, not just avoid literal overlap: with 20 skills at
      // 18° apart, the previous radius (~500px on a typical desktop)
      // left only a couple of px between card edges — visually touching.
      // Chord distance between neighboring card centers is 2·R·sin(step/2);
      // solving for a ~80px gap past the card's own width at this step
      // needs R in the 700–800px range on desktop, with a higher floor on
      // small screens so mobile's narrower cards clear too.
      radius.current = Math.max(500, Math.min(base * 0.86, 860));
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
    rotation.current = 0;

    const applyFacing = () => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const angle = ((i * step + rotation.current) % 360 + 360) % 360;
        const rad = (angle * Math.PI) / 180;
        const facing = Math.cos(rad);
        const scale = 0.7 + facing * 0.32;
        const opacity = Math.max(0.1, 0.32 + facing * 0.68);
        const blur = facing < 0.2 ? (0.2 - facing) * 3 : 0;
        card.style.opacity = opacity.toFixed(2);
        card.style.filter = blur ? `blur(${blur.toFixed(1)}px)` : 'none';
        card.style.setProperty('--card-scale', scale.toFixed(3));
        card.style.zIndex = String(Math.round(facing * 100));
      });
    };

    const tick = () => {
      // Continuous auto-rotation — always on, no drag. Hover just eases
      // the speed down as a subtle acknowledgement, never stops it.
      const targetMul = hovering.current ? 0.28 : 1;
      speedMul.current += (targetMul - speedMul.current) * 0.05;
      if (!reducedMotion) {
        rotation.current += AUTO_SPEED * speedMul.current;
      }

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

  const onPointerMove = (e) => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    targetTilt.current = { x: -py * 5, y: px * 5 };
  };

  const onPointerEnter = () => { hovering.current = true; };
  const onPointerLeave = () => {
    hovering.current = false;
    targetTilt.current = { x: 0, y: 0 };
  };

  const focusCard = (i) => {
    const targetAngle = -i * step;
    const current = ((rotation.current % 360) + 360) % 360;
    const wanted = ((targetAngle % 360) + 360) % 360;
    let delta = wanted - current;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    gsap.to(rotation, { current: rotation.current + delta, duration: 0.6, ease: 'power3.out' });
  };

  return (
    <div
      className="orbital orbital--skills"
      ref={stageRef}
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      role="group"
      aria-label="Skills and technologies"
    >
      <div className="orbital__hub" aria-hidden="true" />
      <div className="orbital__ring" ref={ringRef}>
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="orbital__card orbital__card--skill"
            ref={(el) => { cardRefs.current[i] = el; }}
            tabIndex={0}
            onFocus={() => focusCard(i)}
            aria-label={`${skill.name} — ${skill.level}`}
          >
            <span className="orbital__skill-icon" aria-hidden="true">{skill.icon}</span>
            <span className="orbital__skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
