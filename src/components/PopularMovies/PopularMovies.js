import React from 'react';
import './PopularMovies.scss';
import { Media } from 'reactstrap';

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
            this.props.items.map(movie => {
                return( 
                <React.Fragment>
                    <div key={movie.id} className="popular__movies-list--container">
                    <Media>
                        <Media left top href="#">
                        <Media object src={`${this.props.MDBConfig.images.secure_base_url}w92${movie.poster_path}`} alt={movie.title}/>
                        </Media>
                        <Media body>
                        <Media heading>
                            {movie.title}
                        </Media>
                            <p>
                                {this.handleGetGenre(movie.genre_ids)}{movie.vote_average} Rating
                            </p>
                            <p>{movie.overview}</p>
                        </Media>
                    </Media>
                    </div>
                    <hr className="popular__movies-list--separator"/>
                </React.Fragment>);
            })
        );
    }
};

export default PopularMovies;