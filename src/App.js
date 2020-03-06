import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { fetchProducts } from "./redux/actions/productActions";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import { ROOT_URL } from "./config";


// home pages
const HomeFurnitureTwo = lazy(() => import("./pages/home/HomeFurnitureTwo"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = props => {
  useEffect(() => {
    
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json")
        }
      })
    );

    props.dispatch(
      fetchProducts()
    );

  });

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={ROOT_URL + "/"}
                  component={HomeFurnitureTwo}
                />

                <Route
                  path={ROOT_URL + "/home-furniture-two"}
                  component={HomeFurnitureTwo}
                />

                {/* Shop pages */}
                <Route
                  path={ROOT_URL + "/shop-grid-standard"}
                  component={ShopGridStandard}
                />

                {/* Shop product pages */}
                <Route
                  path={ROOT_URL + "/product/:_id"}
                  render={routeProps => (
                    <Product {...routeProps} key={routeProps.match.params._id} />
                  )}
                />
                {/* Other pages */}
                <Route
                  path={ROOT_URL + "/about"}
                  component={About}
                />
                <Route
                  path={ROOT_URL + "/contact"}
                  component={Contact}
                />
                <Route
                  path={ROOT_URL + "/my-account"}
                  component={MyAccount}
                />
                <Route
                  path={ROOT_URL + "/login-register"}
                  component={LoginRegister}
                />

                <Route
                  path={ROOT_URL + "/cart"}
                  component={Cart}
                />
                <Route
                  path={ROOT_URL + "/wishlist"}
                  component={Wishlist}
                />
                <Route
                  path={ROOT_URL + "/compare"}
                  component={Compare}
                />
                <Route
                  path={ROOT_URL + "/checkout"}
                  component={Checkout}
                />

                <Route
                  path={ROOT_URL + "/not-found"}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(multilanguage(App));
