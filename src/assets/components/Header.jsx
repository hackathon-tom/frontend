import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusSimple } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { ApplicationContext } from "../../contexts/ApplicationContext";

export default function Header() {
    const context = React.useContext(ApplicationContext);

    React.useEffect(() => {
        console.log(context);
    }, []);

    return (
        <motion.header className="header" initial={{ opacity: 0, y: -128 }} animate={{ opacity: 1, y: 0 }}>
            <div className="header-container">
                <div className="header-left">
                    <div className="header-logo">
                        <div className="logo"><FontAwesomeIcon icon={faBusSimple}></FontAwesomeIcon></div>
                        <h2>Trolli</h2>
                    </div>
                    <div className="header-btns">
                        <Link to={"/"}><button>Home</button></Link>
                        <Link to={"/bus"}><button>Bus</button></Link>
                        <Link to={"/information"}><button>Information</button></Link>
                    </div>

                </div>
                <div className="header-right">
                    <select id="khayar">
                        <option value="en">🇺🇸</option>
                        <option value="fr">🇫🇷</option>
                        <option value="ar">🇩🇿</option>
                    </select>
                    <Link to="/login"><button className="signin"><FontAwesomeIcon icon={faUser} ></FontAwesomeIcon> Login</button></Link>
                </div>
            </div>
        </motion.header>
    )
}

