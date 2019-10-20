import { POST_TV_POPULAR } from './types';

export const postTVPopular = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveTVPopular(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveTVPopular = payload => {
    return {
        type: POST_TV_POPULAR,
        payload
    }
}