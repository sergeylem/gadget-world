import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { ROOT_URL } from "../../config";

const BannerSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className={`single-banner ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <Link to={ROOT_URL + data.link}>
          <img src={ROOT_URL + data.image} alt="" />
        </Link>
        <div className="banner-content">
          <h3>{data.title}</h3>
          <h4>
            {data.subtitle} <span>{data.price}</span>
          </h4>
          <Link to={ROOT_URL + data.link}>
            <i className="fa fa-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

BannerSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerSingle;
