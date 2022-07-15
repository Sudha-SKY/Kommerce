import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const [pdtName, setPdtName] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState("");
  const [status, setStatus] = useState("Active");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState();
  const [imgFile, setImgFile] = useState();
  const [imageClicked, setImageClicked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const inputFile = useRef(null);
  const formData = new FormData();

  const navigate = useNavigate();

  const updateData = useCallback(async () => {
    try {
      console.log("updateDate");
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      axios
        .post("http://127.0.0.1:5000/api/v1/products", formData, config)
        .then((res) => {
          console.log(res.data);
          // console.log(this.state.filename);
          console.log(formData);
          setIsSaved(true);
          // navigate("/admin/product-list");
        });
    } catch (err) {
      console.log(err);
      console.log("error", err.response.data.message);
    }
  }, [formData]);

  const onSaveHandler = (event) => {
    event.preventDefault();
    console.log("onSaveHAndler");

    formData.append("image", imgFile);
    formData.append("productName", pdtName);
    formData.append("sku", sku);
    formData.append("price", price);
    formData.append("inventory", inventory);
    formData.append("status", status);
    formData.append("description", description);
    // formData.append("",);
    for (const [key, value] of formData) {
      // output.textContent += `${key}: ${value}\n`;
      console.log("formData", `${key}: ${value}\n`);
    }

    updateData();
  };

  // useEffect(() => {
  //   updataData();
  // }, [updataData]);
  // const onClickHandler = (e) => {
  //   setSelectedFile(e.target.files[0]);
  //   if (e.target.files.length !== 0) console.log("target", e.target.files[0]);
  //   console.log("selectedFile", selectedFile);
  // };

  // const handlePhoto = (e) => {
  //   const image = new FormData();
  //   image.append('photo', e.target.files[0]);
  //   console.log("inside habdlephoto", image.get('photo'))
  //   const dataSend = Object.assign({} ,data, image.get('photo'));
  //   setData(dataSend)
  // }

  const onChangeImage = (e) => {
    // inputFile.current.click();

    // if (e.target.files.length !== 0) {
    if (inputFile.current.value) {
      console.log("target", typeof e.target.files[0]);
      console.log("inputFile", inputFile.current.value);

      const imageFile = e.target.files[0];
      const file = e.target.files[0];
      setImg(URL.createObjectURL(file));
      setImgFile(imageFile);
      setImageClicked(true);
      // formData.append("image", e.target.files[0]);
      // console.log("formDATA after image click", formData.get("image"));
      //      // console.log("inside handlephoto", typeof image.get("photo"));
      //    // console.log("inside handlephoto", image.get("photo"));
      //      // const dataSend = Object.assign({}, image.get("photo"));
      //      // console.log("dataSend", typeof dataSend);
      //      // console.log("dataSend", dataSend);
      //      // setSelectedFile(e.target.files[0]);
      //      // // let z = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
      //      // z = inputFile.current.value.substring(
      //      //   inputFile.current.value.lastIndexOf("\\") + 1
      //      // );
      //      // console.log("z", z);
      //      // setSelectedFile(z);

      //      // let z = Object.assign({}, e.target.files[0]);
      //      // setSelectedFile(z);
      //      // console.log(selectedFile);
    }
  };

  // const ImageThumb = ({ image }) => {
  //   console.log(image);
  //   // if (image) return <img src={URL.createObjectURL(image)} alt={image.name} />;
  //   if (image) return <img src={selectedFile} alt={image.name} />;
  //   else return <p>ERROR</p>;
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
                <h3>Add Product</h3>
                <Link
                  onClick={onSaveHandler}
                  to="/admin/product-list"
                  className="button button--hollow justify-end inline-block"
                >
                  Save
                </Link>
              </div>

              <div className="edit-product">
                <div className="flex">
                  <div className="product-lineitems form-section">
                    <form encType="multipart/form" onSubmit={onSaveHandler}>
                      {/* <form encType="x-www-form-urlencoded" onSubmit={onSaveHandler}> */}
                      <div className="form-control">
                        <label htmlFor="product-name">Product Name</label>
                        <input
                          type="text"
                          value={pdtName}
                          onChange={(e) => setPdtName(e.target.value)}
                          placeholder=""
                        />
                      </div>
                      <div className="form-control">
                        <label htmlFor="sku">SKU</label>
                        <input
                          type="text"
                          value={sku}
                          onChange={(e) => setSku(e.target.value)}
                          placeholder=""
                        />
                      </div>
                      <div className="flex">
                        <div className="form-control pr-10">
                          <label htmlFor="price">Price ($)</label>
                          <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder=""
                          />
                        </div>
                        <div className="form-control pl-10">
                          <label htmlFor="inventory">Inventory</label>
                          <input
                            type="text"
                            value={inventory}
                            onChange={(e) => setInventory(e.target.value)}
                            placeholder=""
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
                              checked={status === "Active"}
                              onChange={(e) => setStatus(e.target.value)}
                            />{" "}
                            Active
                          </span>
                          <span>
                            <input
                              type="radio"
                              name="status"
                              value="Inactive"
                              checked={status === "Inactive"}
                              onChange={(e) => setStatus(e.target.value)}
                            />{" "}
                            Inactive{" "}
                          </span>
                        </div>
                      </div>
                      <div className="form-control">
                        <label htmlFor="description">Description</label>
                        <textarea
                          cols="5"
                          rows="10"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      {/* <Link
                        to="/admin/product-list"
                        onClick={onSaveHandler}
                        className="button button--hollow justify-end inline-block"
                      >
                        Save
                      </Link> */}
                      {/* <button type="submit" onClick={onSaveHandler}> */}
                      <button
                        type="submit"
                        className="button button--hollow justify-end inline-block"
                      >
                        Save
                      </button>
                    </form>
                  </div>
                  <div className="product-imageitem">
                    <div id="wrapper">
                      <label htmlFor="description">Product Image</label>
                      <div className="mt-10">
                        <div className="drop-zone" onClick={onChangeImage}>
                          {/* <div className="drop-zone"> */}
                          {!imageClicked && (
                            <span className="drop-zone__prompt">
                              Drop file here or click to upload
                            </span>
                          )}
                          {/* <input
                            type="file"
                            id="file"
                            name="myFile"
                            // onChange={(e) => setSelectedFile(e.target.files[0])}
                            onChange={(e) => {
                              setSelectedFile(e.target.files[0]);
                              console.log(selectedFile);
                            }}
                            className="drop-zone__input"
                          /> */}
                          <input
                            type="file"
                            id="photo"
                            name="image"
                            ref={inputFile}
                            // style={{ display: "none" }}
                            onChange={onChangeImage}
                          />
                          {/* <button onClick={onClick}>open file browser</button> */}
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

export default AddProduct;
