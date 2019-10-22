import { GET_MOVIE_TOP_RATED } from '../actions/types';

const initialState = {
    result: []
};

const getMovieTopRated = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOVIE_TOP_RATED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default getMovieTopRated;