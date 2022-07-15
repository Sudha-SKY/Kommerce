import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";

import classes from "./style.css";
import Login from "./components/Login";
import Register from "./components/Register";

import Collections from "./components/user/Collections";
import Product from "./components/user/Product";
import Cart from "./components/user/Cart/Cart";
import CheckOut from "./components/user/Checkout";
import Order from "./components/user/Order";
import OrderDetails from "./components/user/OrderDetails";
import OrderSuccess from "./components/user/OrderSuccess";
import Payment from "./components/user/Payment";

import AdminCollection from "./components/admin/Products/AdminCollection";
import AddProduct from "./components/admin/Products/AddProduct";
import EditProduct from "./components/admin/Products/EditProduct";
import AdminOrders from "./components/admin/Orders/AdminOrders";
import AdminOrderDetails from "./components/admin/Orders/AdminOrderDetails";
import OrderConfirmation from "./components/admin/Orders/OrderConfirmation";

import DiscountList from "./components/admin/Discount/DiscountList";
import CreateDiscount from "./components/admin/Discount/CreateDiscount";
import EditDiscount from "./components/admin/Discount/EditDiscount";
// import SpecificProduct from "./components/admin/Discount/SpecificProduct";

function App() {
  return (
    // <Routes>
    //   <Route
    //     exact
    //     path="/order-confirmation"
    //     element={<OrderConfirmation />}
    //   ></Route>
    // </Routes>
    <div className="main-content">
      <Layout>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>

          <Route exact path="/collections" element={<Collections />}></Route>
          <Route exact path="/product" element={<Product />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/checkout" element={<CheckOut />}></Route>
          <Route exact path="/order" element={<Order />}></Route>
          <Route exact path="/order-details" element={<OrderDetails />}></Route>
          <Route exact path="/order-success" element={<OrderSuccess />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
          <Route
            exact
            path="/admin/product-list"
            element={<AdminCollection />}
          ></Route>
          {/* <Route
            exact
            path="/admin"
            // element={<Navigate to="/admin/product-list" />}
            element={<AdminCollection />}
          ></Route> */}
          <Route
            exact
            path="/admin/product-list/add-product"
            element={<AddProduct />}
          ></Route>
          <Route
            exact
            path="/admin/product-list/edit-product/:productName"
            element={<EditProduct />}
          ></Route>
          <Route
            exact
            path="/admin/order-list"
            element={<AdminOrders />}
          ></Route>
          <Route
            exact
            path="/admin/order-list/:orderNumber"
            element={<AdminOrderDetails />}
          ></Route>

          <Route exact path="/admin/discount-list" element={<DiscountList />}>
            {/* <Route
              exact
              path="create-discount"
              element={<CreateDiscount />}
            ></Route> */}
          </Route>
          <Route
            exact
            path="/admin/discount-list/create-discount"
            element={<CreateDiscount />}
          ></Route>

          {/* <Route
            exact
            path="/admin/discount-list/edit-discount"
            element={<EditDiscount />}
          ></Route> */}
          <Route
            exact
            path="/admin/discount-list/edit-discount/:discountCode"
            element={<EditDiscount />}
          ></Route>

          <Route
            exact
            path="/order-confirmation"
            element={<OrderConfirmation />}
          ></Route>

          {/* <Redirect exact from="/" to="/home" /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//  export default App;
