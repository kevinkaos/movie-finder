import { GET_TV_DETAILS } from './types';

export const getTVDetails = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveTVDetails(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveTVDetails = payload => {
    return {
        type: GET_TV_DETAILS,
        payload
    }
}