import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBusSimple} from "@fortawesome/free-solid-svg-icons";



export default function Header() {
    return (
        <header>
            <div className="header-container">
            <div className="header-left">
             <div className="header-logo">
                <div className="logo"><FontAwesomeIcon icon ={faBusSimple}></FontAwesomeIcon></div>
                <h2>Trolli</h2>
             </div>
            <div className="header-btns">
                <Link to={"/"}>Home</Link>
                <Link to={"/bus"}>Bus</Link>
                <Link to={"/information"}>Information</Link>
            </div>
            </div>
            <div className="signin">
                {/* <button></button> */}
            </div>
            </div>
        </header>
    )
}

