import { GET_TV_GENRE } from './types';

export const getTVGenre = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveTVGenre(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveTVGenre = payload => {
    return {
        type: GET_TV_GENRE,
        payload
    }
}