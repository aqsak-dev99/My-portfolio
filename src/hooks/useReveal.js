import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Applies the same reveal grammar everywhere: elements with class="reveal"
// inside `scopeRef` fade + rise into place, staggered, once, as they enter
// the viewport. One consistent motion vocabulary instead of bespoke
// animations per section.
export function useReveal(scopeRef, deps = [], reducedMotion = false) {
  useEffect(() => {
    if (!scopeRef.current) return undefined;
    if (reducedMotion) {
      scopeRef.current.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(scopeRef.current.querySelectorAll('.reveal'));
      ScrollTrigger.batch(targets, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          batch.forEach((el, i) => {
            gsap.delayedCall(i * 0.08, () => el.classList.add('is-visible'));
          });
        },
      });
    }, scopeRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
