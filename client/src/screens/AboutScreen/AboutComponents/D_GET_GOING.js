import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import hiker1 from "../../../assets/videos/hiker1.mp4";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import HikingIcon from "@mui/icons-material/Hiking";
import { Link } from "react-router-dom";
import LargeScrollBounce from "../../../components/LargeScrollBounce";

const D_GET_GOING = () => {

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "tween", duration: 2 }}
        className="video-container"
      >
        <video className="scroll-video" src={hiker1} autoPlay loop muted />
        <div className="video-copy">
          <motion.p
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
          >
            get going
          </motion.p>
          <LargeScrollBounce />
        </div>
      </motion.div>
    </>
  );
};

export default D_GET_GOING;
