import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useState, useMemo } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

import {
  getSortedProjectsData,
  getAllProjectsIds,
  getProjectData,
  getRelatedProjects,
} from "@library/projects";

import RelatedProjectsSection from "@components/RelatedProjects";
import ContactFormSection from "@/src/components/sections/ContactForm";

const ProjectDetail = (props) => {
  const postData = props.data;

  // prev/next project ids
  let prev_id,
    next_id,
    prev_key,
    next_key = 0;
  props.projects.forEach(function (item, key) {
    if (item.id == postData.id) {
      prev_key = key - 1;
      next_key = key + 1;
    }
  });
  props.projects.forEach(function (item, key) {
    if (key == prev_key) prev_id = item.id;
    if (key == next_key) next_id = item.id;
  });

  // Lightbox state
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Swiper control state
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(() => {
    if (!postData?.slider?.items) return [];
    return postData.slider.items.map((it) => ({
      src: it.image,
      alt: it.alt,
      title: it.caption,
    }));
  }, [postData]);

  return (
    <Layouts>
      <PageBanner pageTitle={"Project Details"} pageDesc={postData.title} />

      <section className="gap detail-page">
        <div className="container">
          <ul className="next-prev-projects">
            {prev_id != 0 && prev_id != undefined && (
              <li className="prev">
                <Link href={`/projects/${prev_id}`}>
                  <i className="fa-solid fa-arrow-left-long" />
                </Link>
              </li>
            )}
            {next_id != 0 && next_id != undefined && (
              <li className="next">
                <Link href={`/projects/${next_id}`}>
                  <i className="fa-solid fa-arrow-right-long" />
                </Link>
              </li>
            )}
          </ul>

          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="pr-dat">
                <div className="heading-style-2">
                  <div className="container p-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="data">
                          <span>Project Overview</span>
                          <h2>{postData.title}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Detail Slider */}
                {Array.isArray(postData?.slider?.items) &&
                  postData.slider.items.length > 0 && (
                    <>
                      <div className="no-top project-detail-slider">
                        <div className="container-fluid g-0">
                          <div
                            className="pds-slider-wrap"
                            style={{ position: "relative" }}
                          >
                            <Swiper
                              {...sliderProps.projDetailsSlider}
                              onSwiper={setSwiperInstance}
                              onSlideChange={(s) =>
                                setCurrentSlide(s.activeIndex)
                              }
                              className="p-d-slider"
                            >
                              {postData.slider.items.map((item, key) => (
                                <SwiperSlide
                                  key={`pds-slide-${key}`}
                                  className="swiper-slide"
                                >
                                  <figure
                                    style={{
                                      cursor: "zoom-in",
                                      position: "relative",
                                    }}
                                    onClick={() => {
                                      setIndex(key);
                                      setOpen(true);
                                    }}
                                    title="Click to zoom"
                                  >
                                    <img src={item.image} alt={item.alt} />
                                    {item.caption && (
                                      <div
                                        style={{
                                          position: "absolute",
                                          bottom: "20px",
                                          left: "50%",
                                          transform: "translateX(-50%)",
                                          padding: "0.5rem 1rem",
                                          background: "rgba(0,0,0,0.6)",
                                          borderRadius: "6px",
                                          color: "#fff",
                                          fontSize: "0.9rem",
                                          maxWidth: "90%",
                                          textAlign: "center",
                                        }}
                                      >
                                        {item.caption}
                                      </div>
                                    )}
                                  </figure>
                                </SwiperSlide>
                              ))}
                            </Swiper>

                            {/* Custom arrows controlled with useState */}
                            <button
                              onClick={() => swiperInstance?.slidePrev()}
                              disabled={currentSlide === 0}
                              className="pds-prev"
                              aria-label="Previous"
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "12px",
                                transform: "translateY(-50%)",
                                zIndex: 10,
                                background: "rgba(0,0,0,0.55)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "50%",
                                width: "44px",
                                height: "44px",
                                cursor: "pointer",
                              }}
                            >
                              <i className="fa-solid fa-arrow-left"></i>
                            </button>
                            <button
                              onClick={() => swiperInstance?.slideNext()}
                              disabled={
                                currentSlide === postData.slider.items.length - 1
                              }
                              className="pds-next"
                              aria-label="Next"
                              style={{
                                position: "absolute",
                                top: "50%",
                                right: "12px",
                                transform: "translateY(-50%)",
                                zIndex: 10,
                                background: "rgba(0,0,0,0.55)",
                                color: "#fff",
                                border: "none",
                                borderRadius: "50%",
                                width: "44px",
                                height: "44px",
                                cursor: "pointer",
                              }}
                            >
                              <i className="fa-solid fa-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Lightbox */}
                      {open && (
                        <Lightbox
                          open={open}
                          close={() => setOpen(false)}
                          index={index}
                          slides={slides}
                          plugins={[Zoom, Fullscreen]}
                          carousel={{ finite: false }}
                          zoom={{ scrollToZoom: true, maxZoomPixelRatio: 2.5 }}
                          render={{
                            slideFooter: ({ slide }) =>
                              slide.title && (
                                <div
                                  style={{
                                    position: "absolute",
                                    bottom: "20px",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    padding: "0.5rem 1rem",
                                    background: "rgba(0,0,0,0.6)",
                                    borderRadius: "6px",
                                    color: "#fff",
                                    fontSize: "0.9rem",
                                    maxWidth: "90%",
                                    textAlign: "center",
                                  }}
                                >
                                  {slide.title}
                                </div>
                              ),
                          }}
                        />
                      )}
                    </>
                  )}

                {/* Project content */}
                {postData.contentHtml != "" && (
                  <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                  />
                )}

                {/* Checklist */}
                {typeof postData.checklist != "undefined" && (
                  <>
                    <h3>{postData.checklist.title}</h3>
                    <ul className="include">
                      {postData.checklist.items.map((item, key) => (
                        <li key={`checklist-item-${key}`}>
                          <i className="fa-solid fa-check" /> {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Details */}
                {typeof postData.details != "undefined" && (
                  <div className="row space">
                    {postData.details.items.map((item, key) => (
                      <div
                        key={`details-item-${key}`}
                        className="col-lg-6 col-md-6 col-sm-12"
                      >
                        <div className="project-d-detail">
                          <div className="data">
                            <h3>{item.label}</h3>
                            <p>{item.value}</p>
                          </div>
                          <div className="d-flex-all icon">
                            <img src={item.icon} alt={item.alt} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProjectsSection projects={props.related} />
      <ContactFormSection />
    </Layouts>
  );
};

export default ProjectDetail;

export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.id);
  const relatedPosts = await getRelatedProjects(params.id);
  const allProjects = await getSortedProjectsData();
  return {
    props: { data: postData, related: relatedPosts, projects: allProjects },
  };
}
