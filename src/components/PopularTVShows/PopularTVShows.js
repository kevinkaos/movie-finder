import React from 'react';
import './PopularTVShows.scss';
import { Media } from 'reactstrap';

class PopularTVShows extends React.Component {
    handleGetGenre = genreIds => {
        if (this.props.tvGenres.genres) {
            let genresArr = this.props.tvGenres.genres.filter(genre => genre.id === genreIds[0] || genre.id === genreIds[1] || genre.id === genreIds[2] ? genre.name : null);
        
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
        this.props.items.map(show => {
          return (
          <React.Fragment>
              <div key={show.id} className="popular__shows-list--container">
              <Media>
                  <Media left top href="#">
                  <Media object src={`${this.props.MDBConfig.images.secure_base_url}w92${show.poster_path}`} alt={show.name}/>
                  </Media>
                  <Media body>
                  <Media heading>
                      {show.name}
                  </Media>
                    <p>
                        {this.handleGetGenre(show.genre_ids)}{show.vote_average} Rating
                    </p>
                    {show.overview}
                  </Media>
              </Media>
              </div>
              <hr className="popular__shows-list--separator"/>
          </React.Fragment>);
          
      })
    );
}
};

export default PopularTVShows;