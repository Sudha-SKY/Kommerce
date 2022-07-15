import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const EditProduct = () => {
  const params = useParams();
  const { productName } = params;
  const location = useLocation();
  const { id } = location.state;
  // console.log("EditProduct location.state", id);

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [img, setImg] = useState();
  const [imgFile, setImgFile] = useState();
  let imageURL;

  const [imageClicked, setImageClicked] = useState(false);
  const formData = new FormData();
  const inputFile = useRef(null);
  // const imgTry = "/kommerce/public/images/floral.jpg";
  // const imgTry = "../images/floral.jpg";

  const getProduct = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `http://127.0.0.1:5000/api/v1/products/${id}`
      );
      console.log("getProduct", res);
      if (res.data.status === "success") {
        console.log(res.data.data);
        setProduct(res.data.data.product);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      console.log("error", err.response.data.message);
    }
  }, [setProduct, id]);

  useEffect(() => {
    getProduct();
    console.log("product.image", product.image);
  }, [getProduct, product.image]);

  // console.log("public url", process.env.PUBLIC_URL + product.image);

  const onChangeHandler = (e) => {
    e.preventDefault();
    setProduct({ ...product, [e.target.name]: e.target.value.trim() });
    // console.log(product);
  };

  const onImageClickHandler = () => {
    console.log("onImageClickHandelr");
    inputFile.current.click();
  };

  const onChangeImage = (e) => {
    console.log("onChangeImage");
    console.log("onChangeImage", inputFile.current.value);
    if (inputFile.current.value) {
      console.log("target", e.target.files[0]);
      console.log("inputFile", inputFile.current.value);

      const imageFile = e.target.files[0];
      // formData.append("image", imageFile);
      // formData.append("image", e.target.files[0]);

      const file = e.target.files[0];
      // const url = URL.createObjectURL(file);
      // console.log("url in onCHangeImage", url);

      setImg(URL.createObjectURL(file));
      setImgFile(imageFile);

      setImageClicked(true);
    }
  };

  const updateData = useCallback(async () => {
    try {
      console.log("EditProduct updateDate");
      console.log(
        "formDATA image file before updateData",
        formData.get("image")
      );
      for (const [key, value] of formData) {
        // output.textContent += `${key}: ${value}\n`;
        console.log("formData", `${key}: ${value}\n`);
      }
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      axios
        .patch(`http://127.0.0.1:5000/api/v1/products/${id}`, formData, config)
        .then((res) => {
          console.log("res.data", res.data);

          console.log("formData", formData);
          // setIsSaved(true);
          // navigate("/admin/product-list");
        });
    } catch (err) {
      console.log(err);
      console.log("error", err.response.data.message);
    }
  }, [formData, id]);

  const onSaveHandler = (event) => {
    event.preventDefault();
    console.log("onSaveHAndler");
    console.log("img in onCHangeImage", img);
    console.log("imgFile in onCHangeImage", imgFile);

    formData.append("image", imgFile);
    formData.append("productName", product.productName);
    formData.append("sku", product.sku);
    formData.append("price", product.price);
    formData.append("inventory", product.inventory);
    formData.append("status", product.status);
    formData.append("description", product.description);
    // formData.append("",);
    for (const [key, value] of formData) {
      // output.textContent += `${key}: ${value}\n`;
      console.log("formData", `${key}: ${value}\n`);
    }

    updateData();
  };

  // const ImageThumb = (props) => {
  //   console.log("imageThumb", props.image);
  //   // if (image) return <img src={URL.createObjectURL(image)} alt={image.name} />;
  //   // if (image) return <img src={image} alt="img" />;
  //   // else return <p>ERROR</p>;
  //   return (
  //     <img
  //       src={props.image}
  //       alt="img"
  //       style={{
  //         objectFit: "fill",
  //         // maxWidth: 500,
  //         minWidth: 300,
  //         minHeight: 300,
  //         border: "solid 1px #CCC",
  //       }}
  //     />
  //   );
  // };

  return (
    <section className="flex">
      <div className="container-fluid">
        <div className="admin-content">
          <div className="admin-left-nav mt-20">
            <ul>
              <li>
                <Link className="active" to="/admin/product-list">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/admin/order-list">Orders</Link>
              </li>
              <li>
                <Link to="/admin/discount-list">Discount</Link>
              </li>
            </ul>
          </div>
          <div className="admin-right page-content">
            <div className="products-list">
              <div className="actions flex items-center">
                <h3>{productName}</h3>
                <Link
                  to="/admin/product-list"
                  className="button button--hollow justify-end inline-block"
                >
                  Update
                </Link>
              </div>
              <div className="edit-product">
                <div className="flex">
                  <div className="product-lineitems form-section">
                    <form encType="multipart/form" onSubmit={onSaveHandler}>
                      <div className="form-control">
                        <label htmlFor="product-name">Product Name</label>
                        <input
                          type="text"
                          name="productName"
                          value={product.productName}
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="sku">SKU</label>
                        <input
                          type="text"
                          name="sku"
                          value={product.sku}
                          onChange={onChangeHandler}
                        />
                      </div>
                      <div className="flex">
                        <div className="form-control pr-10">
                          <label htmlFor="price">Price ($)</label>
                          <input
                            type="text"
                            name="price"
                            value={product.price}
                            onChange={onChangeHandler}
                          />
                        </div>
                        <div className="form-control pl-10">
                          <label htmlFor="inventory">Inventory</label>
                          <input
                            type="text"
                            name="inventory"
                            value={product.inventory}
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>
                      <div className="form-control">
                        <label htmlFor="status">Product Status</label>
                        <div className="mt-10">
                          <span className="pr-20">
                            <input
                              type="radio"
                              name="status"
                              value="Active"
                              checked={product.status === "Active"}
                              onChange={onChangeHandler}
                            />{" "}
                            Active
                          </span>

                          <span>
                            <input
                              type="radio"
                              name="status"
                              value="Inactive"
                              checked={product.status === "Inactive"}
                              onChange={onChangeHandler}
                            />{" "}
                            Inactive
                          </span>
                        </div>
                      </div>
                      <div className="form-control">
                        <label htmlFor="description">Description</label>
                        <textarea
                          cols="5"
                          rows="10"
                          name="description"
                          value={product.description}
                          onChange={onChangeHandler}
                        ></textarea>
                      </div>
                      {/* <Link
                        to="/admin/product-list"
                        className="button button--hollow justify-end inline-block"
                      >
                        Update
                      </Link> */}
                      <button
                        type="submit"
                        className="button button--hollow justify-end inline-block"
                      >
                        Update
                      </button>
                    </form>
                  </div>
                  <div>
                    {/* <ImageThumb image={imgTry} /> */}
                    {/* <img
                      // src={process.env.PUBLIC_URL + product.image}
                      // src="../../../images/floral.jpg"
                      src={"../../" + product.image}
                      alt=""
                      style={{
                        objectFit: "fill",
                        // maxWidth: 500,
                        minWidth: 300,
                        minHeight: 300,
                        border: "solid 1px #CCC",
                      }}
                    /> */}
                    {/* <img src={img} alt="" /> */}
                  </div>
                  <div className="product-imageitem">
                    <div id="wrapper">
                      <label htmlFor="myFile">Product Image</label>
                      <div className="mt-10">
                        {/* <img src={"../../" + product.image} alt="" /> */}

                        <div className="drop-zone">
                          {!imageClicked && (
                            <img
                              src={"../../" + product.image}
                              alt=""
                              onClick={onImageClickHandler}
                            />
                          )}
                          {/* <span className="drop-zone__prompt">
                            Drop file here or click to upload
                          </span> */}
                          {/* <input
                              type="file"
                              name="myFile"
                              className="drop-zone__input"
                            /> */}
                          <input
                            type="file"
                            id="photo"
                            name="image"
                            // defaultValue={`../../${imgTry}`}
                            // value={`../../${imgTry}`}
                            // defaultValue={product.image}
                            ref={inputFile}
                            // style={{ display: "none" }}
                            onChange={onChangeImage}
                            className="drop-zone__input"
                          />
                          {imageClicked && <img src={img} alt="selected-pic" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditProduct;
