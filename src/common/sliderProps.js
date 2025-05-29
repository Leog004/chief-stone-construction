import SwiperCore, {
  A11y,
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
} from "swiper";

SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
  Pagination,
  HashNavigation,
  History,
  Thumbs,
  Scrollbar,
  Keyboard,
  A11y,
]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const sliderProps = {
  heroSlider: {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    parallax: true,
    loop: true,
    navigation: {
      prevEl: ".swiper-nav-prev",
      nextEl: ".swiper-nav-next",
    },
  },
  hero2Slider: {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    parallax: true,
    loop: false,
    navigation: {
      prevEl: ".f-2-s-nav .swiper-nav-prev",
      nextEl: ".f-2-s-nav .swiper-nav-next",
    },
  },
  partnersSlider: {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 800,
    autoplay: {
      delay: 4000,
    },
  },
  testimonialSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  },
  projectsSlider: {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 800,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  },
  projects2Slider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 4000,
    },
    navigation: {
      prevEl: ".prj-slider-nav .swiper-nav-prev",
      nextEl: ".prj-slider-nav .swiper-nav-next",
    },
  },
  teamSlider: {
    slidesPerView: 'auto',
    spaceBetween: 30,
    speed: 800,
    loop: true,
    centeredSlides: true,
    navigation: {
      prevEl: ".team-slider-nav .swiper-nav-prev",
      nextEl: ".team-slider-nav .swiper-nav-next",
    },
  },
  certificatesSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: ".c-slider .swiper-nav-prev",
      nextEl: ".c-slider .swiper-nav-next",
    },
  },
  blogSlider: {
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  },
  productsSlider: {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  },
  projDetailsSlider: {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  },
};
