import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ocean1 from "../../../assets/videos/ocean1.mp4";
import LargeScrollBounce from "../../../components/LargeScrollBounce";

const B_DISCOVER = () => {

  return (
    <>
      <motion.div
        className="video-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "tween", duration: 2 }}
      >
        <video className="scroll-video" src={ocean1} autoPlay loop muted />
        <div className="video-copy">
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
          >
            discover
          </motion.p>
          <LargeScrollBounce />
        </div>
      </motion.div>
    </>
  );
};

export default B_DISCOVER;
