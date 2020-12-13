import { combineReducers } from "redux";

import { appReducer } from "../components/App/reducer";
import { orderReducer } from "../components/Order/reducer";

export const rootReducer = combineReducers({
  app: appReducer,
  order: orderReducer
});