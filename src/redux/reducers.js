import { combineReducers } from "redux";
import authUser from "./auth/reducer";
import imdb from "./imdb/reducer";

const reducers = combineReducers({
  authUser,
  imdb
});

export default reducers;
