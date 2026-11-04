let lenisInstance = null;
let pendingCallbacks = [];

export function registerLenis(lenis) {
  lenisInstance = lenis;
  if (lenis) {
    pendingCallbacks.forEach((cb) => cb());
    pendingCallbacks = [];
  }
}

// Smoothly scrolls to a target (selector string or element) via Lenis,
// for a feel consistent with the rest of the site's scroll. If Lenis
// isn't registered yet (e.g. called right on page load, before
// useSmoothScroll's effect has run) it waits for it — but falls back to
// native scrollIntoView if Lenis never shows up (prefers-reduced-motion
// skips creating a Lenis instance entirely), so the scroll always happens
// either way rather than silently doing nothing.
//
// Calling resize() first matters: Lenis measures the document's scroll
// height once at construction, but the orbital section's pin (set up in
// a separate effect, on its own timing) adds extra height afterward.
// Without a fresh measurement, scrollTo can silently clamp against that
// stale, shorter height and land at the wrong position — intermittently,
// depending on exactly how the two effects race.
export function scrollToTarget(target, opts = {}) {
  const { offset = 0, duration = 1.4 } = opts;
  let done = false;

  const runNative = () => {
    if (done) return;
    done = true;
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  };

  // Reduced motion never creates a Lenis instance — go straight to an
  // instant native scroll rather than waiting out the detection window.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    runNative();
    return;
  }

  if (lenisInstance) {
    done = true;
    lenisInstance.resize();
    lenisInstance.scrollTo(target, { offset, duration });
    return;
  }

  pendingCallbacks.push(() => {
    if (done) return;
    done = true;
    lenisInstance.resize();
    lenisInstance.scrollTo(target, { offset, duration });
  });
  // Lenis creation is synchronous within useSmoothScroll's mount effect;
  // if it hasn't registered shortly after, it's not coming this session.
  setTimeout(runNative, 400);
}
