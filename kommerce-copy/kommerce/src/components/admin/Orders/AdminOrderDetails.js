import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import AdminOrderDetailsItem from "./AdminOrderDetailsItem";

const AdminOrderDetails = () => {
  const params = useParams();
  const { orderNumber } = params;
  const location = useLocation();
  const { id } = location.state;

  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);
  const [discount, setDiscount] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  // let pdts = useRef();
  // let subTotal;

  const getOrder = useCallback(async () => {
    try {
      console.log("ID", id);
      setIsLoading(true);
      const res = await axios.get(`http://127.0.0.1:5000/api/v1/orders/${id}`);
      console.log("getOrder", res);
      if (res.data.status === "success") {
        console.log(res.data.data);
        setOrder(res.data.data.order);
        console.log(
          typeof res.data.data.order.products,
          res.data.data.order.products
        );
        setProducts(res.data.data.order.products);
        setDiscount(res.data.data.order.discount.discountCode);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      console.log("error", err.response.data.message);
    }
  }, [setOrder, id]);

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  // console.log("order.products", typeof order.products);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setOrder({ ...order, [e.target.name]: e.target.value.trim() });
    // console.log(order);
  };

  // const handleSubtotal = (subTotalItem) => {
  //   // setSubTotal((prev) => prev + subTotalItem);
  //   console.log("subTotalItem", subTotalItem);
  //   // subTotal = subTotal + subTotalItem;
  //   console.log("subTotal--In", subTotal);
  // };
  // console.log("subTotal", subTotal);
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
                <h3>#{orderNumber}</h3>
              </div>
              <div className="actions flex items-center flex-start">
                {/* <span>March 2, 2022 at 12:20 pm</span> */}
                <span>{order.orderedDate}</span>
              </div>
              <div className="view-orders">
                <div className="main-cart-wrapper">
                  <div className="cart__items cart__block">
                    <div className="line-items">
                      <table className="table">
                        <tbody>
                          {products.map((product) => (
                            <AdminOrderDetailsItem
                              key={product._id}
                              id={product._id}
                              sku={product.sku}
                              image={product.image}
                              productName={product.productName}
                              price={product.price}
                              quantity={order.totalQuantity}
                              // accSubtotal={handleSubtotal}
                            />
                          ))}
                        </tbody>
                      </table>
                      {/* {console.log(
                             product.productName,
                             product.sku,
                             product.price,
                             order.totalQuantity
                           )}
                         */}
                    </div>
                    <div className="order__details-wrap mt-10">
                      <div className="flex">
                        <h4>{order.paymentStatus}</h4>
                      </div>
                      <div className="flex border-t">
                        <span>Subtotal</span>
                        <span>1 item</span>
                        <span>${subTotal}</span>
                      </div>
                      <div className="flex">
                        <span>Shipping</span>
                        <span>Standard (3.0 kg)</span>
                        <span>$7.44</span>
                      </div>
                      <div className="flex">
                        <span>Tax</span>
                        <span>GST 7%</span>
                        <span>$5.53</span>
                      </div>
                      <div className="flex">
                        <span>Discount</span>
                        <span>{discount}</span>
                        <span>$10</span>
                      </div>
                      <div className="flex">
                        <span>
                          <strong>Total</strong>
                        </span>
                        <span>
                          <strong>$91.97</strong>
                        </span>
                      </div>
                      <div className="flex border-t">
                        <span>Paid by customer</span>
                        <span>$81.97</span>
                      </div>
                      <div className="mt-20">
                        <button className="button update_btn" type="submit">
                          Fulfill Item
                        </button>
                        <Link
                          to="#"
                          className="button checkout_btn button--hollow"
                        >
                          Create Shipping Label
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="cart__details cart__block add-margin">
                    <div className="order__details-wrap">
                      <h4>Customer</h4>
                      <p>
                        <Link to="#">John Smith</Link>
                      </p>
                      <p>1 orders</p>
                      {/* <!-- <p className="evenly-align">
                                    <span className="cart-total-quantity">3 items</span>
                                    <span className="cart-total-price">
                                        <span>€204,15</span>
                                    </span>
                                </p>
                                  <div className="cart-subtotal evenly-align cart__total">
                                    <span className="cart-subtotal__title">Subtotal</span>
                                    <strong><span className="cart-subtotal__price">€204,15</span></strong>
                                </div>
                                <div className="cart__total evenly-align">
                                    <span className="cart__total-text">Total:</span>  
                                    <strong className="cart__total-price">
                                        <span>€204,15</span>
                                        <span> EUR</span>
                                    </strong>
                                </div> --> */}
                    </div>
                    <div className="order__details-wrap mt-10">
                      <div className="flex">
                        <h4>Contact Information</h4>
                        <Link to="#">
                          <u>Edit</u>
                        </Link>
                      </div>
                      <p>
                        <Link to="#">testemail@gmail.com</Link>
                      </p>
                      <p>9876543210</p>
                    </div>
                    <div className="order__details-wrap mt-10">
                      <div className="flex">
                        <h4>Shipping Address</h4>
                        <Link to="#">
                          <u>Edit</u>
                        </Link>
                      </div>
                      <p>John Smith</p>
                      <p>123, New Building</p>
                      <p>Chennai, 600018</p>
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

export default AdminOrderDetails;
