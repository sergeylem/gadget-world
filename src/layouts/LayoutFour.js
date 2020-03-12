import PropTypes from "prop-types";
import React, { Fragment } from "react";
//import HeaderThree from "../wrappers/header/HeaderThree";
import FooterThree from "../wrappers/footer/FooterThree";
import HeaderOne from "../wrappers/header/HeaderOne";

const LayoutFour = ({ children }) => {
  return (
    <Fragment>
      <HeaderOne />
      {children}
      <FooterThree spaceBottomClass="pb-70" />
    </Fragment>
  );
};

LayoutFour.propTypes = {
  children: PropTypes.any,
  footerBgClass: PropTypes.string
};

export default LayoutFour;
