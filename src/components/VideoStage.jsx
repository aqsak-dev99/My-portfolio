import { useEffect, useRef } from 'react';
import { registerVideoStage, setReducedMotion, setSceneImmediate, scene } from '../lib/videoDirector';
import './VideoStage.css';

export default function VideoStage({ reducedMotion }) {
  const frameRef = useRef(null);
  const vignetteRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    registerVideoStage(frameRef.current, vignetteRef.current);
    setReducedMotion(reducedMotion);
    // Resting first-paint state — matches Home's fullscreen hero scene, so
    // there's no flash before Home's own mount effect takes over.
    setSceneImmediate(scene({
      width: '100vw',
      height: '100vh',
      borderRadius: '0%',
      opacity: 1,
      filter: 'brightness(1) saturate(1) blur(0px)',
      vignette: 0.55,
    }));
  }, [reducedMotion]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play?.().catch(() => {
      /* autoplay can be blocked before first interaction — harmless, loop starts on first gesture */
    });
  }, []);

  return (
    <div className="video-stage" aria-hidden="true">
      <div className="video-frame" ref={frameRef}>
        <video
          ref={videoRef}
          className="video-el"
          src="/media/hero-loop.mp4"
          poster="/media/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="video-grain" />
      </div>
      <div className="video-vignette" ref={vignetteRef} />
    </div>
  );
}
