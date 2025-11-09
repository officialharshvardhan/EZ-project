import React from "react";
import border from "../images/border.png";
import tape from "../images/tape.png";
import underline from "../images/underline.png";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import "./Services.css";
import { Link } from "react-router-dom";


const Services = () => {
  return (
    <div className="services-section">
        <div className="heading">
            <p>The storyboard reveals the breadth of our craft.</p>
            <img src={underline} alt="" class="underline" />
        </div>
        <div className="services-container">
            <div className="service-card">
                <img src={tape} alt="tape" className="tape1" />
                <img src={pic2} alt="pic" className="pic" />
                <Link to="/services/filmProduction">
            <p>Film Production</p>
          </Link>
            </div>
            <div className="service-card">
                <img src={tape} alt="tape" className="tape2" />
                <img src={pic1} alt="pic" className="pic" /> 
                   <Link to="/services/branding">
            <p>Branding</p>
          </Link>
            </div>
            <div className="service-card">
                <img src={tape} alt="tape" className="tape3" />
                <img src={pic3} alt="pic" className="pic" />        
                <Link to="/services/art">
            <p>Art</p>
          </Link>
            </div>
        </div>   
        <img src={border} alt="border" className="border-bottom" /> 
    </div>
  );
}   
export default Services;