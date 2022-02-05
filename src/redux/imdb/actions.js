import { FETCHMOVIES, FETCHMOVIES_SUCCESS } from "../../constants/actionTypes"

export const fetchMovies = () => {
    return({
        type: FETCHMOVIES,
        payload: null
    })
}

export const fetchMoviesSuccess = (movies) => {
    return({
        type: FETCHMOVIES_SUCCESS,
        payload: movies
    })
}