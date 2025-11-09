import React from "react";
import "./Home.css";
import heroMandala from "../images/Hero.png";
import logo from "../images/logo.png";
const Home = () => {
  return (
    <section className="hero-section">
      {/* Left side: Mandala & logo */}
      <div className="hero-left">
        <img src={heroMandala} alt="Mandala" className="hero-bg" />
        {/* <h1 className="logo">
          <span className="logo-v">V</span> Films
        </h1> */}
        <div className="logo">
            <img src={logo} alt="VFilms Logo" className="logoimg" />
        </div>
        
      </div>

      {/* Right side: Content */}
      <div className="hero-right">
        <h2 className="hero-title">
          Varnan is where stories find their voice and form
        </h2>
        <h3 className="hero-subtitle">Films . Brands . Art</h3>

        <p className="hero-desc">
          Since 2009, V’ve been telling stories – stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way – by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories – V honors them.
        </p>
      </div>
    </section>
  );
};

export default Home;
