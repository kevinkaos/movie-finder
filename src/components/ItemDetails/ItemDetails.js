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
import { Card, Icon, Image } from 'semantic-ui-react';



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
                    <Card>
                        <Image src={`${this.props.config.images.secure_base_url}w500${this.props.movieDetails.poster_path}`} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{this.props.movieDetails.title}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{this.props.movieDetails.release_date}</span>
                        </Card.Meta>
                        <Card.Description>
                            {this.props.movieDetails.tagline}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
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