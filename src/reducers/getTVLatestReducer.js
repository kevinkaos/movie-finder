import { GET_TV_LATEST } from '../actions/types';

const initialState = {
    results: []
};

const getTVLatest = (state = initialState, action) => {
    switch(action.type) {
        case GET_TV_LATEST:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default getTVLatest;