import React from "react";
import "./Services.css";
import underline from "../images/underline.png";
import flmpimg from "../images/flmpimg.png";
import fc1 from "../images/fc1.png";
import fc2 from "../images/fc2.png";
import fc3 from "../images/fc3.png";
import fc4 from "../images/fc4.png";
import arrow from "../images/Arrow.png";
import { useNavigate } from "react-router-dom";
const FilmProduction = () => {  
    const navigate = useNavigate();
    const handleBack = () => {
    navigate("/services");
  };
    return (
        <div className="services-section film-production">
            <button className="back-btn" onClick={handleBack}>Back</button>
        <div className="heading">
            <p>The storyboard reveals the breadth of our craft.</p>
            <img src={underline} alt="" class="underline" />
        </div>
        <div className="flm-container">
            <div className="content">
                <div className="fcard">
                    <img src={flmpimg} alt="" class="flmpimg" />
                    <p>Film Production</p>
                </div>
            </div>
            <div className="text-content">
                <p>Who says films are just an escape?
We see them as a way to live many lives - 
to feel, to explore, and to tell stories that stay.
 And with each film, we carry new memories and new reasons to keep 
 creating.<br/>
 V crafts:</p>
             <ul> 
                <li>Documentaries</li>
                <li>Corporate Videos</li>
                <li>2D Animation Videos</li>
                <li>3D Animation Videos</li>
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

export default FilmProduction;