import dynamic from "next/dynamic";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CountersSection from "@components/sections/Counters";
import ImageView from "@components/ImageView";
import Mission from "@data/sections/about.json";
import ConsultationModalProvider, { ConsultationLink } from "@components/ConsultationModal";

const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const About = () => {
  return (
    <ConsultationModalProvider>
    <Layouts>
      <ImageView />
      <main className="about-combined">
      <PageBanner pageTitle={"About Us"} pageDesc={"Our story, our values, and the people behind the work."} />
      

      <nav className="about-section-nav container" aria-label="On this page">
        <a href="#our-company">Our company</a><a href="#core-values">Core values</a><a href="#founder">Meet the founder</a><a href="#history">Our history</a>
      </nav>
      {/* About-First Start */}
      <section id="our-company" className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>Welcome to Chief Stone Construction</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>Who We Are?</h3>
                  <p>We are a company built upon the eternal truth that “A healthy home begins with a firm foundation.” In Scripture, the Chief Stone, or Cornerstone, was set to uphold and unite the walls of a structure, symbolizing strength, stability, and lasting security. For us, this image points directly to Jesus Christ, the true Cornerstone of our faith and the foundation upon which all else must rest (Ephesians 2:20). Out of an overflow of His love, Chief Stone Construction was founded with a passion not only for building homes of enduring quality, but also for fostering relationships grounded in trust, integrity, and care. Just as every strong house begins with a firm foundation, so too does every lasting relationship and every faithful act of service. It is our joy to build with excellence, guided by the wisdom and strength of the Chief Stone Himself.</p>
                </div>
                <figure>
                  <img className="w-100" src="/img/gallery-1.jpeg" alt="About Image One" />
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>What's in it for me?</h3>
                  <ul>
                    <li><i className="fa-solid fa-circle-dot" /> High performing workers</li>
                    <li><i className="fa-solid fa-circle-dot" /> Dedication to client satisfaction</li>
                    <li><i className="fa-solid fa-circle-dot" /> Excellent standards in construction</li>
                    <li><i className="fa-solid fa-circle-dot" /> Effective Communication & Planning</li>
                    <li><i className="fa-solid fa-circle-dot" /> Reliability</li>
                  </ul>
                </div>
                <figure>
                  <img className="w-100" src="/img/gallery-3.jpeg" alt="About Image Two" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-First End */}

      <section className="about-combined-mission container" aria-labelledby="about-mission-title"><span className="build-eyebrow">{Mission.subtitle}</span><h2 id="about-mission-title">{Mission.title}</h2><p>{Mission.text}</p></section>
      <CountersSection />
      {/* Core Values Start */}
      <section id="core-values" className="gap core-values" aria-labelledby="about-values-title">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>COLOSSIANS 3:23</span>
          <h2 id="about-values-title">Our Core Values</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <div className="data">
                  <h3>Integrity</h3>
                  <p>
                    We do the right thing, even when no one is watching. Honest
                    communication, genuine care, and quality workmanship are the
                    foundation of every relationship we build.
                  </p>
                </div>
                <div className="image">
                  <figure>
                    <img
                      className="w-100"
                      src="/img/core-2.jpeg"
                      alt="Core Values Image 1"
                    />
                  </figure>
                </div>
              </li>
              <li>
                <div className="image">
                  <figure>
                    <img
                      className="w-100"
                      src="/img/about2.jpeg"
                      alt="Core Values Image 1"
                    />
                  </figure>
                </div>
                <div className="data">
                  <h3>Excellence</h3>
                  <p>
                    We believe quality is found in the details. From proper
                    preparation to the final finish, we pursue craftsmanship
                    that stands the test of time.
                  </p>
                </div>
              </li>
              <li>
                <div className="data">
                  <h3>Service</h3>
                  <p>
                    We believe construction is about more than building
                    beautiful spaces—it’s about serving people well. Every
                    project is an opportunity to create trust, solve problems,
                    and leave our clients better than we found them.
                  </p>
                </div>
                <div className="image">
                  <figure>
                    <img
                      className="w-100"
                      src="/img/core-1.jpeg"
                      alt="Core Values Image 1"
                    />
                  </figure>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Core Values End */}

      {/* Gallery Style One Start */}
      <div className="gallery-style-one">
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-1.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-1.jpeg"
                    alt="Gallery 1"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-2.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-2.jpeg"
                    alt="Gallery 2"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-3.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-3.jpeg"
                    alt="Gallery 3"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-4.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-4.jpeg"
                    alt="Gallery 4"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-5.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-5.jpeg"
                    alt="Gallery 5"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-6.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-6.jpeg"
                    alt="Gallery 6"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-7.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-7.jpeg"
                    alt="Gallery 7"
                  />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-8.jpeg">
                  <img
                    className="img-fluid w-100"
                    src="/img/gallery-8.jpeg"
                    alt="Gallery 8"
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Style One End */}

      {/* Innovation Start */}
      <section className="gap innovation">
        <div className="heading">
          <span>THE CHIEF STONE DIFFERENCE</span>
          <h2>Every Project Includes</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <i className="fa-solid fa-check" />
                <p>Careful planning before construction begins</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Clear communication from start to finish</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Premium materials and proven installation methods</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Respect for your home and property</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Meticulous craftsmanship in every detail</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>A commitment to doing the job right</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Innovation End */}


      <section id="founder" className="gap about-combined-founder" aria-labelledby="about-founder-title">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4"><span className="build-eyebrow">Meet the founder</span><h2 id="about-founder-title">Caleb Toney</h2><p>Founder &amp; CEO</p><h3>Leading with faith, integrity, and a commitment to excellence.</h3></div>
            <div className="col-lg-8"><blockquote>"I started Chief Stone Construction with one simple goal: to
                  honor God through my work while serving others with integrity
                  and exceptional craftsmanship. Every project is an opportunity
                  to earn trust, solve problems, and build something that lasts.
                  My hope is to create places where families, friends, and
                  communities can gather, and my prayer is that Christ would be
                  present in those moments. If the way we serve, communicate,
                  and care for others plants even one seed that points someone
                  toward Him, then our work has accomplished something far
                  greater than construction alone."</blockquote></div>
          </div>
        </div>
      </section>

      <section id="history" className="gap about-combined-history" aria-labelledby="about-history-title">
        <div className="container">
          <div className="heading"><span>Company history</span><h2 id="about-history-title">A Firm Foundation</h2></div>
          <div className="about-history-grid"><article className="about-history-entry"><h3>2023</h3><p>
                  <span>
                    Chief Stone Construction began with a leap of faith.
                  </span>{" "}
                  When I made the decision to leave my full-time job, I didn’t
                  have a long list of signed contracts or a guaranteed future.
                  But before I walked out the door for the last time, I had
                  already been hired for my very first project, a roof repair.
                  That single opportunity became the foundation of everything
                  Chief Stone Construction is today. What started as one job has
                  grown through hard work, God’s provision, and the trust of
                  people who continue to invite us to take on their dream
                  projects.
                </p></article><article className="about-history-entry"><h3>2023</h3><p>
                  By the end of 2023, God had continued to provide projects and
                  opened an incredible opportunity in Boise, Idaho. My family
                  and I packed everything we owned and moved across the country
                  after I was offered an opportunity to be the General
                  Contractor for a company behind two HGTV shows. The vision was
                  exciting: oversee a portfolio of developments, remodels, and
                  custom projects.Not long after we arrived, those plans
                  changed. The company announced it was downsizing and would no
                  longer be expanding its construction team. While it wasn’t the
                  outcome we expected, we honored our commitment, completed the
                  project we had been entrusted with, and returned home to
                  Oklahoma to begin again.
                </p></article><article className="about-history-entry"><h3>2024</h3><p>
                  On May 18, 2024, we moved into a rental home in Edmond with a
                  fresh start and a renewed determination to build something
                  lasting. Months later, another opportunity arrived. We were
                  invited to bid on a Crumbl Cookie project and we were awarded
                  the contract. Completing that project not only strengthened
                  our business but also gave us the financial foundation to
                  purchase the very home we had been renting.
                </p></article><article className="about-history-entry"><h3>2025</h3><p>
                  In June 2025, we became homeowners. Every step of our journey
                  has reinforced one simple truth: success isn’t built
                  overnight. It’s built through faith, perseverance, excellence,
                  and earning the trust of every client we serve.
                </p></article><article className="about-history-entry"><h3>2026</h3><p>
                  Today, Chief Stone Construction continues to grow one
                  relationship and one project at a time. As we expand our
                  presence across Oklahoma, our mission remains unchanged: to
                  honor God, serve people with excellence, and build spaces that
                  stand the test of time.
                </p></article><article className="about-history-entry"><h3>THE FUTURE</h3><p>
                  Perhaps the Next Chapter Is Yours. We’re just getting started.
                  While we’re proud of where our journey has taken us, we
                  believe the best stories are still ahead. We’d be honored for
                  your home, your family, and your project to become part of the
                  Chief Stone story.
                </p></article></div>
        </div>
      </section>




      <TestimonialSlider />

      <PartnersSlider noTop />
      
      <section className="about-combined-cta container"><h2>Let’s build something that lasts.</h2><ConsultationLink className="consultation-primary">Request a free consultation</ConsultationLink></section>
      </main>
    </Layouts>
    </ConsultationModalProvider>
  );
};
export default About;
