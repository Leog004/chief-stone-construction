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
            <h2>Construction industry representing the interests of small and medium-sized building companies</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>Who We Are?</h3>
                  <p>We are resolute in our mission to not only make a difference to the lives of people today but to also leave a legacy for future generations and the planet we live in. Our portfolio includes dozens of successfully completed projects of houses of different storeys, with high–quality finishes and good repairs. Building houses is our vocation!</p>
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
                    <li><i className="fa-solid fa-circle-dot" /> High performing, low carbon concrete solution</li>
                    <li><i className="fa-solid fa-circle-dot" /> Value for workers' skills</li>
                    <li><i className="fa-solid fa-circle-dot" /> Excellent standards in construction</li>
                    <li><i className="fa-solid fa-circle-dot" /> An inclusive industry</li>
                    <li><i className="fa-solid fa-circle-dot" /> Don't take our word for it</li>
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
          <span>Plan + Control</span>
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
                <h3>Phase Plan</h3>
                <p>This step connects the design process and its miles tones with construction.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  2.
                </div>
                <h3>Design Pull Plan</h3>
                <p>We work with the design team to establish a detailed plan for reaching our goals.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  3.
                </div>
                <h3>Coordinated Layout</h3>
                <p>This process creates a single point of truth: drawings all project.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  4.
                </div>
                <h3>Quality Control</h3>
                <p>Having geometry worked out in the Layout step, prior to construction.</p>
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
                    <p>Labor expenses are a common target for cost reduction measures in the construction industry</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p> A good material management system includes proper communication, scheduling,  and tracking tools.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Faster supplies can be used upon delivery to a construction site, the better.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Effective material management systems not only ensure that materials are in the right place</p>
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