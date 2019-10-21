import { GET_TV_GENRE } from '../actions/types';

const initialState = [];

const getTVGenre = (state = initialState, action) => {
    switch(action.type){ 
        case GET_TV_GENRE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default getTVGenre;