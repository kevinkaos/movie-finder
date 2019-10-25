import { GET_MOVIE_TOP_RATED } from './types';

export const getMovieTopRated = url => dispatch => {
    
    return fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMovieTopRated(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveMovieTopRated = payload => {
    return {
        type: GET_MOVIE_TOP_RATED,
        payload
    }
}