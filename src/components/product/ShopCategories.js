import PropTypes from "prop-types";
import React from "react";
import { setActiveSort } from "../../helpers/product";
import { Link } from "react-router-dom";
import { ROOT_URL } from "../../config";


const ShopCategories = ({ categories }) => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Categories </h4>
      <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul className="ul-shop-categories"> {/* ! ul has indent to right without this style */}
            <li>
              <div className="sidebar-widget-list-left">
                <Link to={ROOT_URL + "/shop-grid-standard/"}>
                  <button
                    onClick={e => {
                      setActiveSort(e);
                    }}
                  >
                    <span className="checkmark" /> All Categories
                </button>
                </Link>
              </div>
            </li>
            {categories.map((category, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <Link to={ROOT_URL + "/shop-grid-standard/category/" + category}>
                      <button
                        onClick={e => {
                          setActiveSort(e);
                        }}
                      >
                        {" "}
                        <span className="checkmark" />
                        {category} {" "}
                      </button>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
            "No categories found"
          )}
      </div>
    </div>
  );
};

ShopCategories.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopCategories;
