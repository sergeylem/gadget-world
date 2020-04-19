import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
//import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { ROOT_URL } from "../../config";
import { authenticate, signup } from "../../helpers/auth";


const Register = ({ location }) => {
  const { pathname } = location;

  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    error: "",
    success: false
  });

  const { name, surname, email, password, success, error } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, surname,  email, password }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            success: true, // Check it !!!
            redirectToReferrer: true
          });
        });
      }
    });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New account is created. {/* Please <Link to="/login">Login</Link> */}
    </div>
  );

  return (
    <Fragment>
      <BreadcrumbsItem to={ROOT_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={ROOT_URL + pathname}>
        Register
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
                  <Tab.Container defaultActiveKey="register">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                onChange={handleChange("name")}
                                name="name"
                                type="text"
                                placeholder="Name"
                              />
                              <input
                                onChange={handleChange("surname")}
                                name="surname"
                                type="text"
                                placeholder="Surname"
                              />
                              <input
                                onChange={handleChange("email")}
                                name="email"
                                type="email"
                                placeholder="Email"
                              />
                              <input
                                onChange={handleChange("password")}
                                name="password"
                                type="password"
                                placeholder="Password"
                              />
                              <div className="button-box">
                                <button onClick={clickSubmit}>
                                  <span>Register</span>
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

Register.propTypes = {
  location: PropTypes.object
};

export default Register;
