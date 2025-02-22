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
import getMovieNowPlaying from './getMovieNowPlayingReducer';
import getMovieTopRated from './getMovieTopRatedReducer';
import getMovieUpComing from './getMovieUpComingReducer';
import getPeoplePopular from './getPeoplePopularReducer';
import getPeopleCombinedCredits from './getPeopleCombinedCreditsReducer';
import getPeopleDetails from './getPeopleDetailsReducer';
import getTVAiring from './getTVAiringReducer';
import getTVLatest from './getTVLatestReducer';
import getTVTopRated from './getTVTopRatedReducer';
import getTVCredits from './getTVCreditsReducer';
import getTVVideos from './getTVVideosReducer';
import getTVReviews from './getTVReviewsReducer';
import getTVDetails from './getTVDetailsReducer';


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
    getMovieVideos,
    getMovieNowPlaying,
    getMovieTopRated,
    getMovieUpComing,
    getPeopleCombinedCredits,
    getPeoplePopular,
    getPeopleDetails,
    getTVAiring,
    getTVLatest,
    getTVTopRated,
    getTVCredits,
    getTVVideos,
    getTVReviews,
    getTVDetails
});

export default rootReducer;