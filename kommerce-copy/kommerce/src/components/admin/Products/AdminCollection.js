import React from "react";
import { Link } from "react-router-dom";
import ProductsList from "./ProductsList";

const AdminCollection = () => {
  return (
    <section className="flex">
      <div className="container-fluid">
        <div className="admin-content">
          <div className="admin-left-nav mt-20">
            <ul>
              <li>
                <Link className="active" to="/admin/product-list">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/admin/order-list">Orders</Link>
              </li>
              <li>
                <Link to="/admin/discount-list">Discount</Link>
              </li>
            </ul>
          </div>
          <div className="admin-right page-content">
            <div className="products-list">
              <div className="actions flex items-center">
                <h3>Products</h3>
                <Link
                  to="/admin/product-list/add-product"
                  className="button button--hollow justify-end inline-block"
                >
                  Add Product
                </Link>
              </div>
              {/* <div className="actions flex items-center flex-start">
                <span>
                  <span id="count">1</span> selected
                </span>
                <Link
                  to="/admin/product-list/edit-product"
                  className="white-btn items-center"
                >
                  Edit Products
                </Link>
              </div> */}
              <div className="added-products">
                <table className="table">
                  <thead>
                    <tr>
                      {/* <th><input type="checkbox" id="select-all" /></th> */}
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>SKU</th>
                      <th>Price</th>
                      <th>Inventory</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <ProductsList />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdminCollection;
