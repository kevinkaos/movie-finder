import { GET_TV_CREDITS } from './types';

export const getTVCredits = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveTVCredits(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveTVCredits = payload => {
    return {
        type: GET_TV_CREDITS,
        payload
    }
}