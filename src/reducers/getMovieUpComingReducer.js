import { GET_MOVIE_UP_COMING } from '../actions/types';

const initialState = [];

const getMovieUpComing = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOVIE_UP_COMING:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default getMovieUpComing;