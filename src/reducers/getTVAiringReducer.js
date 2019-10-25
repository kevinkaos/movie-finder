import { GET_TV_AIRING } from '../actions/types';

const initialState = {
    results: []
};

const getTVAiring = (state = initialState, action) => {
    switch(action.type) {
        case GET_TV_AIRING:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default getTVAiring;