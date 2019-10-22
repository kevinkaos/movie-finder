import { GET_MOVIE_NOW_PLAYING } from '../actions/types';

const initialState = [];

const getMovieNowPlaying = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOVIE_NOW_PLAYING:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default getMovieNowPlaying;