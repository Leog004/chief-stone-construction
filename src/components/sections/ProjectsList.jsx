import { useEffect } from "react";
import { projectsListHover } from "@common/utilits";
import Data from "@data/sections/projects-list.json";
import Link from "next/link";

const ProjectsListSection = ( { projects } ) => {
    useEffect(() => {
        projectsListHover();
    }, []);

    return (
        <section className="gap what-we-build">
            <div className="parallax" style={{"backgroundImage": "url(/images/pattren-5.png)" }} />
            <div className="heading-style-2">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="data">
                            <span>{Data.subtitle}</span>
                            <h2>{Data.title}</h2>
                        </div>
                    </div> 
                    <div className="col-lg-6">
                    </div>         
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <ul className="wwb-ul">
                    {projects.slice(0, Data.numOfItems).map((item, key) => (
                    <li key={`projectslist-item-${key}`} className={key == 0 ? "active" : ""}>
                        <h3>
                            <Link href={`/projects/${item.id}`}>{item.title}</Link>
                        </h3>
                        <span className="location">
                            <span>LOCATION:</span>
                            <span>{item.location}</span>
                        </span>
                        <figure>
                            <img src={item.image} alt={item.title} />
                        </figure>
                    </li>
                    ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ProjectsListSection;