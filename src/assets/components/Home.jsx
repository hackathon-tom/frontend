import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";


import hero from '../IMG/hero.png'

export default function Home() {
    return (
        <div className='home'>
            <div className="leftHome">
                <Link to="/choose"><button className="hero-btn"><FontAwesomeIcon icon ={faMapMarkerAlt}/>  find your distination</button></Link>
            </div>
            <div className="rightHome">

            </div>
            
            
        </div>
    );
}