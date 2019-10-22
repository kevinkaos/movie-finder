import { GET_MOVIE_NOW_PLAYING } from './types';

export const getMovieNowPlaying = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMovieNowPlaying(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveMovieNowPlaying = payload => {
    return {
        type: GET_MOVIE_NOW_PLAYING,
        payload
    }
}