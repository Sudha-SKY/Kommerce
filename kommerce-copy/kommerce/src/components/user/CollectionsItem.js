import React from "react";
import { Link } from "react-router-dom";
// import logoImage from "../../images/wigo-logo-img.png";

const CollectionsItem = (props) => {
  // const { id, sku, image, productName, price, inventory, product } = props;
  const { product } = props;

  // console.log("PRODUCT form CollectionItem", product);
  return (
    <div className="grid-item">
      <div className="product-item">
        <div className="product-image">
          <Link to="/product" state={{ product: product }}>
            <img src={product.image} alt="" />
          </Link>
        </div>
        <div className="product-content">
          <h3>
            <Link
              to="/product"
              // state={{ id: product._id }}
              className="product-title"
              title=""
            >
              <strong>{product.productName}</strong>
            </Link>
          </h3>
          <div className="price">
            <div className="regular-price">
              <span>
                <span className="money">${product.price}</span>
              </span>
            </div>
          </div>
        </div>
        {product.inventory === 0 && (
          <h4 className="outOfStock">Out Of Stock</h4>
        )}
      </div>
    </div>
  );
};

export default CollectionsItem;
