import React from "react";
import { Link } from "react-router-dom";
import logo from "../IMG/DDH-long-line.svg"
export default function Header() {
    return (
        <header>
            <img src={logo} alt="Logo" id="logo-header"></img>
            <div className="header-btns">
                <Link to={"/"}><button className="h-btn" >Home</button></Link>
                <Link to={"/page/1"}><button className="h-btn">page1</button></Link>
                <Link to={"/page/2"}><button className="h-btn">page2</button></Link>
            </div>
        </header>
    )
}

