import React from "react";
import "./Services.css";
import underline from "../images/underline.png";
import flmpimg from "../images/artimg.jpg";
import fc1 from "../images/a1.png";
import fc2 from "../images/a2.png";
import fc3 from "../images/a3.png";
import fc4 from "../images/a4.png";
import arrow from "../images/Arrow.png";
import { useNavigate } from "react-router-dom";
const Art = () => {  
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
                <p>Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.
Through every festival, every performance, and every gathering, we help stories find their stage and their people.<br/>V creates:</p>
             <ul> 
                <li>Art Festivals</li>
                <li>Live Performances</li>
                <li>Community Events</li>
                <li>
Cultural Storytelling</li>
<li>
Rebranding</li>
             </ul>
            </div>
        </div>  
        <img src={fc4} alt="" class="fc1" />
        <img src={fc1} alt="" class="fc2" />
        <img src={fc3} alt="" class="fc3" />
        <img src={fc2} alt="" class="fc4" />
        <div className="explore-btn">
        <p>Explore Now</p> 
        <img src={arrow} alt="" class="arrow" />
        </div>
    </div>
    );
}

export default Art;