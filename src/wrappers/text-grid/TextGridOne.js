import PropTypes from "prop-types";
import React from "react";
import textGridData from "../../data/text-grid/text-grid-one.json";
import TextGridOneSingle from "../../components/text-grid/TextGridOneSingle.js";
import { ROOT_URL } from "../../config";

const TextGridOne = ({ spaceBottomClass }) => {
  return (
    <div
      className={`about-mission-area ${
        spaceBottomClass ? spaceBottomClass : ""
        }`}
    >
      <div className="container">
        <div className="row">
          <img className="ourteam-img"
            src={ROOT_URL + "/assets/img/about/team.jpg"} alt=""
          />

          <TextGridOneSingle
            data={textGridData}
            spaceBottomClass="mb-30"
          />
        </div>
      </div>
    </div>
  );
};

TextGridOne.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default TextGridOne;
