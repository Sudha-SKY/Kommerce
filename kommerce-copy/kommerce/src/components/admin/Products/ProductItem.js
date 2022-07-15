import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const { id, image, productName, sku, price, inventory, status } = props;
  //   let statusColor =
  // console.log(props);
  // console.log("id", id);
  return (
    <tr>
      {/* <td>
        <input type="radio" name="prod-item" />
      </td> */}
      <td>
        <span className="admin-list-img">
          <img src={image} alt="" />
        </span>
      </td>
      <td>
        <div className="">
          <Link
            to={`/admin/product-list/edit-product/${productName}`}
            state={{ id: id }}
          >
            <u>{productName}</u>
          </Link>
        </div>
      </td>
      <td>{sku}</td>
      <td>`${price}`</td>
      <td>{inventory}</td>
      <td className={status === "Active" ? "color-green" : "color-red"}>
        {status}
      </td>
    </tr>
  );
};
export default ProductItem;
