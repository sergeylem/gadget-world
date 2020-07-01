import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import Paginator from 'react-hooks-paginator';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { getSortedProducts } from '../../helpers/product';
import LayoutOne from '../../layouts/LayoutOne';
import Breadcrumb from '../../wrappers/breadcrumb/Breadcrumb';
import ShopSidebar from '../../wrappers/product/ShopSidebar';
import ShopTopbar from '../../wrappers/product/ShopTopbar';
import ShopProducts from '../../wrappers/product/ShopProducts';
import { ROOT_URL } from "../../config";
import { connect } from 'react-redux';

const ShopGridStandard = ({ location, products }) => {
  const [layout, setLayout] = useState('grid three-column');
  
  const { pathname } = location;
  let foundType = "";
  const c = pathname.lastIndexOf("category/");
  const t = pathname.lastIndexOf("tag/");
  if (c > -1) {
    foundType = "category"
  } else {
    if (t > -1) {
      foundType = "tag"
    }
  }

  const n = pathname.lastIndexOf("/");
  const foundTypeValue = pathname.slice(n + 1);

  const [sortType, setSortType] = useState(foundType);
  const [sortValue, setSortValue] = useState(foundTypeValue);

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 15;

  const getLayout = (layout) => {
    setLayout(layout)
  }

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));

    setSortType(foundType);
    setSortValue(foundTypeValue);
  }, [foundType, foundTypeValue, offset, products, sortType, sortValue]);

  return (
    <Fragment>
      <MetaTags>
        <title>Gadget World | Shop Page</title>
        <meta name="description" content="Shop page of eCommerce." />
      </MetaTags>

      <BreadcrumbsItem to={ROOT_URL + '/'}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={ROOT_URL + pathname}>Shop</BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 order-2 order-lg-1">
                {/* shop sidebar */}
                <ShopSidebar products={products} sideSpaceClass="mr-30" />
              </div>
              <div className="col-lg-9 order-1 order-lg-2">
                {/* shop topbar default */}
                <ShopTopbar getLayout={getLayout} 
                  productCount={products.length} sortedProductCount={currentData.length} />

                {/* shop page content default */}
                <ShopProducts layout={layout} products={currentData} />

                {/* shop product pagination */}
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  )
}

ShopGridStandard.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array
}

const mapStateToProps = state => {
  return {
    products: state.productData.products
  }
}

export default connect(mapStateToProps)(ShopGridStandard);
