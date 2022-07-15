import React from "react";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <section>
      <div className="container">
        <div className="checkout-template page-content">
          <h2>My Orders</h2>
          <div className="my-orders row">
            <div className="orders-wrap">
              <div className="orders-list">
                <table>
                  <thead>
                    <tr>
                      <th>S. No</th>
                      <th>Order No.</th>
                      <th>Date</th>
                      <th>Payment Status</th>
                      <th>Fulfillment Status</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>
                        <Link to="/order-details">
                          <u>#10001</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td className="text-right">$290</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>
                        <Link to="/order-details">
                          <u>#10002</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td className="text-right">$290</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>
                        <Link to="/order-details">
                          <u>#10003</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td className="text-right">$290</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>
                        <Link to="/order-details">
                          <u>#10004</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td className="text-right">$290</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>
                        <Link to="/order-details">
                          <u>#10005</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td className="text-right">$290</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>
                        <Link to="/order-details">
                          <u>#10006</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td className="text-right">$290</td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>
                        <Link to="/order-details">
                          <u>#10007</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td className="text-right">$290</td>
                    </tr>
                    <tr>
                      <td>08</td>
                      <td>
                        <Link to="/order-details">
                          <u>#10008</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td className="text-right">$290</td>
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

export default Order;
