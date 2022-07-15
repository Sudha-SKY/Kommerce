import { useState, useCallback, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import SpecificProduct from "./SpecificProduct";
import ShowSpecifiedProducts from "./ShowSpecifiedProducts";

const EditDiscount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [discount, setDiscount] = useState([]);
  const [activeDate, setActiveDate] = useState();
  const [specifiedProductsId, setSpecifiedProductsId] = useState([]);

  const params = useParams();
  // const { discountCodeName } = params;
  const location = useLocation();
  const { id } = location.state;
  console.log(params.discountCode, id);

  const getDiscount = useCallback(async () => {
    try {
      console.log("getDiscount");
      setIsLoading(true);
      const res = await axios.get(
        `http://127.0.0.1:5000/api/v1/discounts/${id}`
      );
      console.log("getDiscount", res);
      if (res.data.status === "success") {
        console.log(res.data);
        setDiscount(res.data.data.discount);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      console.log("error", err.response.data.message);
    }

    // }, [setDiscounts, id]);
  }, [setDiscount, id]);

  useEffect(() => {
    getDiscount();
  }, [getDiscount]);

  //   setSpecifiedProductsId(discount.products);
  // setActiveDate(discount.activeDate);
  console.log("DISCOUNT", discount);
  console.log("SpecifiedProductsId", specifiedProductsId);
  console.log("ActiveDate", activeDate);

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
        </div>
      </div>
    </section>
  );
};

export default EditDiscount;
