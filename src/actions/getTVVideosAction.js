import { GET_TV_VIDEOS } from './types';

export const getTVVideos = url => dispatch => {
    fetch(url)
    .then(res => res.json())
    .then(data => dispatch(saveTVVideos(data)))
    .catch(error => {
        console.log(error);
    })
}

const saveTVVideos = payload => {
    return {
        type: GET_TV_VIDEOS,
        payload
    }
}