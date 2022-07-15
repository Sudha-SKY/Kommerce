import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import DiscountItem from "./DiscountItem";
import LoadingSpinner from "../../../utils/LoadingSpinner";

const DiscountsItemList = (props) => {
  const [discounts, setDiscounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllDiscounts = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://127.0.0.1:5000/api/v1/discounts");
      console.log("getAllDiscounts", res);
      if (res.data.status === "success") {
        setDiscounts(res.data.data.discounts);
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      console.log("error", err.response.data.message);
    }
  }, [setDiscounts]);

  useEffect(() => {
    getAllDiscounts();
  }, [getAllDiscounts]);

  return (
    <tbody>
      {isLoading && (
        <div className="centered">
          <LoadingSpinner />
        </div>
      )}
      {discounts.map((discount) => (
        <DiscountItem
          key={discount._id}
          id={discount._id}
          discountCode={discount.discountCode}
          discountPercent={discount.discountPercent}
          timesUsed={discount.timesUsed}
          activeDate={discount.activeDate}
          expireAt={discount.activeDate.expireAt}
          createdAt={discount.activeDate.createdAt}
          status={discount.status}
        />
      ))}
    </tbody>
  );
};

export default DiscountsItemList;

// const DUMMY_DISCOUNTS = [
//   {
//     discountCode: "TRYNEW",
//     discountPercent: "20",
//     timesUsed: 0,
//     activeDate: { createdAt: "July 21, 2022", expireAt: "July 31, 2022" },
//     status: "Scheduled",
//   },
//   {
//     discountCode: "WELCOME",
//     discountPercent: "25",
//     timesUsed: 10,
//     activeDate: { createdAt: "July 7, 2022", expireAt: "July 17, 2022" },
//     status: "Active",
//   },
//   {
//     discountCode: "FEB14",
//     discountPercent: "20",
//     timesUsed: 48,
//     activeDate: {
//       createdAt: "February 10, 2022",
//       expireAt: "February 16, 2022",
//     },
//     status: "Expired",
//   },
//   {
//     discountCode: "REPUBLIC22",
//     discountPercent: "15",
//     timesUsed: 55,
//     activeDate: {
//       createdAt: "January 26, 2022",
//       expireAt: "January 26, 2022",
//     },
//     status: "Expired",
//   },
//   {
//     discountCode: "Pongal2022",
//     discountPercent: "15",
//     timesUsed: 56,
//     activeDate: {
//       createdAt: "January 14, 2022",
//       expireAt: "January 18, 2022",
//     },
//     status: "Expired",
//   },
//   {
//     discountCode: "NEWYEAR2022",
//     discountPercent: "30",
//     timesUsed: 100,
//     activeDate: {
//       createdAt: "January 01, 2022",
//       expireAt: "January 08, 2022",
//     },
//     status: "Expired",
//   },
// ];

// <td>
//     <Link to="admin/discount-list/edit-discount">
//       <u>Pongal2022</u>
//     </Link>
//     <p>15% off one-time purchase products</p>
//   </td>
//   <td>
//     <span>0</span> used
//   </td>
//   <td>April 14, 2022</td>
//   <td>April 21, 2022</td>
//   <td>Scheduled</td>
