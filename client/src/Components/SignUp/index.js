import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../JS/actions";

import NavBar from "../NavBar";

import "./index.css";

const SignUp = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const addUser = (e) => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
        phoneNumber,
      })
    );
  };
  return (
    <div>
      <NavBar />
      <div className="Container">
        {loading ? (
          <h1>Please wait...</h1>
        ) : user ? (
          <Redirect to="/signin" />
        ) : (
          <div id="form" className="col-md-8 offser-md-4">
            <div className="row">
              <h1>Sign Up ...</h1>
            </div>
            <div className="row mt-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="form-control"
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="form-control"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password..."
                className="form-control"
              />
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number..."
                className="form-control"
              />
            </div>
            <div id="btnSubmit" className="row mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addUser}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
