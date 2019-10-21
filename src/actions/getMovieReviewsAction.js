import { GET_MOVIE_REVIEWS } from './types';

export const getMovieReviews = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMovieReviews(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveMovieReviews = payload => {
    return {
        type: GET_MOVIE_REVIEWS,
        payload
    }
}