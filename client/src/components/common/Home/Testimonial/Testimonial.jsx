import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  sumimg from '../../../assets/sumimam.jpg'
const Testimonial = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const awardsData = [
    { image: 'assets/img/logo/award_2019_1.png', text: 'Award 2019-1' },
    { image: 'assets/img/logo/award_2019_2.png', text: 'Award 2019-2' },
    { image: 'assets/img/logo/award_2018_1.png', text: 'Award 2018-1' },
    // Add more data as needed
  ];

  return (
    <div className="logo-section">
      <div className="container-fluid">
        <div className="single-slider">
          <div className="slider-text text-center">
            <h3 style={{ color: 'black', fontSize: '50px', lineHeight: '60px' }}>
              Awards & Recognitions
            </h3>
          </div>
        </div>
        <Slider {...sliderSettings}>
          {awardsData.map((award, index) => (
            <div key={index} className="single-logo">
              <img className="lazyphoto" src={sumimg} alt={`Award ${index + 1}`} />
              <p>{award.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
