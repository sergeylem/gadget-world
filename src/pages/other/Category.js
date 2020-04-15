import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { ROOT_URL } from "../../config";
import { isAuthenticated } from "../../helpers/auth";
import { createCategory } from "../../helpers/apiAdmin";

const Category = ({ location }) => {
  const { pathname } = location;

  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  const handleChange = e => {
    setError("");
    setSuccess(false);
    setName(e.target.value);    
  };

  const clickSubmit = e => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // make request to api to create category
    createCategory(user._id, token, { name }).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  // const showError = () => {
  //   if (error) {
  //       return <h3 className="text-danger">Category should be unique</h3>;
  //   }
  // };

  const showError = () => (
    <div
      className="alert alert-danger text-center"
      style={{ display: error ? "" : "none" }}
    >
      <h3>{error}</h3>
    </div>
  );

  // const showSuccess = () => {
  //   if (success) {
  //     return <h3 className="text-success">{name} is created</h3>;
  //   }
  // };

  const showSuccess = () => {
    if (success) {
      return (
        <div
          className="alert alert-success text-center"
          style={{ display: name ? "" : "none" }}
        >
          <h3><a href="#" class="alert-link">{`${name}`}</a> is created!</h3>
        </div>
      );
    }
  }

  return (
    <Fragment>
      <BreadcrumbsItem to={ROOT_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={ROOT_URL + pathname}>
        Category
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        {showSuccess()}  {/* Change into spinner!!! */}
        {showError()}     {/* It's should be tested more deeply !!! */}
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Create category</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                onChange={handleChange}
                                value={name}
                                type="text"
                                placeholder="Category"
                              />
                              <div className="button-box">
                                <button onClick={clickSubmit}>
                                  <span>Create</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Category.propTypes = {
  location: PropTypes.object
};

export default Category;
