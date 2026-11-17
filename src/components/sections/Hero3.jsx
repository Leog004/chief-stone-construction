import { useEffect, useRef } from 'react';
import { ConsultationLink } from '@components/ConsultationModal';

const Hero3Section = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updatePlayback = () => {
      if (reducedMotion.matches) {
        video.pause();
      } else {
        video.muted = true;
        video.play().catch(() => {});
      }
    };

    updatePlayback();
    reducedMotion.addEventListener('change', updatePlayback);
    return () => reducedMotion.removeEventListener('change', updatePlayback);
  }, []);

  return (
    <section className="home-image-hero" aria-labelledby="home-hero-title">
      <div className="home-hero-media" aria-hidden="true">
        <video
          ref={videoRef}
          className="home-image-background"
          src="/videos/chief-stone-new-hero.mp4"
          poster="/videos/chief-stone-new-hero-poster.jpg"
          preload="none"
          muted
          loop
          playsInline
        />
        <div className="home-image-shade" />
      </div>
      <div className="home-image-content">
        <h1 id="home-hero-title" className="home-build-serve">
          <span className="consultation-sr-only">Chief Stone Construction — Build and Serve</span>
          <span className="home-build-serve-words home-build-word" aria-hidden="true">Build</span>
          <span className="home-serve-row" aria-hidden="true">
            <img src="/img/chief-stone-original-symbol-outline.svg" alt="" className="home-original-symbol" width="1085" height="1365" />
            <span className="home-build-serve-words">Serve</span>
          </span>
        </h1>
        <p className="home-purpose-tagline">Built with purpose. Driven by service.</p>
        <ConsultationLink className="consultation-primary home-hero-cta">
          LET’S BUILD TOGETHER
        </ConsultationLink>
      </div>
    </section>
  );
};

export default Hero3Section;
