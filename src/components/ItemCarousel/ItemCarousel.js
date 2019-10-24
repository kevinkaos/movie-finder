import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCarousel.scss';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const Test = ({ items, MDBConfig, itemType }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = itemType === 'MOVIE' ? (items.map((movie) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={movie.id}
      ><div className="carousel__item--image">
        <img className="d-block w-100" style={{maxHeight: "90vh"}} src={`${MDBConfig.images.secure_base_url}original${movie.backdrop_path}`} alt={movie.title} />
      </div>
        <CarouselCaption captionText={`Released: ${movie.release_date}`} captionHeader={movie.title} />
      </CarouselItem>
    );
  })) : (items.map((tv) => {
    return (
      <CarouselItem
        className="carousel__item"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={tv.id}
      ><div className="carousel__item--image">
        <img className="d-block w-100" style={{maxHeight: "90vh"}}src={`${MDBConfig.images.secure_base_url}original${tv.backdrop_path}`} alt={tv.name} />
      </div>
        <CarouselCaption captionText={tv.first_air_date} captionHeader={tv.name} />
      </CarouselItem>
    );
  }))

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Test;