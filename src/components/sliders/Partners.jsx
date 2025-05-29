import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/partners';

const PartnersSlider = ({ noTop }) => {
  return (
    <div className={noTop == 1 ? "gap no-top client-style-one" : "gap client-style-one"}>
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <Swiper
                {...sliderProps.partnersSlider}
                className="swiper-container client-slider"
            >
                {Data.items.map((item, key) => (
                <SwiperSlide key={`ps-slide-${key}`} className="swiper-slide">
                <img className="w-auto m-auto" src={item.image} alt={item.alt} />
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
        </div>
    </div>
  );
};
export default PartnersSlider;
