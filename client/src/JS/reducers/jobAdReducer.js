import {
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

const initialState = {
  loading: false,
};

const jobAdReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /************ADD_JOB_AD************/
    case ADD_JOB_AD:
      return {
        ...state,
        loading: true,
      };
    case ADD_JOB_AD_SUCCESS:
      return {
        ...state,
        loading: false,
        addRes: payload,
      };
    case ADD_JOB_AD_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    /************GET_JOB_AD************/
    case GET_JOB_AD:
      return {
        ...state,
        loading: true,
      };
    case GET_JOB_AD_SUCCESS:
      return {
        ...state,
        loading: false,
        jobAdsList: payload,
      };
    case GET_JOB_AD_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    /************EDIT_JOB_AD************/
    case EDIT_JOB_AD:
      return {
        ...state,
        loading: true,
      };
    case EDIT_JOB_AD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case EDIT_JOB_AD_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    /************DELETE_JOB_AD************/
    case DELETE_JOB_AD:
      return {
        ...state,
        loading: true,
      };
    case DELETE_JOB_AD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_JOB_AD_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
};

export default jobAdReducer;
