import { GET_PEOPLE_POPULAR } from './types';

export const getPeoplePopular = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(savePeoplePopular(data)))
    .catch(error => {
        console.log(error);
    })
}

const savePeoplePopular = payload => {
    return {
        type: GET_PEOPLE_POPULAR,
        payload
    }
}