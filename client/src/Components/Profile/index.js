import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../NavBar";
import { getProfile } from "../../JS/actions";
import "./index.css";

const Profile = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return loading ? (
    <h1>Please wait ...</h1>
  ) : !isAuth ? (
    <Redirect to="/signin" />
  ) : (
    <div>
      <NavBar />
      <div className="userCard">
        <div style={{ fontSize: 30 }}>
          <i class="fas fa-id-card fa-10x"></i>
        </div>
        <div className="userCard-info">
          <span>Name :</span>
          <p>
            <i class="fas fa-user fa-2x"> </i> : {user.name}
          </p>
          <span>Email :</span>
          <p>
            <i class="fas fa-at fa-2x"></i> : {user.email}
          </p>
          <span>PhoneNumber :</span>
          <p>
            <i class="fas fa-phone fa-2x"></i> : {user.phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
