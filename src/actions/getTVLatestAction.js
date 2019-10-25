import { GET_TV_LATEST } from './types';

export const getTVLatest = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveTVLatest(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveTVLatest = payload => {
    return {
        type: GET_TV_LATEST,
        payload
    }
}