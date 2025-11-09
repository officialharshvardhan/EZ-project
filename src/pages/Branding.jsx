import React from "react";
import "./Services.css";
import underline from "../images/underline.png";
import flmpimg from "../images/branding.png";
import fc1 from "../images/bc1.png";
import fc2 from "../images/bc2.png";
import fc3 from "../images/bc3.png";
import fc4 from "../images/b4.png";
import arrow from "../images/Arrow.png";
import { useNavigate } from "react-router-dom";
const Branding = () => {  
    const navigate = useNavigate();
        const handleBack = () => {
        navigate("/services");
      };
    return (
        <div className="services-section film-production">
            <button className="back-btn" onClick={handleBack}>Back</button>
        <div className="heading">
            <p>A brand is a voice, and a product is a souvenir." - Lisa Gansky</p>
            <img src={underline} alt="" class="underline" />
        </div>
        <div className="flm-container">
            <div className="content">
                <div className="fcard">
                    <img src={flmpimg} alt="" class="flmpimg" />
                    <p>Branding</p>
                </div>
            </div>
            <div className="text-content">
                <p>A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust.
We shape brands that people remember, return to, and fall in love with.
<br/>V creates:</p>
             <ul> 
                <li>Branding & Communication</li>
                <li>Market Mapping</li>
                <li>Content Management</li>
                <li>
Social Media Management</li>
<li>
Rebranding</li>
             </ul>
            </div>
        </div>  
        <img src={fc1} alt="" class="fc1" />
        <img src={fc2} alt="" class="fc2" />
        <img src={fc3} alt="" class="fc3" />
        <img src={fc4} alt="" class="fc4" />
        <div className="explore-btn">
        <p>Explore Now</p> 
        <img src={arrow} alt="" class="arrow" />
        </div>
    </div>
    );
}

export default Branding;