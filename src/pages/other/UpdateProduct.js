import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { ROOT_URL } from "../../config";
import { isAuthenticated } from "../../helpers/auth";
import { getProduct, updateProduct, getCategories, getTags } from "../../helpers/apiAdmin";
import { isFieldsValidity } from "../../helpers/isFieldsValidity";

const UpdateProduct = ({ match }) => {
  const [previewUrl, setPreviewUrl] = useState();
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    sku: "",
    category: "",
    tag: "",
    price: "",
    discount: "",
    rating: "",
    saleCount: "",
    isNew: "",
    stock: "",
    shortDescription: "",
    model: "",
    performance: "",
    storage: "",
    camera: "",
    battery: "",
    display: "",
    ram: "",
    os: "",
  });

  const [values, setValues] = useState({
    name: "",
    sku: "",
    price: "",
    discount: "",
    rating: "",
    saleCount: "",
    stock: "",
    // category: "",
    // tag: "",
    categories: [],
    tags: [],
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
    error: "",
    success: false,
    updatedProduct: "",
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
    stock,
    // category,
    // tag,
    categories,
    tags,
    shortDescription,
    fullDescription,
    model,
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
    updatedProduct,
    formData
  } = values;


  const init = (productId) => {
    getProduct(productId).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: data.name,
          sku: data.sku,
          price: data.price,
          discount: data.discount,
          rating: data.rating,
          saleCount: data.saleCount,
          isnew: data.isnew,
          stock: data.stock,
          category: data.category,
          tag: data.tag,
          shortDescription: data.shortDescription,
          fullDescription: data.fullDescription,
          model: data.model,
          performance: data.performance,
          display: data.display,
          os: data.os,
          ram: data.ram,
          storage: data.storage,
          camera: data.camera,
          battery: data.battery,
          formData: new FormData()
        });
      }
    });
    // load categories
    initCategories();
  };

  // load categories and set form data
  const initCategories = () => {
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
          //  ...values, //!!! so all values are now "" after initialization
          categories,
          tags: data,
          formData: new FormData()
        });
      }
    });
  };

  useEffect(() => {
    init(match.params.productId);
    // eslint-disable-next-line 
  }, []);


  const clickSubmit = event => {
    event.preventDefault();

    const err = isFieldsValidity();
    if (err.isError || !previewUrl) {
      setErrors({
        ...errors, name: err.name, sku: err.sku, category: err.category, tag: err.tag,
        price: err.price, discount: err.discount, rating: err.rating, saleCount: err.saleCount,
        isNew: err.isNew, stock: err.stock, shortDescription: err.shortDescription, model: err.model,
        performance: err.performance, storage: err.storage, camera: err.camera, battery: err.battery,
        display: err.display, ram: err.ram, os: err.os
      })
      setShowErrors(true);
      return;
    } else {
      setErrors({
        ...errors, name: "", sku: "", category: "", tag: "", price: "", discount: "", rating: "",
        saleCount: "", isNew: "", stock: "", shortDescription: "", model: "", performance: "",
        storage: "", camera: "", battery: "", display: "", ram: "", os: ""
      })
      setShowErrors(false);
    }

    let _name = document.forms["product"]["name"].value;
    
    setValues({ ...values, name: _name, error: "", loading: true });
    
    console.log("name " + _name);

    let c = document.forms["product"]["category"].options.selectedIndex - 1;
    let t = document.forms["product"]["tag"].options.selectedIndex - 1;
    let n = document.forms["product"]["isNew"].options.selectedIndex ? true : false;

    formData.set("name", document.forms["product"]["name"].value);
    formData.set("sku", document.forms["product"]["sku"].value);
    formData.set("category", categories[c]._id);
    formData.set("tag", tags[t]._id);
    formData.set("isnew", n);
    //formData.set("image", previewUrl);

    formData.set("price", document.forms["product"]["price"].value);
    formData.set("discount", document.forms["product"]["discount"].value);
    formData.set("rating", document.forms["product"]["rating"].value);
    formData.set("saleCount", document.forms["product"]["saleCount"].value);
    formData.set("stock", document.forms["product"]["stock"].value);
    formData.set("shortDescription", document.forms["product"]["shortDescription"].value);
    formData.set("fullDescription", document.forms["product"]["fullDescription"].value);
    formData.set("model", document.forms["product"]["model"].value);
    formData.set("performance", document.forms["product"]["performance"].value);

    formData.set("display", document.forms["product"]["display"].value);
    formData.set("os", document.forms["product"]["os"].value);
    formData.set("ram", document.forms["product"]["ram"].value);
    formData.set("storage", document.forms["product"]["storage"].value);
    formData.set("camera", document.forms["product"]["camera"].value);
    formData.set("battery", document.forms["product"]["battery"].value);

    updateProduct(match.params.productId, user._id, token, formData)
      .then(data => {
        if (data.errors) {
          setValues({ ...values, error: data.errors[0].msg, success: false });
        } else {
          setValues({
            ...values,
            updatedProduct: _name,
            name: "",
            sku: "",
            price: "",
            discount: "",
            rating: "",
            saleCount: "",
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
            success: true
          });
        }
      });
    //Cleaning select and image components  
    setPreviewUrl(null);
    // document.getElementById('category').value = "Please select";
    // document.getElementById('tag').value = "Please select";
    // document.getElementById('isNew').value = "Please select";
  }

  const showError = () => (
    <div
      className="alert alert-danger text-center"
      style={{ display: error ? "" : "none" }}
    >
      <h3>{error}</h3>
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info text-center"
      style={{ display: success ? "" : "none" }}
    >
      <h4>{`"${updatedProduct}" is updated!`}</h4>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-success text-center">
        <h2>Loading...</h2>
      </div>
    );

  const handleChange = name => event => {
    const value =
      name === "image" ? event.target.files[0] : event.target.value;

    formData.set(name, value);
    setValues({ ...values, error: "", success: false, [name]: value });

    if (name === "image") {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };

  const filePickerRef = useRef();

  const pickImageHandler = (event) => {
    event.preventDefault();
    filePickerRef.current.click();
  };


  return (
    <Fragment>
      <BreadcrumbsItem to={ROOT_URL + "/"}>Home</BreadcrumbsItem>
      {/* <BreadcrumbsItem to={ROOT_URL + pathname}> */}
      <BreadcrumbsItem>
        User Dashboard
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {showLoading()}
        {showSuccess()}
        {showError()}

        <form className="myaccount-area pb-80 pt-50"
          name="product"
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
                                id="name"
                              />
                              {showErrors &&
                                <p>{errors.name}</p>}
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
                                id="sku"
                              />
                              {showErrors &&
                                <p>{errors.sku}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Category</label>
                              <select className='form-control'
                                onChange={handleChange("category")}
                                name="category" id="category"
                              >
                                <option>Please select</option>
                                {categories &&
                                  categories.map((c, i) => (
                                    <option key={i} value={c._id}>
                                      {c.name}
                                    </option>
                                  ))}
                              </select>
                              {showErrors &&
                                <p>{errors.category}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Tag</label>
                              <select className='form-control'
                                onChange={handleChange("tag")}
                                name="tag" id="tag"
                              >
                                <option>Please select</option>
                                {tags &&
                                  tags.map((c, i) => (
                                    <option key={i} value={c._id}>
                                      {c.name}
                                    </option>
                                  ))}
                              </select>
                              {showErrors &&
                                <p>{errors.tag}</p>}
                            </div>
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
                              {showErrors &&
                                <p>{errors.price}</p>}
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
                              {showErrors &&
                                <p>{errors.discount}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Rating</label>
                              <input
                                onChange={handleChange("rating")}
                                type="number"
                                value={rating}
                                name="rating"
                              />
                              {showErrors &&
                                <p>{errors.rating}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Sale count</label>
                              <input
                                onChange={handleChange("saleCount")}
                                type="number"
                                value={saleCount}
                                name="saleCount"
                              />
                              {showErrors &&
                                <p>{errors.saleCount}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Is New</label>
                              <select className='form-control'
                                name="isNew" id="isNew"
                                onChange={handleChange("isnew")}
                              >
                                <option>Please select</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                              </select>
                              {showErrors &&
                                <p>{errors.isNew}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Stock</label>
                              <input
                                onChange={handleChange("stock")}
                                type="number"
                                value={stock}
                                name="stock"
                              />
                              {showErrors &&
                                <p>{errors.stock}</p>}
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
                            <div className="billing-info">
                              {previewUrl && <img src={previewUrl} alt="Preview" />}
                              {showErrors && !previewUrl && <p>Image must not be empty!</p>}
                            </div>
                            <div className="billing-pick-btn">
                              <div className="billing-btn">
                                <button
                                  onClick={pickImageHandler}
                                >
                                  Pick file
                            </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <label>Short description</label>
                            <div className="billing-info">
                              <input
                                onChange={handleChange("shortDescription")}
                                type="text"
                                value={shortDescription}
                                name="shortDescription"
                              />
                              {showErrors &&
                                <p>{errors.shortDescription}</p>}
                            </div >
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                              <label>Full description</label>
                              <input
                                onChange={handleChange("fullDescription")}
                                type="text"
                                value={fullDescription}
                                name="fullDescription"

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
                                name="model"
                              />
                              {showErrors &&
                                <p>{errors.model}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Performance</label>
                              <input
                                onChange={handleChange("performance")}
                                type="text"
                                value={performance}
                                name="performance"
                              />
                              {showErrors &&
                                <p>{errors.performance}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Display</label>
                              <input
                                onChange={handleChange("display")}
                                type="text"
                                value={display}
                                name="display"
                              />
                              {showErrors &&
                                <p>{errors.display}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Operation System</label>
                              <input
                                onChange={handleChange("os")}
                                type="text"
                                value={os}
                                name="os"
                              />
                              {showErrors &&
                                <p>{errors.os}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mt-20">
                              <label>Ram</label>
                              <input
                                onChange={handleChange("ram")}
                                type="text"
                                value={ram}
                                name="ram"
                              />
                              {showErrors &&
                                <p>{errors.ram}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mt-20">
                              <label>Storage</label>
                              <input
                                onChange={handleChange("storage")}
                                type="text"
                                value={storage}
                                name="storage"
                              />
                              {showErrors &&
                                <p>{errors.storage}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Camera</label>
                              <input
                                onChange={handleChange("camera")}
                                type="text"
                                value={camera}
                                name="camera"
                              />
                              {showErrors &&
                                <p>{errors.camera}</p>}
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info">
                              <label>Battery</label>
                              <input
                                onChange={handleChange("battery")}
                                type="text"
                                value={battery}
                                name="battery"
                              />
                              {showErrors &&
                                <p>{errors.battery}</p>}
                            </div>
                          </div>
                        </div>
                        <div className="billing-back-btn">
                          <div className="billing-btn">
                            <button type="submit">Update</button>
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

UpdateProduct.propTypes = {
  location: PropTypes.object
};

export default UpdateProduct;
