import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { ROOT_URL } from "../../config";
import { isAuthenticated } from "../../helpers/auth";
import { createProduct, getCategories, getTags } from "../../helpers/apiAdmin";

const UserDashboard = ({ location }) => {
  const { pathname } = location;
  const [previewUrl, setPreviewUrl] = useState();

  const [values, setValues] = useState({
    name: "",
    sku: "",
    price: "",
    discount: "",
    rating: "",
    saleCount: "",
    isnew: false,
    stock: "",
    categories: [],
    tags: [],
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
    loading: false,
    error: "",
    success: false,
    createdProduct: "",
    formData: ""
    // redirectToProfile: false,
  });

  const { user, token } = isAuthenticated();

  const {
    name,               //required
    sku,                //required
    price,              //required
    discount,           //required
    rating,             //required
    saleCount,          //required
    stock,              //required
    categories,         //required
    tags,               //required
    shortDescription,   //required
    fullDescription,
    model,              //required
    performance,
    display,
    os,
    ram,
    storage,
    camera,
    battery,
    loading,
    error,
    success,
    createdProduct,
    formData
    // redirectToProfile,
  } = values;

  const errors = {
    name: "",
    sku: "",
    category: "",
    tag: "",
    price: "",
    discount: "",
    rating: "",
    saleCount: "",
    stock: "",
    shortDescription: "",
    model: ""
  }
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

  const isErrorsEmpty = () => {
    for (let field in errors) {
      if (errors[field] !== "") {
        console.log(`${field}: ${errors[field]}`)
        return false;
      }
    }
    return true;
  }

  const clickSubmit = event => {
    event.preventDefault();
    console.log("isErrorsEmpty " + isErrorsEmpty())
    if (!isErrorsEmpty()) return;

    setValues({ ...values, error: "", createdProduct: "", loading: true });

    createProduct(user._id, token, formData)
      .then(data => {
        if (data.errors) {
          setValues({ ...values, error: data.errors[0].msg, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            sku: "",
            price: "",
            discount: "",
            rating: "",
            saleCount: "",
            isnew: "",
            stock: "",
            image: "",
            shortDescription: "",
            fullDescription: "",
            model: "",
            performance: "",
            display: "",
            os: "",
            ram: "",
            storage: "",
            camera: "",
            battery: "",
            loading: false,
            success: true,
            createdProduct: data.name
          });
        }
      });
  }

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      <h3>{error}</h3>
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      <h3>{`${createdProduct} is created!`}</h3>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2>Loading...</h2>
      </div>
    );


  const checkErrors = (name, value) => {
    switch (name) {
      case 'name':
        errors.name =
          value.length === 0 || value.length < 3
            ? 'Name must not be empty or less than 3 characters long!'
            : '';
        console.log(`name  ${name}`);
        console.log(`errors.name  ${errors.name}`);
        break;
      case 'sku':
        errors.sku =
          value.length === 0 || value.length > 7
            ? 'SKU must not be empty or more than 7 characters long!'
            : '';
        console.log(`sku  ${sku}`);
        console.log(`errors.sku  ${errors.sku}`);
        break;
      case 'category':
        errors.category =
          value.length === 0
            ? 'Category must not be empty!'
            : '';
        //        console.log("category" + category);
        console.log(`errors.category  ${errors.category}`);
        break;
      case 'tag':
        errors.tag =
          value.length === 0
            ? 'Tag must not be empty!'
            : '';
        console.log(`errors.tag  ${errors.tag}`);
        break;

      default:
        break;
    }
  }

  const handleChange = name => event => {
    const value =
      name === "image" ? event.target.files[0] : event.target.value;


    formData.set(name, value);
    setValues({ ...values, error: "", success: false, createdProduct: "", [name]: value });

    checkErrors(name, value);

    if (name === "image") {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };

  const filePickerRef = useRef();

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };


  return (
    <Fragment>
      <BreadcrumbsItem to={ROOT_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={ROOT_URL + pathname}>
        User Dashboard
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {showLoading()}
        {showSuccess()}
        {showError()}

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
                                name="name"
                              />
                              <p>{errors.name}</p>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>SKU code</label>
                              <input
                                onChange={handleChange("sku")}
                                type="text"
                                value={sku}
                                name="sku"
                              />
                              <p>{errors.sku}</p>
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
                                name="price"
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
                                name="discount"
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
                              onChange={handleChange("isnew")}
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
                          <div className="col-lg-12 col-md-12">
                            {/* <div className="billing-info"> */}
                            <label>Image</label>
                            <input
                              type="file"
                              style={{ display: 'none' }}
                              id="fileupload"
                              name="image"
                              accept="image/png, image/jpeg"
                              ref={filePickerRef}
                              onChange={handleChange("image")}
                            />
                            <div className="image-upload__preview">
                              {previewUrl && <img src={previewUrl} alt="Preview" />}
                              {/* {!previewUrl && <p>Please pick an image.</p>} */}
                            </div>

                            <button className="btn btn-primary mt-3 mb-3"
                              onClick={pickImageHandler}
                            >
                              Pick file
                              </button>

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
    </Fragment >
  );
};

UserDashboard.propTypes = {
  location: PropTypes.object
};

export default UserDashboard;
