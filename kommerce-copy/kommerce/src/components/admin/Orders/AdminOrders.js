// import React from "react";
import { Link } from "react-router-dom";
import AdminOrdersList from "./AdminOrdersList";

const AdminOrders = () => {
  return (
    <section className="flex">
      <div className="container-fluid">
        <div className="admin-content">
          <div className="admin-left-nav mt-20">
            <ul>
              <li>
                <Link to="/admin/product-list">Products</Link>
              </li>
              <li>
                <Link className="active" to="/admin/order-list">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/admin/discount-list">Discount</Link>
              </li>
            </ul>
          </div>
          <div className="admin-right page-content">
            <div className="products-list">
              <div className="actions flex items-center">
                <h3>Orders</h3>
              </div>
              <div className="added-products">
                <table className="table">
                  <thead>
                    <tr>
                      <th>S. No</th>
                      <th>Order No.</th>
                      <th>Date</th>
                      <th>Payment Status</th>
                      <th>Fulfillment Status</th>
                      <th>Items</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <AdminOrdersList />

                  {/* <tbody>
                    <tr>
                      <td>01</td>
                      <td>
                        <Link to="/admin/order-list/order-list-details">
                          <u>#10001</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td>1 items</td>
                      <td className="text-right">$290</td>
                    </tr>

                    <tr>
                      <td>02</td>
                      <td>
                        <Link to="admin-order-details.html">
                          <u>#10002</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td>2 items</td>
                      <td className="text-right">$390</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>
                        <Link to="admin-order-details.html">
                          <u>#10003</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td>4 items</td>
                      <td className="text-right">$550</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>
                        <Link to="admin-order-details.html">
                          <u>#10004</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td>1 items</td>
                      <td className="text-right">$290</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>
                        <Link to="admin-order-details.html">
                          <u>#10005</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td>3 items</td>
                      <td className="text-right">$375</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>
                        <Link to="admin-order-details.html">
                          <u>#10006</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td>4 items</td>
                      <td className="text-right">$620</td>
                    </tr>
                    <tr>
                      <td>07</td>
                      <td>
                        <Link to="admin-order-details.html">
                          <u>#10007</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td>10 items</td>
                      <td className="text-right">$880</td>
                    </tr>
                    <tr>
                      <td>08</td>
                      <td>
                        <Link to="admin-order-details.html">
                          <u>#10008</u>
                        </Link>
                      </td>
                      <td>Mar 01, 2022</td>
                      <td>Paid</td>
                      <td>Fulfilled</td>
                      <td>1 items</td>
                      <td className="text-right">$190</td>
                    </tr>
                  </tbody> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdminOrders;
