import React from "react";
import pagelogo from '../IMG/DigitalDialogue.svg'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className='page'>
            <Link to="/choose"><button className="hero-btn">find your distination</button></Link>
            <img className='pagelogo' src={pagelogo} alt="pagelogo" />
            <h1>Wellcome to Page Home </h1>
            
        </div>
    );
}