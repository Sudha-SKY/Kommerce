import { useState, useEffect } from "react";

const ShowSpecifiedProductItems = (props) => {
  const { specifiedProducts, updateSpecifiedProducts, product } = props;

  return (
    <tr>
      <td>
        <span className="admin-list-img">
          {/* <img src={"../../" + product.image} alt="" /> */}
          <img src={product.image} alt="" />
        </span>
      </td>
      <td>{product.productName}</td>
      <td>
        <button
          style={{
            backGroundColor: "none",
            // background-repeat:no-repeat;
            border: "none",
            cursor: "pointer",
            // overflow: hidden;
            outline: "none",
          }}
          onClick={() => {
            const index = specifiedProducts.indexOf(product);
            specifiedProducts.splice(index, 1);
            updateSpecifiedProducts(specifiedProducts);

            // const index = pdts.indexOf(product);
            // pdts.splice(index, 1);
            // setPdts(pdts);
            // updateSpecifiedProducts(pdts);

            console.log("REMOVE CLICK");
            console.log("specifiedProducts", specifiedProducts);
            // console.log("pdts", pdts);
          }}
          className=""
        >
          <u>Remove</u>
        </button>
      </td>
    </tr>
  );
};

const ShowSpecifiedProducts = (props) => {
  const { specifiedProducts, updateSpecifiedProducts } = props;
  console.log("showSpecifiedProducts", specifiedProducts);

  return (
    <div className="added-products">
      <table className="table">
        <tbody>
          {specifiedProducts.map((product) => (
            <ShowSpecifiedProductItems
              key={product._id}
              id={product._id}
              image={product.image}
              productName={product.productName}
              specifiedProducts={specifiedProducts}
              updateSpecifiedProducts={updateSpecifiedProducts}
              product={product}
            />
          ))}
        </tbody>
        {/* updateSpecifiedProducts(pdts); */}
      </table>
    </div>
  );
};
export default ShowSpecifiedProducts;
