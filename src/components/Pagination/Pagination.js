import React from 'react';
import { connect } from 'react-redux';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { postMoviePopular } from '../../actions/postMoviePopularAction';
import { postTVPopular } from '../../actions/postTVPopularAction';

class Paginations extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            itemsPerPage: 5
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

    render() {

        const { itemsPerPage } = this.state;

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.items.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <PaginationItem
                key={number}
                id={number}
                onClick={this.handleClick}
              ><PaginationLink href="">
              {number}
                </PaginationLink>
              </PaginationItem>
            );
          });

        return (
          <Pagination style={{display:"flex", justifyContent:"center"}} aria-label="Page navigation example">
            {renderPageNumbers}
          </Pagination>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        moviesPopular: state.postMoviePopular,
        tvPopular: state.postTVPopular,
        apiKey: state.PostMDBConfig.apiKey
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postMoviePopular: url => dispatch(postMoviePopular(url)),
        postTVPopular: url => dispatch(postTVPopular(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Paginations);