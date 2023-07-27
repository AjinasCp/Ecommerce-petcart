import React from "react";
import "./Home.css";
import HeaderNavbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate=useNavigate()
  const handleExploreClick=()=>{
    navigate("/store")
  }
  return (
    <>
    <HeaderNavbar/>
    <div className="home-container">
      <header className="hero">
        <div className="background">
        <img src='/images/hp-sldr-latest-offers-dt_1.jpg' alt="background-img"/>
        <h1>Welcome to PetCart</h1>
        <p>Your one-stop shop for all your pet needs!</p>
        <button className="explore-btn"onClick={handleExploreClick}>Explore</button>
        </div>
      </header>
      <section className="features">
        <div className="feature1">
          <img src="/Images/milk-tea-h7Dw2hF4e0A-unsplash.jpg" alt="Feature 1" />
          <h3>Wide Range of Products</h3>
          <p>Find everything you need for your beloved pets.</p>
        </div>
        <div className="feature2">
          <img src="/Images/handy-wicaksono-brizG9kR6qI-unsplash.jpg" alt="Feature 2" />
          <h3>Fast and Reliable Delivery</h3>
          <p>Get your pet essentials delivered to your doorstep.</p>
        </div>
      
        <div className="feature3">
          <img src="/Images/austin-kehmeier-lyiKExA4zQA-unsplash.jpg" alt="Feature 3" />
          <h3>Excellent Customer Support</h3>
          <p>We are here to assist you with any queries or issues.</p>
        </div>
      </section>
      <section className="testimonial">
        <h2>What Our Customers Say</h2>
        <p>
          "I love PetCart! They have a fantastic selection of products and the
          customer service is top-notch."
        </p>
        <p>- Happy Pet Owner</p>
      </section>
    
    </div>
    <Footer/>
    </>
    
  );
}

export default Home;