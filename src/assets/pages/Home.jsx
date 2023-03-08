import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import Dest from "../components/Dest";
import CallToAction from "../components/CallToAction";

export default function Home() {
    return (
        <div className='home'>
            <div className="hero-left">
                <div className="hero-texts">
                    <h1 className="hero-title">Wanna Go<br />Somewhere ?</h1>
                    <p className="hero-descriptipn">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro expedita fuga fugiat quas iure eos quidem perferendis inventore </p>
                </div>
                <Dest />
<<<<<<< HEAD
                <Link to="/map"><button className="hero-btn"><FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp; find your way</button></Link>
=======
                <CallToAction />
>>>>>>> f51f487d9e5393cbdce3d46975d5baf3706afba7
            </div>
            <div className="hero-right">
                <div className="hero-image" />
            </div>
        </div>
    );
}