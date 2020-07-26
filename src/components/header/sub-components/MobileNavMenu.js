import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
import { ROOT_URL } from "../../../config";
import { isAuthenticated } from "../../../helpers/auth";

const MobileNavMenu = ({ strings }) => {
  const { user } = isAuthenticated();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={ROOT_URL + "/"}>{strings["home"]}</Link>
          {/* <ul className="sub-menu">
            <li className="menu-item-has-children">
                  <Link to={ROOT_URL + "/home-furniture-two"}>
                    {strings["home_furniture_two"]}
                  </Link>
            </li>
          </ul> */}
        </li>

        <li className="menu-item-has-children">
          <Link to={ROOT_URL + "/shop-grid-standard"}>
            {strings["shop"]}
          </Link>
        </li>
        {/* <li>
          <Link to={ROOT_URL + "/shop-grid-standard"}>
            {strings["collection"]}
          </Link>
        </li> */}
        <li className="menu-item-has-children">
          <Link to={ROOT_URL + "/"}>{strings["pages"]}</Link>
          <ul className="sub-menu">
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
              {(user && user.role === 1) && (
                <Link to={ROOT_URL + "/my-account"}>
                  {strings["my_account"]}
                </Link>
              )}
            </li>
            <li>
              {(user && user.role === 1) && (
                <Link to={ROOT_URL + "/add-product"}>
                  {strings["add_product"]}
                </Link>
              )}
            </li>
            <li>
              {(user && user.role === 1) && (
                <Link to={ROOT_URL + "/manage-products"}>
                  {strings["manage_products"]}
                </Link>
              )}
            </li>
            <li>
              {(user && user.role === 1) && (
                <Link to={ROOT_URL + "/add-category"}>
                  {strings["create_category"]}
                </Link>
              )}
            </li>
            <li>
              {(user && user.role === 1) && (
                <Link to={ROOT_URL + "/add-tag"}>
                  {strings["create_tag"]}
                </Link>
              )}
            </li>
            <li>
              <Link to={ROOT_URL + "/login"}>
                {strings["form_login"]}
              </Link>
            </li>
            <li>
              <Link to={ROOT_URL + "/register"}>
                {strings["form_register"]}
              </Link>
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
            {/* <li>
              <Link to={ROOT_URL + "/not-found"}>
                {strings["404_page"]}
              </Link>
            </li> */}
          </ul>
        </li>
        <li>
          <Link to={ROOT_URL + "/contact"}>
            {strings["contact_us"]}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

MobileNavMenu.propTypes = {
  strings: PropTypes.object
};

export default multilanguage(MobileNavMenu);
