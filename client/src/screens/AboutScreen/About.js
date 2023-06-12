import React, { useEffect, useState } from "react";
import DesertVideo from "./AboutComponents/DesertVideo";
import MountainVideo from "./AboutComponents/MountainVideo";
import OceanVideo from "./AboutComponents/OceanVideo";
import Hiker1Video from "./AboutComponents/Hiker1Video";
import { motion, useScroll, useTransform } from "framer-motion";
import LoadingAnimation from "../../components/LoadingAnimation";
require("./About.css");

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(setLoading(false), 2000)
  }, [])

  return (
    <div style={{ overflowX: "hidden" }}>
      <motion.div
        animate={!loading && { x: "-200%" }}
        exit="hidden"
        transition={{ delay: 2, duration: 1 }}
      >
        <LoadingAnimation />
      </motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={!loading && { x: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="about">
          <MountainVideo />
          <OceanVideo />
          <DesertVideo />
          <Hiker1Video />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
