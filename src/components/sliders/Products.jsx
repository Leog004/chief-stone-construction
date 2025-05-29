import Data from "@data/sliders/products.json";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const ProductsSlider = () => {

    return (
        <section className="gap shop-style-one">
            <div className="heading">
                <figure>
                    <img src="/img/heading-icon.png" alt="heading-icon" />
                </figure>
                <span>{Data.subtitle}</span>
                <h2>{Data.title}</h2>
            </div>
            <div className="container">
                <Swiper
                    {...sliderProps.productsSlider}
                    className="swiper-container row p-slider"
                >
                    {Data.items.map((item, key) => (
                    <SwiperSlide key={`prs-slide-${key}`} className="swiper-slide">
                    <div className="col-lg-12">
                        <div className="product">
                            <figure>
                                <img className="w-100" src={item.image} alt={item.title} />
                            </figure>
                            <div className="ratings">
                                <i className="fa-solid fa-star" />
                                <span>{item.rating}</span>
                            </div>
                            <h3><Link href="/product-detail">{item.title}</Link></h3>
                            <div className="price-range" dangerouslySetInnerHTML={{__html : item.price}} />
                        </div>
                    </div>
                    </SwiperSlide>
                    ))}

                    <div className="swiper-pagination" />
                </Swiper>
            </div>
        </section>
    );
};

export default ProductsSlider;