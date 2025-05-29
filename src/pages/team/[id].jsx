import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";

import { getAllTeamIds, getTeamData } from "@library/team";
import { getFeaturedProjectsData } from "@library/projects";

const TeamDetail = ( { postData, projects } ) => {
  return (
    <Layouts>
      <PageBanner pageTitle="Team Detail" pageDesc={"our values and vaulted us to the top of our industry."} />

      {/* Blog Style Three Start */}
      <section className="gap blog-style-one team-detail detail-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row align-items-end">
                <div className="col-lg-6">
                  <div className="team-data">
                    <h3>{postData.name}</h3>
                    <p>{postData.role}</p>
                    {typeof postData.info != "undefined" &&
                    <ul className="t-contact">
                      {postData.info.map((item, key) => (
                      <li key={`info-item-${key}`}>
                        <span>{item.label}</span>
                        <p>{item.value}</p>
                      </li>
                      ))}
                    </ul>
                    }
                    {typeof postData.social != "undefined" &&
                    <ul className="t-social">
                      {postData.social.map((item, key) => (
                      <li key={`teamsocial-item-${key}`}>
                        <a href={item.link} target="_blank" style={{backgroundColor: item.color }}>
                          <p>{item.title}</p>
                          <i className={item.icon} />
                        </a>
                      </li>
                      ))}
                    </ul>
                    }
                    <div className="t-tel">
                      <div className="data">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="62" viewBox="0 0 40 62"> <defs> <clipPath id="fsddffsdfsdfsdf"> <rect width="40" height="62"/> </clipPath> </defs> <g id="Mobsfddfsdile" clipPath="url(#fsddffsdfsdfsdf)"> <path id="Pafdth_1dfhgfhgjjdfhgddffgdfgdfgdfgdfgd" data-name="Path 1" d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z" transform="translate(1 1)"/> <path id="Padfth_2" data-name="Path 2" d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z" transform="translate(14 48)"/> </g></svg>
                        <div className="t-sec">
                          <p>Telephone:</p>
                          {typeof postData.tel != "undefined" &&
                          <span><b>Tel:</b>  {postData.tel}</span>
                          }
                          {typeof postData.fax != "undefined" &&
                          <span><b>Fax:</b>  {postData.fax}</span>
                          }
                        </div>
                      </div>
                      <Link href="/contact" className="theme-btn">
                        Get a Consultation 
                        <i className="fa-solid fa-angles-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="image">
                    <figure>
                      <img src={postData.image} alt={postData.name} />
                    </figure>
                  </div>
                </div>
              </div>

              {postData.contentHtml != "" &&
              <div className="row">
                <div className="t-detail">
                  <div dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
                </div>
              </div>
              }

              {typeof postData.projects != "undefined" &&
              <div className="fav-project">
                <h3>Favorite Project</h3>
                <div className="row">
                  {projects.map((item, key) => (
                  <div key={`fprojects-item-${key}`} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="f-p-box">
                      <h2><Link href={`/projects/${item.id}`}>{item.title}</Link></h2>
                      <ul className="f-p-contact">
                      <li>
                          <span>Location:</span>
                          <p>{item.location}</p>
                      </li>
                      </ul>
                      <Link className="f-p-btn" href={`/projects/${item.id}`}>
                          <i className="fa-solid fa-arrow-up-long" />
                      </Link>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              }
            </div>
          </div>
        </div>
      </section>
      {/* Blog Style Three End */}

    </Layouts>
  );
};
export default TeamDetail;

export async function getStaticPaths() {
    const paths = getAllTeamIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getTeamData(params.id)
    const projects = await getFeaturedProjectsData(postData.projects)
    
    return {
      props: {
        postData,
        projects
      }
    }
}