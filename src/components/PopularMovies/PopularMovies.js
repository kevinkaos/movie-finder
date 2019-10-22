import React from 'react';
import './PopularMovies.scss';
import { Link } from 'react-router-dom';


class PopularMovies extends React.Component {

// {this.handleGetGenre(movie.genre_ids)}{movie.vote_average} Rating

      handleGetGenre = genreIds => {
        if (this.props.movieGenres.genres) {
            let genresArr = this.props.movieGenres.genres.filter(genre => genre.id === genreIds[0] || genre.id === genreIds[1] || genre.id === genreIds[2] ? genre.name : null);
        
            if(genresArr[2]){
                return <p data-wow-delay=".5s" data-wow-duration="1s" className="wow fadeIn">{genresArr[0] ? genresArr[0].name : ''} | {genresArr[1] ? genresArr[1].name : ''}</p>
            } else if(genresArr[1] && ! genresArr[2]) {
                return <p data-wow-delay=".5s" data-wow-duration="1s" className="wow fadeIn">{genresArr[0] ? genresArr[0].name : ''} | {genresArr[1] ? genresArr[1].name : ''}</p>
            } else if(genresArr[0] && !genresArr[1] && !genresArr[2]) {
                return <p data-wow-delay=".5s" data-wow-duration="1s" className="wow fadeIn">{genresArr[0] ? genresArr[0].name : ''}</p>
            }
          
      }
    }

    render() {

        return (
    <div className="carousel-container">
        <div className="swiper-container">
            <h2 className="swiper-container__title wow fadeInDown" data-wow-delay=".5s" data-wow-duration="1s">{this.props.titleType}</h2>
            <div className="swiper-wrapper">
                {this.props.items.map(movie => {
                    return (
                    <div key={movie.id} className="swiper-slide">
                        <Link to={`/details/${this.props.type.toLowerCase()}/${movie.id}`}>
                            <img className="swiper-slide__image wow fadeInDown" data-wow-delay=".5s" data-wow-duration="1s" src={`${this.props.MDBConfig.images.secure_base_url}w154${movie.poster_path}`} alt={movie.title}/>
                            <p className="swiper-slide__title wow fadeIn" data-wow-delay=".5s" data-wow-duration="1s" >{movie.title}</p>
                            {this.handleGetGenre(movie.genre_ids)}
                        </Link>
                    </div>
                    );
                })}
            </div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    </div>
        );
    }
};

export default PopularMovies;