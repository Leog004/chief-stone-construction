import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedProjectsData } from "@library/projects";

import About3Section from "@components/sections/About3";
import CallToActionSection from "@components/sections/CallToAction";
import ContactFormSection from "@components/sections/ContactForm";
import Hero3Section from "@components/sections/Hero3";

const Projects2Slider = dynamic(() => import("@components/sliders/Projects2"), {
  ssr: false,
});

const Home3 = (props) => {
  return (
    <Layouts>
      <>
        <Hero3Section />
        <About3Section />
        {/* <CallToActionSection /> */}
        <Projects2Slider projects={props.projects} />
        <ContactFormSection />
      </>
    </Layouts>
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
