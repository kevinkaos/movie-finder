import './Home.scss';
import React from 'react';
import Header from '../Header/Header';
import ToggleButtons from '../ToggleButtons/ToggleButtons';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import PopularMovies from '../PopularMovies/PopularMovies';
import PopularTVShows from '../PopularTVShows/PopularTVShows';
import ItemCarousel from '../ItemCarousel/ItemCarousel';
import { connect } from 'react-redux';
import { postMoviePopular } from '../../actions/postMoviePopularAction';
import { postTVPopular } from '../../actions/postTVPopularAction';
import setItemType from '../../actions/setItemTypeAction.js';


class Home extends React.Component {

    componentDidMount() {
        this.props.postMoviePopular(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`); 
        this.props.postTVPopular(`https://api.themoviedb.org/3/tv/popular?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.setItemType();
    }

    render() {

        const renderShowType = this.props.itemType === 'MOVIE' ? <PopularMovies type={this.props.itemType} movieGenres={this.props.movieGenres} title="Popular Movies" MDBConfig={this.props.config} items={this.props.moviesPopular.results} /> : <PopularTVShows type={this.props.itemType} tvGenres={this.props.tvGenres} title="Popular TV Shows" MDBConfig={this.props.config} items={this.props.tvPopular.results}/> 

        const renderCarouselType = this.props.itemType === 'MOVIE' ? <ItemCarousel MDBConfig={this.props.config} items={this.props.moviesPopular.results} itemType={this.props.itemType}/> : <ItemCarousel MDBConfig={this.props.config} itemType={this.props.itemType} items={this.props.tvPopular.results} />;

        return (
        <div style={{marginTop: "85px"}}>
            <Header />
            <div>
                {renderCarouselType}
            </div>
            <ToggleButtons />
            <div>
                {renderShowType}
            </div>
            <Loader />
            <Footer />
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        config: state.PostMDBConfig,
        apiKey: state.PostMDBConfig.apiKey,
        moviesPopular: state.postMoviePopular,
        tvPopular: state.postTVPopular,
        itemType: state.setItemType.itemType,
        movieGenres: state.getMovieGenre,
        tvGenres: state.getTVGenre
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postMoviePopular: url => dispatch(postMoviePopular(url)),
        postTVPopular: url => dispatch(postTVPopular(url)),
        setItemType: type => dispatch(setItemType(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);