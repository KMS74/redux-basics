import { combineReducers } from "redux";
import { reducerCounter } from "./reducerCounter";
import { reducerAuth } from "./reducerAuth";

export const rootReducer = combineReducers({
  reducerAuth,
  reducerCounter,
});
