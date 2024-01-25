import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
    <a href="index.html" className="navbar-brand">
      <h1 className="m-0 text-primary"><i className="fa fa-book-reader me-3" />The GPreSchool</h1>
    </a>
    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav mx-auto">
        <a href="/" className="nav-item nav-link active">Home</a>
        <a href="ourstory" className="nav-item nav-link">Our Story</a>
        <a href="curriculum" className="nav-item nav-link">Curriculum</a>
        <a href="franchise" className="nav-item nav-link">Franchise</a>
        <a href="parentscorner" className="nav-item nav-link">Parents Corner</a>
        <a href="highlight" className="nav-item nav-link">Highlights</a>
        {/* <a href="classes.html" className="nav-item nav-link">Classes</a> */}
        {/* <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
            <a href="facility.html" className="dropdown-item">School Facilities</a>
            <a href="team.html" className="dropdown-item">Popular Teachers</a>
            <a href="call-to-action.html" className="dropdown-item">Become A Teachers</a>
            <a href="appointment.html" className="dropdown-item">Make Appointment</a>
            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
            <a href="404.html" className="dropdown-item">404 Error</a>
          </div>
        </div> */}
        <a href="contact" className="nav-item nav-link">Get in Touch</a>
      </div>
      <a href className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Admission<i className="fa fa-arrow-right ms-3" /></a>
    </div>
  </nav>
    </div>
  )
}
