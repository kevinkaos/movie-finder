import React from 'react';
import './PopularTVShows.scss';
import { Media } from 'reactstrap';

const PopularTVShows = ({ MDBConfig, items }) => {
  return (
      items.map(show => {
        return <React.Fragment>
            <div key={show.id} className="popular__shows-list--container">
            <Media>
                <Media left top href="#">
                <Media object src={`${MDBConfig.images.secure_base_url}w92${show.poster_path}`} alt={show.name}/>
                </Media>
                <Media body>
                <Media heading>
                    {show.name}
                </Media>
                {show.overview}
                </Media>
            </Media>
            </div>
    
            <hr className="popular__shows-list--separator"/>
        </React.Fragment>
        
    })
  );
};

export default PopularTVShows;