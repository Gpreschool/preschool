import React from 'react'
import Curriculum from './../pages/Curriculum';
import Franchise from './../pages/Franchise';

export default function Footer() {
  return (
    <div>
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Get In Touch</h3>
          <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />No 3, 1st cross street, Duraisamy nagar, bypass road, Madurai - 625010</p>
          <p className="mb-2"><i className="fa fa-phone-alt me-3" />6374970664</p>
          <p className="mb-2"><i className="fa fa-envelope me-3" />thegpreschool@gmail.com</p>
          <div className="d-flex pt-2">
            {/* <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter" /></a> */}
            <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/thegpreschool?mibextid=ZbWKwL"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/thegpreschool?igshid=YzAwZjE1ZTI0Zg=="><i className="fab fa-instagram" /></a>
            {/* <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a> */}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Quick Links</h3>
          <a href="ourstory"  className="btn btn-link text-white-50" >Our Story</a>
          <a className="btn btn-link text-white-50" href="contact">Get in Touch</a>
          <a className="btn btn-link text-white-50" href="curriculum" >Curriculum</a>
          <a className="btn btn-link text-white-50"href="franchise">Franchise</a>
          <a className="btn btn-link text-white-50" href="parentscorner" >Parents Corner</a>
          <a className="btn btn-link text-white-50" href="highlight">Highlights</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Photo Gallery</h3>
          <div className="row g-2 pt-2">
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src="assets/img/classes-1.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src="assets/img/classes-2.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src="assets/img/classes-3.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src="assets/img/classes-4.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src="assets/img/classes-5.jpg" alt />
            </div>
            <div className="col-4">
              <img className="img-fluid rounded bg-light p-1" src="assets/img/classes-6.jpg" alt />
            </div>
          </div>
        </div>
        {/* <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Newsletter</h3>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{maxWidth: 400}}>
            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
          </div>
        </div> */}
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <a className="border-bottom" href="#">TheGpreschool</a>, All Right Reserved. 
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By <a className="border-bottom" href="https://hellowtec.com/">Hello Technologies</a>
          </div>
          <div className="col-md-6 text-center text-md-end">
            {/* <div className="footer-menu">
              <a href>Home</a>
              <a href>Cookies</a>
              <a href>Help</a>
              <a href>FQAs</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
