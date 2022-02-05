import { all } from "redux-saga/effects";
import authSagas from "./auth/saga";
import imdbSagas from "./imdb/saga";

export default function* rootSaga(getState) {
  yield all([authSagas(), imdbSagas()]);
}
