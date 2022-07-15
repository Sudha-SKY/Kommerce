import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section>
      <div className="container">
        <div className="checkout-template page-content">
          <h2>Thank you</h2>
          <div className="checkout-details row">
            <div className="checkout-wrap">
              <div className="checkout-section">
                <div className="contact-info">
                  <div className="fieldset">
                    <h3>Order Placed</h3>
                    <p className="mt-20">Thank you for placing your order.</p>
                    <p className="mt-20">
                      Your order no.:{" "}
                      <Link to="/order-details">
                        {" "}
                        <u>123456</u>
                      </Link>
                      . You can check your order{" "}
                      <Link to="/order-details">
                        <u>details</u>
                      </Link>{" "}
                      here.
                    </p>
                  </div>

                  <div className="action-btn">
                    <Link to="/order" className="button button--hollow">
                      My Orders
                    </Link>
                    <Link to="/collections" className="button secondary-btn">
                      Continue Shopping
                    </Link>
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

export default OrderSuccess;
