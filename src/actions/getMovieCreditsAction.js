import { GET_MOVIE_CREDITS } from './types';

export const getMovieCredits = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMovieCredits(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveMovieCredits = payload => {
    return {
        type: GET_MOVIE_CREDITS,
        payload
    }
}