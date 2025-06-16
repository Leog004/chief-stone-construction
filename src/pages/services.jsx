import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Link from "next/link";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

import { getSortedServicesData } from "@library/services";

import ServicesSection from "@components/sections/Services";

const Services = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Layouts>
      <PageBanner
        pageTitle={"Services"}
        pageDesc={"A healthy home begins with a firm foundation."}
      />
      <ServicesSection />

      {/* Construction Services Start */}
      <section className="gap no-top construction-services">
        <div className="container">
          <Tab.Container
            id="services-tab-content"
            defaultActiveKey="tab-service-0"
          >
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="services-nav">
                  <h2>What We Offer</h2>
                  <Nav variant="pills" className="nav nav-pills mb-3">
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-0">
                        General Contracting
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-1">Roofing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-2">Fencing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tab-service-3">
                        Home Renovation
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className="col-lg-8">
                <Tab.Content>
                  <Tab.Pane eventKey="tab-service-0">
                    <figure>
                      <img
                        className="w-100"
                        src="/img/service3.jpeg"
                        alt="General Contracting"
                      />
                      <figcaption>
                        <h3>General Contracting</h3>
                        <p>
                          From foundations to final touches, we manage every
                          aspect of your project—so you can enjoy the results
                          without the stress.
                        </p>
                        <Link
                          href="/services/service-1"
                          className="icon"
                          style={{
                            cursor: "pointer",
                            padding: "5px 0",
                            color: "#fff",
                          }}
                        >
                          <i className="fa-solid fa-angles-right" /> Learn More
                        </Link>
                      </figcaption>
                    </figure>
                  </Tab.Pane>

                  <Tab.Pane eventKey="tab-service-1">
                    <figure>
                      <img
                        className="w-100"
                        src="/img/service2.jpeg"
                        alt="Roofing"
                      />
                      <figcaption>
                        <h3>Roofing</h3>
                        <p>
                          We install and repair roofs built to protect what
                          matters most—with honesty, reliability, and quality
                          materials.
                        </p>
                        <Link
                          href="/services/service-1"
                          className="icon"
                          style={{
                            cursor: "pointer",
                            padding: "5px 0",
                            color: "#fff",
                          }}
                        >
                          <i className="fa-solid fa-angles-right" /> Learn More
                        </Link>
                      </figcaption>
                    </figure>
                  </Tab.Pane>

                  <Tab.Pane eventKey="tab-service-2">
                    <figure>
                      <img
                        className="w-100"
                        src="/img/service7.jpeg"
                        alt="Fencing"
                      />
                      <figcaption>
                        <h3>Fencing</h3>
                        <p>
                          Whether it’s privacy, safety, or curb appeal—our
                          fences are built to stand strong and fit your life
                          beautifully.
                        </p>
                        <Link
                          href="/services/service-1"
                          className="icon"
                          style={{
                            cursor: "pointer",
                            padding: "5px 0",
                            color: "#fff",
                          }}
                        >
                          <i className="fa-solid fa-angles-right" /> Learn More
                        </Link>
                      </figcaption>
                    </figure>
                  </Tab.Pane>

                  <Tab.Pane eventKey="tab-service-3">
                    <figure>
                      <img
                        className="w-100"
                        src="/img/service9.jpeg"
                        alt="Home Renovation"
                      />
                      <figcaption>
                        <h3>Home Renovation</h3>
                        <p>
                          Transform your space with a team that listens, builds
                          with care, and delivers what you’ve been envisioning.
                        </p>
                        <Link
                          href="/services/service-1"
                          className="icon"
                          style={{
                            cursor: "pointer",
                            padding: "5px 0",
                            color: "#fff",
                          }}
                        >
                          <i className="fa-solid fa-angles-right" /> Learn More
                        </Link>
                      </figcaption>
                    </figure>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
        </div>
      </section>
      {/* Construction Services End */}

      {/* Video PopUp Start */}
      <div className="video-popup">
        <div className="container-fluid g-0">
          <div className="row">
            <figure>
              <img
                className="w-100"
                src="/img/construction.jpeg"
                alt="Video PopUp Image"
              />
            </figure>
            <a
              className="video-play-btn"
              onClick={() => setOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="35"
                height="56"
                viewBox="0 0 35 56"
              >
                {" "}
                <defs>
                  {" "}
                  <clipPath id="clip-video_arrow">
                    {" "}
                    <rect width="35" height="56" />{" "}
                  </clipPath>{" "}
                </defs>{" "}
                <g
                  id="video_arrow"
                  data-name="video arrow"
                  clipPath="url(#clip-video_arrow)"
                >
                  {" "}
                  <path
                    id="Shape_1"
                    data-name="Shape 1"
                    d="M1362,5000.8,1327,4972V5027Z"
                    transform="translate(-1326.998 -4971.996)"
                    fill="rgba(0,0,0,0)"
                  />{" "}
                  <path
                    id="Shape_1_-_Outline"
                    data-name="Shape 1 - Outline"
                    d="M1333,5015.017l19.29-14.437L1333,4984.7v30.313M1327,5027V4972l35,28.807Z"
                    transform="translate(-1326.998 -4971.996)"
                  />{" "}
                </g>{" "}
              </svg>
            </a>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="uemObN8_dcw"
        onClose={() => setOpen(false)}
      />
      {/* Video PopUp Start */}
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices,
    },
  };
}
