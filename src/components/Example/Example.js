import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Example.scss';
 
class Example extends Component {
    render() {
        return (
            <div className="carousel__container">
                <Carousel infiniteLoop="true" autoPlay="true" showThumbs="false" showIndicators="false">
                    {this.props.items.map(movie => {
                    return  <div className="carousel__image" key={movie.id}><img src={`${this.props.MDBConfig.images.secure_base_url}original${movie.backdrop_path}`} alt={movie.title}/><h1 className="carousel__title">{movie.title}</h1></div>
                    })}
                </Carousel>
            </div>
        );
    }
}

export default Example;