import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { registerLenis } from '../lib/scrollController';

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScroll(reducedMotion) {
  useEffect(() => {
    if (reducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    registerLenis(lenis);
    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      registerLenis(null);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [reducedMotion]);
}
