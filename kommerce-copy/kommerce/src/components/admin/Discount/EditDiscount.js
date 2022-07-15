import { useState, useCallback, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import SpecificProduct from "./SpecificProduct";
import ShowSpecifiedProducts from "./ShowSpecifiedProducts";

const EditDiscount = () => {
  // const [discountCode, setDiscountCode] = useState("");
  // const [discountPercent, setDiscountPercent] = useState();
  // const [timesUsed, setTimesUsed] = useState(0);
  const [activeDate, setActiveDate] = useState();
  const [expireAt, setExpireAt] = useState(Date);
  const [createdAt, setCreatedAt] = useState(Date);
  // const [status, setStatus] = useState();
  const [statusProducts, setStatusProducts] = useState("All");
  const [specificIsShown, setSpecificIsShown] = useState(false);
  const [specificWasShown, setSpecificWasShown] = useState(false);
  // const [specifiedProducts, setSpecifiedProducts] = useState([]);
  // const [specifiedProductsId, setSpecifiedProductsId] = useState([]);
  const [isSummary, setIsSummary] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [discount, setDiscounts] = useState([]);
  const [products, setProducts] = useState([]);

  const params = useParams();
  // const { discountCodeName } = params;
  const location = useLocation();
  const { id } = location.state;
  console.log(params.discountCode, id);

  let status;
  let specifiedProducts;
  let input = {};
  // const getDiscount = useCallback(async () => {
  useEffect(() => {
    const getDiscount = async () => {
      try {
        console.log("getDiscount");
        setIsLoading(true);
        const res = await axios.get(
          `http://127.0.0.1:5000/api/v1/discounts/${id}`
        );
        console.log("getDiscount", res);
        if (res.data.status === "success") {
          console.log(res.data);
          setDiscounts(res.data.data.discount);
          // setStatus(res.data.data.discount.status);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        console.log("error", err.response.data.message);
      }

      // }, [setDiscounts, id]);
    };
    getDiscount();
  }, [setDiscounts, id]);

  // useEffect(() => {
  // getDiscount();
  // }, [getDiscount]);

  console.log("DISCOUNT", discount);
  console.log("SpecifiedProductsId", discount.products);
  console.log("ActiveDate", discount.activeDate);
  status = discount.status;
  // let x = moment(discount.activeDate.createdAt).format("DD/MM/yyyy");
  let x = "";

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

    // getSpecifiedProducts();
  }, [setProducts]);

  useEffect(() => {
    specifiedProducts = products.filter((product) => {
      return discount.products.some((productId) => product._id === productId);
    });

    console.log("specifiedProducts", specifiedProducts);
  }, []);

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
        .patch(`http://127.0.0.1:5000/api/v1/discounts/${id}`, input, config)
        .then((res) => {
          console.log(res.data);
          // navigate("/admin/product-list");
        });
    } catch (err) {
      console.log(err);
      console.log("error", err.response.data.message);
    }
  };
  const onSaveHandler = (event) => {
    event.preventDefault();
    console.log("onSaveHAndler");
    const tempDate = {
      createdAt: moment(createdAt, "DD/MM/YYYY", true).format(),
      expireAt: moment(expireAt, "DD/MM/YYYY", true).format(),
    };
    console.log(tempDate);
    setActiveDate(tempDate);
    const productsID = specifiedProducts.map((product) => product._id);
    console.log("productsID", productsID);

    input.discountCode = discount.discountCode;
    input.discountPercent = discount.discountPercent;
    input.activeDate = tempDate;
    input.status = status;
    input.timesUsed = discount.timesUsed;
    input.products = productsID;
    updateData();
  };

  // const showSpecificHandler = () => {
  //   setSpecificIsShown(true);

  //   setStatusProducts("Specific");
  // };

  // const hideSpecificHandler = () => {
  //   setSpecificIsShown(false);
  //   setSpecificWasShown(true);
  // };

  // const summaryContent = (
  //   <div className="flex">
  //     <div>
  //       {discountPercent && (
  //         <>
  //           <h4>Cart Offer</h4>
  //           <ul style={{ listStyleType: "disc" }}>
  //             <li>${discountPercent} of products </li>
  //           </ul>
  //         </>
  //       )}
  //       {createdAt && (
  //         <ul style={{ listStyleType: "disc" }}>
  //           <li>Active from {createdAt}</li>
  //         </ul>
  //       )}
  //     </div>
  //     <div>
  //       <p className={status === "Active" ? "color-green" : "color-red"}>
  //         {status}
  //       </p>
  //     </div>
  //   </div>
  // );

  const refreshSpecifiedProducts = (specifiedPdts) => {
    console.log("Before Set", specifiedProducts);

    // setSpecifiedProducts(specifiedPdts);
    specifiedProducts = specifiedPdts;
    console.log("After Set", specifiedProducts);
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    setDiscounts({ ...discount, [e.target.name]: e.target.value.trim() });
  };

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
                <h3>{discount.discountCode}</h3>
              </div>
              <div className="view-orders">
                <div className="main-cart-wrapper">
                  <div className="cart__items cart__block">
                    <form onSubmit={onSaveHandler}>
                      {/* <form> */}
                      <div className="form-inline">
                        <div className="order__details-wrap">
                          <div className="flex">
                            <div className="w-50 pr-10">
                              <h4>Discount code</h4>
                              <input
                                type="text"
                                name="discountCode"
                                value={discount.discountCode}
                                onChange={onChangeHandler}
                              />
                            </div>
                            <div className="w-50 pl-10">
                              <h4>Discount Value (in %)</h4>
                              <input
                                type="text"
                                name="dicountPercent"
                                value={discount.discountPercent}
                                onChange={onChangeHandler}
                              />
                            </div>
                          </div>
                          <div className="mt-10">
                            <h4>Status</h4>
                            <div className="">
                              <label for="enable">
                                <input
                                  type="radio"
                                  name="status"
                                  value="Active"
                                  checked={status === "Active"}
                                  onClick={(e) => {
                                    status = "Active";
                                  }}
                                  onChange={onChangeHandler}
                                  id="enable"
                                  className="input-text"
                                />
                                Enable
                              </label>
                            </div>
                            <div className="mt-10">
                              <label for="disable">
                                <input
                                  type="radio"
                                  name="status"
                                  value="Inactive"
                                  checked={status === "Inactive"}
                                  onClick={(e) => {
                                    status = "Inactive";
                                  }}
                                  onChange={onChangeHandler}
                                  className="input-text"
                                  id="disable"
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
                              <label for="all">
                                <input
                                  type="radio"
                                  className="input-text"
                                  id="all"
                                  name="products"
                                  checked={statusProducts === "All"}
                                  onChange={(e) => {
                                    console.log("All Products");
                                    setStatusProducts("All");
                                  }}
                                />
                                All Products
                              </label>
                            </div>
                            <div className="mt-10">
                              <label for="specific">
                                <input
                                  type="radio"
                                  className="input-text"
                                  id="specific"
                                  name="products"
                                  checked={statusProducts === "Specific"}
                                  // onChange={showSpecificHandler}
                                  onChange={console.log("")}
                                />
                                Specific products
                              </label>
                            </div>
                          </div>

                          <ShowSpecifiedProducts
                            specifiedProducts={specifiedProducts}
                            updateSpecifiedProducts={refreshSpecifiedProducts}
                            // updateSpecifiedProducts={specifiedProducts}
                          />

                          <div className="mt-20 discount-period">
                            <h4>Active Dates</h4>
                            <div className="flex">
                              <div className="w-50 pr-10">
                                <label for="">Start Date</label>
                                {/* <input
                                  type="text"
                                  value="24-02-2022"
                                  placeholder=""
                                  className=""
                                /> */}
                                <input
                                  type="date"
                                  // type="text"
                                  placeholder="dd-mm-yyyy"
                                  min="2022-01-01"
                                  max="2023-12-31"
                                  // value={
                                  // createdAt ||
                                  // moment(
                                  //   discount.activeDate.createdAt
                                  // ).format("DD/MM/YYYY")
                                  // }
                                  onChange={(e) => {
                                    console.log(e.target.value);
                                    setCreatedAt(
                                      moment(e.target.value).format(
                                        "DD/MM/YYYY"
                                      )
                                    );
                                  }}
                                  required
                                />
                              </div>
                              <div className="w-50 pl-10">
                                <label for="">End Date</label>
                                {/* <input
                                  type="text"
                                  value="24-03-2022"
                                  placehol
                                  className=""
                                /> */}
                                <input
                                  type="date"
                                  placeholder="dd/mm/yyyy"
                                  min="2022-01-01"
                                  max="2023-12-31"
                                  // value={
                                  //   expireAt ||
                                  //   moment(discount.activeDate.expireAt).format(
                                  //     "DD/MM/YYYY"
                                  //   )
                                  // }
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
                          to="#"
                          className="button checkout_btn button--hollow"
                        >
                          Save
                        </Link> */}
                        <button
                          type="submit"
                          className="button checkout_btn button--hollow justify-end inline-block"
                        >
                          Save
                        </button>
                        <button className="button update_btn">Delete</button>
                      </div>
                      {/* </div> */}
                      {/* </div> */}
                    </form>
                  </div>

                  <div className="cart__details cart__block add-margin">
                    <div className="order__details-wrap">
                      <h3>Summary</h3>
                      <div className="border-t mt-10">
                        <div className="flex mt-20">
                          <p>
                            <strong>Cart Offer</strong>
                          </p>
                          <span
                            className={
                              status === "Active" ? "color-green" : "color-red"
                            }
                          >
                            {discount.status}
                          </span>
                        </div>
                      </div>
                      <ul className="list-items">
                        <li>`${discount.discountPercent}% off products`</li>
                        <li>
                          `Active from
                          {/* {console.log(moment(discount.activeDate.createdAt))} */}
                          {/* {moment(discount.activeDate.createdAt).format(
                            "MMMM Do YYYY"
                          )} */}
                          {x}`
                        </li>
                      </ul>
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

export default EditDiscount;
