import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/certificates';

const CertificatesSlider = () => {
  return (
    <section className="gap no-top certificates">
        <div className="heading">
            <figure>
                <img src="/img/heading-icon.png" alt="heading-icon" />
            </figure>
            <span>{Data.subtitle}</span>
            <h2>{Data.title}</h2>
        </div>
        <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6" >
                <div className="data">
                    <figure className="c-img">
                        <img src={Data.image.url} alt={Data.image.alt} />
                    </figure>
                    <div className="extras">
                        <h3>{Data.badge.value}</h3>
                        <p>{Data.badge.label}</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6" >
                <div className="data data2">
                    <span>{Data.subheading}</span>
                    <h2>{Data.heading}</h2>
                </div>
                <Swiper
                    {...sliderProps.certificatesSlider}
                    className="swiper-container c-slider"
                >
                    {Data.items.map((item, key) => (
                    <SwiperSlide key={`cs-slide-${key}`} className="swiper-slide">
                    <div className="c-main">
                        <div className="c-first">
                            <figure>
                                <img src={item.image} alt={item.title} />
                            </figure>
                        </div>
                        <div className="c-second">
                            <span>{item.subtitle}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    </div>
                    </SwiperSlide>
                    ))}

                    <div className="swiper-nav">
                        <button className="swiper-nav-prev"><i className="fa-solid fa-arrow-left" /></button>
                        <button className="swiper-nav-next"><i className="fa-solid fa-arrow-right" /></button>
                    </div>
                </Swiper>
            </div>
        </div>
        </div>
    </section>
  );
};
export default CertificatesSlider;
