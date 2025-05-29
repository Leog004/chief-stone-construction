import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/hero-2';
import Link from "next/link";

const Hero2Slider = () => {
  return (
    <section className="featured-slider-two">
        <div className="parallax" style={{"backgroundImage": "url(/images/pattren-4.png)"}} />
        <div className="f-2-s-nav">
            <button className="swiper-nav-prev"><i className="fa-solid fa-arrow-left" /></button>
            <button className="swiper-nav-next"><i className="fa-solid fa-arrow-right" /></button>
        </div>
        <div className="container">
            <Swiper
                {...sliderProps.hero2Slider}
                className="swiper-container row f-2-slider"
            >
                {Data.items.map((item, key) => (
                <SwiperSlide key={`h2s-slide-${key}`} className="swiper-slide">
                <div className="s-item">
                    <div className="s-first">
                        <h1>{item.title}</h1>
                        <p>{item.text}</p>
                        <Link href={item.button.link} className="theme-btn">
                            {item.button.label}
                            <i className="fa-solid fa-angles-right" />
                        </Link>
                    </div>
                    <div className="s-second">
                        <figure>
                            <img src={item.image} alt={item.title} />
                        </figure>
                    </div>
                </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  );
};
export default Hero2Slider;