import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import AboutSection from "@components/sections/About";
import CallToActionSection from "@components/sections/CallToAction";
import ImageView from "@components/ImageView";

const CoreValues = () => {
  return (
    <Layouts>
      <ImageView />

      <PageBanner pageTitle={"Core Values"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      <AboutSection />

      {/* Core Values Start */}
      <section className="gap no-top core-values">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>MAKE A DIFFERENCE</span>
          <h2>Our Core Values</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <div className="data">
                  <h3>Integrity</h3>
                  <p>We are caring—with a deep concern for and kindness to one another. We believe in the boundless potential of all people and feel a great responsibility to uplift one another and our families, and positively impact our communities.</p>
                </div>
                <div className="image">
                  <figure>
                    <img className="w-100" src="/img/core-2.jpeg" alt="Core Values Image 1" />
                  </figure>
                </div>
              </li>
              <li>
                <div className="image">
                  <figure>
                    <img className="w-100" src="/img/about2.jpeg" alt="Core Values Image 1" />
                  </figure>
                </div>
                <div className="data">
                  <h3>Responsibility</h3>
                  <p>We are caring—with a deep concern for and kindness to one another. We believe in the boundless potential of all people and feel a great responsibility to uplift one another and our families, and positively impact our communities.</p>
                </div>
              </li>
              <li>
                <div className="data">
                  <h3>Accountability</h3>
                  <p>We are caring—with a deep concern for and kindness to one another. We believe in the boundless potential of all people and feel a great responsibility to uplift one another and our families, and positively impact our communities.</p>
                </div>
                <div className="image">
                  <figure>
                    <img className="w-100" src="/img/core-1.jpeg" alt="Core Values Image 1" />
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
                  <img className="img-fluid w-100" src="/img/gallery-1.jpeg" alt="Gallery 1" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-2.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-2.jpeg" alt="Gallery 2" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-3.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-3.jpeg" alt="Gallery 3" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-4.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-4.jpeg" alt="Gallery 4" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-5.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-5.jpeg" alt="Gallery 5" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-6.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-6.jpeg" alt="Gallery 6" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-7.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-7.jpeg" alt="Gallery 7" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-8.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-8.jpeg" alt="Gallery 8" />
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
          <span>MAKE A DIFFERENCE</span>
          <h2>Innovation in Action</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <i className="fa-solid fa-check" />
                <p>Dedication to client satisfaction</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Dedication to client satisfaction</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Dedication to client satisfaction</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Dedication to client satisfaction</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Dedication to client satisfaction</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Dedication to client satisfaction</p>
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