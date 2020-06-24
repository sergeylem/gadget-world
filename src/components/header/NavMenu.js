import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { ROOT_URL } from "../../config";
import { signout, isAuthenticated } from "../../helpers/auth";

const NavMenu = ({ strings, menuWhiteClass, sidebarMenu, history }) => {

  const [path, setPath] = useState(ROOT_URL + "");
  return (
    <div
      className={` ${
        sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`
        } `}
    >
      <nav>
        <ul>
          <li>
            <Link to={ROOT_URL + "/"}>
              {strings["home"]}
              {/* {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )} */}
            </Link>
          </li>

          <li>
            <Link to={ROOT_URL + "/shop-grid-standard"}>
              {" "}
              {strings["shop"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                  <i className="fa fa-angle-down" />
                )}
            </Link>
            <ul className="mega-menu">
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={ROOT_URL + "/shop-grid-standard"}>
                      {strings["shop_products"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROOT_URL + "/shop-grid-standard"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/smartphone.jpg") }}
                    >
                      {strings["shop_smartphone"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROOT_URL + "/shop-grid-filter"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/tablet.jpg") }}
                    >
                      {strings["shop_tablet"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROOT_URL + "/shop-grid-two-column"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/watch.jpg") }}
                    >
                      {strings["shop_wearable"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROOT_URL + "/shop-grid-no-sidebar"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/camera.jpg") }}
                    >
                      {strings["shop_camera"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROOT_URL + "/shop-grid-full-width"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/macbook.jpg") }}
                    >
                      {strings["shop_laptop"]}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={ROOT_URL + "/shop-grid-right-sidebar"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/drone.jpg") }}
                    >
                      {strings["shop_drone"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROOT_URL + "/shop-list-standard"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/headphone.jpg") }}
                    >
                      {strings["shop_accessories"]}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-title">
                    <Link to={ROOT_URL + "/product/1"}>
                      {strings["product_vendors"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROOT_URL + "/product/1"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/logo-apple.jpg") }}
                      >
                      {strings["product_apple"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROOT_URL + "/product-tab-left/1"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/logo-samsung.jpg") }}
                      >
                      {strings["product_samsung"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROOT_URL + "/product-tab-right/1"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/logo-huawei.jpg") }}
                      >
                      {strings["product_huawei"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROOT_URL + "/product-sticky/1"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/logo-хiaomi.jpg") }}
                    >
                      {strings["product_xiaomi"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROOT_URL + "/product-slider/1"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/logo-meizu.jpg") }}
                      >
                      {strings["product_meizu"]}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={ROOT_URL + "/product-fixed-image/1"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/logo-oppo.jpg") }}
                    >
                      {strings["product_oppo"]}
                    </Link>
                  </li>
                  <li>
                    <Link to={ROOT_URL + "/product/8"}
                      onMouseEnter={() => { setPath(ROOT_URL + "/assets/img/banner/logo-zte.jpg") }}
                    >
                      {strings["product_zte"]}
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="mega-menu-img">
                    <Link to={ROOT_URL + "/shop-grid-standard"}>
                      <img className="menu-image-one"
                        src={
                          path
                        }
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to={ROOT_URL + "/shop-grid-standard"}>
              {strings["collection"]}
            </Link>
          </li>
          <li>
            <Link to={ROOT_URL + "/"}>
              {strings["pages"]}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                  <i className="fa fa-angle-down" />
                )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={ROOT_URL + "/cart"}>
                  {strings["cart"]}
                </Link>
              </li>
              <li>
                <Link to={ROOT_URL + "/checkout"}>
                  {strings["checkout"]}
                </Link>
              </li>
              <li>
                <Link to={ROOT_URL + "/wishlist"}>
                  {strings["wishlist"]}
                </Link>
              </li>
              <li>
                <Link to={ROOT_URL + "/compare"}>
                  {strings["compare"]}
                </Link>
              </li>
              <li>
                <Link to={ROOT_URL + "/my-account"}>
                  {strings["my_account"]}
                </Link>
              </li>
              <li>
                <Link to={ROOT_URL + "/add-product"}>
                  {strings["add_product"]}
                </Link>
              </li>
              <li>
                <Link to={ROOT_URL + "/manage-products"}>
                  {strings["manage_products"]}
                </Link>
              </li>
              <li>
                <Link to={ROOT_URL + "/add-category"}>
                  {strings["create_category"]}
                </Link>
              </li>
              <li>
                <Link to={ROOT_URL + "/add-tag"}>
                  {strings["create_tag"]}
                </Link>
              </li>
              <li>
                <Link to={ROOT_URL + "/register"}>
                  {strings["form_register"]}
                </Link>
              </li>
              <li>
                {isAuthenticated() ? (
                  <Link to={ROOT_URL + "/"}
                    onClick={() =>
                      signout(() => {
                        history.push("/");
                      })
                    }
                  >
                    {strings["form_logout"]}
                  </Link>
                ) : (
                    <Link to={ROOT_URL + "/login"}>
                      {strings["form_login"]}
                    </Link>
                  )}
              </li>
              <li>
                <Link to={ROOT_URL + "/about"}>
                  {strings["about_us"]}
                </Link>
              </li>
              <li>
                <Link to={ROOT_URL + "/contact"}>
                  {strings["contact_us"]}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={ROOT_URL + "/contact"}>
              {strings["contact_us"]}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
  strings: PropTypes.object
};

export default multilanguage(withRouter(NavMenu));
//export default NavMenu;