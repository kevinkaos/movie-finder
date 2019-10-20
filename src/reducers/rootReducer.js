import { combineReducers } from 'redux';
import PostMDBConfig from './PostMDBConfigReducer';
import postMoviePopular from './postMoviePopularReducer';
import postTVPopular from './postTVPopularReducer';
import setItemType from './setItemTypeReducer';

const rootReducer = combineReducers({
    PostMDBConfig,
    postMoviePopular,
    postTVPopular,
    setItemType
});

export default rootReducer;