import { GET_TV_AIRING } from './types';

export const getTVAiring = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveTVAiring(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveTVAiring = payload => {
    return {
        type: GET_TV_AIRING,
        payload
    }
}