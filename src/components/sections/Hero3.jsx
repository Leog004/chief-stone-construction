import { ConsultationLink } from '@components/ConsultationModal';

const Hero3Section = () => (
  <section className="home-image-hero" aria-labelledby="home-hero-title">
    <img
      className="home-image-background"
      src="/img/home-construction-background.png"
      alt=""
      fetchPriority="high"
      decoding="async"
      width="1672"
      height="941"
    />
    <div className="home-image-shade" aria-hidden="true" />
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
        Request a free consultation
      </ConsultationLink>
    </div>
  </section>
);

export default Hero3Section;
