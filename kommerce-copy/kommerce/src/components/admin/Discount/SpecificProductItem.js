// import { Link } from "react-router-dom";

const SpecificProductItem = (props) => {
  const { id, image, productName, sku, price, inventory, checked, setChecked } =
    props;

  const handleCheckFn = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          name="prod-item"
          onChange={handleCheckFn}
          value={id}
        />
      </td>
      <td>
        <span className="admin-list-img">
          <img src={"../../../" + image} alt="" />
        </span>
      </td>
      <td>
        <div className="">
          {/* <Link to="edit-product.html"> */}
          <u>{productName}</u>
          {/* </Link> */}
        </div>
        <span>
          SKU: <span>{sku}</span>
        </span>
      </td>
      <td>`${price}`</td>
      <td>{inventory}</td>
    </tr>
  );
};

export default SpecificProductItem;
