import React from 'react';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation';
import AwesomeSlider from 'react-awesome-slider';
import './ItemCarousel.css';

class ItemCarousel extends React.Component {
    render() {
        return (
            <div className="slider__images">
                <AwesomeSlider cssModule={AwesomeSliderStyles}>
                    {this.props.items.map(movie => {
                    return  <div className="linear-gradient" data-src={`${this.props.MDBConfig.images.secure_base_url}original${movie.backdrop_path}`} key={movie.id}><div className="max-zed"><h1>{movie.title}</h1></div></div>                    })}
                </AwesomeSlider>
            </div>
        );
    }
}


export default ItemCarousel;