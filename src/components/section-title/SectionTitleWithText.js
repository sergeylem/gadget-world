import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          {/* <h5>Who Are We</h5>
          <h1>Welcome To Gadget World</h1> */}
          <p>
            Welcome to Gadget World, your number one source for electronic devices.
            We provide a wide range of products – from
            computers and smartphones to gaming equipment. It is our main duty to ensure the high
            quality of the products, reasonable prices and the quickest delivery to any part of the world.
            We're dedicated to giving you the very best of products with a focus on dependability,
            customer service and uniqueness. It is also within our priorities to keep our customers up to
            date by providing them with the latest products at the market of electronic devices.
            We hope you enjoy our products as much as we enjoy offering them to you.
          </p>
          <p>
            If you have any questions or comments, please don't hesitate to contact us. {" "}
          </p>
          <p className='font-italic mt-3'>
            The team of Gadget World
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
