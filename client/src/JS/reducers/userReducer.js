import {
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_USER,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_USER,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "../constants/actions-types";

const initialState = {
  loading: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // *******SignUp***********

    case SIGNUP_USER:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    // *******SignIn***********

    case SIGNIN_USER:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    // *******Get Profile***********

    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: payload,
        user: payload,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    // *******Get Users***********

    case GET_USERS:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload.data,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    // *******Default***********

    default:
      return state;
  }
};

export default userReducer;
