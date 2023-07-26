import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import desert1 from "../../../assets/videos/desert1.mp4";
import LargeScrollBounce from "./LargeScrollBounce";

const C_ADVENTURE = () => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "tween", duration: 2 }}
        className="video-container"
      >
        <video className="scroll-video" src={desert1} autoPlay loop muted />
        <div className="video-copy">
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
          >
            adventure awaits
          </motion.p>
          <LargeScrollBounce />
        </div>
      </motion.div>
    </>
  );
};

export default C_ADVENTURE;
