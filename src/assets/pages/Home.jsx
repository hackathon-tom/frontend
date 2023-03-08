import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import Dest from "../components/Dest";

export default function Home() {
    return (
        <div className='home'>

            <div className="leftHome">
                <h1 className="hero">Wanna Go <br />Somewhere?</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro expedita fuga fugiat quas iure eos quidem perferendis inventore </p>
                <Dest />
                <Link to="/map"><button className="hero-btn"><FontAwesomeIcon icon={faMapMarkerAlt} /> &nbsp; find your way</button></Link>
            </div>
            <div className="rightHome">

            </div>


        </div>
    );
}