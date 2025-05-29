import Data from "@data/sliders/latest-posts.json";
import Date from '@library/date';
import Link from "next/link";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const LatestPostsSlider = ( { posts } ) => {
    return (
        <section className="gap blog-style-two">
            <div className="heading">
                <figure>
                    <img src="/img/heading-icon.png" alt="heading-icon" />
                </figure>
                <span>{Data.subtitle}</span>
                <h2>{Data.title}</h2>
            </div>
            <div className="container">
                <Swiper
                    {...sliderProps.blogSlider}
                    className="swiper-container blog-slider row"
                >
                    {posts.slice(0, Data.numOfItems).map((item, key) => (
                    <SwiperSlide key={`bs-slide-${key}`} className="swiper-slide">
                    <div className="blog-item col-lg-12">
                        <span className="blog-post-num">{key+1}.</span>
                        <span className="blog-date"><Date dateString={item.date} /></span>
                        <h2><Link href={`/blog/${item.id}`}>{item.title}</Link></h2>
                        <p>{item.short}</p>
                        <Link href={`/blog/${item.id}`}>
                            <i className="fa-solid fa-arrow-up-long"></i>
                        </Link>
                    </div>
                    </SwiperSlide>
                    ))}
                    <div className="swiper-pagination" />
                </Swiper>
            </div>
        </section>
    );
};

export default LatestPostsSlider;