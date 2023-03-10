import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import Dest from "../components/Dest";
import Picker from "../components/Picker";
import CallToAction from "../components/CallToAction";

import "../CSS/Pages.css";

export default function Home() {
    return (
        <div className='home'>
            <div className="hero-left">
                <div className="hero-texts">
                    <h1 className="hero-title">Wanna Go<br />Somewhere ?</h1>
                    <p className="hero-descriptipn">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro expedita fuga fugiat quas iure eos quidem perferendis inventore </p>
                </div>
                <Dest />
                <Link to={'/map'}><CallToAction /></Link>
            </div>
            <div className="hero-image" />
            
        </div>
    );
}