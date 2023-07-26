import React from "react";
import { motion } from "framer-motion";
import mountain1 from "../../../assets/videos/mountain1.mp4";
import LargeScrollBounce from "./LargeScrollBounce";

const A_LETS_GO_INTRO = () => {

  return (
    <>
      <motion.div
        className="video-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "tween", duration: 2 }}
      >
        <video className="scroll-video" src={mountain1} autoPlay loop muted />
        <div className="video-copy">
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
          >
            let's go
          </motion.p>
          <LargeScrollBounce />
        </div>
      </motion.div>
    </>
  );
};

export default A_LETS_GO_INTRO;
