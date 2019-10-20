import React from 'react';
import Header from '../Header/Header';
import Paginations from '../Paginations/Paginations';
import ToggleButtons from '../ToggleButtons/ToggleButtons';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import PopularMovies from '../PopularMovies/PopularMovies';
import PopularTVShows from '../PopularTVShows/PopularTVShows';
import Test from '../Test/Test';
import { connect } from 'react-redux';
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
        this.props.setItemType();
    }


    render() {
        const renderShowType = this.props.itemType === 'MOVIE' ? <PopularMovies title="Popular Movies" MDBConfig={this.props.config} items={this.props.moviesPopular.results} /> : <PopularTVShows title="Popular TV Shows" MDBConfig={this.props.config} items={this.props.tvPopular.results}/> 

        const renderCarouselType = this.props.itemType === 'MOVIE' ? <Test MDBConfig={this.props.config} items={this.props.moviesPopular.results} itemType={this.props.itemType}/> : <Test MDBConfig={this.props.config} itemType={this.props.itemType} items={this.props.tvPopular.results} />;

        return ( 
            <BrowserRouter>
                <Header />
                {renderCarouselType}
                <ToggleButtons />
                {renderShowType}
                <Loader />
                <Footer />
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        config: state.PostMDBConfig,
        apiKey: state.PostMDBConfig.apiKey,
        moviesPopular: state.postMoviePopular,
        tvPopular: state.postTVPopular,
        itemType: state.setItemType.itemType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postMDBConfig: url => dispatch(postMDBConfig(url)),
        postMoviePopular: url => dispatch(postMoviePopular(url)),
        postTVPopular: url => dispatch(postTVPopular(url)),
        setItemType: type => dispatch(setItemType(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);