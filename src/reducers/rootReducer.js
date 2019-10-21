import { combineReducers } from 'redux';
import PostMDBConfig from './PostMDBConfigReducer';
import postMoviePopular from './postMoviePopularReducer';
import postTVPopular from './postTVPopularReducer';
import setItemType from './setItemTypeReducer';
import getMovieGenre from './getMovieGenreReducer';
import getTVGenre from './getTVGenreReducer';
import getMovieDetails from './getMovieDetailsReducer';
import getMovieCredits from './getMovieCreditsReducer';
import getMovieReviews from './getMovieReviewsReducer';
import getMovieVideos from './getMovieVideosReducer';

const rootReducer = combineReducers({
    PostMDBConfig,
    postMoviePopular,
    postTVPopular,
    setItemType,
    getMovieGenre,
    getTVGenre,
    getMovieDetails,
    getMovieCredits,
    getMovieReviews,
    getMovieVideos
});

export default rootReducer;