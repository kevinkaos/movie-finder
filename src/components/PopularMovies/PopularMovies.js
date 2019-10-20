import React from 'react';
import './PopularMovies.scss';
import { Media } from 'reactstrap';

const PopularMovies = ({ MDBConfig, items }) => {
  return (
      items.map(movie => {
        return <React.Fragment>
            <div key={movie.id} className="popular__movies-list--container">
            <Media>
                <Media left top href="#">
                <Media object src={`${MDBConfig.images.secure_base_url}w92${movie.poster_path}`} alt={movie.title}/>
                </Media>
                <Media body>
                <Media heading>
                    {movie.title}
                </Media>
                {movie.overview}
                </Media>
            </Media>
            </div>
    
            <hr className="popular__movies-list--separator"/>
        </React.Fragment>
        
    })
  );
};

export default PopularMovies;