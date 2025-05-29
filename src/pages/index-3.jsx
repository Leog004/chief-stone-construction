import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";

import Hero3Section from "@components/sections/Hero3";
import About3Section from "@components/sections/About3";
import CallToActionSection from "@components/sections/CallToAction";
import OwnersSection from "@components/sections/Owners";
import LocationsSection from "@components/sections/Locations";
import ContactFormSection from "@components/sections/ContactForm";
import LatestPosts2Section from "@components/sections/LatestPosts2";

const ProductsSlider = dynamic( () => import("@components/sliders/Products"), { ssr: false } );
const Projects2Slider = dynamic( () => import("@components/sliders/Projects2"), { ssr: false } );


const Home3 = (props) => {
  return (
    <Layouts contactButton cartButton>
      <>
        <Hero3Section />
        <About3Section />
        <CallToActionSection />
        <ProductsSlider />
        <Projects2Slider projects={props.projects} />
        <OwnersSection />
        <LocationsSection />
        <ContactFormSection />
        <LatestPosts2Section posts={props.posts} />
      </>
    </Layouts>
  );
};
export default Home3;

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