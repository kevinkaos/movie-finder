import React from 'react';
import './PopularMovies.scss';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';


class PopularMovies extends React.Component {

// {this.handleGetGenre(movie.genre_ids)}{movie.vote_average} Rating

      handleGetGenre = genreIds => {
        if (this.props.movieGenres.genres) {
            let genresArr = this.props.movieGenres.genres.filter(genre => genre.id === genreIds[0] || genre.id === genreIds[1] || genre.id === genreIds[2] ? genre.name : null);
        
            if(genresArr[2]){
                return <p>{genresArr[0] ? genresArr[0].name : ''} | {genresArr[1] ? genresArr[1].name : ''} | {genresArr[2] ? genresArr[2].name : ''}</p>
            } else if(genresArr[1] && ! genresArr[2]) {
                return <p>{genresArr[0] ? genresArr[0].name : ''} | {genresArr[1] ? genresArr[1].name : ''}</p>
            } else if(genresArr[0] && !genresArr[1] && !genresArr[2]) {
                return <p>{genresArr[0] ? genresArr[0].name : ''}</p>
            }
          
      }
    }

    render() {
          
        return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {this.props.items.map(movie => {
                    return (
            <Link style={{ textDecoration: 'none' }} to={`/details/${this.props.type.toLowerCase()}/${movie.id}`}>
                <div className="swiper-slide">
                    <img className="swiper-slide__image" src={`${this.props.MDBConfig.images.secure_base_url}w154${movie.poster_path}`} alt={movie.title}/>
                    <p className="swiper-slide__title">{movie.title}</p>
                </div>
            </Link>
                    );
                })}
                
            </div>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
        );
    }
};

export default PopularMovies;