import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/testimonial';

const TestimonialSlider = () => {
  return (
    <section className="gap client-review-style-one">
        <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6" >
                <div className="head-review">
                    <span>{Data.subtitle}</span>
                    <h3>{Data.title}</h3>
                </div>
                <Swiper
                    {...sliderProps.testimonialSlider}
                    className="swiper-container client-review-slider"
                >
                {Data.items.map((item, key) => (
                <SwiperSlide key={`tts-slide-${key}`} className="swiper-slide">
                    <div className="slider-data">
                        <p>{item.text}</p>
                        <div className="bio d-flex-all justify-content-start w-100">
                            <div className="icon d-flex-all">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="26" height="26" viewBox="0 0 26 26"> <defs> <clipPath id="clip-Inverted"> <rect width="26" height="26"/> </clipPath> </defs> <g id="Inverted_" data-name="Inverted commas flaky" clipPath="url(#clip-Inverted)"> <path id="Path_3444" data-name="Path 3" d="M.032,24.036V14.478l-.032,0V8.991C.4.4,9.086,0,9.086,0V5.961c-3.535,0-3.555,3.03-3.555,3.03v4.045h5.5v11ZM0,8.991Z" transform="translate(14 0.964)"/> <path id="Path_weee4" data-name="Path 4" d="M.032,24.036V14.478l-.032,0V8.991C.4.4,9.086,0,9.086,0V5.961c-3.535,0-3.555,3.03-3.555,3.03v4.045h5.5v11ZM0,8.991Z" transform="translate(0.969 0.964)"/> </g> </svg>
                            </div>
                            <div className="details w-100">
                                <h3>{item.name}</h3>
                                <p>{item.role}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
                <div className="swiper-pagination" />
                </Swiper>
            </div>
            <div className="col-lg-6" >
                <figure>
                    <img src={Data.image.url} alt={Data.image.alt} />
                </figure>
            </div>
        </div>
        </div>
    </section>
  );
};
export default TestimonialSlider;
