import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import hiker2 from "../../../assets/videos/hiker2.mp4";
require("../Explore.css");

const DesertVideo = () => {
  return (
    <>
      <motion.div
        className="explore-video-container"
      >
        <video className="hiker-video" src={hiker2} autoPlay loop muted />
        <div className="video-copy">
          <motion.p
            id="explore-large"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
          >
            EXPLORE
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default DesertVideo;
