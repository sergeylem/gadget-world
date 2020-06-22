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
const HomeShop = lazy(() => import("./pages/home/HomeShop"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const AddProduct = lazy(() => import("./pages/other/AddProduct"));
const UpdateProduct = lazy(() => import("./pages/other/UpdateProduct"));
const ManageProducts = lazy(() => import("./pages/other/ManageProducts"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const Login = lazy(() => import("./pages/other/Login"));
const Register = lazy(() => import("./pages/other/Register"));
const AddCategory = lazy(() => import("./pages/other/AddCategory"));
const AddTag = lazy(() => import("./pages/other/AddTag"));

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
          en: require("./translations/english.json")
          //,
          // fn: require("./translations/french.json"),
          // de: require("./translations/germany.json")
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
                <div className="shop-preloader-wrapper">
                  <div className="shop-preloader">
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
                  component={HomeShop}
                />

                <Route
                  path={ROOT_URL + "/home-furniture-two"}
                  component={HomeShop}
                />

                {/* Shop pages */}
                <Route
                  path={ROOT_URL + "/shop-grid-standard"}
                  component={ShopGridStandard}
                />

                {/* AddProduct pages */}
                <Route
                  path={ROOT_URL + "/add-product"}
                  component={AddProduct}
                />

                {/* UpdateProduct pages */}
                <Route
                  path={ROOT_URL + "/admin/product/update/:productId"}
                  component={UpdateProduct}
                />

                {/* ManageProducts pages */}
                <Route
                  path={ROOT_URL + "/manage-products"}
                  component={ManageProducts}
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
                  path={ROOT_URL + "/login"}
                  component={Login}
                />

                <Route
                  path={ROOT_URL + "/register"}
                  component={Register}
                />

                <Route
                  path={ROOT_URL + "/add-tag"}
                  component={AddTag}
                />

                <Route
                  path={ROOT_URL + "/add-category"}
                  component={AddCategory}
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

                {/* <Route
                  path={ROOT_URL + "/not-found"}
                  component={NotFound}
                /> */}

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

