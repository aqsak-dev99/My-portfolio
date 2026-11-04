import gsap from 'gsap';

// The persistent <video> layer lives once in App.jsx (outside of <Routes>),
// so it never remounts on navigation. This module is the single channel
// every page uses to choreograph it — settle to a resting "scene" on
// route change, or scrub between scenes as the page scrolls.
//
// A "scene" is just a plain object of CSS-transform-able values applied
// to the frame element:
//   { xPercent, yPercent, scale, borderRadius, opacity, filter, vignette }
// `vignette` (0–1) is forwarded to the overlay instead of the frame.

let frameEl = null;
let vignetteEl = null;
let reducedMotion = false;

export function registerVideoStage(frame, vignette) {
  frameEl = frame;
  vignetteEl = vignette;
}

export function setReducedMotion(value) {
  reducedMotion = value;
}

function apply(vars, target) {
  const { vignette, ...frameVars } = vars;
  if (frameEl && Object.keys(frameVars).length) target(frameEl, frameVars);
  if (vignetteEl && vignette !== undefined) target(vignetteEl, { opacity: vignette });
}

// One-shot settle — used when a page mounts (the route-transition moment).
export function settleScene(vars, opts = {}) {
  if (!frameEl) return;
  if (reducedMotion) {
    apply(vars, gsap.set);
    return;
  }
  const { vignette, ...frameVars } = vars;
  if (Object.keys(frameVars).length) {
    gsap.to(frameEl, {
      ...frameVars,
      duration: opts.duration ?? 1.6,
      ease: opts.ease ?? 'power3.inOut',
      overwrite: 'auto',
    });
  }
  if (vignetteEl && vignette !== undefined) {
    gsap.to(vignetteEl, {
      opacity: vignette,
      duration: opts.duration ?? 1.6,
      ease: opts.ease ?? 'power3.inOut',
      overwrite: 'auto',
    });
  }
}

export function setSceneImmediate(vars) {
  apply(vars, gsap.set);
}

// Returns a GSAP tween target usable inside a scroll-scrubbed timeline.
// Callers build: gsap.timeline({scrollTrigger:{...,scrub:true}}).to(getFrameEl(), {...})
export function getFrameEl() {
  return frameEl;
}

export function getVignetteEl() {
  return vignetteEl;
}

// .video-frame is always centered via GSAP-owned transform (xPercent/yPercent
// -50/-50 is the centered baseline). Scenes describe an offset from center
// in percent-of-own-size, so call sites stay readable:
//   scene({ xOffset: 18, scale: 0.6, borderRadius: '50%', ... })
export function scene({ xOffset = 0, yOffset = 0, ...rest }) {
  return { xPercent: -50 + xOffset, yPercent: -50 + yOffset, ...rest };
}
