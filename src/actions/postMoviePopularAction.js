import { POST_MOVIE_POPULAR } from './types';

export const postMoviePopular = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveMoviePopular(data)))
    .catch(error => {
      console.log(error);
    })
}

const saveMoviePopular = payload => {
    return {
        type: POST_MOVIE_POPULAR,
        payload
    }
}