import { combineReducers } from "redux";
import userReducer from "./userReducer";
import jobAdReducer from "./jobAdReducer";

export default combineReducers({
  userReducer,
  jobAdReducer,
});
