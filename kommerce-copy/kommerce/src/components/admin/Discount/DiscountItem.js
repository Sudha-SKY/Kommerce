import { Link } from "react-router-dom";
import moment from "moment";

const DiscountItem = (props) => {
  const {
    id,
    discountCode,
    discountPercent,
    timesUsed,
    activeDate,
    expireAt,
    createdAt,
    status,
  } = props;

  return (
    <tr>
      {/* <td>
      <input type="checkbox" checked name="discount-item" />
    </td> */}
      <td>
        {/* <Link to="admin/discount-list/edit-discount"> */}
        {/* <Link to="edit-discount"></Link> */}
        <Link
          to={`/admin/discount-list/edit-discount/${discountCode}`}
          state={{ id: id }}
        >
          <u>{discountCode}</u>
          {/* {console.log("ID", id, "discountCode", discountCode)} */}
        </Link>
        <p>`${discountPercent}% off one-time purchase products`</p>
      </td>
      <td>
        <span>{timesUsed}</span>
      </td>
      <td>{moment(expireAt).format("DD/MM/yyyy")}</td>
      <td>{moment(createdAt).format("DD/MM/yyyy")}</td>
      <td>{status}</td>
    </tr>
  );
};
export default DiscountItem;
