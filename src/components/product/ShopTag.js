import PropTypes from "prop-types";
import React from "react";
import { setActiveSort } from "../../helpers/product";
import { Link } from "react-router-dom";
import { ROOT_URL } from "../../config";

const ShopTag = ({ tags }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Tag </h4>
      <div className="sidebar-widget-tag mt-25">
        {tags ? (
          <ul className = 'ul-shop-tags'>
            {tags.map((tag, key) => {
              return (
                <li key={key}>
                  <Link to={ROOT_URL + "/shop-grid-standard/tag/" + tag}>
                    <button
                      onClick={e => {
                        // getSortParams("tag", tag);
                        setActiveSort(e);
                      }}
                    >
                      {tag}
                    </button>
                  </Link>

                </li>
              );
            })}
          </ul>
        ) : (
            "No tags found"
          )}
      </div>
    </div>
  );
};

ShopTag.propTypes = {
  getSortParams: PropTypes.func,
  tags: PropTypes.array
};

export default ShopTag;
