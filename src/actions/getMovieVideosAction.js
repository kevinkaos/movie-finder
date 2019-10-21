import { GET_MOVIE_VIDEOS } from './types';

export const getMovieVideos = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMovieVideos(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveMovieVideos = payload => {
    return {
        type: GET_MOVIE_VIDEOS,
        payload
    }
}