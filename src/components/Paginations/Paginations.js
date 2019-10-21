import React from 'react';
import { connect } from 'react-redux';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { postMoviePopular } from '../../actions/postMoviePopularAction';
import { postTVPopular } from '../../actions/postTVPopularAction';
import { postMDBConfig } from '../../actions/PostMDBConfigAction';


class Paginations extends React.Component {
        state = {
            moviePage: 1,
            tvPage: 1
        };
 
    componentDidMount() {
        this.props.postMDBConfig(`https://api.themoviedb.org/3/configuration?api_key=${this.props.apiKey}`);
        this.handleFetchNewMovie(this.props.apiKey);
        this.handleFetchNewTV(this.props.apiKey);
      }

    handleFetchNewMovie = (apiKey, page = 1) => {
        this.props.postMoviePopular(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}&region=US`);
    }

    handleFetchNewTV = (apiKey, page = 1) => {
        this.props.postTVPopular(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=${page}`);
    }


    handleMovieClick = pageTransition => {
        if (this.state.moviePage === 1 && pageTransition === '-') {
            this.setState({ moviePage: 1 });
          } else if (pageTransition === '+') {
            this.setState({ moviePage: this.state.moviePage + 1})
            } else if (pageTransition === '-') {
            this.setState({ moviePage: this.state.moviePage - 1})
          }
      };

      handleTVClick = pageTransition => {
        if (this.state.tvPage === 1 && pageTransition === '-') {
            this.setState({ tvPage: 1 });
          } else if (pageTransition === '+') {
            this.setState({ tvPage: this.state.tvPage + 1 })
          } else if (pageTransition === '-') {
            this.setState({ tvPage: this.state.tvPage - 1 })
          }
      }

    render() {
        const pageBack = this.props.itemType === 'MOVIE' ? <PaginationLink previous href="#!" onClick={(e)=>{this.handleMovieClick('-'); e.preventDefault(); this.handleFetchNewMovie(this.props.apiKey, this.state.moviePage)}} /> : <PaginationLink previous href="#!" onClick={(e)=>{this.handleTVClick('-'); e.preventDefault(); this.handleFetchNewTV(this.props.apiKey, this.state.tvPage)}} />

        const pageForward = this.props.itemType === 'MOVIE' ? <PaginationLink next href="#!" onClick={(e)=>{this.handleMovieClick('+'); e.preventDefault(); this.handleFetchNewMovie(this.props.apiKey, this.state.moviePage)}} /> : <PaginationLink next href="#!" onClick={(e)=>{this.handleTVClick('+'); e.preventDefault(); this.handleFetchNewTV(this.props.apiKey, this.state.tvPage)}} />

        return (
            <Pagination style={{marginTop: "17px", paddingLeft: "5px"}} aria-label="Page navigation">
               <PaginationItem>
                    {pageBack}
                  </PaginationItem>
                  <PaginationItem>
                    {pageForward}
                  </PaginationItem>
                </Pagination>
              );
         }
    }

const mapStateToProps = (state) => {
    return {
        moviesPopular: state.postMoviePopular,
        tvPopular: state.postTVPopular,
        apiKey: state.PostMDBConfig.apiKey,
        itemType: state.setItemType.itemType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postMDBConfig: url => dispatch(postMDBConfig(url)),
        postMoviePopular: url => dispatch(postMoviePopular(url)),
        postTVPopular: url => dispatch(postTVPopular(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginations);