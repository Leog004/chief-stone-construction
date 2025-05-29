import Data from "@data/sliders/projects-2.json";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const Projects2Slider = ( { projects } ) => {

    return (
        <section className="gap project-completed">
            <div className="heading-style-2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="data">
                                <span>{Data.subtitle}</span>
                                <h2>{Data.title}</h2>
                            </div>
                        </div> 
                        <div className="col-lg-6 col-md-6">
                            <div className="prj-slider-nav">
                                <button className="swiper-nav-prev"><i className="fa-solid fa-arrow-left" /></button>
                                <button className="swiper-nav-next"><i className="fa-solid fa-arrow-right" /></button>
                            </div>
                        </div>       
                    </div>
                </div>
            </div>
            
            <Swiper
                {...sliderProps.projects2Slider}
                className="swiper-container container-fluid prj-slider g-0"
            >
                {projects.slice(0, Data.numOfItems).map((item, key) => (
                <SwiperSlide key={`pj2s-slide-${key}`} className="swiper-slide">
                <div className="row g-0 align-items-center overflow-hidden">
                    <div className="col-lg-6">
                        <div className="proj-data">
                            <h3>{item.title}</h3>
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
                        <div className="proj-image">
                            <figure>
                                <Link href={`/projects/${item.id}`}><img src={item.image} alt={item.title} /></Link>
                            </figure>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Projects2Slider;