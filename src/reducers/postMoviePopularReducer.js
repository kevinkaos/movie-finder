import { POST_MOVIE_POPULAR } from '../actions/types';

const initialState = {
    results: []
}

const postMoviePopular = (state = initialState, action) => {
    switch (action.type) {
        case POST_MOVIE_POPULAR:
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state;
    }

}

export default postMoviePopular;