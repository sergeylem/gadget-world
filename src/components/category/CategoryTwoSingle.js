import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { ROOT_URL } from "../../config";


const CategoryTwoSingle = ({ data, sliderClass }) => {
  return (
    <div className={`collection-product ${sliderClass ? sliderClass : ""}`}>
      <div className="collection-img">
        <Link to={ROOT_URL + data.link + "/" + data.title}> {/* Added + "/" + data.title */}
          <img src={ROOT_URL + data.image} alt="" />
        </Link>
      </div>
      <div className="collection-content text-center">
        <span>{data.subtitle}</span>
        <h4>
          <Link to={ROOT_URL + data.link}>{data.title}</Link>
        </h4>
      </div>
    </div>
  );
};

CategoryTwoSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default CategoryTwoSingle;
