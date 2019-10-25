import { GET_TV_VIDEOS } from '../actions/types';

const initialState = [];

const getTVVideos = (state = initialState, action) => {
    switch(action.type) {
        case GET_TV_VIDEOS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default getTVVideos;