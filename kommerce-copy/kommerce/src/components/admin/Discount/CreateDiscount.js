// import { Link, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
// import DatePicker from "react-date-picker";

import SpecificProduct from "./SpecificProduct";
import ShowSpecifiedProducts from "./ShowSpecifiedProducts";

const CreateDiscount = () => {
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState();
  const [timesUsed, setTimesUsed] = useState(0);
  const [activeDate, setActiveDate] = useState();
  const [expireAt, setExpireAt] = useState();
  const [createdAt, setCreatedAt] = useState();
  const [status, setStatus] = useState("Active");
  const [statusProducts, setStatusProducts] = useState("All");
  const [specificIsShown, setSpecificIsShown] = useState(false);
  const [specificWasShown, setSpecificWasShown] = useState(false);
  const [specifiedProducts, setSpecifiedProducts] = useState([]);
  const [isSummary, setIsSummary] = useState(false);

  // const formData = new FormData();
  let input = {};
  const DATE_OPTIONS = { year: "numeric", month: "short", day: "numeric" };
  // const sdate = (new Date(startDate)).toLocaleDateString('en-US', DATE_OPTIONS);
  // const edate = (new Date(endDate)).toLocaleDateString('en-US', DATE_OPTIONS);

  // const navigate = useNavigate();

  // const updateData = useCallback(async () => {
  const updateData = async () => {
    try {
      console.log("updateDate");
      // console.log(formData);
      // for (const [key, value] of formData) {
      //   console.log("formData", `${key}: ${value}\n`);
      // }
      console.log("input", input);

      const config = {
        // headers: { "content-type": "multipart/form-data" },
        headers: { "content-type": "application/json" },
      };
      axios
        .post("http://127.0.0.1:5000/api/v1/discounts", input, config)
        .then((res) => {
          console.log(res.data);
          // console.log(this.state.filename);

          // navigate("/admin/product-list");
        });
    } catch (err) {
      console.log(err);
      console.log("error", err.response.data.message);
    }
  };
  // }, [formData]);

  const onSaveHandler = (event) => {
    event.preventDefault();
    console.log("onSaveHAndler");
    // const tempDate = {
    //   createdAt: moment(createdAt, "DD/MM/YYYY", true).format(),
    //   expireAt: moment(expireAt, "DD/MM/YYYY", true).format(),
    // };
    const createdAt = new Date(createdAt).toLocaleDateString(
      "en-US",
      DATE_OPTIONS
    );
    const expireAt = new Date(expireAt).toLocaleDateString(
      "en-US",
      DATE_OPTIONS
    );
    const tempDate = { createdAt, expireAt };
    console.log(tempDate);
    setActiveDate(tempDate);
    const productsID = specifiedProducts.map((product) => product._id);
    console.log("productsID", productsID);

    input.discountCode = discountCode;
    input.discountPercent = discountPercent;
    input.activeDate = tempDate;
    input.status = status;
    input.timesUsed = timesUsed;
    input.products = productsID;
    updateData();
  };

  // const onSaveHandler = (event) => {
  //   event.preventDefault();
  //   console.log("onSaveHAndler");
  //   const tempDate = { expireAt: expireAt, createdAt: createdAt };
  //   console.log(tempDate);
  //   setActiveDate(tempDate);
  //   formData.append("discountCode", discountCode);
  //   formData.append("discountPercent", discountPercent);
  //   // formData.append("timesUsed", timesUsed);
  //   formData.append("activeDate", activeDate);
  //   // formData.append("expireAt", expireAt);
  //   // formData.append("createdAt", createdAt);
  //   formData.append("status", status);
  //   formData.append("products", specifiedProducts);
  //   for (const [key, value] of formData) {
  //     console.log("formData", `${key}: ${value}\n`);
  //   }

  //   updateData();
  // };
  const showSpecificHandler = () => {
    setSpecificIsShown(true);

    setStatusProducts("Specific");
  };

  const hideSpecificHandler = () => {
    setSpecificIsShown(false);
    setSpecificWasShown(true);
  };

  const summaryContent = (
    <div className="flex">
      <div>
        {discountPercent && (
          <>
            <h4>Cart Offer</h4>
            <ul style={{ listStyleType: "disc" }}>
              <li>${discountPercent} of products </li>
            </ul>
          </>
        )}
        {createdAt && (
          <ul style={{ listStyleType: "disc" }}>
            <li>Active from {createdAt}</li>
          </ul>
        )}
      </div>
      <div>
        <p className={status === "Active" ? "color-green" : "color-red"}>
          {status}
        </p>
      </div>
    </div>
  );

  const refreshSpecifiedProducts = useCallback(
    (specifiedPdts) => {
      console.log("Before Set", specifiedProducts);

      setSpecifiedProducts(specifiedPdts);
      console.log("After Set", specifiedProducts);
    },
    [specifiedProducts]
  );

  // useEffect(() => {
  <ShowSpecifiedProducts
    specifiedProducts={specifiedProducts}
    updateSpecifiedProducts={refreshSpecifiedProducts}
  />;
  console.log("create discount", specifiedProducts);
  // setSpecifiedProducts(specifiedProducts);
  // showSpecifiedProductsFn();
  // }, [specifiedProducts, refreshSpecifiedProducts]);

  return (
    <section className="flex">
      <div className="container-fluid">
        <div className="admin-content">
          <div className="admin-left-nav mt-20">
            <ul>
              <li>
                <Link to="/admin/product-list">Products</Link>
              </li>
              <li>
                <Link to="/admin/order-list">Orders</Link>
              </li>
              <li>
                <Link className="active" to="/admin/discount-list">
                  Discount
                </Link>
              </li>
            </ul>
          </div>

          <div className="admin-right page-content">
            <div className="products-list">
              <div className="actions flex items-center">
                <h3>{discountCode.toUpperCase()}</h3>
              </div>
              <div className="view-orders">
                <div className="main-cart-wrapper">
                  <div className="cart__items cart__block">
                    {/* <form encType="multipart/form" onSubmit={onSaveHandler}> */}
                    <form onSubmit={onSaveHandler}>
                      <div className="form-inline">
                        <div className="order__details-wrap">
                          <div className="flex">
                            <div className="w-50 pr-10">
                              <h4>Discount code</h4>
                              <input
                                type="text"
                                value={discountCode}
                                onChange={(e) =>
                                  setDiscountCode(e.target.value)
                                }
                                placeholder=""
                              />
                            </div>
                            <div className="w-50 pl-10">
                              <h4>Discount Value (in %)</h4>
                              <input
                                type="text"
                                value={discountPercent}
                                onChange={(e) => {
                                  setDiscountPercent(e.target.value);
                                  setIsSummary(true);
                                }}
                              />
                            </div>
                          </div>
                          <div className="mt-10">
                            <h4>Status</h4>
                            <div className="">
                              <label htmlFor="enable">
                                <input
                                  type="radio"
                                  id="enable"
                                  name="status"
                                  value="Active"
                                  checked={status === "Active"}
                                  onChange={(e) => {
                                    console.log("status", e.target.value);
                                    setStatus(e.target.value);
                                  }}
                                  className="input-text"
                                />
                                Enable
                              </label>
                            </div>
                            <div className="mt-10">
                              <label htmlFor="disable">
                                <input
                                  type="radio"
                                  id="disable"
                                  name="status"
                                  value="Inactive"
                                  checked={status === "Inactive"}
                                  onChange={(e) => {
                                    console.log("status", e.target.value);
                                    setStatus(e.target.value);
                                  }}
                                  className="input-text"
                                />
                                Disable
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="order__details-wrap mt-20">
                          <div className="">
                            <h4>Applies to</h4>
                            <div className="">
                              <label htmlFor="all">
                                <input
                                  type="radio"
                                  className="input-text"
                                  id="all"
                                  checked={statusProducts === "All"}
                                  name="products"
                                  onChange={(e) => {
                                    console.log("All Products");
                                    setStatusProducts("All");
                                  }}
                                />
                                All Products
                              </label>
                            </div>
                            <div className="mt-10">
                              <label htmlFor="specific">
                                <input
                                  type="radio"
                                  className="input-text"
                                  id="specific"
                                  name="products"
                                  checked={statusProducts === "Specific"}
                                  onChange={showSpecificHandler}
                                />
                                Specific products
                              </label>
                              {specificIsShown && (
                                <SpecificProduct
                                  specifiedProducts={specifiedProducts}
                                  updateSpecifiedProducts={
                                    refreshSpecifiedProducts
                                  }
                                  onClose={hideSpecificHandler}
                                />
                              )}
                              {specificWasShown && (
                                <ShowSpecifiedProducts
                                  specifiedProducts={specifiedProducts}
                                  updateSpecifiedProducts={
                                    refreshSpecifiedProducts
                                  }
                                />
                              )}
                            </div>
                          </div>
                          <div className="mt-20 discount-period">
                            <h4>Active Dates</h4>
                            <div className="flex">
                              <div className="w-50 pr-10">
                                <label htmlFor="">Start Date</label>
                                {/* <DatePicker
                                  placeholder="dd/mm/yyyy"
                                  dateFormat="dd/mm/yyyy"
                                  selected={createdAt}
                                  onChange={(e) => setCreatedAt(e)}
                                /> */}
                                <input
                                  type="date"
                                  // type="text"
                                  placeholder="dd-mm-yyyy"
                                  min="2022-01-01"
                                  max="2023-12-31"
                                  // value={moment(createdAt).format("DD/MM/YYYY")}
                                  onChange={(e) => {
                                    console.log(e.target.value);
                                    setCreatedAt(
                                      moment(e.target.value).format(
                                        "DD/MM/YYYY"
                                      )
                                    );
                                  }}
                                  // onFocus={(e) => (e.target.type = "date")}
                                  // onBlur={(e) => (e.target.type = "text")}
                                  required
                                />
                              </div>
                              <div className="w-50 pl-10">
                                <label htmlFor="">End Date</label>
                                <input
                                  type="date"
                                  placeholder="dd/mm/yyyy"
                                  min="2022-01-01"
                                  max="2023-12-31"
                                  onChange={(e) =>
                                    setExpireAt(
                                      moment(e.target.value).format(
                                        "DD/MM/YYYY"
                                      )
                                    )
                                  }
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-20">
                        {/* <Link
                        // to="/admin/discount-list"
                        className="button checkout_btn button--hollow"
                      >
                        Save
                      </Link> */}
                        <button
                          type="submit"
                          // onSubmit={onSaveHandler}
                          className="button checkout_btn button--hollow justify-end inline-block"
                        >
                          Save
                        </button>
                        <button className="button update_btn">Discard</button>
                      </div>
                    </form>
                  </div>

                  <div className="cart__details cart__block add-margin">
                    <div className="order__details-wrap">
                      {/* <h3>Summary</h3> */}
                      <strong>Summary</strong>
                      <div className="border-t mt-10">
                        <div className="flex mt-20">
                          {!isSummary && <p>No information entered yet.</p>}
                          {isSummary && summaryContent}
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

export default CreateDiscount;
