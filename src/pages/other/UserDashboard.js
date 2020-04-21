import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { isAuthenticated } from "../../helpers/auth";
import { createProduct, createSpecification, getCategories, getTags } from "../../helpers/apiAdmin";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { ROOT_URL } from "../../config";

const UserDashboard = ({ location }) => {
  const { pathname } = location;
  const [values, setValues] = useState({
    name: "",
    sku: "",
    price: "",
    discount: "",
    rating: "",
    saleCount: "",
    isNew: false,
    stock: "",
    categories: [],
    tags: [],
    image: "",
    shortDescription: "",
    fullDescription: "",
    specification: "",
    model: "",
    performance: "",
    display: "",
    os: "",
    ram: "",
    storage: "",
    camera: "",
    battery: "",
    // loading: false,
    // error: "",
    // createdProduct: "",
    // redirectToProfile: false,
    formData: ""
  });

  const { user, token } = isAuthenticated();

  const {
    name,
    sku,
    price,
    discount,
    rating,
    saleCount,
    isNew,
    stock,
    categories,
    tags,
    image,
    shortDescription,
    fullDescription,
    specification,
    model,
    performance,
    display,
    os,
    ram,
    storage,
    camera,
    battery,
    // loading,
    // error,
    // createdProduct,
    // redirectToProfile,
    formData
  } = values;

  // load categories and tags 
  const init = () => {
    let categories = [];
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        categories = data;
      }
    });

    getTags().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          categories,
          tags: data,
          formData: new FormData()
        });
      }
    });

  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = name => event => {
    const value = event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = event => {
    event.preventDefault();

    createProduct(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          // name: "",
          // sku: "",
          // price: "",
          // discount: "",
          // rating: "",
          // saleCount: "",
          // isNew: "",
          // stock: "",
          // image: "",
          // shortDescription: "",
          // fullDescription: "",
          // model: "",
          // performance: "",
          // display: "",
          // os: "",
          // ram: "",
          // storage: "",
          // camera: "",
          // battery: ""
          // ,
          //          loading: false,
          //          createdProduct: data.name
        });
      }
    });
  }


  return (
    <Fragment>
      <BreadcrumbsItem to={ROOT_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={ROOT_URL + pathname}>
        User Dashboard
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <form className="myaccount-area pb-80 pt-50"
          onSubmit={clickSubmit}
        >
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Card className="single-my-account mb-20">

                    <Card.Body>
                      <div className="myaccount-info-wrapper">
                        <div className="account-info-wrapper">
                          <h4>Product creation form</h4>
                          {/* <h5>Your Personal Details</h5> */}
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Name</label>
                              <input
                                onChange={handleChange("name")}
                                type="text"
                                value={name}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>SKU code</label>
                              <input
                                onChange={handleChange("sku")}
                                type="text"
                                value={sku}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <label>Category</label>
                            <select className='form-control'
                              onChange={handleChange("category")}
                            >
                              <option>Please select</option>
                              {categories &&
                                categories.map((c, i) => (
                                  <option key={i} value={c._id}>
                                    {c.name}
                                  </option>
                                ))}
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <label>Tag</label>
                            <select className='form-control'
                              onChange={handleChange("tag")}
                            >
                              <option>Please select</option>
                              {tags &&
                                tags.map((c, i) => (
                                  <option key={i} value={c._id}>
                                    {c.name}
                                  </option>
                                ))}
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mt-20">
                              <label>Price</label>
                              <input
                                onChange={handleChange("price")}
                                type="number"
                                value={price}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mt-20">
                              <label>Discount</label>
                              <input
                                onChange={handleChange("discount")}
                                type="number"
                                value={discount}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Rating</label>
                              <input
                                onChange={handleChange("rating")}
                                type="number"
                                value={rating}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Sale count</label>
                              <input
                                onChange={handleChange("saleCount")}
                                type="number"
                                value={saleCount}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <label>New</label>
                            <select className='form-control'
                            // onChange={handleChange("isNew")}
                            >
                              <option>Please select</option>
                              <option value="1">Yes</option>
                              <option value="0">No</option>
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Stock</label>
                              <input
                                onChange={handleChange("stock")}
                                type="number"
                                value={stock}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Image path</label>
                              <input
                                onChange={handleChange("image")}
                                type="text"
                                value={image}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <label>Short description</label>
                            <div className="billing-info">
                              <input
                                onChange={handleChange("shortDescription")}
                                type="text"
                                value={shortDescription}
                              />
                            </div >
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                              <label>Full description</label>
                              <input
                                onChange={handleChange("fullDescription")}
                                type="text"
                                value={fullDescription}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="account-info-wrapper mt-30">
                          <h4>Specification</h4>
                          {/* <h5>Your Personal Details</h5> */}
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Model</label>
                              <input
                                onChange={handleChange("model")}
                                type="text"
                                value={model}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Performance</label>
                              <input
                                onChange={handleChange("performance")}
                                type="text"
                                value={performance}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Display</label>
                              <input
                                onChange={handleChange("display")}
                                type="text"
                                value={display}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Operation System</label>
                              <input
                                onChange={handleChange("os")}
                                type="text"
                                value={os}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mt-20">
                              <label>Ram</label>
                              <input
                                onChange={handleChange("ram")}
                                type="text"
                                value={ram}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mt-20">
                              <label>Storage</label>
                              <input
                                onChange={handleChange("storage")}
                                type="text"
                                value={storage}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Camera</label>
                              <input
                                onChange={handleChange("camera")}
                                type="text"
                                value={camera}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Battery</label>
                              <input
                                onChange={handleChange("battery")}
                                type="text"
                                value={battery}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="billing-back-btn">
                          <div className="billing-btn">
                            <button type="submit">Add</button>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </form>
      </LayoutOne>
    </Fragment>
  );
};

UserDashboard.propTypes = {
  location: PropTypes.object
};

export default UserDashboard;
