import React from 'react';
import Header from '../Header/Header';
import ToggleButtons from '../ToggleButtons/ToggleButtons';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import PopularMovies from '../PopularMovies/PopularMovies';
import PopularTVShows from '../PopularTVShows/PopularTVShows';
import Test from '../Test/Test';
import { connect } from 'react-redux';
import { getMovieGenre } from '../../actions/getMovieGenreAction';
import { getTVGenre } from '../../actions/getTVGenreAction';
import { postMDBConfig } from '../../actions/PostMDBConfigAction';
import { postMoviePopular } from '../../actions/postMoviePopularAction';
import { postTVPopular } from '../../actions/postTVPopularAction';
import setItemType from '../../actions/setItemTypeAction.js';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faFilm, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faFilm, faSearch);

class App extends React.Component {

    componentDidMount() {
        this.props.postMDBConfig(`https://api.themoviedb.org/3/configuration?api_key=${this.props.apiKey}`);
        this.props.postMoviePopular(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`); 
        this.props.postTVPopular(`https://api.themoviedb.org/3/tv/popular?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.getMovieGenre(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.props.apiKey}&language=en-US
        `);
        this.props.getTVGenre(`https://api.themoviedb.org/3/genre/tv/list?api_key=${this.props.apiKey}&language=en-US
        `);       
        this.props.setItemType();
    }


    render() {
        const renderShowType = this.props.itemType === 'MOVIE' ? <PopularMovies movieGenres={this.props.movieGenres}title="Popular Movies" MDBConfig={this.props.config} items={this.props.moviesPopular.results} /> : <PopularTVShows tvGenres={this.props.tvGenres} title="Popular TV Shows" MDBConfig={this.props.config} items={this.props.tvPopular.results}/> 

        const renderCarouselType = this.props.itemType === 'MOVIE' ? <Test MDBConfig={this.props.config} items={this.props.moviesPopular.results} itemType={this.props.itemType}/> : <Test MDBConfig={this.props.config} itemType={this.props.itemType} items={this.props.tvPopular.results} />;

        return ( 
        <div>
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
        postMDBConfig: url => dispatch(postMDBConfig(url)),
        postMoviePopular: url => dispatch(postMoviePopular(url)),
        postTVPopular: url => dispatch(postTVPopular(url)),
        setItemType: type => dispatch(setItemType(type)),
        getMovieGenre: url => dispatch(getMovieGenre(url)),
        getTVGenre: url => dispatch(getTVGenre(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);