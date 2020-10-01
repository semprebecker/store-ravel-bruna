import { createStore, combineReducers } from "redux";
import user from "./user/reducers";

const reducers = combineReducers({
  user,
});

const store = createStore(reducers);

export default store;
