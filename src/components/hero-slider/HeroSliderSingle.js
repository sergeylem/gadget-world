import PropTypes from "prop-types";
import React from "react";
import { ROOT_URL } from "../../config";

const HeroSliderSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`slider-height-6 d-flex align-items-center justify-content-center bg-img ${
        sliderClass ? sliderClass : ""
      }`}
      style={{ backgroundImage: `url(${ROOT_URL + data.image})` }}
    >
      <div className="slider-content-5 slider-animated-1 text-center">
        <h3 className="animated">{data.title}</h3>
        <h1 className="animated">{data.subtitle}</h1>
        <p className="animated">{data.text}</p>
      </div>
    </div>
  );
};

HeroSliderSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderSingle;
