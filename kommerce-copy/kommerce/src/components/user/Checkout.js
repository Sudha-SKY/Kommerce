import React from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <section>
      <div className="container">
        <div className="checkout-template page-content">
          <h2>Checkout</h2>
          <div className="checkout-details row">
            <div className="checkout-wrap">
              <div className="checkout-section">
                <div className="contact-info">
                  <div className="fieldset">
                    <h3>Contact information</h3>
                    <div className="field-input">
                      <label htmlFor="name">Name</label>
                      <span>
                        <input
                          type="text"
                          className="input-text"
                          placeholder="Enter your name"
                        />
                      </span>
                    </div>
                    <div className="field-input">
                      <label htmlFor="name">Email Id</label>
                      <span>
                        <input
                          type="email"
                          className="input-text"
                          placeholder="Enter your email id"
                        />
                      </span>
                    </div>
                    <div className="field-input">
                      <label htmlFor="name">Phone</label>
                      <span>
                        <input
                          type="text"
                          className="input-text"
                          placeholder="Enter your phone no."
                        />
                      </span>
                    </div>
                    <div className="field-input">
                      <label htmlFor="name">Address</label>
                      <span>
                        <input
                          type="text"
                          className="input-text"
                          placeholder="Enter your address"
                        />
                      </span>
                    </div>
                    <div className="field-input">
                      <label htmlFor="name">Postal Code</label>
                      <span>
                        <input
                          type="text"
                          className="input-text"
                          placeholder="Enter your postal code"
                        />
                      </span>
                    </div>
                  </div>

                  <div className="fieldset">
                    <h3>Shipping Address</h3>
                    <div className="field-input">
                      <label htmlFor="name">Name</label>
                      <span>
                        <input
                          type="text"
                          className="input-text"
                          placeholder="Enter your name"
                        />
                      </span>
                    </div>
                    <div className="field-input">
                      <label htmlFor="name">Email Id</label>
                      <span>
                        <input
                          type="email"
                          className="input-text"
                          placeholder="Enter your email id"
                        />
                      </span>
                    </div>
                    <div className="field-input">
                      <label htmlFor="name">Phone</label>
                      <span>
                        <input
                          type="text"
                          className="input-text"
                          placeholder="Enter your phone no."
                        />
                      </span>
                    </div>
                    <div className="field-input">
                      <label htmlFor="name">Address</label>
                      <span>
                        <input
                          type="text"
                          className="input-text"
                          placeholder="Enter your address"
                        />
                      </span>
                    </div>
                    <div className="field-input">
                      <label htmlFor="name">Postal Code</label>
                      <span>
                        <input
                          type="text"
                          className="input-text"
                          placeholder="Enter your postal code"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="action-btn">
                    <Link to="/payment" className="button button--hollow">
                      Proceed to Payment
                    </Link>
                    <Link to="/cart" className="button secondary-btn">
                      Return to Cart
                    </Link>
                  </div>
                </div>
                <div className="order-summary-right">
                  <div className="order-summary__sections">
                    <div className="">
                      <div className="order-summary__section__content">
                        <table className="product-table">
                          <thead className="product-table__header">
                            <tr>
                              <th>
                                <span className="visually-hidden">Image</span>
                              </th>
                              <th>
                                <span className="visually-hidden">
                                  Description
                                </span>
                              </th>
                              <th>
                                <span className="visually-hidden">
                                  Quantity
                                </span>
                              </th>
                              <th>
                                <span className="visually-hidden">Price</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="product">
                              <td className="product__image">
                                <div className="product-thumbnail ">
                                  <div className="product-thumbnail__wrapper">
                                    <img
                                      alt="Basic Green T-Shirt"
                                      className="product-thumbnail__image"
                                      src="images/green-01.jpg"
                                    />
                                  </div>
                                  <span className="product-thumbnail__quantity">
                                    1
                                  </span>
                                </div>
                              </td>
                              <td className="product__description" scope="row">
                                <span className="product__description__name">
                                  Basic Green T-Shirt
                                </span>
                                <span className="product__description__variant"></span>
                              </td>
                              <td className="product__quantity">
                                <span className="visually-hidden">1</span>
                              </td>
                              <td className="product__price">
                                <span className="order-summary__emphasis">
                                  €52.00
                                </span>
                              </td>
                            </tr>
                            <tr className="product">
                              <td className="product__image">
                                <div className="product-thumbnail ">
                                  <div className="product-thumbnail__wrapper">
                                    <img
                                      alt="Basic Green T-Shirt"
                                      className="product-thumbnail__image"
                                      src="images/black-01.jpg"
                                    />
                                  </div>
                                  <span className="product-thumbnail__quantity">
                                    1
                                  </span>
                                </div>
                              </td>
                              <td className="product__description" scope="row">
                                <span className="product__description__name">
                                  Basic Green T-Shirt
                                </span>
                                <span className="product__description__variant"></span>
                              </td>
                              <td className="product__quantity">
                                <span className="visually-hidden">1</span>
                              </td>
                              <td className="product__price">
                                <span className="order-summary__emphasis">
                                  €52.00
                                </span>
                              </td>
                            </tr>
                            <tr className="product">
                              <td className="product__image">
                                <div className="product-thumbnail ">
                                  <div className="product-thumbnail__wrapper">
                                    <img
                                      alt="Basic Green T-Shirt"
                                      className="product-thumbnail__image"
                                      src="images/pink-01.jpg"
                                    />
                                  </div>
                                  <span className="product-thumbnail__quantity">
                                    1
                                  </span>
                                </div>
                              </td>
                              <td className="product__description" scope="row">
                                <span className="product__description__name">
                                  Basic Green T-Shirt
                                </span>
                                <span className="product__description__variant"></span>
                              </td>
                              <td className="product__quantity">
                                <span className="visually-hidden">1</span>
                              </td>
                              <td className="product__price">
                                <span className="order-summary__emphasis">
                                  €52.00
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* <!-- <div className="cart-promo">
                                    <h4>PROMO CODE</h4>
                                    <div className="mt-10">
                                        <input type="text" id="" placeholder="Gift card or discount code"/>
                                    </div>
                                    <Link to="#" className="button button--hollow inline-block">Apply Coupon</Link>
                                  </div> --> */}
                      <p className="no-margin evenly-align mt-20">
                        <span className="cart-total-quantity">3 items</span>
                        <span className="cart-total-price">
                          <span>156,00</span>
                        </span>
                      </p>
                      <div className="cart-subtotal evenly-align cart__total">
                        <span className="cart-subtotal__title">Discount</span>
                        <strong>
                          <span className="cart-subtotal__price">€20,00</span>
                        </strong>
                      </div>
                      <div className="cart-subtotal evenly-align cart__total">
                        <span className="cart-subtotal__title">Subtotal</span>
                        <strong>
                          <span className="cart-subtotal__price">136,00</span>
                        </strong>
                      </div>
                      <div className="cart__total evenly-align separator">
                        <span className="cart__total-text">Total:</span>
                        <strong className="cart__total-price text-lg">
                          <span>136,00</span>
                          <span> EUR</span>
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
