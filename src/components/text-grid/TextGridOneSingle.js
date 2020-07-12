import PropTypes from "prop-types";
import React from "react";

const TextGridOneSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-4 d-flex align-items-center">
      <div
        // className={`single-mission ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <h3>{data.title}</h3>
        <p className="mission-font">{data.text}</p>
      </div>
    </div>
  );
};

TextGridOneSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default TextGridOneSingle;
