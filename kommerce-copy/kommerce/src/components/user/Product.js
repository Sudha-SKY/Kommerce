import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import { useState, useEffect, useCallback } from "react";
// import axios from "axios";
import LoadingSpinner from "../../utils/LoadingSpinner";

const Product = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  // const params = useParams();
  // const { discountCodeName } = params;
  const location = useLocation();
  const { product } = location.state;
  console.log("product", product);

  const addToBagHandler = () => {};
  const onQuantityChangeHandler = (e) => {
    e.preventDefault();
    setProductQuantity({ ...product, [e.target.name]: e.target.value.trim() });
    console.log("quantity", e.target.value.trim());
    console.log("productQuantity", productQuantity);
  };

  return (
    <section>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}

      <div className="container">
        <div className="product-template page-content">
          <h2>Product Details</h2>
          <div className="product-details row">
            <div className="product-wrap">
              <div className="product-single">
                <div className="product-media">
                  <Link to="#">
                    <img src={"../../" + product.image} alt="" />
                  </Link>
                </div>
                <div className="product-info">
                  <div className="right-side">
                    <span className="product-sku">SKU: SHIR0001</span>
                    <h3 className="product-title main-title">
                      {product.productName}
                    </h3>
                    <div className="price">
                      <div className="regular-price">
                        <span>
                          <span className="money" data-currency-usd="$200.00">
                            ${product.price}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="line-item-quantity">
                      {/* <div> */}
                      {/* <span className="line-item__quantity-text"> */}
                      <span>Quantity:</span>
                      <input
                        type="text"
                        name="quantity"
                        // size="4"
                        id=""
                        value={productQuantity}
                        onChange={onQuantityChangeHandler}
                      />
                    </div>
                    <div className="product-add">
                      <button
                        className="button button--alt"
                        name="addToBag"
                        id="add"
                        type="submit"
                        onClick={addToBagHandler}
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc-wrap">
                <h4>Description</h4>
                <div className="detail-desc">
                  {product.description}
                  {/* <p>
                    Nice and simple T-shirt made of stretchy cotton quality. The
                    t-shirt has short sleeves, a round neck and a super
                    comfortable fit.
                  </p>
                  <p>
                    <strong>Composition & Washing</strong>
                  </p>
                  <p>
                    Jersey fabric: 100% cotton; woven fabric: 100% polyester,
                    exclusive of embroideries. Wash by hand in water. Do not
                    bleach. Iron at max. 110 °C using a damp cloth between the
                    iron and the fabric. Do not dry clean. Do not tumble dry.
                    Flat drying in the shade.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
