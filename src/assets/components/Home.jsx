import React from "react";
import pagelogo from '../IMG/DigitalDialogue.svg'


export default function Home() {
    return (
        <div className='page'>
            <img className='pagelogo' src={pagelogo} alt="pagelogo" />
            <h1>Wellcome to Page Home </h1>
        </div>
    );
}