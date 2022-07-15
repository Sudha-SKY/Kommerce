import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section>
      <div className="container">
        <div className="cart-template page-content">
          <h2>Cart</h2>
          <div className="cart-count-price">
            <p className="no-margin">
              <span className="cart-total-quantity">TOTAL: 3 items</span>
              <strong className="cart-total-price">
                (
                <span>
                  <span id="revy-cart-subtotal-price">€204,15</span>
                </span>
                )
              </strong>
            </p>
          </div>
          <div className="main-cart-wrapper">
            <div className="cart__items cart__block">
              <div className="line-items">
                <div className="line-item">
                  <div className="line-item__left">
                    <div className="line-item__image-wrapper">
                      <img
                        className="line-item__image"
                        src="images/green-01.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="line-item__right">
                    <div className="line-item__details">
                      <h2 className="line-item-title">
                        <Link to="/product" className="cart__product-title">
                          Basic Green Shirt
                        </Link>
                      </h2>
                      <Link
                        title="Remove item"
                        className="line-item__remove"
                        to="#"
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          className="svg-inline--fa fa-trash-alt fa-w-14 fa-3x"
                        >
                          <path
                            fill="currentColor"
                            d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                            className=""
                          ></path>
                        </svg>
                      </Link>
                    </div>

                    <div className="line-item__price">
                      <span>
                        <strong>Price:</strong>
                      </span>
                      €68,05
                    </div>

                    <div className="line-item__total-amount-price">
                      <span>
                        <strong>Total Price:</strong>
                      </span>
                      €68,05
                    </div>

                    <div className="line-item__quantity">
                      <span className="line-item__quantity-text">
                        Quantity:
                      </span>
                      <input type="text" name="updates[]" size="4" value="1" />
                      <button className="button update_btn" type="submit">
                        Update Quantity
                      </button>
                    </div>
                  </div>
                </div>

                <div className="line-item">
                  <div className="line-item__left">
                    <div className="line-item__image-wrapper">
                      <img
                        className="line-item__image"
                        src="images/black-01.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="line-item__right">
                    <div className="line-item__details">
                      <h2 className="line-item-title">
                        <Link to="/product" className="cart__product-title">
                          Basic Black Shirt
                        </Link>
                      </h2>
                      <Link
                        title="Remove item"
                        className="line-item__remove"
                        to="#"
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          className="svg-inline--fa fa-trash-alt fa-w-14 fa-3x"
                        >
                          <path
                            fill="currentColor"
                            d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                            className=""
                          ></path>
                        </svg>
                      </Link>
                    </div>

                    <div className="line-item__price">
                      <span>
                        <strong>Price:</strong>
                      </span>
                      €68,05
                    </div>

                    <div className="line-item__total-amount-price">
                      <span>
                        <strong>Total Price:</strong>
                      </span>
                      €68,05
                    </div>

                    <div className="line-item__quantity">
                      <span className="line-item__quantity-text">
                        Quantity:
                      </span>
                      <input type="text" name="updates[]" size="4" value="1" />
                      <button className="button update_btn" type="submit">
                        Update Quantity
                      </button>
                    </div>
                  </div>
                </div>
                <div className="line-item">
                  <div className="line-item__left">
                    <div className="line-item__image-wrapper">
                      <img
                        className="line-item__image"
                        src="images/pink-01.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="line-item__right">
                    <div className="line-item__details">
                      <h2 className="line-item-title">
                        <Link to="/product" className="cart__product-title">
                          Basic Pink Shirt
                        </Link>
                      </h2>
                      <Link
                        title="Remove item"
                        className="line-item__remove"
                        to="#"
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 448 512"
                          className="svg-inline--fa fa-trash-alt fa-w-14 fa-3x"
                        >
                          <path
                            fill="currentColor"
                            d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                            className=""
                          ></path>
                        </svg>
                      </Link>
                    </div>

                    <div className="line-item__price">
                      <span>
                        <strong>Price:</strong>
                      </span>
                      €68,05
                    </div>

                    <div className="line-item__total-amount-price">
                      <span>
                        <strong>Total Price:</strong>
                      </span>
                      €68,05
                    </div>

                    <div className="line-item__quantity">
                      <span className="line-item__quantity-text">
                        Quantity:
                      </span>
                      <input type="text" name="updates[]" size="4" value="1" />
                      <button className="button update_btn" type="submit">
                        Update Quantity
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart__details cart__block">
              <div className="cart__details-wrap">
                <h5>ORDER SUMMARY</h5>
                <p className="no-margin evenly-align">
                  <span className="cart-total-quantity">3 items</span>
                  <span className="cart-total-price">
                    <span>€204,15</span>
                  </span>
                </p>
                <div className="cart-subtotal evenly-align cart__total">
                  <span className="cart-subtotal__title">Subtotal</span>
                  <strong>
                    <span className="cart-subtotal__price">€204,15</span>
                  </strong>
                </div>
                <div className="cart__total evenly-align">
                  <span className="cart__total-text">Total:</span>
                  <strong className="cart__total-price">
                    <span>€204,15</span>
                    <span> EUR</span>
                  </strong>
                </div>
                <button className="button update_btn" type="submit">
                  Update Quantity
                </button>
                <Link
                  to="/checkout"
                  className="button checkout_btn button--hollow"
                >
                  Checkout
                </Link>
                <div className="cart-promo">
                  <h5>ENTER A PROMO CODE</h5>
                  <input type="text" id="devPromo" />
                  <Link to="#">Apply Coupon</Link>
                </div>
                <div className="text-center mt-20">
                  <Link
                    className="link-text-line"
                    to="/"
                    title="Continue shopping"
                  >
                    Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
