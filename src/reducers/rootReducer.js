import { combineReducers } from 'redux';
import PostMDBConfig from './PostMDBConfigReducer';
import postMoviePopular from './postMoviePopularReducer';
import postTVPopular from './postTVPopularReducer';
import setItemType from './setItemTypeReducer';
import getMovieGenre from './getMovieGenreReducer';
import getTVGenre from './getTVGenreReducer';

const rootReducer = combineReducers({
    PostMDBConfig,
    postMoviePopular,
    postTVPopular,
    setItemType,
    getMovieGenre,
    getTVGenre
});

export default rootReducer;