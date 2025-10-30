import dynamic from "next/dynamic";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CountersSection from "@components/sections/Counters";
import RenovationSection from "@components/sections/Renovation";

const TeamSlider = dynamic( () => import("@components/sliders/Team"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const About = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"About Us"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* About-First Start */}
      <section className="gap about-first">
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

      <CountersSection />

      {/*About How It Works Start */}
      <section className="gap about-how-it-works light-bg-color">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Plans -&gt; Execution</span>
          <h2>How it Works</h2>
        </div>
        <div className="container">
          <figure style={{"position": "relative", "zIndex": "9"}}>
            <img className="w-100" src="/img/gallery-2.jpeg" alt="About How It Works" />
          </figure>
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  1.
                </div>
                <h3>Consultation</h3>
                <p>This step connects your project ideas with our construction expert.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  2.
                </div>
                <h3>Design Full Plan</h3>
                <p>We work with you to establish a detailed plan for reaching our goals.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  3.
                </div>
                <h3>Coordinated Timeline</h3>
                <p>This process creates a start point for each trade and their timeline coordinations for the whole project.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  4.
                </div>
                <h3>Quality Control</h3>
                <p>Ensuring the best materials are used and deliveries come undamaged, we will ensure each part of the project is done with the best care. Then we finish the project with a walk through and approval from the owners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About How It Works End */}

      {/*About Key Benefits Start */}
      <section className="gap about-key-benefits">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" >
              <div className="data">
                <figure>
                  <img className="w-100" src="/img/service2.jpeg" alt="About key Benefits" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="data">
                <h2>Key Benefits</h2>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Coordination with key parties involved throughout the entire process from start to finish.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p> A good material management system, proper communication, and scheduling.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Faster material deliveries and start dates.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Excellent quality</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Key Benefits End */}

      <TeamSlider noTop />

      <RenovationSection />

      <TestimonialSlider />

      <PartnersSlider noTop />
      
    </Layouts>
  );
};
export default About;