import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Media from "react-media";

/*----------- components ------------------------------*/
import NavBar from "./NavBar";
import MenuBtn from "./MenuBtn";


/*---------- FontAwsome -------------------------------*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusSimple } from "@fortawesome/free-solid-svg-icons";


/*--------------- libraries ---------------------------------*/

import { motion } from "framer-motion";
import { ApplicationContext } from "../../../contexts/ApplicationContext";


/*----------------- CSS ---------------------------------------------*/
import './Header.css'



export default function Header() {

    return (
        <motion.header className="header" initial={{ opacity: 0, y: -128 }} animate={{ opacity: 1, y: 0 }}>
            <div className="header-container">

                <div className="header-left">

                    <div className="header-logo">
                        <div className="logo"><FontAwesomeIcon icon={faBusSimple}></FontAwesomeIcon></div>
                        <h2>Trolli</h2>
                    </div>

                </div>

                <Media query={"(max-width: 600px)"}>
                    {maches => {
                        return maches ? <MenuBtn><NavBar /></MenuBtn>: <NavBar/>
                    }}
                </Media>
                
            </div>
        </motion.header>
    )
}

