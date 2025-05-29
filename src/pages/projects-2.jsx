import Layouts from "@layouts/Layouts";
import Link from "next/link";

import { getSortedProjectsData } from "@library/projects";

import PageBanner from "@components/PageBanner";

const Portfolio = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Our Projects"} pageDesc={"our values and vaulted us to the top of our industry."} />

      {/* Our Project Two Start */}
      <section className="gap project-style-one addition">
        <div className="container">
          <div className="row project-slider">
            {props.projects.map((item, key) => (
            <div key={`projects-item-${key}`} className="col-lg-6">
              <div className="project-post">
                <figure>
                  <img className="w-100" src={item.image} alt={item.title} />
                </figure>
                <div className="project-data">
                    <h3><Link href={`/projects/${item.id}`}>{item.title}</Link></h3>
                    <p>{item.short}</p>
                    <Link className="project-icon" href={`/projects/${item.id}`}>
                      <i className="fa-solid fa-angles-right" />
                    </Link>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

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
      {/* Our Project Two End */}
      
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