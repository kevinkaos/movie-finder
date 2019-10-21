import React from 'react';
import './PopularMovies.scss';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';


class PopularMovies extends React.Component {

    // handleGetGenre = genreId => {
    //     let mainGenre;
    //     if (this.props.movieGenres.genres) {
    //       this.props.movieGenres.genres.forEach(genre => {
    //         if (genre.id === genreId[0]) {
    //           mainGenre = genre.name;
    //         }
    //       });
    //     }
    //     return mainGenre;
    //   }

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
                <React.Fragment>
                    <div className="popular__movies-list--container">
                    {this.props.items.map(movie => {
                        return (
                            <Media key={movie.id}>
                            <Media left top href="#">
                                <Link style={{ textDecoration: 'none' }} to={`/details/${this.props.type.toLowerCase()}/${movie.id}`}>
                                    <Media object src={`${this.props.MDBConfig.images.secure_base_url}w154${movie.poster_path}`} alt={movie.title}/>
                                </Link>
                            </Media>
                            <Media body>
                            <Link style={{ textDecoration: 'none', color: 'darkblue', display: "inline-block" }} to={`/details/${this.props.type.toLowerCase()}/${movie.id}`}>
                                <Media heading>
                                    {movie.title}
                                </Media>
                            </Link>
                                {this.handleGetGenre(movie.genre_ids)}{movie.vote_average} Rating
                                {movie.overview}
                            </Media>
                        </Media>
                    
                        );
                    })}
                    </div>
                </React.Fragment>);
    }
};

export default PopularMovies;