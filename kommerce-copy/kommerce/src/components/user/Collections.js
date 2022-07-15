import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import CollectionsItem from "./CollectionsItem";
import LoadingSpinner from "../../utils/LoadingSpinner";
// import logoImage from "../../images/wigo-logo-img.png";

const Collections = () => {
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
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <section>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}

      <div className="container">
        <div className="product-collection page-content">
          <h2>Collections</h2>
          <div className="products-grid row">
            {products.map((product) => (
              <CollectionsItem
                key={product._id}
                id={product._id}
                // sku={product.sku}
                // image={product.image}
                // productName={product.productName}
                // price={product.price}
                // inventory={product.inventory}
                // status={product.status}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Collections;
