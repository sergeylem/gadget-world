import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { ROOT_URL } from "../../config";
import { isAuthenticated } from "../../helpers/auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../../helpers/apiAdmin";

const ManageProducts = ({ location }) => {

  const { pathname } = location;

  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getProducts().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const destroy = productId => {
    deleteProduct(productId, user._id, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Fragment>
      <BreadcrumbsItem to={ROOT_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={ROOT_URL + pathname}>
        Manage Products
        </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <div className="container">

          <div className="row">
            <div className="col-12">
              <h2 className="text-center mt-5">
                Total {products.length} products
              </h2>
              {/* <hr /> */}
              <ul className="list-group">
                {products.map((p, i) => (
                  <li
                    key={i}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <strong className="col-lg-8">{p.name}</strong>
                    <div className="col-lg-2" align="center">
                      <Link to={`/admin/product/update/${p._id}`}>
                        <span className="badge badge-warning badge-pill">
                          Update
                        </span>
                      </Link>
                    </div>

                    <div className="col-lg-2" align="center">
                      <span
                        onClick={() => destroy(p._id)}
                        className="badge badge-danger badge-pill"
                      >
                        Delete
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <br />
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>

  )
};

ManageProducts.propTypes = {
  location: PropTypes.object
};

export default ManageProducts;
