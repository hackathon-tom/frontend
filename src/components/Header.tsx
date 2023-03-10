import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusSimple } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { AnimatePresence, motion } from "framer-motion";
import { ApplicationContext } from "../context/ApplicationContext";
import OpacityButton from "./OpacityButton/OpacityButton";

import { FaUser, FaBus } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "../assets/CSS/Header.css";
import LanguagePicker from "./LanguagePicker";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const context = React.useContext(ApplicationContext);
  const user = context!.content.user;

  return (
    <motion.header
      initial={{ opacity: 0, y: -128 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-6 pl-6 pr-6"
    >
      <div className="header-container">
        <div className="header-left">
          <Link to={"/"} className="header-logo">
            <FaBus />
            <h2>Trolly</h2>
          </Link>
          <div className="header-btns hidden xl:flex">
            <Link className="header-btns-a" to={"/"}>
              Home
            </Link>
            <Link className="header-btns-a" to={"/bus"}>
              Bus
            </Link>
            <Link className="header-btns-a" to={"/map"}>
              Map
            </Link>
          </div>
        </div>
        <div className="header-right hidden xl:flex ">
          <LanguagePicker />
          <Link to={user === null ? "/login" : "/profile"}>
            <OpacityButton>
              <>
                <FaUser color="white" />
                <div className="text-white">
                  {user === null ? "Login" : user.username}
                </div>
              </>
            </OpacityButton>
          </Link>
        </div>
        <div
          className="header-right flex xl:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {!isMenuOpen ? (
            <RiMenu3Line size={32} color={"white"} />
          ) : (
            <RiCloseLine size={32} color={"white"} />
          )}
        </div>
        {isMenuOpen ? (
          <motion.div
            initial={{ y: -1000 }}
            transition={{ duration: 0.5 }}
            onClick={toggleMenu}
            exit={{ y: -1000 }}
            animate={{ y: 0 }}
            className="absolute top-0 left-0 h-screen w-screen bg-blue-500 z-10 flex items-center justify-center flex-col gap-4"
          >
            <Link to={"/"} className="text-white font-bold">
              Home
            </Link>
            <Link to={"/buses"} className="text-white font-bold">
              Bus
            </Link>
            <Link to={"/map"} className="text-white font-bold">
              Map
            </Link>
          </motion.div>
        ) : null}
      </div>
    </motion.header>
  );
}
