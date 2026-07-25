import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import AboutSection from "@components/sections/About";
import CallToActionSection from "@components/sections/CallToAction";
import ImageView from "@components/ImageView";

const CoreValues = () => {
  return (
    <Layouts>
      <ImageView />

      <PageBanner
        pageTitle={"Core Values"}
        pageDesc={
          "Built on faith, driven by integrity, committed to excellence."
        }
      />

      <AboutSection />

      {/* Core Values Start */}
      <section className="gap no-top core-values">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>COLOSSIANS 3:23</span>
          <h2>Our Core Values</h2>
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

      <CallToActionSection />
    </Layouts>
  );
};
export default CoreValues;
