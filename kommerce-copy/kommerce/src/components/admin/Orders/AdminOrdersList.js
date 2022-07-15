import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import AdminOrdersListItems from "./AdminOrdersListItems";
import LoadingSpinner from "../../../utils/LoadingSpinner";

const AdminOrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllOrders = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://127.0.0.1:5000/api/v1/orders");
      console.log("getAllOrders", res);
      if (res.data.status === "success") {
        setOrders(res.data.data.orders);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      console.log("error", err.response.data.message);
    }
  }, [setOrders]);

  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  return (
    <tbody>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {orders.map((order) => (
        <AdminOrdersListItems
          key={order._id}
          id={order._id}
          orderNumber={order.orderNumber}
          orderedDate={order.orderedDate}
          paymentStatus={order.paymentStatus}
          fulfillmentStatus={order.fulfillmentStatus}
          totalquantity={order.totalquantity}
          totalAmount={order.totalAmount}
        />
      ))}
    </tbody>
  );
};
export default AdminOrdersList;
