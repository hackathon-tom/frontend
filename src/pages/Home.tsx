import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

import Dest from "../components/Picker";
import CallToAction from "../components/CallToAction";

import { FaBus, FaTaxi, FaTrain } from "react-icons/fa";

import "../assets/CSS/Pages.css";
import { ApplicationContext } from "../context/ApplicationContext";

import { languages } from "../utils/constants";

export default function Home() {
  const context = React.useContext(ApplicationContext);
  const language = context!.content.language;

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    console.log("changes");
  }, [language]);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return width < 1280 ? (
    <div className="home bg-red-500 h-full w-full">
      <div className="z-0 w-screen h-screen absolute top-0 left-0 bg-no-repeat bg-cover bg-center hero-image" />
      <div className="z-0 absolute left-0 w-full">
        <div className="hero-texts w-full pl-6 pr-6 mt-16 mb-16">
          <motion.h1
            className="font-bold text-5xl"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {languages[context!.content.language].hero.title}
          </motion.h1>
          <motion.p
            className="text-sm leading-[150%]"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {languages[context!.content.language].hero.description}
          </motion.p>
        </div>
        <div className="top-0 w-screen h-auto p-6 rounded-t-lg bg-[#ECF2FF] flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <div className="font-bold text-lg"># Where to go</div>
            <Dest />
            <div className="w-full flex items-center justify-start">
              <CallToAction />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold text-lg"># Need informations ?</div>
            <div className="flex flex-row gap-4">
              <Link to={"/bus"}>
                <div className="w-36 h-36 rounded-lg shadow-xl flex flex-col items-center justify-center gap-4">
                  <FaBus size={48} />
                  <div className="font-bold text-sm">Bus Stops</div>
                </div>
              </Link>
              <Link to={"/train"}>
                <div className="w-36 h-36 rounded-lg shadow-xl flex flex-col items-center justify-center gap-4">
                  <FaTrain size={48} />
                  <div className="font-bold text-sm">Train Stations</div>
                </div>
              </Link>
              <Link to={"/bus"}>
                <div className="w-36 h-36 rounded-lg shadow-xl flex flex-col items-center justify-center gap-4">
                  <FaTaxi size={48} />
                  <div className="font-bold text-sm">Taxi</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="home">
      <div className="hero-left">
        <div className="hero-texts">
          <motion.h1
            className="hero-title"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {languages[context!.content.language].hero.title}
          </motion.h1>
          <motion.p
            className="hero-descriptipn"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {languages[context!.content.language].hero.description}
          </motion.p>
        </div>
        <div className="hero-picker">
          <Dest />
        </div>
        <div className="flex justify-end">
          <CallToAction />
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image" />
      </div>
    </div>
  );
}
