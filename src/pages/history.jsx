import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const History = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"History"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* History Start */}
      <section className="gap history detail-page">
        <div className="heading">
          <span>COMPANY History</span>
          <h2>A strong foundation</h2>
        </div>
        <div className="container spacee">
          <div className="timeline" id="timeline">
            <div className="fill" style={{"height": "20px"}}>
              
            </div>
          </div>
          <div className="row left first">
            <div className="col-lg-5">
              <div className="h-box">
                <figure>
                  <img src="/img/slide1.jpeg" alt="History Image One" />
                </figure>
                <h2>1982</h2>
                <p><span>Thomas Willimes starts the company,</span> managing construction of our first office building in Chelsea, Mass.</p>
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="col-lg-5 offset-lg-7">
              <div className="h-box">
                <figure>
                  <img src="/img/pricing1.jpeg" alt="History Image Two" />
                </figure>
                <h2>1994</h2>
                <p>Our company embraces snowbird status and expands to West Palm Beach—our first office outside New England.</p>
              </div>
            </div>
          </div>
          <div className="row full">
            <div className="col-lg-12">
              <div className="h-box">
                <figure>
                  <img src="/img/project1.jpeg" alt="History Image Six" />
                </figure>
                <h2>2004</h2>
                <p>The Career Start program officially launches, recruiting college graduates into robust construction training rotations.</p>
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="col-lg-5 offset-lg-7">
              <div className="h-box">
                <figure>
                  <img src="/img/articles3.jpeg" alt="History Image Three" />
                </figure>
                <h2>2010</h2>
                <p>Certified firms to learn our approach, make connections, and grow their businesses.</p>
              </div>
            </div>
          </div>
          <div className="row left">
            <div className="col-lg-5">
              <div className="h-box">
                <figure>
                  <img src="/img/articles4.jpeg" alt="History Image Four" />
                </figure>
                <h2>2017</h2>
                <p>starts Safer Together, our safety program that emphasizes people and teamwork.</p>
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="col-lg-5 offset-lg-7">
              <div className="h-box">
                <figure>
                  <img src="/img/about1.jpeg" alt="History Image Five" />
                </figure>
                <h2>2021</h2>
                <p>highly collaborative design-build process that is revolutionizing the real estate development lifecycle</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* History End */}
      
      <CallToActionSection />
    </Layouts>
  );
};
export default History;