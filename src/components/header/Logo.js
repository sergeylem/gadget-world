import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { ROOT_URL } from "../../config";

const Logo = ({ imageUrl, logoClass }) => {
  return (
    <div className={`${logoClass ? logoClass : ""}`}>
      <Link to={ROOT_URL + "/"}>
        <img alt="" src={ROOT_URL + imageUrl} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string
};

export default Logo;
