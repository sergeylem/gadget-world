import React from "react";
import Swiper from "react-id-swiper";
import sliderData from "../../data/hero-sliders/hero-slider.json";
import HeroSliderSingle from "../../components/hero-slider/HeroSliderSingle.js";
const HeroSlider = () => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };
  return (
    <div className="slider-area">
      <div className="container">
        <div className="slider-active-3 slider-hm8">
          <Swiper {...params}>
            {sliderData &&
              sliderData.map((single, key) => {
                return (
                  <HeroSliderSingle
                    data={single}
                    key={key}
                    sliderClass="swiper-slide"
                  />
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
