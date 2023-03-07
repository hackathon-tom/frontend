import React from "react";
import pagelogo from '../IMG/DigitalDialogue.svg'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

import hero from '../IMG/hero1.jpg'

export default function Home() {
    return (
        <div className='home'>
             
            <Link to="/choose"><button className="hero-btn"><FontAwesomeIcon icon ={faMapMarkerAlt}/>  find your distination</button></Link>
            
            
        </div>
    );
}