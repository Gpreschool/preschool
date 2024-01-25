import React from 'react';
import Slider from 'react-slick';  // Add this line

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide1 from '../../../assets/cute-baby-with-toys.jpg';
import slide2 from '../../../assets/mother-with-son-painting-big-paper-with-their-hands.jpg';
import slide3 from '../../../assets/kid-playing-with-colorful-wooden-toys-full-shot.jpg'
export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container-fluid p-0 mb-5">
    <Slider {...settings}>
      <div className="position-relative">
        <img className="img-fluid" src={slide1} alt="Slide 1" />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .2)' }}>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-10 col-lg-8">
                <h1 className="display-2 text-white animated slideInDown mb-4">The Best Kindergarten School For Your Child</h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                <a href="#" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</a>
                <a href="#" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <img className="img-fluid" src={slide2} alt="Slide 2" />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .2)' }}>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-10 col-lg-8">
                <h1 className="display-2 text-white animated slideInDown mb-4">Make A Brighter Future For Your Child</h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                <a href="#" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</a>
                <a href="#" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <img className="img-fluid" src={slide3} alt="Slide 2" />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .2)' }}>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-10 col-lg-8">
                <h1 className="display-2 text-white animated slideInDown mb-4">Make A Brighter Future For Your Child</h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                <a href="#" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</a>
                <a href="#" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  </div>
  );
}
