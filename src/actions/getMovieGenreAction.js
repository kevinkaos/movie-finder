import { GET_MOVIE_GENRE } from './types';

export const getMovieGenre = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMovieGenre(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveMovieGenre = payload => {
    return {
        type: GET_MOVIE_GENRE,
        payload
    }
}