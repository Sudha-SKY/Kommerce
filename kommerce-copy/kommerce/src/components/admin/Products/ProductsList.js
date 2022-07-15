import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import ProductItem from "./ProductItem";
import LoadingSpinner from "../../../utils/LoadingSpinner";

const ProductsList = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllProducts = useCallback(async () => {
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
  }, [setProducts]);

  // if (isLoading) {
  //   // message = <p>Getting data... 🚀</p>;
  //   const message = (
  //     <div className="centered">
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <tbody>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {products.map((product) => (
        <ProductItem
          key={product._id}
          id={product._id}
          sku={product.sku}
          image={product.image}
          productName={product.productName}
          price={product.price}
          inventory={product.inventory}
          status={product.status}
        />
      ))}
    </tbody>
  );
};

export default ProductsList;

// const DUMMY_PRODUCTS = [
//   {
//     image: "../images/green-01.jpg",
//     productName: "Basic Green Shirt",
//     sku: "WIGO001",
//     price: 45,
//     inventory: 250,
//     status: "Active",
//   },
//   {
//     image: "../images/black-01.jpg",
//     productName: "Basic Black Shirt",
//     sku: "WIGO002",
//     price: 38,
//     inventory: 300,
//     status: "Active",
//   },
//   {
//     image: "../images/pink-01.jpg",
//     productName: "Basic Pink  Shirt",
//     sku: "WIGO003",
//     price: 52,
//     inventory: 400,
//     status: "Active",
//   },
//   {
//     image: "../images/white-01.jpg",
//     productName: "Basic White Shirt",
//     sku: "WIGO004",
//     price: 48,
//     inventory: 220,
//     status: "Active",
//   },
//   {
//     image: "../images/floral.jpg",
//     productName: "Floral Dress with Flounce",
//     sku: "WIGO005",
//     price: 55,
//     inventory: 340,
//     status: "Inactive",
//   },
// ];
