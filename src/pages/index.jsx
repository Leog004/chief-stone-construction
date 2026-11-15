import ConsultationModalProvider from "@components/ConsultationModal";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

import About3Section from "@components/sections/About3";
import ConsultationForm from "@components/ConsultationForm";
import RenovationSection from "@components/sections/Renovation";
import Hero3Section from "@components/sections/Hero3";

const Projects2Slider = dynamic(() => import("@components/sliders/Projects2"), {
  ssr: false,
});

const Home3 = (props) => {
  return (
    <ConsultationModalProvider>
    <Layouts homeHeader>
      <>
        <Hero3Section />
        <section className="gap contact-form-2 home-consultation" id="consultation" aria-labelledby="home-consultation-title">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="data home-consultation-intro">
                  <span>Let’s plan your next project</span>
                  <h2 id="home-consultation-title">Start your free consultation.</h2>
                  <p>Choose your services and tell us what matters most. We’ll help you explore materials, scope and next steps.</p>
                  <p>Not sure about measurements or budget? That’s okay—you can leave those details for our conversation.</p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="data"><ConsultationForm /></div>
              </div>
            </div>
          </div>
        </section>
        <About3Section />
        <Projects2Slider projects={props.projects} />
        <RenovationSection />
      </>
    </Layouts>
    </ConsultationModalProvider>
  );
};
export default Home3;

export async function getStaticProps() {
  const allProjects = getSortedProjectsData();

  return {
    props: {
      projects: allProjects,
    },
  };
}
