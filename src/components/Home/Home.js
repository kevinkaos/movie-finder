import './Home.css';
import React from 'react';
import MyHeader from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import PopularMovies from '../PopularMovies/PopularMovies';
import PopularTVShows from '../PopularTVShows/PopularTVShows';
import ItemCarousel from '../ItemCarousel/ItemCarousel';
import { connect } from 'react-redux';
import { postMoviePopular } from '../../actions/postMoviePopularAction';
import { getMovieNowPlaying } from '../../actions/getMovieNowPlayingAction';
import { getMovieUpComing } from '../../actions/getMovieUpComingAction';
import { getMovieTopRated } from '../../actions/getMovieTopRatedAction';
import { postTVPopular } from '../../actions/postTVPopularAction';
import { getTVAiring } from '../../actions/getTVAiringAction';
import { getTVLatest } from '../../actions/getTVLatestAction';
import { getTVTopRated } from '../../actions/getTVTopRatedAction';
import setItemType from '../../actions/setItemTypeAction.js';
import Swiper from 'swiper';
import { Button, ButtonGroup, Jumbotron, Container } from 'reactstrap';

class Home extends React.Component {

    componentDidMount() {
        if (this.props.itemType === 'MOVIE') {
          this.handleFetchMovieData();
        } else if (this.props.itemType === 'TV') {
          this.handleFetchTVData();
        }
      }


    handleFetchMovieData = () => {
        this.props.postMoviePopular(`https://api.themoviedb.org/3/movie/popular?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
        this.props.getMovieNowPlaying(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
        this.props.getMovieTopRated(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
        this.props.getMovieUpComing(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
    }

    handleFetchTVData = () => {
        this.props.postTVPopular(`https://api.themoviedb.org/3/tv/popular?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
        this.props.getTVAiring(`https://api.themoviedb.org/3/tv/airing_today?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
        this.props.getTVLatest(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
        this.props.getTVTopRated(`https://api.themoviedb.org/3/tv/top_rated?api_key=${this.props.apiKey}&language=en-US&page=1&region=US`);
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
            slidesPerView: 5,
            loop: false,
           breakpoints: {
             320: {
                 slidesPerView: 1,
                 spaceBetween: 15
             },
             480: {
                 slidesPerView: 2,
                 spaceBetween: 20
             },
             640: {
                 slidesPerView: 3,
                spaceBetween: 25
             },
             1024: {
                 slidesPerView: 5,
                 spaceBetween: 15
             }
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

        let render;
        if(this.props.itemType === 'MOVIE') {
            render = (<div>

            <PopularMovies type={this.props.itemType} titleType="Up Coming" movieGenres={this.props.movieGenres} MDBConfig={this.props.config} items={this.props.moviesUpComing.results} />

            <PopularMovies type={this.props.itemType} titleType="Popular" movieGenres={this.props.movieGenres} MDBConfig={this.props.config} items={this.props.moviesPopular.results} />
            
            <PopularMovies type={this.props.itemType} titleType="Now Playing" movieGenres={this.props.movieGenres} MDBConfig={this.props.config} items={this.props.moviesNowPlaying.results} />


            <PopularMovies type={this.props.itemType} titleType="Top Rated" movieGenres={this.props.movieGenres} MDBConfig={this.props.config} items={this.props.moviesTopRated.results} />
            
            </div>)
        } 
        else if(this.props.itemType === 'TV') {
            render = ( <div>

            <PopularTVShows type={this.props.itemType} titleType="Latest" tvGenres={this.props.tvGenres} MDBConfig={this.props.config} items={this.props.tvLatest.results}/>
            
            <PopularTVShows type={this.props.itemType} titleType="Popular" tvGenres={this.props.tvGenres} MDBConfig={this.props.config} items={this.props.tvPopular.results}/>
            
            <PopularTVShows type={this.props.itemType} titleType="Airing(EST)" tvGenres={this.props.tvGenres} MDBConfig={this.props.config} items={this.props.tvAiring.results}/>

            <PopularTVShows type={this.props.itemType} titleType="Top Rated" tvGenres={this.props.tvGenres} MDBConfig={this.props.config} items={this.props.tvTopRated.results}/>
            
            </div>)
        }

        const renderCarouselType = this.props.itemType === 'MOVIE' ? <ItemCarousel MDBConfig={this.props.config} items={this.props.moviesPopular.results} itemType={this.props.itemType}/> : <ItemCarousel MDBConfig={this.props.config} itemType={this.props.itemType} items={this.props.tvPopular.results} />;

        return (

    <div className="home-container" style={{marginTop: "30px"}}>
        <MyHeader />
            <div style={{width: "100%", margin: "0 auto", textAlign: "center"}}>
                <Jumbotron style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/d/d6/Hamlin_theatre.jpg')"}} fluid>
                    <Container fluid>
                        <h1 className="display-3" style={{color: "grey"}}>Welcome to Movie Finder!</h1>
                        <p className="lead" style={{color: "grey"}} >This is my first front end project! Find and rate your favourite movies and actors. Enjoy!</p>
                    </Container>
                </Jumbotron>
            </div>
            <div className="item-controller" style={{display:"flex", justifyContent:"center"}}>
                <ButtonGroup>
                    <div style={{marginTop: "1rem"}}>
                        <Button className="item-controller__switch wow fadeIn " data-wow-delay=".5s" data-wow-duration="1s" size="lg" color="secondary" active={this.props.itemType === 'MOVIE'} onClick={() => {this.props.setItemType('MOVIE');this.handleFetchMovieData();}}>Movies</Button>
                        <Button className="item-controller__switch wow fadeIn" data-wow-delay=".5s" data-wow-duration="1s" size="lg" color="secondary" active={this.props.itemType === 'TV'} onClick={() => {this.props.setItemType('TV');this.handleFetchTVData();}}>TV Shows</Button>
                    </div>
                </ButtonGroup>
            </div>
            <div className="home-container-main">
                <div>
                    {render}
                </div>
            </div>
            <div >
                {/* {renderCarouselType} */}
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
        tvGenres: state.getTVGenre,
        moviesNowPlaying: state.getMovieNowPlaying,
        moviesTopRated: state.getMovieTopRated,
        moviesUpComing: state.getMovieUpComing,
        tvLatest: state.getTVLatest,
        tvTopRated: state.getTVTopRated,
        tvAiring: state.getTVAiring
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postMoviePopular: url => dispatch(postMoviePopular(url)),
        postTVPopular: url => dispatch(postTVPopular(url)),
        getMovieNowPlaying: url => dispatch(getMovieNowPlaying(url)),
        getMovieTopRated: url => dispatch(getMovieTopRated(url)),
        getMovieUpComing: url => dispatch(getMovieUpComing(url)),
        getTVAiring: url => dispatch(getTVAiring(url)),
        getTVLatest: url => dispatch(getTVLatest(url)),
        getTVTopRated: url => dispatch(getTVTopRated(url)),
        setItemType: type => dispatch(setItemType(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);