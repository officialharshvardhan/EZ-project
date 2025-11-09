import React from "react";
import "./AboutUs.css";
import mountain from "../images/OBJECTS.png";
import circle from "../images/Group 10.png";
// import paper from "../images/paper.png";
const AboutUs = () => {
  return (
    <div>
        <div className="conainer">

            <div className="sec1">
                <p className="heading">A montage of familiar faces and names.</p>
                <p className="text">Some stories come from the biggest names.<br/>Others begin with bold, rising voices.<br/>
We’ve been fortunate to walk alongside both - <br/>listening, creating, and building stories that matter</p>
            </div>
            <div className="sec2">
                <p className="styletext">Every project is more than just a brief - it’s a new chapter waiting to be written.
Together, we've crafted tales that inspire, connect, and endure.</p>
            </div>
            <div className="sec3">
                <div className="card1 card">
                    <h1>85+</h1>
                    <p>Projects</p>
                </div>
                <div className="card2 card">
                    <h1>50+</h1>
                    <p>Happy Clients</p>
                </div>
                <div className="card3 card">
                    <h1>10+</h1>
                    <p>Experts Team</p>
                </div>
            </div>
            <img src={circle} alt="Circle" className="circle"/>
            <img src={mountain} alt="Mountain" className="mountain"/>
        </div>
    </div>
    );
};

export default AboutUs;