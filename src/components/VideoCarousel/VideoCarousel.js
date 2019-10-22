import React from 'react';
import Swiper from 'swiper';

class VideoCarousel extends React.Component {
    render() {

        (() => {
            const sliderEl = document.querySelectorAll('.trailer-swiper-container');
             if(!sliderEl){
               return;
             }
             const slider = new Swiper(sliderEl, {
               init: true,
               slidesPerView: 3,
               loop: false,
               spaceBetween: 10,
               observer: true,
      
               breakpoints: {
                 1500: {
                   slidesPerView: 3,
                 },
                 800: {
                   slidesPerView: 3,
                 }
               },
               pagination: {
                 el: '.swiper-pagination',
                 clickable: true
               },
               navigation: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
               }
             });
          })();

        return (
            <div className="trailer-carousel">
                <div className="trailer-swiper-container">

                <div className="swiper-wrapper">
                    {this.props.movieVideos.results.map(video => (
                    <div key={video.key} className="swiper-slide">
                        <iframe title="1" width="420" height="315"src={`https://www.youtube.com/embed/${video.key}`}></iframe>
                    </div>

                    ))}
                </div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                </div>
            </div>
        );
    }
}


export default VideoCarousel;



