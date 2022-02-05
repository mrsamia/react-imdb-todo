import { all, fork, put, takeEvery, call } from "redux-saga/effects";
import { FETCHMOVIES } from "../../constants/actionTypes";
import { fetchMoviesSuccess } from "./actions";

function* fetchMovies({ payload }) {
  const commingSoon = yield call(() => fetch('https://imdb-api.com/en/API/ComingSoon/k_3etxqv7v', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => res.items)
  )
  yield put(fetchMoviesSuccess(commingSoon))
  const inTheaters = yield call(() => fetch('https://imdb-api.com/en/API/InTheaters/k_3etxqv7v', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(res => res.items)
  )
  yield put(fetchMoviesSuccess(inTheaters))
}

export function* watchFetchMovies() {
  yield takeEvery(FETCHMOVIES, fetchMovies);
}

export default function* rootSaga() {
  yield all([
    fork(watchFetchMovies),
  ]);
}
