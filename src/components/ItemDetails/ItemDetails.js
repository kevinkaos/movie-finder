import React from 'react';
import Loader from '../Loader/Loader';
import { getMovieDetails } from '../../actions/getMovieDetailsAction';
import { getMovieCredits } from '../../actions/getMovieCreditsAction';
import { getMovieReviews } from '../../actions/getMovieReviewsAction';
import { getMovieVideos } from '../../actions/getMovieVideosAction';
import { getPeopleDetails } from '../../actions/getPeopleDetailsAction';
import { getPeopleCombinedCredits } from '../../actions/getPeopleCombinedCreditsAction';
import { connect } from 'react-redux';
import MyHeader from '../Header/Header';
import Footer from '../Footer/Footer';
import './ItemDetails.scss';
import { Header, Grid, Container, Button, Icon, Segment, Image } from 'semantic-ui-react'
import Swiper from 'swiper';
import { Link, withRouter } from 'react-router-dom';
import placeholder from '../../images/placeholder.png';
import VideoCarousel from '../VideoCarousel/VideoCarousel';
import ShowMoreText from 'react-show-more-text';



class ItemDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            limit: 5
        }
        this.onLoadMore = this.onLoadMore.bind(this);
    }

    onLoadMore() {
        this.setState({
            limit: this.state.limit + 5
        });
    }
  
    // Add more to the limit of rendered content
    renderPeopleCredits = () => {
        return this.props.peopleCredits.cast.slice(0,this.state.limit).map((role)=>{
            return(
                <Grid className="stackable" style={{borderBottom: "1px solid black", margin: "2rem 0rem 0rem 1rem"}}>
                        <Grid.Column width={5}>
                            <Link to={`/details/${role.media_type}/${role.id}`}>
                                <Image src={`${this.props.config.images.secure_base_url}w342${role.poster_path}`} />
                            </Link>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <Container text>
                                <Link to={`/details/${role.media_type}/${role.id}`}>
                                    <Header as='h2'>{role.original_title}</Header>
                                </Link>
                                <Header as='h3'>{role.character}</Header>
                                <ShowMoreText
                                    lines={8}
                                    more='Show more'
                                    less='Show less'
                                    anchorClass=''
                                    onClick={this.executeOnClick}
                                    expanded={false}
                                >
                                    {role.overview}
                                </ShowMoreText>
                            </Container>
                        </Grid.Column>
                    </Grid>
            );
        });
    };

    // Component DID mount fails after deployment
    UNSAFE_componentWillMount() {
        this.fetchData(this.props.match.params.id);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.fetchData(nextProps.match.params.id, nextProps.match.params.type);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.fetchData(this.props.match.params.id, this.props.match.params.type);
        }
    }

    fetchData(id, type = this.props.match.params.type.toLowerCase()) {
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
                this.props.getPeopleCombinedCredits(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${this.props.apiKey}&language=en-US
                `);
                this.props.getPeopleDetails(`https://api.themoviedb.org/3/person/${id}?api_key=${this.props.apiKey}&language=en-US
                `);
                break;
            default:
                break;
        }
    }

    handleRenderContent = (type) => {
        switch (type.toLowerCase()) {
            case 'movie': 
                return (
        <div>
            <MyHeader />
            <Segment className="stackable" placeholder style={{marginTop: "2rem"}}>
            
            <Grid className="stackable" celled>
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
                                        <Link to={`/details/people/${cast.id}`}>
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
                    {this.props.movieReviews.results.length > 0 ? this.props.movieReviews.results.map(result =>
                        {
                            return (<div><h3>{result.author}</h3>
                                    <p>{`${result.content.slice(0, 200)}...`}</p>
                                    <a href={result.url}>Visit here for the full review!</a>
                                    <hr/></div>)
                                 }) : (<div><p>Sorry there are no reviews here...</p></div>) }
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
        </div>
            )
            case 'people': 
             return (
                <div>
            <MyHeader />
                <Grid style={{margin: "2rem 0rem 0rem 1rem", borderBottom: "1px solid black"}} className="stackable">
                    <Grid.Column width={5}>
                        <Image src={`${this.props.config.images.secure_base_url}h632${this.props.peopleDetails.profile_path}`} />
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Container text>
                            <Header as='h2'>{this.props.peopleDetails.name}</Header>
                            <Header as='h3'>{this.props.peopleDetails.birthday}</Header>
                            <ShowMoreText
                                lines={15}
                                more='Show more'
                                less='Show less'
                                anchorClass=''
                                onClick={this.executeOnClick}
                                expanded={false}
                            >
                                {this.props.peopleDetails.biography}
                            </ShowMoreText>
                        </Container>
                    </Grid.Column>
                </Grid>
                {this.renderPeopleCredits()}
                <div className="loadBtn" style={{textAlign: "center", marginTop: "2rem"}}>
                    <Button size='huge' onClick={this.onLoadMore} animated>
                        <Button.Content visible>More...</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow down' />
                        </Button.Content>
                    </Button>
                </div>
            <Footer />
            </div>       
            )
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
            loop: false,
  
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 1,
                   spaceBetween: 25
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1280: {
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

        

        return(
            <div>{this.handleRenderContent(this.props.match.params.type)}</div>
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
        movieVideos: state.getMovieVideos,
        peopleCredits: state.getPeopleCombinedCredits,
        peopleDetails: state.getPeopleDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: url => dispatch(getMovieDetails(url)),
        getMovieCredits: url => dispatch(getMovieCredits(url)),
        getMovieReviews: url => dispatch(getMovieReviews(url)),
        getMovieVideos: url => dispatch(getMovieVideos(url)),
        getPeopleDetails: url => dispatch(getPeopleDetails(url)),
        getPeopleCombinedCredits: url => dispatch(getPeopleCombinedCredits(url))
    }
}

// const ItemDetailsWithRouter = withRouter(ItemDetails);

// export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsWithRouter);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ItemDetails));
