import React, { useEffect, useState, useLayoutEffect } from "react";
import DesertVideo from "./AboutComponents/DesertVideo";
import MountainVideo from "./AboutComponents/MountainVideo";
import OceanVideo from "./AboutComponents/OceanVideo";
import Hiker1Video from "./AboutComponents/Hiker1Video";
import { motion } from "framer-motion";
import LoadingAnimation from "../../components/LoadingAnimation";
require("./About.css");

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useLayoutEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handlePageLoad);
    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return loading ? (
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
  );
};

export default About;
