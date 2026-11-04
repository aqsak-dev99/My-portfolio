import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getFrameEl, getVignetteEl } from './videoDirector';

gsap.registerPlugin(ScrollTrigger);

// Builds a scroll-scrubbed crossfade of the persistent video between two
// scenes, keyed to a trigger element entering/leaving the viewport. Meant
// to be called inside a page's gsap.context() so it gets cleaned up on
// unmount (ctx.revert() kills the ScrollTrigger it creates).
export function scrubBetween(triggerEl, fromScene, toScene, opts = {}) {
  const frame = getFrameEl();
  if (!frame || !triggerEl) return null;
  const vignette = getVignetteEl();
  const { vignette: v0, ...f0 } = fromScene;
  const { vignette: v1, ...f1 } = toScene;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerEl,
      start: opts.start || 'top bottom',
      end: opts.end || 'top top',
      scrub: opts.scrub ?? 0.7,
    },
  });

  tl.fromTo(frame, f0, { ...f1, ease: 'none' }, 0);
  if (vignette && v0 !== undefined && v1 !== undefined) {
    tl.fromTo(vignette, { opacity: v0 }, { opacity: v1, ease: 'none' }, 0);
  }
  return tl;
}

// Builds the same crossfade as scrubBetween, but PAUSED and with no
// ScrollTrigger of its own — call .progress(p) on the result to drive it
// manually. Used where the natural trigger element is already pinned by a
// separate ScrollTrigger: a second, independently-measured trigger on that
// same pinned element reads a stale pre-pin position and never recovers,
// even after an explicit refresh. Driving progress directly from the
// pin's own (correctly measured) onUpdate sidesteps the issue entirely.
export function buildSceneTween(fromScene, toScene) {
  const frame = getFrameEl();
  const tl = gsap.timeline({ paused: true });
  if (!frame) return tl;
  const vignette = getVignetteEl();
  const { vignette: v0, ...f0 } = fromScene;
  const { vignette: v1, ...f1 } = toScene;

  tl.fromTo(frame, f0, { ...f1, ease: 'none', duration: 1 }, 0);
  if (vignette && v0 !== undefined && v1 !== undefined) {
    tl.fromTo(vignette, { opacity: v0 }, { opacity: v1, ease: 'none', duration: 1 }, 0);
  }
  return tl;
}
