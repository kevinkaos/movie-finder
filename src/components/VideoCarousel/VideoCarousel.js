import React from 'react';
import Swiper from 'swiper';
import './VideoCarousel.css';

class VideoCarousel extends React.Component {
    render() {

        // (() => {
        //     const sliderEl = document.querySelectorAll('.trailer-swiper-container');
        //      if(!sliderEl){
        //        return;
        //      }
        //      const slider = new Swiper(sliderEl, {
        //        init: true,
        //        slidesPerView: 1,
        //        loop: false,
        //        spaceBetween: 10,
        //        observer: true,
        //        observeParents: true,
        //        breakpoints: {
        //         320: {
        //             slidesPerView: 1,
        //             spaceBetween: 15
        //         },
        //         480: {
        //             slidesPerView: 1,
        //             spaceBetween: 20
        //         },
        //         640: {
        //             slidesPerView: 1,
        //            spaceBetween: 20
        //         }
        //       },
        //        pagination: {
        //          el: '.swiper-pagination',
        //          clickable: true
        //        },
        //        navigation: {
        //          nextEl: '.swiper-button-next',
        //          prevEl: '.swiper-button-prev',
        //        }
        //      });
        //   })();
        if(!this.props.tvVideos) return null;
        const video = this.props.tvVideos.results[0];

        return (
            <div className="trailer-carousel">
                <div className="trailer-swiper-container">
                <div className="swiper-wrapper">
                    {this.props.tvVideos.results[0] ? <div key={video.key} className="swiper-slide videoWrapper">
                        <iframe src={`https://www.youtube.com/embed/${video.key}`}></iframe>
                    </div> : '' }
                </div>
{/* 
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}
                </div>
            </div>
        );
    }
}


export default VideoCarousel;



