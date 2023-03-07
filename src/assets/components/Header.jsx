import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBusSimple} from "@fortawesome/free-solid-svg-icons";



export default function Header() {
    return (
        <header>
            <div className="header-left">
            <div className="logo"><FontAwesomeIcon icon ={faBusSimple}></FontAwesomeIcon></div>
            <h2>Trolli</h2>
            </div>
            <div className="header-btns">
                <Link to={"/"}><button className="h-btn" >Home</button></Link>
                <Link to={"/page/1"}><button className="h-btn">page1</button></Link>
                <Link to={"/page/2"}><button className="h-btn">page2</button></Link>
            </div>
        </header>
    )
}

