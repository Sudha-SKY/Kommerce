import React from "react";
// import { Link } from "react-router-dom";

const OrderDetails = () => {
  return (
    <section>
      <div className="container">
        <div className="checkout-template page-content">
          <h2>Order #10001</h2>
          <p>Placed on Mar 01, 2022</p>
          <div className="mt-20">
            <div className="flex">
              <div className="address">
                <h3>Billing Address</h3>
                <p>John Smith</p>
                <p>123, New building</p>
                <p>Chennai, India, 600018</p>
                <p className="mt-20">
                  <strong>Payment Status: Paid</strong>
                </p>
              </div>
              <div className="address">
                <h3>Shipping Address</h3>
                <p>John Smith</p>
                <p>123, New building</p>
                <p>Chennai, India, 600018</p>
                <p className="mt-20">
                  <strong>Fulfillment Status: Paid</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="my-orders row">
            <div className="orders-wrap">
              <div className="orders-list">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>SKU</th>
                      <th className="text-right">Price</th>
                      <th>Quantity</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ankle boots with wooden mini heel</td>
                      <td>SKU0001</td>
                      <td className="text-right">
                        $79.00 <s>$85.00</s>
                      </td>
                      <td>1</td>
                      <td className="text-right">$79</td>
                    </tr>
                    <tr>
                      <td>Basic pink shirt</td>
                      <td>SKU0002</td>
                      <td className="text-right">
                        $61.00 <s>$65.00</s>
                      </td>
                      <td>1</td>
                      <td className="text-right">$61</td>
                    </tr>
                    <tr>
                      <td colSpan="4">Subtotal</td>
                      <td className="text-right">$140.00</td>
                    </tr>
                    <tr>
                      <td colSpan="4">Shipping</td>
                      <td className="text-right">$8.00</td>
                    </tr>
                    <tr>
                      <td colSpan="4">Tax (GST)</td>
                      <td className="text-right">$8.00</td>
                    </tr>
                    <tr>
                      <td colSpan="4">
                        Discount{" "}
                        <span>
                          (<strong>MYDEAL50</strong>)
                        </span>
                      </td>
                      <td className="text-right">-$20.00</td>
                    </tr>
                    <tr>
                      <td colSpan="4">
                        <strong>Total</strong>
                      </td>
                      <td className="text-right">
                        <strong>
                          $136.00 <span>USD</span>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
