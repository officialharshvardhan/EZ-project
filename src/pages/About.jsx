import React from "react";  
import groupimage from "../images/GroupImage.svg";
import gateway from "../images/gatewala.png";
import note from "../images/note.png";
import logo from "../images/logo.png";
import vector1 from "../images/Vector.png";
import vector2 from "../images/Vector2.png";
import vector3 from "../images/Vector3.png";
import "./About.css";

import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
        const handelclick = () => {
        navigate("/portfolio");
      };
    return (
        <div>
            <div className="images">
                <img src={note} alt="Note" className="note" />
                <img src={groupimage} alt="Group" className="grouppic" />
                <img src={gateway} alt="India Gate" className="gatepic" />
                <div className="overlay-text">
                    <p>Take a closer look at the stories V bring to life.</p>
                    <button onClick={handelclick}>View Portfolio</button>
                </div>
                <img src={logo} className="logoj" alt="" />
                <img src={vector1} alt="" className="vector1" />
                <img src={vector2} alt="" className="vector2" />
                <img src={vector3} alt="" className="vector3" />
                <div className="text1">
                    <p>Film Makers</p>
                </div>
                <div className="text2">
                    <p>Branding Experts</p>
                </div>
                <div className="text3">
                    <p>Art Curators</p>
                </div>
            </div>
        </div>
    );
}
export default About;