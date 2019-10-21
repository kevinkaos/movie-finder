import { GET_MOVIE_VIDEOS } from '../actions/types';

const initialState = [];

const getMovieVideos = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOVIE_VIDEOS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default getMovieVideos;