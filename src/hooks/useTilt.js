import { useEffect } from 'react';

// Subtle, restrained tilt (a few degrees) toward the cursor. Skipped
// entirely under reduced-motion, and does nothing on touch devices.
export function useTilt(ref, reducedMotion = false, maxDeg = 4) {
  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return undefined;
    if (window.matchMedia('(hover: none)').matches) return undefined;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--tilt-x', `${(-py * maxDeg).toFixed(2)}deg`);
      el.style.setProperty('--tilt-y', `${(px * maxDeg).toFixed(2)}deg`);
      el.style.setProperty('--glow-x', `${(px * 0.5 + 0.5) * 100}%`);
      el.style.setProperty('--glow-y', `${(py * 0.5 + 0.5) * 100}%`);
    };

    const onLeave = () => {
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [ref, reducedMotion, maxDeg]);
}
