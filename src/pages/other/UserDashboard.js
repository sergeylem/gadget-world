import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { ROOT_URL } from "../../config";

const UserDashboard = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <BreadcrumbsItem to={ROOT_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={ROOT_URL + pathname}>
        User Dashboard
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="myaccount-area pb-80 pt-50">
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
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>SKU code</label>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <label>Category</label>
                            <select className='form-control'>
                              <option>Please select</option>
                              <option value="Notebook">Notebook</option>
                              <option value="Smartphone">Smartphone</option>
                              <option value="Watch">Watch</option>
                              <option value="Tablet">Tablet</option>
                              <option value="Accessories">Accessories</option>
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <label>Tag</label>
                            <select className='form-control'>
                              <option>Please select</option>
                              <option value="Apple">Apple</option>
                              <option value="Sony">Sony</option>
                              <option value="Samsung">Samsung</option>
                              <option value="Huawei">Huawei</option>
                              <option value="Xiaomi">Xiaomi</option>
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mt-20">
                              <label>Price</label>
                              <input type="number" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mt-20">
                              <label>Discount</label>
                              <input type="number" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Rating</label>
                              <input type="number" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Sale count</label>
                              <input type="number" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <label>New</label>
                            <select className='form-control'>
                              <option>Please select</option>
                              <option value="true">True</option>
                              <option value="false">False</option>
                            </select>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Stock</label>
                              <input type="number" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Image path</label>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                              <label>Short description</label>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                              <label>Full description</label>
                              <input type="text" />
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
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Performance</label>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Display</label>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Operation System</label>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mt-20">
                              <label>Ram</label>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mt-20">
                              <label>Storage</label>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Camera</label>
                              <input type="text" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Battery</label>
                              <input type="text" />
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
        </div>
      </LayoutOne>
    </Fragment>
  );
};

UserDashboard.propTypes = {
  location: PropTypes.object
};

export default UserDashboard;
