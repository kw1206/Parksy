import React, { useEffect, useState, useLayoutEffect } from "react";
import DesertVideo from "./AboutComponents/DesertVideo";
import MountainVideo from "./AboutComponents/MountainVideo";
import OceanVideo from "./AboutComponents/OceanVideo";
import Hiker1Video from "./AboutComponents/Hiker1Video";
import { AnimatePresence, motion } from "framer-motion";
import LoadingAnimation from "../../components/LoadingAnimation";
require("./About.css");

const About = () => {
  const [onScreenComponent, setOnScreenComponent] = useState(["loading"]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOnScreenComponent(["default"]);
    }, 3000);
  });

  return (
    <>
      <AnimatePresence>
        {onScreenComponent[0] === "loading" ? (
          <motion.div
            className="loading-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingAnimation />
          </motion.div>
        ) : (
          <motion.div
            className="page-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="about">
              <MountainVideo />
              <OceanVideo />
              <DesertVideo />
              <Hiker1Video />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
