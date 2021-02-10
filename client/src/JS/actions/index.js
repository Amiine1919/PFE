import axios from "axios";

import {
  /****************USER CONSTANTS******************/
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_USER,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_USER,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  /****************JOB_AD CONSTANTS******************/
  ADD_JOB_AD,
  ADD_JOB_AD_FAIL,
  ADD_JOB_AD_SUCCESS,
  GET_JOB_AD,
  GET_JOB_AD_SUCCESS,
  GET_JOB_AD_FAIL,
  EDIT_JOB_AD,
  EDIT_JOB_AD_FAIL,
  EDIT_JOB_AD_SUCCESS,
  DELETE_JOB_AD,
  DELETE_JOB_AD_SUCCESS,
  DELETE_JOB_AD_FAIL,
} from "../constants/actions-types";

/****************USER ACTIONS******************/
export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: SIGNUP_USER,
  });
  try {
    const addRes = await axios.post("/user/register", newUser);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: addRes.data,
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error.response.data,
    });
  }
};

export const login = (credential) => async (dispatch) => {
  dispatch({
    type: SIGNIN_USER,
  });
  try {
    const loginRes = await axios.post("/user/login", credential);
    localStorage.setItem("token", loginRes.data.token);
    localStorage.setItem("adminMail", credential.email);
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: loginRes.data,
    });
  } catch (error) {
    dispatch({
      type: SIGNIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GET_PROFILE,
  });
  try {
    const isAuth = await axios.get("/user/current", config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: isAuth.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};

export const getUsers = () => async (dispatch) => {
  dispatch({
    type: GET_USERS,
  });
  try {
    const users = await axios.get(`/user/users`);
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: users,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload: error.response.data,
    });
  }
};

/****************JOB_AD ACTIONS******************/
export const addJobAd = (newJobAd) => async (dispatch) => {
  const { title, salary, description } = newJobAd;
  dispatch({
    type: ADD_JOB_AD,
  });
  try {
    const addRes = await axios.post(`/career/addJobAd`, {
      title,
      salary,
      description,
    });
    dispatch(getJobAds());
    dispatch({
      type: ADD_JOB_AD_SUCCESS,
      payload: addRes,
    });
  } catch (error) {
    dispatch({
      type: ADD_JOB_AD_FAIL,
      payload: error.response.data,
    });
  }
};

export const getJobAds = () => async (dispatch) => {
  dispatch({
    type: GET_JOB_AD,
  });
  try {
    const jobAdsList = await axios.get(`/career/jobAds`);
    dispatch({
      type: GET_JOB_AD_SUCCESS,
      payload: jobAdsList.data,
    });
  } catch (error) {
    dispatch({
      type: GET_JOB_AD_FAIL,
      payload: error.response.data,
    });
  }
};

export const deleteJobAd = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_JOB_AD,
  });
  try {
    await axios.delete(`/career/deleteJobAd/${id}`);
    dispatch(getJobAds());
    dispatch({
      type: DELETE_JOB_AD_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_JOB_AD_FAIL,
      payload: error.response.data,
    });
  }
};

export const editJobAd = (id, formData) => async (dispatch) => {
  dispatch({
    type: EDIT_JOB_AD,
  });
  try {
    const { data } = await axios.post(`/career/editJobAd/${id}`, formData);
    dispatch(getJobAds());
    dispatch({
      type: EDIT_JOB_AD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_JOB_AD_FAIL,
      payload: error.response.data,
    });
  }
};
