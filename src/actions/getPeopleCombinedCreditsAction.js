import { GET_PEOPLE_COMBINED_CREDITS } from './types';

export const getPeopleCombinedCredits = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(savePeopleCombinedCredits(data)))
    .catch(error => {
        console.log(error);
    })
}

const savePeopleCombinedCredits = payload => {
    return {
        type: GET_PEOPLE_COMBINED_CREDITS,
        payload
    }
}