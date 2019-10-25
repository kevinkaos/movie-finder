import { GET_TV_REVIEWS } from './types';

export const getTVReviews = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveTVReviews(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveTVReviews = payload => {
    return {
        type: GET_TV_REVIEWS,
        payload
    }
}