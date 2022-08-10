import React from 'react'
import Navbar from './Navbar'
import '../styles/Home.css'
import Iphone6 from "../images/iphone6.svg"
import lady from "../images/lady-img.jpg"
import dog from "../images/dog-img.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Home() {
  return (
    <div id='home'>
      <section id="title">
        <div className="home-container">
          <Navbar />

          {/* title */}
          <div className="title-box">
            <div className="col">
              <h1>Meet new and interesting dogs nearby.</h1>
              <button type="button" className="shop-btn btn-dark">
                Shop Now
              </button>
            </div>
            <div className="col">
              <img src={Iphone6} className="rotate45" />
            </div>
          </div>
        </div>
      </section>

      {/* Features  */}
      <section id="features">
        <div className="feature-row">
          <div className="feature-box">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" />
            <h3>Easy to use.</h3>
            <p>So easy to use, even your dog could do it.</p>
          </div>
          <div className="feature-box">
            <FontAwesomeIcon icon="fa-solid fa-bullseye" />
            <h3>Elite Clientele</h3>
            <p>We have all the dogs, the greatest dogs.</p>
          </div>
          <div className="feature-box">
            <FontAwesomeIcon icon="fa-solid fa-heart" />
            <h3>Guaranteed to work.</h3>
            <p>Find the yourself the dog you always longed for.</p>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials --> */}

      <section id="testimonials" class="carousel slide" >
        <div className="carousel-inner">
          <div className="carousel-item">
            <h2 className="testimonial-text">I used to be so lonely, but with FinDog's help, I've found my best friend.</h2>
            <img className="testimonial-image" src={lady} alt="lady-profile" />
            <em>Beverly, Illinois</em>
          </div>

          <div className="carousel-item">
            <h2 className="testimonial-text">I loves dogs and FinDog helped me find my Bruno.
            </h2>
            <img className="testimonial-image" src={dog} alt="dog-pic" />
            <em>Beverly, Illinois</em>
          </div>
          <button className="carousel-control-prev" type="button">
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button">
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* <!-- Purchase --> */}

      <section id="purchase">
        <h2>A Plan that fulfils your Needs</h2>
        <p class="subtext">Simple and affordable price plans for you.</p>
        <div class="card-row">
          <div class="card-col">
            <div class="card">
              <div class="card-body">
                <img src={dog} alt="dogimg" />
                <h3>Chihuahua</h3>
                <h2>$499</h2>
                <button type="button" class="btn btn-buy">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="card-col">
            <div class="card">
              <div class="card-body">
                <img src={dog} alt="dogimg" />
                <h3>Labrador</h3>
                <h2>$999</h2>
                <button type="button" class="btn btn-buy">Buy Now</button>
              </div>
            </div>
          </div>
          <div class="card-col">
            <div class="card">
              <div class="card-body">
                <img src={dog} alt="dogimg" />
                <h3>Mastiff</h3>
                <h2>$1200</h2>
                <button type="button" class="btn btn-buy">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <a className='card-see' href=""> shop more </a>
      </section>

      {/* <!-- Call to Action --> */}

      <section id="cta">

        <div className="container-fluid cta-container">
          <h3>Find your best companion with us</h3>
          <button type="button" className="shop-btn btn-dark">
            Shop Now
          </button>
        </div>
      </section>

      {/* <!-- Footer --> */}

      <footer className="flex" id="footer">
        <div className="flex">

        </div>
        <p>© Copyright 2022 FinDog</p>
      </footer>
    </div>
  )
}

export default Home
