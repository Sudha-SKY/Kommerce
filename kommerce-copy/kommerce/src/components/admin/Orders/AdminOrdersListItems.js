import { Link } from "react-router-dom";

const OrderItem = (props) => {
  const {
    id,
    orderNumber,
    orderedDate,
    paymentStatus,
    fulfillmentStatus,
    totalquantity,
    totalAmount,
  } = props;

  return (
    <tr>
      <td>01</td>
      <td>
        {/* <Link to="/admin/order-list/order-list-details">
          <u>{orderNumber}</u>
        </Link> */}
        <Link to={`/admin/order-list/${orderNumber}`} state={{ id: id }}>
          <u>{orderNumber}</u>
        </Link>
      </td>
      <td>{orderedDate}</td>
      <td>{paymentStatus}</td>
      <td>{fulfillmentStatus}</td>
      <td>{totalquantity}</td>
      <td className="text-right">${totalAmount}</td>
    </tr>
  );
};
export default OrderItem;
