import PropTypes from "prop-types";
import React from "react";
import { setActiveSort } from "../../helpers/product";
import { setCategory } from "../../redux/actions/productActions";
import { connect } from "react-redux";

const ShopCategories = ({ categories, getSortParams }) => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Categories </h4>
      <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button
                  onClick={e => {
                    getSortParams("category", "");
                    setActiveSort(e);
                  }}
                >
                  <span className="checkmark" /> All Categories
                </button>
              </div>
            </li>
            {categories.map((category, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={e => {
                        setCategory(category);
                        getSortParams("category", category);
                        console.log("from shop categories:" + category);
                        setActiveSort(e);
                      }}
                    >
                      {" "}
                      <span className="checkmark" /> {category}{" "}
                    </button>
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

const mapDispatchToProps = dispatch => {
  return {
    setCategory: category => {
      dispatch(setCategory(category));
    }
  };
};


export default connect(null, mapDispatchToProps)(ShopCategories);
