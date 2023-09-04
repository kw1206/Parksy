import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import rafting from "../../../assets/videos/rafting.mp4";

const RaftingVideo = () => {
  return (
    <>
      <motion.div className="explore-video-container">
        <video className="hiker-video" src={rafting} autoPlay loop muted />
        <div className="video-copy">
          <motion.p
            id="explore-large"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
          >
            SHARE
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default RaftingVideo;
