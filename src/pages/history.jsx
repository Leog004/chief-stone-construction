import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CallToActionSection from "@components/sections/CallToAction";

const History = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"History"} pageDesc={"Built With Purpose"} />

      {/* History Start */}
      <section className="gap history detail-page">
        <div className="heading">
          <span>COMPANY HISTORY</span>
          <h2>A Firm Foundation</h2>
        </div>
        <div className="container spacee">
          <div className="timeline" id="timeline">
            <div className="fill" style={{ height: "20px" }}></div>
          </div>
          <div className="row left first">
            <div className="col-lg-5">
              <div className="h-box">
                <figure>
                  <img src="/img/slide1.jpeg" alt="History Image One" />
                </figure>
                <h2>2023</h2>
                <p>
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
                </p>
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="col-lg-5 offset-lg-7">
              <div className="h-box">
                <figure>
                  <img src="/img/pricing1.jpeg" alt="History Image Two" />
                </figure>
                <h2>2023</h2>
                <p>
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
                </p>
              </div>
            </div>
          </div>
          <div className="row full">
            <div className="col-lg-12">
              <div className="h-box">
                <figure>
                  <img src="/img/project1.jpeg" alt="History Image Six" />
                </figure>
                <h2>2024</h2>
                <p>
                  On May 18, 2024, we moved into a rental home in Edmond with a
                  fresh start and a renewed determination to build something
                  lasting. Months later, another opportunity arrived. We were
                  invited to bid on a Crumbl Cookie project and we were awarded
                  the contract. Completing that project not only strengthened
                  our business but also gave us the financial foundation to
                  purchase the very home we had been renting.
                </p>
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="col-lg-5 offset-lg-7">
              <div className="h-box">
                <figure>
                  <img src="/img/articles3.jpeg" alt="History Image Three" />
                </figure>
                <h2>2025</h2>
                <p>
                  In June 2025, we became homeowners. Every step of our journey
                  has reinforced one simple truth: success isn’t built
                  overnight. It’s built through faith, perseverance, excellence,
                  and earning the trust of every client we serve.
                </p>
              </div>
            </div>
          </div>
          <div className="row left">
            <div className="col-lg-5">
              <div className="h-box">
                <figure>
                  <img src="/img/articles4.jpeg" alt="History Image Four" />
                </figure>
                <h2>2026</h2>
                <p>
                  Today, Chief Stone Construction continues to grow one
                  relationship and one project at a time. As we expand our
                  presence across Oklahoma, our mission remains unchanged: to
                  honor God, serve people with excellence, and build spaces that
                  stand the test of time.
                </p>
              </div>
            </div>
          </div>
          <div className="row right">
            <div className="col-lg-5 offset-lg-7">
              <div className="h-box">
                <figure>
                  <img src="/img/about1.jpeg" alt="History Image Five" />
                </figure>
                <h2>THE FUTURE</h2>
                <p>
                  Perhaps the Next Chapter Is Yours. We’re just getting started.
                  While we’re proud of where our journey has taken us, we
                  believe the best stories are still ahead. We’d be honored for
                  your home, your family, and your project to become part of the
                  Chief Stone story.
                </p>
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
