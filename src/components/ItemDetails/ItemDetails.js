import React from 'react';
import Loader from '../Loader/Loader';
import { getMovieDetails } from '../../actions/getMovieDetailsAction';
import { getMovieCredits } from '../../actions/getMovieCreditsAction';
import { getMovieReviews } from '../../actions/getMovieReviewsAction';
import { getMovieVideos } from '../../actions/getMovieVideosAction';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ItemDetails.scss';
import { Segment } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react';
import Swiper from 'swiper';
import { Link } from 'react-router-dom';
import placeholder from '../../images/placeholder.png';
import VideoCarousel from '../VideoCarousel/VideoCarousel';



class ItemDetails extends React.Component {

    componentDidMount() {
        this.fetchData(this.props.match.params.id);
    }


    fetchData(id, type = this.props.match.params.type) {
        switch(type){
            case 'movie':
                this.props.getMovieDetails(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.props.apiKey}&language=en-US`)
                this.props.getMovieCredits(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.props.apiKey}`)
                this.props.getMovieReviews(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.props.apiKey}&language=en-US&page=1`)
                this.props.getMovieVideos(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.props.apiKey}&language=en-US`)
                break;
            case 'tv':
                break;
            case 'people':
                break;
            default:
                break;
        }
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

        return(
            <div>
                <Header />
                <Segment placeholder style={{marginTop: "2rem"}}>
                
                <Grid celled>
                    <Grid.Row>
                    <Grid.Column width={4}>
                        <Image src={`${this.props.config.images.secure_base_url}original${this.props.movieDetails.poster_path}`} wrapped ui />
                    </Grid.Column>
                    <Grid.Column width={12}>
                    <div className="carousel-container">
                            <div className="swiper-container">
                                <h2 className="swiper-container__title">Cast</h2>
                                <div className="swiper-wrapper">
                                    {this.props.movieCredits.cast.map(cast => {
                                        return (
                                        <div key={cast.cast_id} className="swiper-slide">
                                            <Link>
                                                {cast.profile_path ? <img className="swiper-slide__image" src={`${this.props.config.images.secure_base_url}w154${cast.profile_path}`} alt={cast.profile_path}/> : <img className="swiper-slide__image" src={placeholder} />}
                                                <p className="swiper-slide__title">{cast.name}</p>
                                                <p className="swiper-slide__details">as</p>
                                                <p className="swiper-slide__details">{cast.character}</p>
                                            </Link>
                                        </div>
                                        );
                                    })}
                                </div>

                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                        </div>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={4}>
                        <h1>{this.props.movieDetails.title}</h1>
                        <h3>{this.props.movieDetails.release_date}</h3>
                        <p>
                            <blockquote>
                                {this.props.movieDetails.tagline}
                            </blockquote>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {this.props.movieReviews.results.map(result => {
                            return (
                                <div>
                                    <h3>{result.author}</h3>
                                    <p>{`${result.content.slice(0, 200)}...`}</p>
                                    <a href={result.url}>Visit here for the full review!</a>
                                </div>
                            );
                        })}
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <VideoCarousel movieVideos={this.props.movieVideos} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Segment>
                <Footer />
                <Loader />
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
        movieDetails: state.getMovieDetails,
        movieCredits: state.getMovieCredits,
        movieReviews: state.getMovieReviews,
        movieVideos: state.getMovieVideos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: url => dispatch(getMovieDetails(url)),
        getMovieCredits: url => dispatch(getMovieCredits(url)),
        getMovieReviews: url => dispatch(getMovieReviews(url)),
        getMovieVideos: url => dispatch(getMovieVideos(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);