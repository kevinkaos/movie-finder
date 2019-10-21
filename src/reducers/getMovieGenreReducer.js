import { GET_MOVIE_GENRE } from '../actions/types';

const initialState = [];

const getMovieGenre = (state = initialState, action) => {
    switch(action.type) {
        case GET_MOVIE_GENRE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default getMovieGenre;
