import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import CountersSection from "@components/sections/Counters";
import FeaturesSection from "@components/sections/Features";
import RenovationSection from "@components/sections/Renovation";
import LatestPostsSection from "@components/sections/LatestPosts";

const HeroSlider = dynamic( () => import("@components/sliders/Hero"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );
const ProjectsSlider = dynamic( () => import("@components/sliders/Projects"), { ssr: false } );
const TeamSlider = dynamic( () => import("@components/sliders/Team"), { ssr: false } );

const Home1 = (props) => {
  return (
    <Layouts transparent>
      <>
        <HeroSlider />
        <ServicesSection />
        <AboutSection />
        <CountersSection />
        <ProjectsSlider projects={props.projects} />
        <TeamSlider />
        <FeaturesSection />
        <PartnersSlider />
        <RenovationSection />
        <TestimonialSlider />
        <LatestPostsSection posts={props.posts} />
      </>
    </Layouts>
  );
};
export default Home1;

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