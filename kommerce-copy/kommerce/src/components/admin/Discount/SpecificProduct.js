import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";
import SpecificProductItem from "./SpecificProductItem";
import LoadingSpinner from "../../../utils/LoadingSpinner";

const SpecificProduct = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState([]);
  // const { specifiedProducts, updateSpecifiedProducts, onClose } = props;
  const { specifiedProducts, onClose } = props;

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("http://127.0.0.1:5000/api/v1/products");
        console.log("getAllProducts", res);
        if (res.data.status === "success") {
          setProducts(res.data.data.products);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        console.log("error", err.response.data.message);
      }
    };
    getAllProducts();
  }, []);

  const onApplyHandler = () => {
    console.log("checked", checked);

    let specificProducts = products.filter((product) => {
      return checked.some((productId) => product._id === productId);
    });
    props.updateSpecifiedProducts(specificProducts);

    console.log("specificProducts", specificProducts);
    console.log("props.specifiedProducts", specifiedProducts);
    onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      {/* <Modal> */}
      {/* <div id="show-modal">
        <div className="overlay"></div> */}
      <div className="admin-right page-content">
        <div className="products-list">
          <div className="actions flex items-center">
            <h3>Select products</h3>
          </div>
          <div className="added-products border-t">
            <div className="overflow-auto">
              <table className="table mt-20">
                <thead>
                  <tr>
                    <th>
                      {/* <input type="checkbox" id="select-all" /> */}
                      Select
                    </th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Inventory</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading && (
                    <div className="centered">
                      <LoadingSpinner />
                    </div>
                  )}
                  {products.map((product) => (
                    <SpecificProductItem
                      key={product._id}
                      id={product._id}
                      sku={product.sku}
                      image={product.image}
                      productName={product.productName}
                      price={product.price}
                      inventory={product.inventory}
                      checked={checked}
                      setChecked={setChecked}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-20">
            {/* <Link to="#" className="button checkout_btn button--hollow">
              Apply
            </Link> */}
            <button
              className="button checkout_btn button--hollow"
              type="submit"
              onClick={onApplyHandler}
            >
              Apply
            </button>
            <button
              className="button update_btn"
              id="close-modal"
              onClick={props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Modal>
  );
};
export default SpecificProduct;
