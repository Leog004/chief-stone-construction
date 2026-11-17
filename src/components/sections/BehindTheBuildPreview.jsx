import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BehindTheBuildPreview({ series = [], totalPhotos = 0, totalSeries = 0 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const preview = useRef(null);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update(); preference.addEventListener('change', update);
    const onVisibility = () => setPageVisible(!document.hidden);
    onVisibility(); document.addEventListener('visibilitychange', onVisibility);
    const observer = typeof IntersectionObserver === 'function'
      ? new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .2 }) : null;
    if (observer && preview.current) observer.observe(preview.current);
    else setVisible(true);
    return () => { preference.removeEventListener('change', update); document.removeEventListener('visibilitychange', onVisibility); observer?.disconnect(); };
  }, []);
  const running = visible && pageVisible && !paused && !reducedMotion && !hovered && !focused && series.length > 1;
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setIndex(current => (current + 1) % series.length), 5500);
    return () => window.clearInterval(timer);
  }, [running, series.length]);
  if (!series.length) return null;
  const current = series[index % series.length];
  const seriesHref = id => ({ pathname: '/behind-the-build', query: { series: id }, hash: 'build-gallery' });
  function choose(next) { setPaused(true); setIndex((next + series.length) % series.length); }

  return (
    <section className="build-preview" aria-labelledby="build-preview-title">
      <div className="container">
        <div className="build-preview-heading">
          <div><span className="build-preview-kicker"><span aria-hidden="true" /> Behind the Build</span><h2 id="build-preview-title">Good work has a story.<br /><em>Come see ours.</em></h2></div>
          <div className="build-preview-intro"><p>A closer look at the spaces we transform. Follow the details, explore a project, and find inspiration for your own.</p><Link className="build-preview-text-link" href="/behind-the-build">Explore the journal <span aria-hidden="true">↗</span></Link></div>
        </div>
        <div className="build-preview-grid">
          <div ref={preview} className="build-preview-feature" role="region" aria-roledescription="carousel" aria-label="Project photo preview"
            onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
            onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
            <Link href={seriesHref(current.id)} className="build-preview-feature-link" aria-label={`Explore the ${current.title} photo series`}>
              <div className="build-preview-images" aria-hidden="true">{series.map((item, slide) => <Image key={item.id} src={item.cover} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 991px) 90vw, 65vw" className={slide === index % series.length ? 'is-current' : ''} />)}</div>
              <span className="build-preview-image-shade" aria-hidden="true" />
              <span className="build-preview-chip">Inside the project <span>Photo series</span></span>
              <div className="build-preview-feature-copy" aria-live={running ? 'off' : 'polite'}><span className="build-preview-counter">{String(index + 1).padStart(2, '0')} / {String(series.length).padStart(2, '0')}</span><h3>{current.title}</h3><span className="build-preview-open">Explore this build <span aria-hidden="true">↗</span></span></div>
            </Link>
            <div className="build-preview-controls">
              <div className="build-preview-dots" aria-label="Choose a project">{series.map((item, slide) => <button key={item.id} type="button" onClick={() => choose(slide)} aria-label={`Show ${item.title}`} aria-pressed={slide === index % series.length}><span /></button>)}</div>
              <div className="build-preview-playback">
                {!reducedMotion && <button type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Resume automatic slideshow' : 'Pause automatic slideshow'}>{paused ? 'Play' : 'Pause'}</button>}
                <button type="button" aria-label="Previous project" onClick={() => choose(index - 1)}>←</button><button type="button" aria-label="Next project" onClick={() => choose(index + 1)}>→</button>
              </div>
            </div>
          </div>
          <div className="build-preview-side">
            <Link href={seriesHref(series[1]?.id || current.id)} className="build-preview-story">
              <div className="build-preview-story-photo"><Image src={series[1]?.cover || current.cover} alt="" fill sizes="(max-width: 767px) 90vw, 33vw" /><span aria-hidden="true">↗</span></div>
              <div><span className="build-preview-kicker">Another story to explore</span><h3>{series[1]?.title || current.title}</h3><p>Step inside the photo series.</p></div>
            </Link>
            <Link href="/behind-the-build?view=boards#build-gallery" className="build-preview-boards">
              <div className="build-preview-stack" aria-hidden="true">{series.slice(0, 3).map(item => <div key={item.id}><Image src={item.cover} alt="" fill sizes="160px" /></div>)}</div>
              <span className="build-preview-kicker">Collect what speaks to you</span><h3>Your next project<br />starts with an idea.</h3><span className="build-preview-open">Discover idea boards <span aria-hidden="true">↗</span></span>
            </Link>
          </div>
        </div>
        <div className="build-preview-footer"><p><strong>{totalSeries} project stories</strong><span aria-hidden="true"> / </span>{totalPhotos} photos to explore</p><span>Real projects. The details that make them.</span></div>
      </div>
    </section>
  );
}
