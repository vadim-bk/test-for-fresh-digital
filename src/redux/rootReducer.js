import { combineReducers } from "redux";

import { orderReducer } from "../components/Order/reducer";

export const rootReducer = combineReducers({
  order: orderReducer
});