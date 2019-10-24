import { GET_PEOPLE_DETAILS } from './types';

export const getPeopleDetails = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(savePeopleDetails(data)))
    .catch(error => {
        console.log(error);
    })
}

const savePeopleDetails = payload => {
    return {
        type: GET_PEOPLE_DETAILS,
        payload
    }
}