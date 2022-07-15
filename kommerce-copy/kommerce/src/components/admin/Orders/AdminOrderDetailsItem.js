import { Link } from "react-router-dom";

const AdminOrderDetailsItem = (props) => {
  const { sku, image, productName, price, quantity } = props;

  //   console.log(image, productName, sku, price, quantity);
  //   accSubtotal(price * quantity);
  return (
    <tr>
      <td>
        <div className="image-wrapper">
          <img
            className="line-item__image"
            // src="../../images/green-01.jpg"
            src={"../../" + props.image}
            alt=""
          />
        </div>
      </td>
      <td>
        <h2 className="line-item-title">
          <Link to="product.html" className="cart__product-title">
            {props.productName}
          </Link>
        </h2>
        <label htmlFor="">
          SKU: <span>{props.sku}</span>
        </label>
      </td>
      <td>
        ${props.price} × <span>{props.quantity}</span>
      </td>
      <td>${price * quantity}</td>
    </tr>
  );
};

export default AdminOrderDetailsItem;
