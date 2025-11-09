import React from "react";
import './Portfolio.css';
import videoImg from '../images/video-img.png';
const Portfolio = () => {

    return (
        <div className="portfolio-container">
            <div className="heading-block">
                <h1 className="heading-1">The Highlight Reel</h1>
                <h2 className="heading-2">Watch the magic we've captured.</h2>
            </div>
            <div className="video-container">
                <img src={videoImg} alt="video-img" />
            </div>
        </div>
    )
}

export default Portfolio;