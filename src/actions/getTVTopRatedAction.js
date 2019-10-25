import { GET_TV_TOP_RATED } from './types';

export const getTVTopRated = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveTVTopRated(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveTVTopRated = payload => {
    return {
        type: GET_TV_TOP_RATED,
        payload
    }
}