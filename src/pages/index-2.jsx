import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import About2Section from "@components/sections/About2";
import PricingSection from "@components/sections/Pricing";
import ProjectsListSection from "@components/sections/ProjectsList";
import Services2Section from "@components/sections/Services2";
import EstimatedPriceSection from "@components/sections/EstimatedPrice";
import ContactUsSection from "@components/sections/ContactUs";

const Hero2Slider = dynamic( () => import("@components/sliders/Hero2"), { ssr: false } );
const CertificatesSlider = dynamic( () => import("@components/sliders/Certificates"), { ssr: false } );
const LatestPostsSlider = dynamic( () => import("@components/sliders/LatestPosts"), { ssr: false } );


const Home2 = (props) => {
  return (
    <Layouts transparent>
      <>
        <Hero2Slider />
        <About2Section />
        <PricingSection />
        <ProjectsListSection projects={props.projects} />
        <Services2Section />
        <CertificatesSlider />
        <EstimatedPriceSection />
        <LatestPostsSlider posts={props.posts} />
        <ContactUsSection />
      </>
    </Layouts>
  );
};
export default Home2;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allProjects = getSortedProjectsData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects
    }
  }
}