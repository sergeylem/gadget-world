import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { ROOT_URL } from "../../config";

const FooterCopyright = ({ footerLogo, spaceBottomClass }) => {
  return (
    <div className={`copyright ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="footer-logo">
        <Link to={ROOT_URL + "/"}>
          <img alt="" src={ROOT_URL + footerLogo} />
        </Link>
      </div>
      <p>
        © 2020{" "}
          Gadget World
        <br /> All Rights Reserved
      </p>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default FooterCopyright;
