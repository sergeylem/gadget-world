import PropTypes from "prop-types";
import React, { Fragment } from "react";
//import HeaderTwo from "../wrappers/header/HeaderTwo";
import FooterTwo from "../wrappers/footer/FooterTwo";
import HeaderOne from "../wrappers/header/HeaderOne";

const LayoutTwo = ({ children }) => {
  return (
    <Fragment>
      <HeaderOne />
      {children}
      <FooterTwo spaceBottomClass="pb-70" />
    </Fragment>
  );
};

LayoutTwo.propTypes = {
  children: PropTypes.any,
  footerBgClass: PropTypes.string
};

export default LayoutTwo;
