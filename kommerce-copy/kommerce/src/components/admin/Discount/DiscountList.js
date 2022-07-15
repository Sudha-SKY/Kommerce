import React from "react";
import { Link } from "react-router-dom";
import DiscountsItemList from "./DiscountsItemList";

const DiscountList = () => {



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
                <Link to="/admin/order-list">Orders</Link>
              </li>
              <li>
                <Link className="active" to="/admin/discount-list">
                  Discount
                </Link>
              </li>
            </ul>
          </div>

          <div className="admin-right page-content">
            <div className="products-list">
              <div className="actions flex items-center">
                <h3>Discounts</h3>
                <Link
                  to="create-discount"
                  className="button button--hollow justify-end inline-block"
                >
                  Create Discount
                </Link>
              </div>

              {/* <div className="actions flex items-center flex-start"> 
                <span>
                  <span id="count">1</span> selected
                </span> 
                 <Link
                  to="admin/discount-list/edit-discount"
                  className="white-btn items-center"
                >
                  Edit Discounts
                </Link>
               </div> */}

              <div className="added-products">
                <table className="table">
                  <thead>
                    <tr>
                      {/* <th>
                        <input type="checkbox" id="select-all" />
                      </th> */}
                      <th>Discount Code</th>
                      <th>Times Used</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <DiscountsItemList />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DiscountList;
