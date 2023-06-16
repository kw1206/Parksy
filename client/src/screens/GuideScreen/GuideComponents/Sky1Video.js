import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import sky1 from "../../../assets/videos/sky1.mp4";

const DesertVideo = () => {
  return (
    <>
      <motion.div
        className="guide-video-container"
      >
        <video className="sky-video" src={sky1} autoPlay loop muted />
        <div className="video-copy">
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
          >
            GUIDE
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default DesertVideo;
