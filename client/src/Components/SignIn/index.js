import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../JS/actions";

import NavBar from "../NavBar";

const SignIn = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
  };
  return localStorage.getItem("token") ? (
    <Redirect to="/profile" />
  ) : (
    <div>
      <NavBar />
      <div className="Container">
        {loading ? (
          <h1>Please wait...</h1>
        ) : (
          <div id="form" className="col-md-8 offser-md-4">
            <div className="row">
              <h1>Sign In ...</h1>
            </div>
            <div className="row mt-3">
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="form-control"
              />
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="form-control"
              />
            </div>
            <div id="btnSubmit" className="row mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={loginUser}
              >
                submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
