import React from 'react'

import heroImg from './7.png'
import heroImg2 from './8.png'
import heroImg3 from './9.png'

import '../App.css'

const Carousel = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={heroImg} className="d-block w-100 carousel-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={heroImg2} className="d-block w-100 carousel-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={heroImg3} className="d-block w-100 carousel-img" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousel
