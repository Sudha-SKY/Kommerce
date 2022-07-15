// import { useState, useRef, useContext } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";

const Register = () => {
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("Register submitHandler");
    try {
      const isEmail = validator.isEmail(email.current.value);
      if (!isEmail) console.log("Invalid email");
      const user = {
        email: email.current.value,
        password: password.current.value,
        passwordConfirm: passwordConfirm.current.value,
      };
      const res = await axios.post(
        "http://127.0.0.1:5000/api/v1/users/register",
        user
      );
      console.log(res);
      // .then((res) => console.log(res.data.data));

      if (res.data.status === "success") {
        console.log("success", "Signed in successfully!");
        // navigate("/login", { replace: true });
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      console.log("error", err.response.data.message);
      // console.log("error", err.message);
    }
  };

  return (
    <section>
      <div className="form-container sign-up-container">
        <form onSubmit={submitHandler}>
          <h1>Create Account</h1>
          {/* <!-- <div className="form-control">
            <label for="name">Name</label>
            <input type="text" placeholder=""/>
        </div> --> */}
          <div className="form-control">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required ref={email} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Enter Password</label>
            <input type="password" id="password" required ref={password} />
          </div>
          <div className="form-control">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              required
              ref={passwordConfirm}
              onClick={(event) => console.log(event.target.value)}
            />
          </div>
          <button className="button checkout_btn button--hollow">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
