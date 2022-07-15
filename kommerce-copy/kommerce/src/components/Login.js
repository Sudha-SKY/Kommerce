import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  // const isAuthUser = useSelector((state) => state.auth.isAuthenticated);
  // const isAdmin = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("Login submitHandler");
    try {
      console.log(email.current.value, password.current.value);
      const user = {
        email: email.current.value,
        password: password.current.value,
      };
      const res = await axios.post(
        "http://127.0.0.1:5000/api/v1/users/login",
        user
      );
      console.log("login", res);

      console.log(res.data.data.user.role);
      if (res.data.status === "success") {
        console.log("success", "logged in successfully!");
        dispatch(authActions.login(res.data.data.user.role));
        console.log("after dispatch");
        // navigate("/login", { replace: true });
        if (res.data.data.user.role === "user") navigate("/collections");
        if (res.data.data.user.role === "admin")
          navigate("/admin/product-list");
      }
    } catch (err) {
      console.log(err);
      console.log("error", err.response.data.message);
    }
  };

  return (
    <section>
      <div className="form-container sign-up-container">
        <form onSubmit={submitHandler}>
          <h1>Login</h1>
          <div className="form-control">
            <label htmlFor="name">Email Address</label>
            <input type="email" id="email" required ref={email} />
          </div>
          <div className="form-control">
            <label htmlFor="name">Enter Password</label>
            <input type="password" id="password" required ref={password} />
          </div>
          <button className="button button--hollow justify-end inline-block">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};
export default Login;
