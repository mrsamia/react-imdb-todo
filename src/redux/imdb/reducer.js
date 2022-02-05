import { FETCHMOVIES_SUCCESS } from "../../constants/actionTypes";

const INIT_STATE = {
  movies: [],
};

const IMDBReducers = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCHMOVIES_SUCCESS:{
      return {
        ...state,
        movies: [...state.movies, ...action.payload]
      }
    }
    default:
      return { ...state };
  }
};

export default IMDBReducers;
