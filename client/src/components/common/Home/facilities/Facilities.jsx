  import React, { useEffect } from 'react';
  import Slider from 'react-slick';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  export default function Facilities() {
    useEffect(() => {
      AOS.init({ duration: 1000, offset: 100 });
    }, []);

    const sliderSettings = {
      dots: true,
      arrows: true, 
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
  
    };
  
    return (
      <div>
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <h1 className="mb-3">School Facilities</h1>
              <p>
              Ensure the play area is securely fenced and equipped with age-appropriate play structures, considering safety standards.
              </p>
            </div>
            <Slider {...sliderSettings}>
              <div data-aos="fade-up">
                <div className="facility-item">
                  <div className="facility-icon bg-primary">
                    <span className="bg-primary" />
                    <i className="fa fa-bus-alt fa-3x text-primary" />
                    <span className="bg-primary" />
                  </div>
                  <div className="facility-text bg-primary">
                    <h3 className="text-primary mb-3">School Bus</h3>
                    <p className="mb-0">
                    Child-Safe Seating use age-appropriate and properly installed car seats or boosters for each child.                  </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <div className="facility-item">
                  <div className="facility-icon bg-success">
                    <span className="bg-success" />
                    <i className="fa fa-futbol fa-3x text-success" />
                    <span className="bg-success" />
                  </div>
                  <div className="facility-text bg-success">
                    <h3 className="text-success mb-3">Playground</h3>
                    <p className="mb-0">
                    Allow for open spaces where children can run, jump, and engage in active play.                  </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="500">
                <div className="facility-item">
                  <div className="facility-icon bg-warning">
                    <span className="bg-warning" />
                    <i className="fa fa-home fa-3x text-warning" />
                    <span className="bg-warning" />
                  </div>
                  <div className="facility-text bg-warning">
                    <h3 className="text-warning mb-3">Healthy Canteen</h3>
                    <p className="mb-0">
                    Serve appropriate portion sizes for preschoolers to encourage healthy eating habits.                  </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="700">
                <div className="facility-item">
                  <div className="facility-icon bg-info">
                    <span className="bg-info" />
                    <i className="fa fa-chalkboard-teacher fa-3x text-info" />
                    <span className="bg-info" />
                  </div>
                  <div className="facility-text bg-info">
                    <h3 className="text-info mb-3">Positive Learning</h3>
                    <p className="mb-0">
                    Provide positive reinforcement through encouragement, praise, and acknowledgment of achievements.                  </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="700">
                <div className="facility-item">
                  <div className="facility-icon bg-info">
                    <span className="bg-info" />
                    <i className="fa fa-chalkboard-teacher fa-3x text-info" />
                    <span className="bg-info" />
                  </div>
                  <div className="facility-text bg-info">
                    <h3 className="text-info mb-3">STEM</h3>
                    <p className="mb-0">
                    Hands-on projects can be a great way to help
  kindergarteners develop problem-solving, perseverance,
  and even cooperation. Stem experience can clearly do
  wonders for social skills and life skills in general too   </p>             </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
