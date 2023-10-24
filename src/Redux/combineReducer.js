import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./Reducers/authSlice";
import { gernalReducer } from "./Reducers/gernalSlice";
import { loaderReducer } from "./Reducers/loaderSlice";

export default combineReducers({
  gernalReducer: gernalReducer,
  authReducer: authReducer,
  loaderReducer: loaderReducer,
});
