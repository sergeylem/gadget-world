import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { ROOT_URL } from "../../config";

const Product = ({ location, product }) => {
  const { pathname } = location;
  
  return (
    <Fragment>
      <MetaTags>
        <title>Gadget World | Product Page</title>
        <meta
          name="description"
          content="Product page of eCommerce."
        />
      </MetaTags>

      <BreadcrumbsItem to={ROOT_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={ROOT_URL + pathname}>
        Shop Product
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />

        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.fullDescription}
          productModel={product.model}
          productPerformance={product.performance}
          productStorage={product.storage}
          productCamera={product.camera}
          productBattery={product.battery}
          productDisplay={product.display}
          productRam={product.ram}
        />

        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category[0]}
        />
      </LayoutOne>
    </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params._id;  // _id bacause in the App.js path={ROOT_URL + "/product/:_id"}
  return {
    product: state.productData.products.filter(
      single => single._id === itemId
    )[0]
  };
};

export default connect(mapStateToProps)(Product);
