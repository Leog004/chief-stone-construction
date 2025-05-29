import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/team';

const TeamSlider = ({ noTop }) => {
  return (
    <section className={noTop == 1 ? "gap no-top team-style-one" : "gap team-style-one"}>
        <div className="heading-style-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="data">
                            <span>{Data.subtitle}</span>
                            <h2>{Data.title}</h2>
                        </div>
                    </div> 
                    <div className="col-lg-6 col-md-4">
                        <div className="team-slider-nav">
                            <button className="swiper-nav-prev"><i className='fa-solid fa-angles-left' /></button>
                            <button className="swiper-nav-next"><i className='fa-solid fa-angles-right' /></button>
                        </div>
                    </div>         
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Swiper
                        {...sliderProps.teamSlider}
                        className="swiper-container team-slider"
                    >
                        {Data.items.map((item, key) => (
                        <SwiperSlide key={`tms-slide-${key}`} className="swiper-slide">
                        <div className="team-data">
                            <div className="team-image">
                                <figure>
                                    <img src={item.image} alt={item.title} />
                                </figure>
                            </div>
                            <div className="team-info">
                                <h3>{item.name}</h3>
                                <p>{item.role}</p>
                                <div className="team-social-media">
                                    {item.social.map((social, social_key) => (
                                    <a key={`tsocial-item-${social_key}`} className="icon" href={social.link} target="_blank">
                                        <i className={social.icon} />
                                    </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
  );
};
export default TeamSlider;
