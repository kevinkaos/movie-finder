import { GET_MOVIE_DETAILS } from './types';

export const getMovieDetails = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMovieDetails(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveMovieDetails = payload => {
    return {
        type: GET_MOVIE_DETAILS,
        payload
    }
}