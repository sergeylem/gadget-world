import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";

const ProductDescriptionTab = ({ spaceBottomClass, 
  productFullDesc,
  productModel,
  productPerformance,
  productStorage,
  productCamera,
  productBattery,
  productDisplay,
  productRam
}) => {
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
          <Tab.Container defaultActiveKey="productDescription">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Additional Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
              <Tab.Pane eventKey="additionalInfo">
                <div className="product-anotherinfo-wrapper">
                <div className="row">

                  <div className="col-lg-6 col-md-8 col-sm-8"> 
                    <ul>
                      <li>
                        <span>Model</span>{productModel} 
                      </li>
                      <li>
                        <span>CPU</span>{productPerformance}
                      </li>
                      <li>
                        <span>Storage</span>{`${productStorage} GB`} 
                      </li>
                      <li>
                        <span>Camera</span>{productCamera}
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-md-8 col-sm-8">
                    <ul>
                      <li>
                        <span>Battery</span>{`${productBattery} mAh`} 
                      </li>
                      <li>
                        <span>Display</span>{`${productDisplay}"`}
                      </li>
                      <li>
                        <span>Ram</span>{`${productRam} GB`}
                      </li>
                    </ul>
                  </div>

                  </div>
                  
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
                {productFullDesc}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductDescriptionTab;
