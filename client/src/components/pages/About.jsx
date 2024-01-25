import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Callto from '../common/Home/cta/Callto'
import Testimonial from '../common/Home/Testimonial/Testimonial'
import sumiimg from '../assets/sumimam.jpg'
import './About.css'
export default function About() {

  
  return (
    <div>
<div className="container-xxl bg-white p-0">
  {/* Spinner Start */}
  {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Navbar Start */}
<Navbar/>
  {/* Navbar End */}
  {/* Page Header End */}
  <div>
       <div className="container-xxl py-5 page-header position-relative mb-5">
    <div className="container py-5">

      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">Our Story </li>
        </ol>
      </nav>
      <div class="row justify-content-start">
                                <div class="col-10 col-lg-8">
                                    <h1 class="display-2 text-white animated slideInDown mb-4">The Best Kindergarten School For Your Child</h1>
                                    <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</a>
                                    <a href="" class="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our Classes</a>
                                </div>
                            </div>
    </div>
  </div>
    </div>
  {/* Page Header End */}
{/* about  */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className=" mb-5 wow fadeInUp" data-wow-delay="0.1s" >
        <h1 className="mb-4 text-center">About us </h1>
        <p className='fs-5'>Being an Educationist dedicated to the advancement of learning and teaching. With a
passion for education, I have acquired vast experience in developing innovative teaching
methods and curricula that facilitate the acquisition of knowledge and skills by students of
all ages.My educational background includes a degree in education, as well as advanced training
in curriculum development, educational psychology, and instructional design. Through my <b>10-plus years of experience, </b>
  I have gained expertise in designing and implementing
educational programs that cater to diverse learning needs and styles.
As an educationist, my ultimate goal is to inspire students to become lifelong learners who
are equipped with the tools they need to achieve success in both academic and personal
pursuits. I believe that every student has the potential to excel, and I am committed to
unlocking that potential through creative and effective teaching strategies.
In addition to my work in the classroom, I am also involved in research and writing on
topics related to education with Board games. Through my publications, I aim to
contribute to the ongoing conversation about the best practices in education and to
promote the value of learning as a pathway to personal and societal growth.</p>

<div className="ms-4 text-center">
<img className="rounded-circle flex-shrink-0" src ={sumiimg} alt style={{width: 55, height: 55}} />

                  <h6 className="text-primary mb-2">Sumi Mam</h6>
                  <small>CEO &amp; Founder</small>
                </div>

{/* <div className="d-flex align-items-center">
                <img className="rounded-circle flex-shrink-0" src ="assets/img/user.jpg" alt style={{width: 45, height: 45}} />
             
              </div> */}
      </div>


      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
        <div className="testimonial-item bg-light rounded p-5">
            <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
          <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
            <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-1.jpg" style={{width: 90, height: 90}} />
            <div className="ps-3">
              <h3 className="mb-1">Client Name</h3>
              <span>Profession</span>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
          </div>
        </div>
        <div className="testimonial-item bg-light rounded p-5">
          <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
          <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
            <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-2.jpg" style={{width: 90, height: 90}} />
            <div className="ps-3">
              <h3 className="mb-1">Client Name</h3>
              <span>Profession</span>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
          </div>
        </div>
        <div className="testimonial-item bg-light rounded p-5">
          <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
          <div className="d-flex align-items-center bg-white me-n5" style={{borderRadius: '50px 0 0 50px'}}>
            <img className="img-fluid flex-shrink-0 rounded-circle" src="assets/img/testimonial-3.jpg" style={{width: 90, height: 90}} />
            <div className="ps-3">
              <h3 className="mb-1">Client Name</h3>
              <span>Profession</span>
            </div>
            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex" />
          </div>
        </div>
      </div>
    </div>
  </div> 
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-4"> Our Vision</h1>
          <p>Our vision is to provide the fundamental of Education for at an affordable cost and
no royalty model to empower Women entrepreuners.</p>
<p>To Provide quality early Years of education in a warm, safe and creative setting</p>
          <div className="row g-4 align-items-center">
            <div className="col-sm-6">
              <a className="btn btn-primary rounded-pill py-3 px-5" href>Read More</a>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <img className="rounded-circle flex-shrink-0"src ={sumiimg} alt style={{width: 45, height: 45}} />
                <div className="ms-3">
                  <h6 className="text-primary mb-1">Sumi Mam</h6>
                  <small>CEO &amp; Founder</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
          <div className="row">
            <div className="col-12 text-center">
              <img className="img-fluid w-75 rounded-circle bg-light p-3" src ="assets/img/about-1.jpg" alt />
            </div>
            <div className="col-6 text-start" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src ="assets/img/about-2.jpg" alt />
            </div>
            <div className="col-6 text-end" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src ="assets/img/about-3.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
    {/* About Start */}
    <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">

      <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
          <div className="row">
            <div className="col-12 text-center">
              <img className="img-fluid w-75 rounded-circle bg-light p-3" src ="assets/img/about-1.jpg" alt />
            </div>
            <div className="col-6 text-start" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src ="assets/img/about-2.jpg" alt />
            </div>
            <div className="col-6 text-end" style={{marginTop: '-150px'}}>
              <img className="img-fluid w-100 rounded-circle bg-light p-3" src ="assets/img/about-3.jpg" alt />
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mb-4"> Our Mission</h1>
          <p>Our mission is to ensure high profit (ROI) for all our franchise partners and adding
a strong foundation of trust in every movement at G Preschool, which motivates
our staff to deliver their best</p>
<p>To Ignite the spark in children to foster lifelong learning,critical thinking, independent enquiry and empathy</p>
          <div className="row g-4 align-items-center">
            <div className="col-sm-6">
              <a className="btn btn-primary rounded-pill py-3 px-5" href>Read More</a>
            </div>
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <img className="rounded-circle flex-shrink-0" src ={sumiimg}  alt style={{width: 45, height: 45}} />
                <div className="ms-3">
                  <h6 className="text-primary mb-1">Sumi Mam</h6>
                  <small>CEO &amp; Founder</small>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Call To Action Start */}
  <div className="container-xxl py-5">
  <div className="container">
    <div className="bg-light rounded">
      <div className="row g-0 align-items-center">
        <div className=" wow fadeIn text-center" data-wow-delay="0.5s">
          <div className="h-100   d-flex flex-column text-center justify-content-center p-5">
            <h1 className="mb-4">Game Schooling</h1>
            <h1 className="mb-4">5 Step Teaching Method</h1>
      
            <div class="row  g-4">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Aim</h5>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Assesment</h5>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Action</h5>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Analysis</h5>
   
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Application</h5>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
  </div>
</div>

    </div>
        </div>
      </div>
    </div>
  </div>
</div>





  {/* Call To Action End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
        <h1 className="mb-3">Popular Teachers</h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
          eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded-circle w-75" src ="assets/img/team-1.jpg" alt />
            <div className="team-text">
              <h3>Full Name</h3>
              <p>Designation</p>
              <div className="d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded-circle w-75" src ="assets/img/team-2.jpg" alt />
            <div className="team-text">
              <h3>Full Name</h3>
              <p>Designation</p>
              <div className="d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item position-relative">
            <img className="img-fluid rounded-circle w-75" src ="assets/img/team-3.jpg" alt />
            <div className="team-text">
              <h3>Full Name</h3>
              <p>Designation</p>
              <div className="d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Footer Start */}
<Footer/>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>
{/* JavaScript Libraries */}
{/* Template Javascript */}

    </div>
  )
}
