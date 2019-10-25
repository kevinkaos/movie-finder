import { GET_TV_TOP_RATED } from '../actions/types';

const initialState = {
    results: []
};

const getTVTopRated = (state = initialState, action) => {
    switch(action.type) {
        case GET_TV_TOP_RATED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default getTVTopRated;