import './Home.scss';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import PopularMovies from '../PopularMovies/PopularMovies';
import PopularTVShows from '../PopularTVShows/PopularTVShows';
import ItemCarousel from '../ItemCarousel/ItemCarousel';
import { connect } from 'react-redux';
import { postMoviePopular } from '../../actions/postMoviePopularAction';
import { postTVPopular } from '../../actions/postTVPopularAction';
import setItemType from '../../actions/setItemTypeAction.js';
import Swiper from 'swiper';
import { Button, ButtonGroup } from 'reactstrap';


class Home extends React.Component {

    componentDidMount() {
        this.props.setItemType();
        this.props.postTVPopular(`https://api.themoviedb.org/3/tv/popular?api_key=${this.props.apiKey}&language=en-US&page=1`);
        this.props.postMoviePopular(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
    }

    handleFetchMovieData = () => {
        this.props.postMoviePopular(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
    }

    handleFetchTVData = () => {
        this.props.postTVPopular(`https://api.themoviedb.org/3/tv/popular?api_key=${this.props.apiKey}&language=en-US&page=1`);
    }

    render() {

    // Initiates carousels
    (() => {
        const sliderEl = document.querySelectorAll('.swiper-container');
         if(!sliderEl){
           return;
         }
         const slider = new Swiper(sliderEl, {
            init: true,
            spaceBetween: 14,
            observer: true,
            observeParents: true,
            slidesPerView: 7,
            loop: true,
           breakpoints: {
             1145: {
               slidesPerView: 5
             },
             699: {
               slidesPerView: 3
             },
           },
           pagination: {
             el: '.swiper-pagination',
             clickable: true
           },
           navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
           }
         });
      })();


        const renderCarouselType = this.props.itemType === 'MOVIE' ? <ItemCarousel MDBConfig={this.props.config} items={this.props.moviesPopular.results} itemType={this.props.itemType}/> : <ItemCarousel MDBConfig={this.props.config} itemType={this.props.itemType} items={this.props.tvPopular.results} />;

        const renderShowType = this.props.itemType === 'MOVIE' ? <PopularMovies type={this.props.itemType} movieGenres={this.props.movieGenres} title="Popular Movies" MDBConfig={this.props.config} items={this.props.moviesPopular.results} /> : <PopularTVShows type={this.props.itemType} tvGenres={this.props.tvGenres} title="Popular TV Shows" MDBConfig={this.props.config} items={this.props.tvPopular.results}/> 

        return (
        <div className="home-container" style={{marginTop: "75px"}}>
            <Header />
            <div>
                {renderCarouselType}
            </div>
            <div className="item-controller" style={{display:"flex", justifyContent:"center"}}>
                <ButtonGroup>
                <Button className="item-controller__switch" size="lg" color="primary" active={this.props.itemType === 'MOVIE'} onClick={() => {this.props.setItemType('MOVIE');this.handleFetchMovieData();}}>Popular Movies</Button>
                <Button className="item-controller__switch" size="lg" color="primary" active={this.props.itemType === 'TV'} onClick={() => {this.props.setItemType('TV');this.handleFetchTVData();}}>Trending TV Shows</Button>
                </ButtonGroup>
            </div>
            <div className="home-container-main">
                <div>
                    {renderShowType}
                </div>
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