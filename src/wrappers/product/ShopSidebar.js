import PropTypes from "prop-types";
import React from "react";
import {
  getIndividualCategories,
  getIndividualTags
} from "../../helpers/product";
import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
import ShopTag from "../../components/product/ShopTag";

const ShopSidebar = ({ products, getSortParams, sideSpaceClass }) => {
  const uniqueCategories = getIndividualCategories(products);
  const uniqueTags = getIndividualTags(products);

  return (
    <div className={`sidebar-style ${sideSpaceClass ? sideSpaceClass : ""}`}>
      {/* shop search */}
      <ShopSearch />

      {/* filter by categories */}
      <ShopCategories categories={uniqueCategories} />

      {/* filter by tag */}
      <ShopTag tags={uniqueTags} />
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string
};

export default ShopSidebar;
