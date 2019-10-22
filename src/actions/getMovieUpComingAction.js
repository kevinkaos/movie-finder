import { GET_MOVIE_UP_COMING } from './types';

export const getMovieUpComing = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMovieUpComing(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveMovieUpComing = payload => {
    return {
        type: GET_MOVIE_UP_COMING,
        payload
    }
}