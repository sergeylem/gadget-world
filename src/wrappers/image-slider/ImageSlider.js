import React from "react";
import Swiper from "react-id-swiper";
//import ImageSliderSingle from "../../components/image-slider/ImageSliderSingle";
//import imageData from "../../data/image-slider/image-slider-one.json";

const ImageSlider = () => {
  const settings = {
    loop: false,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };

  return (
    <div className="image-slider-area">
      <div className="image-slider-active">
        <Swiper {...settings}>
          {imageData &&
            imageData.map((single, key) => {
              return (
                <ImageSliderSingle
                  data={single}
                  sliderClass="swiper-slide"
                  key={key}
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
