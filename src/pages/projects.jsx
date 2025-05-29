import Layouts from "@layouts/Layouts";
import Link from "next/link";

import { getSortedProjectsData } from "@library/projects";

import PageBanner from "@components/PageBanner";

const Portfolio = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Our Projects"} pageDesc={"our values and vaulted us to the top of our industry."} />

      {/* Our Project One Start */}
      <section className="gap no-top project-completed our-projects-one">
        {props.projects.map((item, key) => (
        <div key={`projects-item-${key}`} className="prj-post">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3><Link href={`/projects/${item.id}`}>{item.title}</Link></h3>
                  <p>{item.short}</p>
                  <div className="loc-date">
                    <div>
                      <span>LOCATION:</span>
                      <span>{item.location}</span>
                    </div>
                    <div>
                      <span>DATE:</span>
                      <span>{item.dates}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}

        <div className="container">
          <div className="row">
            <div className="builty-pagination">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#."><i className='fa-solid fa-arrow-left-long'></i></a></li>
                  <li className="page-item"><a className="page-link" href="#.">01</a></li>
                  <li className="page-item"><a className="page-link" href="#.">02</a></li>
                  <li className="page-item"><a className="page-link" href="#.">03</a></li>
                  <li className="page-item space"><a className="page-link" href="#.">..........</a></li>
                  <li className="page-item"><a className="page-link" href="#.">08</a></li>
                  <li className="page-item"><a className="page-link" href="#."><i className='fa-solid fa-arrow-right-long'></i> </a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Our Project One End */}
      
    </Layouts>
  );
};
export default Portfolio;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects
    }
  }
}