import { combineReducers } from "redux";
import { appReducer } from "../components/App/reducer";
import { clientReducer } from "../components/Client/reducer";

export const rootReducer = combineReducers({
  app: appReducer,
  client: clientReducer
});