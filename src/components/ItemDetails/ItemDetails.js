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
import { Button, Icon, Segment } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react'
import { Card, Image } from 'semantic-ui-react';



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
    
        return(
            <div>
                <Header />
                <Segment placeholder style={{marginTop: "8rem"}}>
                
                <Grid celled>
                    <Grid.Row>
                    <Grid.Column width={3}>
                        <Image src={`${this.props.config.images.secure_base_url}original${this.props.movieDetails.poster_path}`} wrapped ui />
                    </Grid.Column>
                    <Grid.Column width={13}>
                            <span></span>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={3}>
                        <h1>{this.props.movieDetails.title}</h1>
                        <h3>{this.props.movieDetails.release_date}</h3>
                        <p>
                            <blockquote>
                                {this.props.movieDetails.tagline}
                            </blockquote>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Image src='/images/wireframe/paragraph.png' />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Image src='/images/wireframe/image.png' />
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